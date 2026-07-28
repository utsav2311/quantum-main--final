import { Resend } from "resend";
import nodemailer from "nodemailer";

const leadTypeTitles = {
  partner: "🏥 New Hospital / Clinic Partner Inquiry",
  general: "💬 New General Website Inquiry",
  franchise: "💼 New Franchise / Distribution Application",
  consultation: "🩺 New Clinical Consultation Booking",
};

/**
 * Sends Admin Notification & User Confirmation Emails via Resend (or SMTP fallback)
 * @param {Object} lead - The lead document created in database
 */
export async function sendLeadEmails(lead) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const adminRecipient =
    process.env.NOTIFICATION_EMAIL ||
    process.env.ADMIN_EMAIL ||
    "utsavhoney123@gmail.com";
  const fromEmail = process.env.RESEND_FROM || "onboarding@resend.dev";

  const leadTitle = leadTypeTitles[lead.lead_type] || "New Lead Submission";

  // 1. Admin Email HTML Template
  const adminHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
        .header { background: linear-gradient(135deg, #0b121c 0%, #0b4d95 100%); padding: 30px; text-align: center; color: #ffffff; }
        .header h2 { margin: 0; font-size: 22px; font-weight: 800; }
        .header p { margin: 6px 0 0 0; color: #38bdf8; font-size: 13px; font-family: monospace; text-transform: uppercase; letter-spacing: 2px; }
        .body { padding: 30px; }
        .badge { display: inline-block; background: #e0f2fe; color: #0284c7; padding: 6px 14px; border-radius: 9999px; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 20px; }
        .field-group { margin-bottom: 18px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
        .field-label { font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
        .field-value { font-size: 15px; font-weight: 600; color: #0f172a; }
        .field-value a { color: #0284c7; text-decoration: none; }
        .message-box { background: #f8fafc; border-left: 4px solid #0284c7; padding: 16px; border-radius: 8px; font-size: 14px; color: #334155; line-height: 1.6; margin-top: 10px; }
        .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Quantum Medical Lead System</h2>
          <p>${leadTitle}</p>
        </div>
        <div class="body">
          <span class="badge">${lead.lead_type} Form Submission</span>
          
          <div class="field-group">
            <div class="field-label">Full Name</div>
            <div class="field-value">${lead.name}</div>
          </div>

          <div class="field-group">
            <div class="field-label">Email Address</div>
            <div class="field-value"><a href="mailto:${lead.email}">${lead.email}</a></div>
          </div>

          <div class="field-group">
            <div class="field-label">Phone Number</div>
            <div class="field-value"><a href="tel:${lead.phone}">${lead.phone}</a></div>
          </div>

          ${
            lead.organization
              ? `
          <div class="field-group">
            <div class="field-label">Hospital / Organization</div>
            <div class="field-value">${lead.organization}</div>
          </div>`
              : ""
          }

          ${
            lead.city
              ? `
          <div class="field-group">
            <div class="field-label">City / Location</div>
            <div class="field-value">${lead.city}</div>
          </div>`
              : ""
          }

          ${
            lead.investment_capacity
              ? `
          <div class="field-group">
            <div class="field-label">Investment / Capacity</div>
            <div class="field-value">${lead.investment_capacity}</div>
          </div>`
              : ""
          }

          ${
            lead.message
              ? `
          <div class="field-group" style="border-bottom: none;">
            <div class="field-label">Message / Clinical Requirements</div>
            <div class="message-box">${lead.message.replace(/\n/g, "<br>")}</div>
          </div>`
              : ""
          }
        </div>
        <div class="footer">
          Submitted on ${new Date(lead.created_at).toLocaleString("en-US", { timeZone: "Asia/Dubai" })} GST<br>
          Quantum Medical B2B Lead Management System
        </div>
      </div>
    </body>
    </html>
  `;

  // 2. User Confirmation Email HTML Template
  const userHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
        .header { background: linear-gradient(135deg, #0b121c 0%, #0b4d95 100%); padding: 36px; text-align: center; color: #ffffff; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 800; }
        .header p { margin: 6px 0 0 0; color: #38bdf8; font-size: 12px; font-family: monospace; text-transform: uppercase; letter-spacing: 2px; }
        .body { padding: 32px; }
        .greeting { font-size: 18px; font-weight: 700; color: #0f172a; margin-bottom: 12px; }
        .text { font-size: 15px; color: #475569; line-height: 1.6; margin-bottom: 20px; }
        .box { background: #f0f7ff; border: 1px solid #bae6fd; border-radius: 12px; padding: 20px; margin: 20px 0; }
        .box-title { font-size: 13px; font-weight: 700; color: #0284c7; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
        .box-text { font-size: 14px; color: #0369a1; margin: 0; }
        .footer { background: #f8fafc; padding: 24px; text-align: center; font-size: 13px; color: #64748b; border-top: 1px solid #e2e8f0; }
        .footer a { color: #0284c7; text-decoration: none; font-weight: 600; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Quantum Medical & Prosthetics</h1>
          <p>Clinical Excellence · Digital Fabrication</p>
        </div>
        <div class="body">
          <div class="greeting">Hello ${lead.name},</div>
          <div class="text">
            Thank you for connecting with <strong>Quantum Medical & Prosthetics</strong>. We have successfully received your submission.
          </div>
          
          <div class="box">
            <div class="box-title">Submission Summary</div>
            <p class="box-text"><strong>Inquiry Type:</strong> ${lead.lead_type.toUpperCase()}</p>
            ${lead.organization ? `<p class="box-text"><strong>Organization:</strong> ${lead.organization}</p>` : ""}
          </div>

          <div class="text">
            Our clinical partnerships team is currently reviewing your details. A dedicated specialist will reach out to you within <strong>24 business hours</strong> to assist with your requirements.
          </div>
        </div>
        <div class="footer">
          Need immediate support? Contact our clinical team at<br>
          <a href="mailto:info@quantumeme.com">info@quantumeme.com</a>
          <p style="margin-top: 12px; font-size: 11px; color: #94a3b8;">© ${new Date().getFullYear()} Quantum Medical & Prosthetics. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // --- Dispatch via Resend API ---
  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey);

      const adminResend = await resend.emails.send({
        from: `Quantum Lead System <${fromEmail}>`,
        to: [adminRecipient],
        subject: `[NEW LEAD] ${leadTitle} - ${lead.name}`,
        html: adminHtml,
      });

      console.log(`[RESEND DISPATCH SUCCESS] Admin notification sent to ${adminRecipient}:`, adminResend);

      // Note: Resend's free test domain (onboarding@resend.dev) only permits sending to account owner email (utsavhoney123@gmail.com)
      const userRecipient = (fromEmail.includes("onboarding@resend.dev") && lead.email !== adminRecipient)
        ? adminRecipient
        : lead.email;

      const userResend = await resend.emails.send({
        from: `Quantum Medical & Prosthetics <${fromEmail}>`,
        to: [userRecipient],
        subject: `We've received your submission — Quantum Medical`,
        html: userHtml,
      }).catch((e) => console.log(`[RESEND USER NOTICE] User confirmation note: ${e.message}`));

      return { success: true, adminResend, userResend };
    } catch (resendErr) {
      console.error("[RESEND API ERROR] Resend dispatch failed, attempting SMTP fallback:", resendErr.message);
    }
  }

  // --- Fallback: Nodemailer SMTP ---
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  let transporter;
  if (host && user && pass) {
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
      tls: { rejectUnauthorized: false },
    });
  } else {
    transporter = nodemailer.createTransport({ jsonTransport: true });
  }

  try {
    const adminResult = await transporter.sendMail({
      from: `"Quantum Lead System" <${process.env.SMTP_FROM || user || fromEmail}>`,
      to: adminRecipient,
      subject: `[NEW LEAD] ${leadTitle} - ${lead.name}`,
      html: adminHtml,
    });

    const userResult = await transporter.sendMail({
      from: `"Quantum Medical & Prosthetics" <${process.env.SMTP_FROM || user || fromEmail}>`,
      to: lead.email,
      subject: `We've received your submission — Quantum Medical`,
      html: userHtml,
    });

    console.log(`[SMTP DISPATCH SUCCESS] Notification sent to admin: ${adminRecipient}`);
    return { success: true, adminResult, userResult };
  } catch (error) {
    console.error("[EMAIL ERROR] Failed to dispatch lead emails:", error);
    return { success: false, error: error.message };
  }
}
