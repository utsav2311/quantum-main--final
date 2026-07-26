import { createContext, useContext, useState, useCallback } from "react";

const LeadModalContext = createContext(null);

const DEFAULTS = {
  partner: { type: "partner", title: "Partner With Us", subtitle: "Tell us about your organization — our team will reach out within one business day." },
  general: { type: "general", title: "Connect With Us", subtitle: "Have a question? Send us a note and we'll get back to you." },
  consultation: { type: "consultation", title: "Book a Consultation", subtitle: "Request a clinical consultation for a patient or facility." },
  franchise: { type: "franchise", title: "Apply for Franchise", subtitle: "Bring precision P&O care to your region — start the conversation." },
};

export function LeadModalProvider({ children }) {
  const [config, setConfig] = useState(null);
  const open = useCallback((type = "partner") => setConfig(DEFAULTS[type] || DEFAULTS.partner), []);
  const close = useCallback(() => setConfig(null), []);
  return (
    <LeadModalContext.Provider value={{ config, open, close }}>
      {children}
    </LeadModalContext.Provider>
  );
}

export const useLeadModal = () => useContext(LeadModalContext);
