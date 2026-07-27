// Central content + placeholders. Replace [BRACKETED] values before launch.
export const COMPANY = {
  name: "Quantum Medical",
  shortName: "Quantum Medical",
  tagline: "Moves You Forward",
  phone: "+971 55 848 8759",
  phoneRaw: "+971558488759",
  email: "info@quantumuae.ae",
  whatsapp: "971558488759", // digits only for wa.me
  addresses: [
    {
      label: "Clinical Facility & C-Fab",
      value: "Al Danah, Abu Dhabi, United Arab Emirates",
      maps: "https://www.google.com/maps/search/?api=1&query=Al+Danah+Abu+Dhabi+United+Arab+Emirates",
    },
  ],
  socials: [
    { icon: "linkedin", url: "#" },
    { icon: "instagram", url: "https://www.instagram.com/quantum_uae/" },
    { icon: "facebook", url: "#" },
    { icon: "youtube", url: "#" },
  ],
  academyPdf: "#",
};

export const IMAGES = {
  logo: "/logo.webp",
  hero: "/hero-bg.webp",
  heroVideo: "/video.mp4",
  heroVideoMobile: "/video1.mp4",
  lab: "https://images.pexels.com/photos/11288657/pexels-photo-11288657.jpeg?auto=format&fit=crop&w=1200&q=80",
  tools: "https://images.unsplash.com/photo-1581090122087-bdc8968e525f?auto=format&fit=crop&w=1200&q=80",
  team: "https://images.pexels.com/photos/29807423/pexels-photo-29807423.jpeg?auto=format&fit=crop&w=1200&q=80",
  pediatric: "https://images.unsplash.com/photo-1770219287080-9c73532fa878?auto=format&fit=crop&w=1200&q=80",
  printing: "https://images.unsplash.com/photo-1772566022500-353de883e9e4?auto=format&fit=crop&w=1200&q=80",
  spineBackBraces: "/spine-back-braces.webp",
  customInsoles: "/custom-insoles.webp",
  lowerLimbProsthetics: "/lower-limb-prosthetics.webp",
  upperLimbProsthetics: "/upper-limb-prosthetics.webp",
  socketsLiners: "/sockets-liners.webp",
};

export const waLink = (text = "Hello, I'd like to know more about your P&O solutions.") =>
  `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`;

// ---- Navigation ----
export const NAV = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    children: [{ label: "Products", to: "/products" }],
  },
  {
    label: "Orthotics",
    to: "/products?cat=Orthotics",
    children: [
      { label: "Spine & Back Braces", to: "/spine-back-braces" },
      { label: "Upper Limb Orthotics", to: "/upper-limb-orthotics" },
      { label: "Lower Limb Orthotics", to: "/lower-limb-orthotics" },
      { label: "Custom Insoles & Footwear", to: "/custom-orthotic-insoles-footwear" },
    ],
  },
  {
    label: "Prosthetics",
    to: "/products?cat=Prosthetics",
    children: [
      { label: "Lower Limb Prosthetics", to: "/lower-limb-prosthetics" },
      { label: "Upper Limb Prosthetics", to: "/upper-limb-prosthetics" },
      { label: "Sockets & Liners", to: "/sockets-liners" },
      { label: "Silicone Restoration", to: "/silicone-restoration" },
    ],
  },
  {
    label: "Pediatric Care",
    to: "/products?cat=Pediatric",
    children: [
      { label: "Pediatric Prosthetics", to: "/pediatric-prosthetics" },
      { label: "Cranial Orthoses", to: "/cranial-orthoses" },
      { label: "Scoliosis Bracing", to: "/scoliosis-bracing" },
    ],
  },
  {
    label: "Mobility & Seating",
    to: "/products?cat=Mobility",
    children: [
      { label: "Walker, Canes & Crutches", to: "/walker-canes-crutches" },
      { label: "Custom Seating", to: "/custom-seating" },
    ],
  },
  { label: "Contact Us", to: "/contact-us" },
];

// ---- Homepage pill categories ----
export const ADULT_TAGS = [
  { label: "Back Braces", to: "/spine-back-braces" },
  { label: "Knee Braces", to: "/lower-limb-orthotics#knee-braces" },
  { label: "Silicone Restoration", to: "/silicone-restoration" },
  { label: "Chest Braces", to: "/spine-back-braces#chest" },
  { label: "Lower Limb Prosthetics", to: "/lower-limb-prosthetics" },
  { label: "Custom Insoles", to: "/custom-orthotic-insoles-footwear" },
  { label: "Upper Limb Orthosis", to: "/upper-limb-orthotics" },
  { label: "Socket & Liners", to: "/sockets-liners" },
  { label: "Hip Braces", to: "/lower-limb-orthotics#hip-braces" },
  { label: "Custom Seating", to: "/custom-seating" },
];

export const KIDS_TAGS = [
  { label: "Scoliosis Bracing", to: "/scoliosis-bracing", icon: "spline" },
  { label: "Cranial Helmet", to: "/cranial-orthoses", icon: "shield" },
  { label: "Pediatric Prosthetics", to: "/pediatric-prosthetics", icon: "baby" },
  { label: "AFO", to: "/lower-limb-orthotics#afo", icon: "footprints" },
  { label: "Nocturnal Braces", to: "/scoliosis-bracing#nocturnal", icon: "moon" },
  { label: "Insoles", to: "/custom-orthotic-insoles-footwear", icon: "layers" },
  { label: "Supramalleolar Orthosis", to: "/lower-limb-orthotics#supramalleolar-orthosis", icon: "activity" },
  { label: "UCBL", to: "/lower-limb-orthotics#ucbl", icon: "target" },
  { label: "CTEV Boots and Bars", to: "/lower-limb-orthotics#ctev", icon: "bone" },
];

// ---- Why choose us ----
export const WHY = [
  { icon: "cpu", title: "Fully Digital Precision", desc: "Every device engineered with CAD/CAM accuracy — not guesswork." },
  { icon: "factory", title: "End-to-End In-House", desc: "Design, fabrication and finishing under one accredited roof." },
  { icon: "ruler", title: "Truly Custom-Designed", desc: "Each device is built to a single patient's anatomy and goals." },
  { icon: "printer", title: "Cutting-Edge 3D Printing", desc: "Additive manufacturing for lighter, stronger, faster devices." },
  { icon: "shield-check", title: "Consistent Quality Control", desc: "Structural and material validation on every single build." },
  { icon: "sparkles", title: "Innovative Design", desc: "A research-led philosophy that keeps improving outcomes." },
];

// ---- How we work ----
export const PROCESS = [
  {
    step: "01",
    title: "Clinical Pathway",
    icon: "stethoscope",
    points: ["Rapid needs assessment", "Gait & posture evaluation", "Device prescription", "Pre-fabrication guidance"],
  },
  {
    step: "02",
    title: "Digital Workflow",
    icon: "scan",
    points: ["3D scanning", "CAD/CAM design", "Digital fit verification", "Fast in-house fabrication"],
  },
  {
    step: "03",
    title: "Quality & Compliance",
    icon: "badge-check",
    points: ["Fit checks", "Structural & material validation", "Standards review", "Final clinical approval"],
  },
];

export const TESTIMONIALS = [
  { name: "Dr. A. Rivera", role: "Chief of Rehabilitation", quote: "Turnaround times dropped dramatically and fit accuracy is remarkable. Our patients notice the difference immediately.", img: IMAGES.doctor1 },
  { name: "Dr. M. Chen", role: "Orthopedic Surgeon", quote: "The digital workflow integrates seamlessly with our clinic. A genuine engineering partner, not just a supplier.", img: IMAGES.doctor2 },
  { name: "S. Okoro, CPO", role: "Head of Prosthetics", quote: "Silicone restorations and sockets are the best fit-quality we've sourced. Consistent, every time.", img: IMAGES.cpo },
  { name: "Dr. L. Fernandes", role: "Pediatric Rehab Lead", quote: "Their pediatric bracing program has been transformative for our young patients and their families.", img: IMAGES.pediatricDoc },
];

export const FAQS = [
  { q: "What are your typical delivery timelines?", a: "Most digitally-fabricated devices ship within 5–10 working days of scan approval. Complex custom builds and silicone restorations may take longer; we confirm a timeline at prescription." },
  { q: "How customized are your devices?", a: "Every device is built to a single patient's 3D anatomy, activity level and clinical goals — no off-the-shelf shells reused between patients." },
  { q: "How many visits are required?", a: "Typically two to three: assessment & scan, fit verification, and final delivery. Our digital workflow minimizes repeat visits." },
  { q: "What makes you different from other providers?", a: "Fully in-house digital manufacturing (scanning, CAD/CAM, 3D printing) plus a clinical team — meaning speed, precision and accountability in one place." },
  { q: "Do you provide aftercare and adjustments?", a: "Yes. Every device includes a fit-review window, and because we retain the digital file, adjustments and re-fabrication are fast." },
  { q: "Do you offer pediatric services?", a: "Extensively — from cranial orthoses and scoliosis bracing to pediatric prosthetics, AFOs and CTEV boots & bars." },
  { q: "How durable are the materials?", a: "We validate every build against structural and material standards, using medical-grade thermoplastics, carbon composites and additive polymers." },
  { q: "Can you 3D print full devices?", a: "Yes — our studio runs industrial 3D printers for sockets, orthoses and insoles, enabling lighter and stronger geometry than traditional methods." },
  { q: "How do you guide device selection?", a: "Our clinical team performs gait analysis and assessment, then prescribes the optimal device — we guide hospitals and patients end to end." },
  { q: "What is your adjustment turnaround?", a: "Because your device is a saved digital file, most adjustments are same-week; minor tuning is often same-day at the clinic." },
];

// ---- Devices (drive routed detail pages) ----
const workflow = [
  { icon: "scan", t: "3D Scan", d: "High-resolution capture of the patient's anatomy — no plaster casting." },
  { icon: "pen-tool", t: "CAD/CAM Design", d: "Engineers refine geometry, alignment and material zones digitally." },
  { icon: "printer", t: "In-House Fabrication", d: "3D printed or milled, then hand-finished by certified technicians." },
  { icon: "badge-check", t: "Fit & Approval", d: "Digital and clinical fit verification before final delivery." },
];

const mk = (slug, title, category, img, tagline, condition, benefits, anchors = [], richContent = null) => ({
  slug, title, category, img, tagline, condition, workflow, benefits, anchors, richContent,
});

export const DEVICES = [
  mk("spine-back-braces", "Spine & Back Braces", "Orthotics", "spineBackBraces",
    "Support and correction for the spine — engineered for comfort and compliance.",
    "Spinal pain, postural dysfunction, and degenerative spine conditions remain among the most common drivers of orthopaedic and rehabilitation consultations. Sedentary work patterns, trauma, pregnancy, post-operative recovery, and age-related degeneration all contribute to increasing mechanical stress on the spine. For healthcare institutions, effective spinal bracing is not simply about supplying a device — it is about protecting surgical outcomes, reducing complications, and improving measurable rehabilitation results.",
    ["Targeted stabilisation zones", "Breathable, low-profile shells", "Adjustable as recovery progresses", "Radiolucent material options"],
    [{ id: "chest", label: "Chest Braces" }],
    {
      introParagraphs: [
        "Spinal pain, postural dysfunction, and degenerative spine conditions remain among the most common drivers of orthopaedic and rehabilitation consultations. Sedentary work patterns, trauma, pregnancy, post-operative recovery, and age-related degeneration all contribute to increasing mechanical stress on the spine.",
        "For healthcare institutions, effective spinal bracing is not simply about supplying a device — it is about protecting surgical outcomes, reducing complications, and improving measurable rehabilitation results.",
        "At Quantum Medical, we work in structured collaboration with orthopaedic surgeons, neurosurgeons, physiotherapists, pain specialists, and multidisciplinary rehabilitation teams to deliver spinal orthotic systems designed for clinical alignment and predictable outcomes — not just product provision."
      ],
      focusPillars: [
        "Structural stabilisation",
        "Corrective alignment",
        "Post-operative protection",
        "Long-term wear tolerance",
        "Functional recovery support"
      ],
      rehabilitationRole: {
        title: "The Role of Spinal Bracing in Modern Rehabilitation",
        description: "When prescribed appropriately, spinal orthoses serve multiple therapeutic functions within institutional care settings. They reduce biomechanical stress, limit harmful movements, and reinforce therapeutic posture correction strategies.",
        supportsRecovery: [
          "Reducing compressive forces on painful or unstable segments",
          "Stabilising injured or surgically treated structures",
          "Guiding spinal alignment during posture retraining",
          "Restricting excessive flexion, extension, and rotation",
          "Protecting fracture sites and surgical repairs"
        ],
        protocolBenefits: [
          "Improved pain control",
          "Safer mobilisation",
          "Enhanced compliance",
          "Reduced re-injury risk",
          "Better functional progression"
        ]
      },
      systems: [
        {
          title: "Cervical Support",
          subtitle: "Stabilisation for Cervical Pathology & Surgery",
          description: "Cervical collars are prescribed for stabilisation following trauma, surgery, inflammatory conditions, or degenerative pathology. By limiting motion and reducing muscular strain, they assist in protecting neural structures and supporting recovery.",
          indications: [
            "Whiplash and soft tissue injury",
            "Post-operative cervical stabilisation",
            "Cervical radiculopathy",
            "Degenerative spondylosis",
            "Persistent neck instability"
          ],
          note: "Selection is guided by the required motion control level and stage of recovery."
        },
        {
          title: "Flexible Lumbar Supports",
          subtitle: "Moderate Stabilisation with Enhanced Comfort",
          description: "For patients requiring moderate stabilisation without rigid immobilisation, flexible lumbar orthoses provide structured support with enhanced comfort. Constructed from breathable, reinforced materials.",
          indications: [
            "Mechanical low back pain",
            "Early degenerative disc changes",
            "Muscular fatigue and strain",
            "Mild postural imbalance",
            "Pregnancy-related lumbar stress"
          ],
          examples: ["Lumbosacral corsets", "Elastic lumbar belts", "Soft corrective supports"],
          benefits: [
            "Reinforced neutral spine positioning",
            "Improved lumbar stability during activity",
            "Reduced muscular strain",
            "Enhanced tolerance for extended wear",
            "Support during physiotherapy sessions"
          ]
        },
        {
          title: "Rigid & Semi-Rigid Spinal Braces",
          subtitle: "High-Level Motion Control & Stabilisation",
          subsections: [
            {
              title: "Rigid Spinal Braces",
              description: "Designed with firm anterior and posterior panels, rigid orthoses significantly restrict spinal motion.",
              indications: ["Vertebral fractures", "Post-operative stabilisation", "Severe spinal instability", "Advanced deformity management"]
            },
            {
              title: "Semi-Rigid Braces",
              description: "Semi-rigid systems combine structured panels with flexible components to balance support and comfort.",
              indications: ["Chronic mechanical instability", "Persistent lumbar pain", "Postural correction programmes", "Progressive rehabilitation phases"]
            }
          ]
        },
        {
          title: "Specialised Lumbar Control Devices",
          subtitle: "Targeted Biomechanical Control",
          devices: [
            {
              name: "Chairback Brace",
              description: "Designed to restrict flexion, extension, and rotation following surgery or acute injury. It promotes controlled healing while allowing structured mobility within safe parameters."
            },
            {
              name: "Raney Flexion Jacket",
              description: "This orthosis maintains a neutral spinal tilt and increases intra-abdominal pressure to reduce stress on lumbar structures. It is particularly beneficial in selected mechanical and post-operative cases."
            }
          ]
        }
      ],
      clinicalPrecision: {
        title: "Clinical Precision & Institutional Alignment",
        description: "Effective spinal bracing requires more than simply selecting a device; it demands a comprehensive understanding of thoracolumbar biomechanics, clearly defined surgical objectives, structured rehabilitation timelines, patient-specific pathology, and compliance considerations to ensure optimal clinical outcomes.",
        supportPillars: [
          "Detailed clinical assessment and accurate measurement",
          "Condition-specific orthotic planning",
          "Custom and ready-to-fit options",
          "Digital design and precision fabrication",
          "Structured follow-up for fit and outcome monitoring"
        ],
        summary: "This systematic approach reduces complications, improves tolerance, and supports measurable functional outcomes."
      }
    }),
  mk("upper-limb-orthotics", "Upper Limb Orthotics", "Orthotics", "tools",
    "Wrist, elbow and shoulder orthoses that protect while preserving function.",
    "Upper limb function is central to independence, workplace productivity, and rehabilitation outcomes. When strength, coordination, or joint stability is compromised, even routine tasks such as writing, gripping, lifting, or tool handling become challenging. Upper limb orthoses provide structured support that enables controlled movement, joint protection, and functional recovery, making them a critical component of both short-term rehabilitation and long-term condition management.",
    ["Dynamic & static designs", "Lightweight 3D-printed shells", "Precise anatomical fit", "Skin-friendly liners"],
    [],
    {
      introParagraphs: [
        "Upper limb function is central to independence, workplace productivity, and rehabilitation outcomes. When strength, coordination, or joint stability is compromised, even routine tasks such as writing, gripping, lifting, or tool handling become challenging.",
        "Upper limb orthoses provide structured support that enables controlled movement, joint protection, and functional recovery, making them a critical component of both short-term rehabilitation and long-term condition management.",
        "At Quantum Medical, upper limb orthotic solutions are developed through thorough clinical assessment and precise fabrication, ensuring alignment with rehabilitation protocols and institutional care pathways."
      ],
      focusPillars: [
        "Controlled Movement & Alignment",
        "Joint Protection & Rest",
        "Neurological & Spasticity Support",
        "Occupational Task Enablement",
        "Pain & Inflammation Reduction"
      ],
      rehabilitationRole: {
        title: "What Are Upper Limb Orthotics?",
        description: "Upper limb orthotics are medical devices designed to support, align, and protect the joints and soft tissues of the upper extremity. They are prescribed to reduce mechanical strain, assist movement, and promote safer functional use during recovery or long-term care.",
        supportsRecovery: [
          "Stabilise injured or post-surgical joints",
          "Prevent deformities and contractures",
          "Improve posture and upper limb alignment",
          "Support weakened or neurologically impaired muscles",
          "Reduce pain and inflammation",
          "Enable participation in daily and occupational tasks"
        ],
        protocolBenefits: [
          "Level of immobilisation versus controlled movement",
          "Patient compliance and ease of donning/doffing",
          "Adjustability for clinical progression",
          "Comfort for extended daily wear",
          "Integration with physiotherapy and occupational therapy programmes"
        ]
      },
      systems: [
        {
          title: "Upper Limb Orthotic Categories",
          subtitle: "Selection Guided by Functional Objectives & Rehab Stage",
          description: "Upper limb orthoses broadly fall into two clinical categories based on prescription, functional objectives, and rehabilitation stage.",
          subsections: [
            {
              title: "Static Orthoses",
              description: "Prescribed when joint protection, positioning, or immobilisation is required. Commonly used in inflammatory, post-injury, or post-operative conditions where controlled rest is essential.",
              indications: ["Wrist & hand positioning", "Carpal tunnel syndrome", "Joint inflammation & strain", "Custom & prefabricated options available"]
            },
            {
              title: "Dynamic Orthoses",
              description: "Allow controlled, guided movement, making them suitable for neurological conditions, spasticity management, and contracture prevention.",
              indications: ["Gradual range of motion improvement", "Maintaining joint alignment", "Active rehabilitation pathways", "Long-term neurological care"]
            }
          ]
        },
        {
          title: "Common Upper Limb Orthotic Applications",
          subtitle: "Anatomic-Specific Clinical Solutions",
          description: "From wrist-hand stability to full arm and shoulder support systems, Quantum Medical offers scalable solutions that balance stability with functional movement based on clinical need.",
          subsections: [
            {
              title: "Wrist Hand Support",
              description: "Wrist-hand orthoses provide stability to the wrist and palm, supporting functional positioning during daily activities. Prescribed to reduce pain, improve grip efficiency, and protect compromised joints.",
              indications: ["Osteoarthritis & rheumatoid arthritis", "Carpal tunnel syndrome", "Ligament injuries or wrist instability", "Radial nerve palsy & wrist drop"]
            },
            {
              title: "Wrist Hand Finger Support",
              description: "Provides extended support for the entire functional unit of the hand when finger positioning and control are affected in neurological or complex musculoskeletal cases.",
              indications: ["Stroke & cerebral palsy", "Multiple sclerosis", "Traumatic brain or spinal cord injury", "Contracture prevention & post-trauma stiffness"]
            },
            {
              title: "Elbow Orthoses",
              description: "Elbow orthoses help control flexion and extension ranges, protecting the joint during healing while allowing functional use where appropriate.",
              indications: ["Elbow fractures & post-surgical recovery", "Tendon and ligament injuries", "Joint instability", "Neurological conditions with abnormal flexion patterns"]
            },
            {
              title: "Shoulder & Arm Support",
              description: "Shoulder and arm supports assist with positioning, offloading, and alignment, particularly in neurological and post-operative rehabilitation.",
              indications: ["Rotator cuff injuries", "Shoulder instability or dislocation", "Nerve injuries affecting arm control", "Frozen shoulder & chronic pain", "Post-surgical shoulder rehabilitation"]
            }
          ]
        }
      ],
      clinicalPrecision: {
        title: "Clinical Assessment & Orthotic Selection",
        description: "Effective orthotic intervention begins with a comprehensive clinical evaluation, not diagnosis alone. Quantum Medical's orthotists assess joint mobility, muscle activity, neurological involvement, spasticity patterns, and functional limitations to ensure the selected orthosis supports both immediate rehabilitation goals and long-term treatment plans.",
        supportPillars: [
          "Level of immobilisation vs controlled movement",
          "Patient compliance & ease of donning/doffing",
          "Adjustability for clinical progression",
          "Comfort for extended daily wear",
          "Integration with physio & occupational therapy"
        ],
        summary: "This systematic approach supports consistent outcomes across multidisciplinary rehabilitation teams."
      }
    }),
  mk("lower-limb-orthotics", "Lower Limb Orthotics", "Orthotics", "pediatric",
    "AFOs, knee, hip braces and pediatric correction — precision for every step.",
    "Lower limb pain, instability, or neuromuscular weakness can significantly affect gait efficiency, posture, and long-term joint health. For hospitals, orthopaedic practices, sports medicine units, and rehabilitation centres, structured orthotic intervention plays a critical role in restoring alignment, reducing biomechanical stress, and improving patient mobility outcomes.",
    ["Gait-optimised alignment", "Rigid or articulated joints", "Pediatric growth allowances", "Feather-light composites"],
    [
      { id: "knee-braces", label: "Knee Braces" },
      { id: "hip-braces", label: "Hip Braces" },
      { id: "afo", label: "AFO (Ankle-Foot Orthosis)" },
      { id: "supramalleolar-orthosis", label: "Supramalleolar Orthosis (SMO)" },
      { id: "ucbl", label: "UCBL Insoles" },
      { id: "ctev", label: "CTEV Boots & Bars" },
    ],
    {
      introParagraphs: [
        "Lower limb pain, instability, or neuromuscular weakness can significantly affect gait efficiency, posture, and long-term joint health. For hospitals, orthopaedic practices, sports medicine units, and rehabilitation centres, structured orthotic intervention plays a critical role in restoring alignment, reducing biomechanical stress, and improving patient mobility outcomes.",
        "Externally applied lower limb orthotics function as biomechanical control systems, redistributing pressure, guiding motion, and reducing abnormal joint loading across the foot, ankle, knee, and hip.",
        "At Quantum Medical, we partner with healthcare providers to deliver precision-engineered lower limb orthotic solutions that integrate seamlessly into surgical recovery pathways, neurological rehabilitation programmes, and long-term musculoskeletal care."
      ],
      focusPillars: [
        "Walking Stability & Balance",
        "Biomechanical Pressure Offloading",
        "Gait Mechanics Correction",
        "Post-Op & Fracture Recovery",
        "Deformity Prevention & Alignment"
      ],
      rehabilitationRole: {
        title: "What Are Lower Limb Orthotics?",
        description: "Lower limb orthotics are externally applied medical devices designed to support, stabilize, and align the foot, ankle, knee, and hip. They function as biomechanical control systems, redistributing pressure, guiding motion, and reducing abnormal joint loading.",
        supportsRecovery: [
          "Improving walking stability and balance",
          "Reducing joint pain and muscular fatigue",
          "Correcting abnormal gait mechanics",
          "Supporting post-operative or post-fracture recovery",
          "Preventing progressive deformity or joint degeneration"
        ],
        protocolBenefits: [
          "Detailed biomechanical evaluation",
          "Custom CAD/CAM-assisted design",
          "Precision fabrication",
          "Structured fitting protocols",
          "Ongoing review and adjustment cycles"
        ]
      },
      systems: [
        {
          title: "Foot & Ankle Control Systems",
          subtitle: "AFO, SMO & Biomechanical Stabilization",
          subsections: [
            {
              title: "Ankle-Foot Orthoses (AFO)",
              description: "AFOs are prescribed to control ankle motion, enhance foot clearance, and improve stance stability. Optimizing ankle alignment supports safer and more energy-efficient ambulation.",
              indications: ["Drop foot", "Stroke-related weakness", "Cerebral palsy", "Peripheral nerve injuries", "Post-fracture immobilization", "Post-surgical ankle stabilization"]
            },
            {
              title: "Supra-Malleolar Orthoses (SMO)",
              description: "SMOs extend just above the ankle to control subtalar alignment while preserving ankle mobility, maintaining heel neutrality and arch support.",
              indications: ["Flexible flatfoot", "Ligamentous laxity", "Pediatric gait instability", "Mild neuromuscular imbalance"]
            }
          ]
        },
        {
          title: "Knee & Extended Limb Systems",
          subtitle: "Targeted Stabilization & Load Offloading",
          subsections: [
            {
              title: "Patellofemoral & Ligament Braces",
              description: "Patellofemoral braces manage anterior knee pain and patellar tracking. Functional ligament braces manage ACL, PCL, MCL, and LCL injuries in post-surgical or sports cases.",
              indications: ["Anterior knee pain & tracking disorders", "ACL, PCL, MCL & LCL ligament injuries", "Post-surgical sports rehabilitation"]
            },
            {
              title: "Unloader & KAFO Braces",
              description: "Unloader braces redistribute joint loading in unicompartmental osteoarthritis. KAFOs (Knee-Ankle-Foot Orthoses) provide extended lower limb control for quadriceps weakness or polio.",
              indications: ["Unicompartmental osteoarthritis", "Quadriceps weakness", "Neurological instability", "Post-polio conditions"]
            }
          ]
        },
        {
          title: "Diabetic & Specialty Foot Orthotics",
          subtitle: "Total Contact Offloading & Deformity Correction",
          subsections: [
            {
              title: "CROW Boot (Charcot Restraint Orthotic Walker)",
              description: "Custom immobilization orthoses used primarily in advanced diabetic foot management to reduce shear forces and offload ulcers.",
              indications: ["Charcot neuroarthropathy", "Severe diabetic foot instability", "Midfoot collapse", "Post-ulcer offloading"]
            },
            {
              title: "UCBL Orthotics",
              description: "Custom-molded foot device with deep heel cup providing maximum control of hindfoot and midfoot alignment while maintaining functional gait.",
              indications: ["Flexible flatfoot (pes planus)", "Excessive pronation", "Midfoot instability", "Pediatric flexible foot deformities"]
            },
            {
              title: "Boots and Bar Orthosis (Foot Abduction Brace)",
              description: "Critical post-correction device in Ponseti method for managing clubfoot (congenital talipes equinovarus).",
              indications: ["Post-casting clubfoot correction", "Prevention of clubfoot relapse", "Pediatric orthopaedic alignment maintenance"]
            }
          ]
        },
        {
          title: "Sports & Hip Rehabilitation Systems",
          subtitle: "Performance Protection & Pelvic Stabilization",
          subsections: [
            {
              title: "Sports Bracing",
              description: "Designed for injury prevention, post-ligament rehabilitation, and return-to-play programmes in high-impact sports.",
              indications: ["Ligament instability", "Recurrent sprains", "Post-ACL reconstruction", "High-impact athletic activities"]
            },
            {
              title: "Hip Orthotics & RGO",
              description: "Hip stabilizers, abduction braces for dysplasia, and Reciprocating Gait Orthoses (RGO) for spinal cord injury and lower-limb paralysis.",
              indications: ["Post-hip replacement & fractures", "Pediatric hip dysplasia", "Spinal cord injury", "Reciprocal gait enabling"]
            }
          ]
        }
      ],
      clinicalPrecision: {
        title: "Collaborative Clinical Support & Institutional Alignment",
        description: "Quantum Medical works as an extended orthotic partner for hospitals and rehabilitation centres by offering multidisciplinary coordination, post-surgical bracing integration, neurological rehabilitation alignment, diabetic limb preservation support, reliable fabrication timelines, and institutional scalability.",
        supportPillars: [
          "Multidisciplinary clinical coordination",
          "Post-surgical bracing integration",
          "Neurological rehabilitation alignment",
          "Diabetic limb preservation support",
          "Reliable fabrication timelines & scalability"
        ],
        summary: "Our focus is on delivering structured orthotic programmes that improve mobility, reduce complications, and enhance functional independence."
      }
    }),
  mk("custom-orthotic-insoles-footwear", "Custom Insoles & Footwear", "Orthotics", "customInsoles",
    "Pressure-mapped insoles and footwear built from your unique foot geometry.",
    "At Quantum Medical, we collaborate with hospitals, orthopaedic clinics, podiatry centres, endocrinology teams, and rehabilitation providers to deliver precision-engineered custom orthotics and medical footwear.",
    ["Pressure-mapped design", "Diabetic-safe options", "Slim, shoe-friendly profiles", "Durable printed lattices"],
    [],
    {
      introParagraphs: [
        "At Quantum Medical, we collaborate with hospitals, orthopaedic clinics, podiatry centres, endocrinology teams, and rehabilitation providers to deliver precision-engineered custom orthotics and medical footwear.",
        "Our solutions are developed around a deep understanding of foot anatomy, biomechanics, and pathological loading patterns, supporting patients with flat feet, hypotonia, musculoskeletal disorders, diabetic foot complications, and complex gait abnormalities.",
        "By combining clinical assessment with CAD-assisted design and advanced fabrication technologies, we help healthcare partners improve alignment, reduce pain, and enhance functional mobility outcomes."
      ],
      focusPillars: [
        "Plantar Pressure Redistribution",
        "CAD-CAM Anatomical 3D Precision",
        "Diabetic Limb Preservation",
        "Joint Alignment & Gait Efficiency",
        "Custom Material Density & Comfort"
      ],
      rehabilitationRole: {
        title: "Custom Orthotic Insoles",
        description: "Custom insoles extend beyond arch support. They are biomechanical devices engineered to influence muscle activity, tendon loading, ligament support, and plantar pressure distribution.",
        supportsRecovery: [
          "Material density and flexibility optimization",
          "Anatomical heel cup depth control",
          "Full-length and 3/4 device length customisation",
          "Corrective wedges and intrinsic/extrinsic posting",
          "Pathology-based multi-density cushioning levels"
        ],
        protocolBenefits: [
          "Flexible flatfoot (pes planus) & high arch correction",
          "Plantar fasciitis, heel & arch pain relief",
          "Forefoot overload, bunion & metatarsalgia relief",
          "Diabetic foot pressure redistribution",
          "Secondary knee, hip & lower back mechanics alignment"
        ]
      },
      systems: [
        {
          title: "Diabetic Footwear & Limb Preservation",
          subtitle: "Multidisciplinary Ulceration Prevention & Offloading",
          description: "Even minor friction or unnoticed pressure points can lead to ulceration, infection, or amputation in high-risk patients. Custom diabetic footwear supports diabetic care teams with advanced protective design.",
          subsections: [
            {
              title: "Diabetic Limb Protection",
              description: "Fabricated using advanced CAD-CAM technology to deliver precise, breathable, and protective footwear suitable for daily use.",
              indications: ["Diabetic neuropathy", "Previous ulceration history", "Charcot foot neuroarthropathy", "Foot deformities & edema", "Post-surgical diabetic care"]
            },
            {
              title: "Clinical Footwear Objectives",
              description: "Specialized construction designed to preserve soft tissues and prevent tissue breakdown.",
              indications: ["Redistributing plantar pressure", "Minimizing shear forces", "Reducing ulcer recurrence risk", "Supporting circulation & accommodating swelling"]
            }
          ]
        },
        {
          title: "Therapeutic Orthopaedic Shoes",
          subtitle: "Musculoskeletal Deformity & Stability Support",
          description: "Orthopaedic footwear plays a key role in comprehensive musculoskeletal management. These shoes accommodate deformities, stabilize unstable joints, and reduce pathological loading.",
          subsections: [
            {
              title: "Orthopaedic Indications",
              description: "Combining therapeutic biomechanical design with functional aesthetics to improve patient compliance.",
              indications: ["Flat feet or pes cavus high arches", "Plantar fasciitis & chronic heel pain", "Bunions and hammertoes", "Rheumatoid or degenerative arthritis", "Chronic instability & balance disorders"]
            }
          ]
        },
        {
          title: "CAD-Assisted Design & Digital Workflow",
          subtitle: "Accuracy, Consistency & Additive Fabrication",
          description: "Our digital workflow ensures sub-millimeter accuracy, consistency, and reproducibility across clinical cases.",
          devices: [
            {
              name: "Digital 3D Foot Scanning & CAD Design",
              description: "3D volumetric modeling for anatomical precision without messy plaster casting."
            },
            {
              name: "Additive 3D Manufacturing",
              description: "3D-printed lattice structures and precision-milled orthotic devices for optimal flexibility and strength."
            },
            {
              name: "Right Sizing & Pressure Management",
              description: "Targeted offloading that eliminates friction, pressure points, and skin breakdown."
            },
            {
              name: "Multi-Density Comfort Layers",
              description: "Cushioned, breathable, and durable medical-grade polymers tailored to patient weight and activity level."
            }
          ]
        }
      ],
      clinicalPrecision: {
        title: "Clinical Integration & Multidisciplinary Support",
        description: "By combining clinical assessment with CAD-assisted design and advanced fabrication technologies, Quantum Medical helps healthcare partners integrate custom foot care solutions into broader treatment plans, physical therapy, and post-surgical protocols.",
        supportPillars: [
          "Right Sizing & Plantar Pressure Management",
          "Digital 3D Volumetric Scanning",
          "Apt Biomechanical Gait Fit",
          "Additive 3D Printing & Milling",
          "Condition-Specific Customization"
        ],
        summary: "This structured approach allows clinical teams to integrate custom orthotic solutions seamlessly into broader treatment plans."
      }
    }),
  mk("lower-limb-prosthetics", "Lower Limb Prosthetics", "Prosthetics", "lowerLimbProsthetics",
    "Trans-tibial to trans-femoral systems tuned for real-world mobility.",
    "Lower limb prosthetic rehabilitation requires coordinated planning between surgeons, physiatrists, prosthetists, and therapy teams. From partial foot loss to complex hip disarticulation cases, each amputation level demands precise component selection, socket engineering, and biomechanical alignment to achieve predictable functional outcomes.",
    ["Activity-matched componentry", "Precision socket fit", "Lightweight & durable", "Fast digital re-fabrication"],
    [],
    {
      introParagraphs: [
        "Lower limb prosthetic rehabilitation requires coordinated planning between surgeons, physiatrists, prosthetists, and therapy teams. From partial foot loss to complex hip disarticulation cases, each amputation level demands precise component selection, socket engineering, and biomechanical alignment to achieve predictable functional outcomes.",
        "Quantum Medical partners with hospitals, trauma centres, diabetic care units, and rehabilitation facilities to deliver custom-engineered lower limb prosthetic systems designed for stability, efficiency, and long-term mobility.",
        "Our clinical pathway supports healthcare teams in determining appropriate componentry, suspension strategy, alignment planning, and discharge goals."
      ],
      focusPillars: [
        "Component Selection & Matching",
        "Anatomical Socket Engineering",
        "Suspension & Alignment Planning",
        "Gait & Stair Negotiation Mobility",
        "Anatomical Cosmetic Finishing"
      ],
      rehabilitationRole: {
        title: "Clinical Pathway & Evaluation Goals",
        description: "From immediate surgical recovery to advanced mobility milestones, Quantum Medical provides structured prosthetic pathways tailored to patient activity levels and institutional care goals.",
        supportsRecovery: [
          "Appropriate prosthetic component selection based on K-level activity",
          "Custom socket design strategy based on residual limb presentation",
          "Suspension method and dynamic alignment planning",
          "Functional goals (gait efficiency, stairs, workplace return, sports)",
          "Cosmetic finishing aligned with patient preference"
        ],
        protocolBenefits: [
          "Detailed biomechanical assessment protocols",
          "Custom carbon fiber & thermoplastic socket engineering",
          "Component selection guidance (mechanical, hydraulic, microprocessor)",
          "Integration with physiotherapy and gait training milestones",
          "Structured follow-up and adjustment cycles"
        ]
      },
      systems: [
        {
          title: "Congenital & Partial Foot Systems",
          subtitle: "Ortho-Prosthetics & Distal Limb Preservation",
          subsections: [
            {
              title: "Ortho-Prosthesis (Congenital Limb Differences)",
              description: "Combines orthotic stabilization with prosthetic extension to improve alignment and walking stability while supporting existing limb structures.",
              indications: ["Tibial or fibular hemimelia", "Tibial aplasia-ectrodactyly syndrome", "Proximal femoral focal deficiency (PFFD)", "Rotation-plasty procedures & congenital shortening"]
            },
            {
              title: "Partial Foot & Syme's Amputation",
              description: "Functional solutions for toe, ray, transmetatarsal, Lisfranc, Chopart, and Syme's ankle disarticulations. Focuses on weight transfer and smooth rollover during gait.",
              indications: ["Toe & ray amputations", "Transmetatarsal & Lisfranc levels", "Chopart & Syme's ankle disarticulation", "End-bearing weight distribution"]
            }
          ]
        },
        {
          title: "Transtibial & Transfemoral Systems",
          subtitle: "Below-Knee & Above-Knee Mobility Engineering",
          subsections: [
            {
              title: "Below-Knee (Transtibial) Prosthesis",
              description: "Preservation of the knee joint allows for high functional potential using modern socket technologies, energy-return feet, and shock-absorbing pylons.",
              indications: ["Residual limb protection & volume management", "Suspension reliability (pin-lock, suction, vacuum)", "Energy-return carbon fiber feet", "Therapy milestone alignment"]
            },
            {
              title: "Above-Knee (Transfemoral) Prosthesis",
              description: "Requires precise coordination between custom laminated socket design, knee technology (mechanical, hydraulic, microprocessor MPK), and terrain-adaptive feet.",
              indications: ["Custom carbon fiber socket fabrication", "Microprocessor & hydraulic knee joints", "Lightweight titanium/carbon pylons", "Gait symmetry & fall risk reduction"]
            }
          ]
        },
        {
          title: "High-Level & Pelvic Disarticulation",
          subtitle: "Complex Biomechanical System Integration",
          devices: [
            {
              name: "Hip Disarticulation / Hemi-Pelvectomy Prosthesis",
              description: "Integrates pelvic stabilization sockets, artificial hip joint mechanics, microprocessor knee control, and terrain-adaptive foot systems into a single coordinated system."
            }
          ]
        }
      ],
      clinicalPrecision: {
        title: "Clinical Collaboration & Institutional Support",
        description: "Quantum Medical functions as an extended prosthetic partner for hospitals and rehabilitation centres across trauma, vascular, oncological, and congenital cases.",
        supportPillars: [
          "Detailed biomechanical assessment protocols",
          "Custom socket engineering",
          "Component selection guidance",
          "Integration with physio & gait training",
          "Structured follow-up & reliable turnaround"
        ],
        summary: "Our goal is to help healthcare providers deliver consistent prosthetic outcomes across trauma, vascular, oncological, and congenital cases."
      }
    }),
  mk("upper-limb-prosthetics", "Upper Limb Prosthetics", "Prosthetics", "upperLimbProsthetics",
    "Body-powered and cosmetic solutions that restore capability and confidence.",
    "Upper-limb loss can range from partial finger absence to transradial, transhumeral, or shoulder-level amputation, and in some cases may involve multiple limbs. Each presentation requires a carefully structured prosthetic pathway aligned with surgical outcomes, therapy goals, and long-term functional adaptation.",
    ["Functional & cosmetic options", "Custom socket interfaces", "Lightweight materials", "Natural aesthetics"],
    [],
    {
      introParagraphs: [
        "Upper-limb loss can range from partial finger absence to transradial, transhumeral, or shoulder-level amputation, and in some cases may involve multiple limbs. Each presentation requires a carefully structured prosthetic pathway aligned with surgical outcomes, therapy goals, and long-term functional adaptation.",
        "For orthopaedic surgeons, plastic surgeons, physiatrists, and rehabilitation teams, coordinated prosthetic planning is essential. A clearly defined system selection process ensures improved independence, task performance, workplace reintegration, and psychosocial recovery.",
        "At Quantum Medical, we partner with clinical teams to deliver customizable upper-limb prosthetic systems designed to integrate seamlessly into multidisciplinary rehabilitation programmes."
      ],
      focusPillars: [
        "Myoelectric & Cable Control",
        "Partial Hand & Finger Restoration",
        "Transradial Motion Efficiency",
        "Multi-Joint Arm System Integration",
        "Workplace & Activity Adaptation"
      ],
      rehabilitationRole: {
        title: "Prosthetic System Options",
        description: "Upper-limb prosthetic solutions are selected based on residual limb condition, functional demands, cognitive ability, and rehabilitation objectives.",
        supportsRecovery: [
          "Passive (Cosmetic) Systems – Lightweight aesthetic restoration & symmetry",
          "Body-Powered Systems – Durable cable-driven design & active control",
          "Myoelectric Systems – Sensor-based intuitive hand and grip control",
          "Hybrid Systems – Combination of body-powered strength & myoelectric precision",
          "Activity-Specific Devices – Vocational tasks, sports, cycling & painting"
        ],
        protocolBenefits: [
          "Structured upper-limb assessment protocols",
          "Custom socket engineering for comfort & suspension",
          "Integration with occupational and physical therapy plans",
          "Technical support during fitting & adaptation phases",
          "Consistent fabrication timelines supporting discharge planning"
        ]
      },
      systems: [
        {
          title: "Distal & Hand Restoration Systems",
          subtitle: "Partial Hand, Digit & Wrist Disarticulation",
          subsections: [
            {
              title: "Partial Hand & Digit Prosthesis",
              description: "Digit loss significantly affects grip dynamics and hand movement. Custom partial hand solutions restore grip strength and object stabilization in occupational therapy.",
              indications: ["Traumatic digit amputation", "Congenital limb differences", "Tumor-related surgical resections", "Infection-related tissue loss", "Industrial & workplace injuries"]
            },
            {
              title: "Wrist Disarticulation Prosthesis",
              description: "Preserves full forearm length and the distal radioulnar joint, enabling improved pronation, supination, and mechanical leverage with enhanced flare suspension.",
              indications: ["Distal radioulnar joint preservation", "Enhanced pronation & supination leverage", "Anatomical flare rotational control", "High-durability terminal device selection"]
            }
          ]
        },
        {
          title: "Transradial & Transhumeral Arm Systems",
          subtitle: "Below-Elbow & Above-Elbow Multi-Joint Solutions",
          subsections: [
            {
              title: "Below-Elbow (Transradial) Prosthesis",
              description: "Provides high functional adaptability and precise terminal device control. Includes custom socket fabrication, suspension system, wrist unit, and terminal device.",
              indications: ["Fine motor function restoration", "Vocational & workplace reintegration", "Pin-lock, sleeve or harness suspension", "Myoelectric sensor electrode positioning"]
            },
            {
              title: "Above-Elbow & Elbow Disarticulation",
              description: "Multi-component systems restoring reach, lifting capacity, and daily independence by integrating elbow mechanisms, forearm structures, wrist units, and terminal devices.",
              indications: ["Mechanical & hydraulic elbow joints", "Custom transhumeral socket engineering", "Reach & overhead lifting capacity", "Multidisciplinary therapy integration"]
            }
          ]
        }
      ],
      clinicalPrecision: {
        title: "Collaborative Support for Clinical Teams",
        description: "Quantum Medical functions as an extended prosthetic partner for hospitals and rehabilitation centres across surgical, occupational, and vocational recovery.",
        supportPillars: [
          "Structured upper-limb assessment protocols",
          "Custom socket engineering for comfort & suspension",
          "Integration with occupational & physical therapy",
          "Technical support during fitting & adaptation",
          "Consistent fabrication timelines for discharge"
        ],
        summary: "Our approach prioritizes clinical alignment, measurable outcomes, and long-term prosthetic sustainability."
      }
    }),
  mk("sockets-liners", "Sockets & Liners", "Prosthetics", "socketsLiners",
    "The critical interface — digitally fit for comfort, suspension and control.",
    "In prosthetic rehabilitation, the interface between the residual limb and the prosthesis determines long-term comfort, stability, and functional success. For hospitals, rehabilitation centres, and orthopaedic clinics, dependable socket fabrication and liner selection are critical to reducing complications, improving compliance, and achieving measurable mobility outcomes.",
    ["Precision volume management", "Reduced pistoning & shear", "Rapid comfort adjustments", "Consistent, repeatable fit"],
    [],
    {
      introParagraphs: [
        "In prosthetic rehabilitation, the interface between the residual limb and the prosthesis determines long-term comfort, stability, and functional success. For hospitals, rehabilitation centres, and orthopaedic clinics, dependable socket fabrication and liner selection are critical to reducing complications, improving compliance, and achieving measurable mobility outcomes.",
        "Quantum Medical works closely with prosthetic and rehabilitation teams to design and fabricate high-precision sockets, liners, and suspension systems tailored to individual anatomical and functional requirements.",
        "Our approach combines detailed clinical assessment, advanced fabrication methods, and coordinated follow-up support to ensure consistency across care pathways."
      ],
      focusPillars: [
        "Pressure Distribution & Alignment",
        "Volume Management & Scar Relief",
        "Silicone, TPE & PU Material Selection",
        "Active & Passive Vacuum Suspension",
        "Institutional B2B Turnaround Support"
      ],
      rehabilitationRole: {
        title: "Sockets – The Foundation of Prosthetic Success",
        description: "A well-designed socket is the core structural component of any prosthesis. It ensures secure suspension, balanced pressure distribution, and biomechanical alignment—especially important for users who rely on their prosthesis for extended daily wear.",
        supportsRecovery: [
          "Residual limb shape and volume management",
          "Soft tissue condition and scar protection",
          "Bony prominences offloading & pressure tolerance",
          "Activity level and dynamic load-bearing demands",
          "Long-term rehabilitation milestone alignment"
        ],
        protocolBenefits: [
          "Specific Weight-Bearing Sockets – Direct pressure toward tolerant regions while relieving sensitive areas",
          "Total Surface Weight-Bearing Sockets – Distribute load evenly across residual limb to improve proprioception",
          "Silicone, TPE & Polyurethane (PU) material interface selection",
          "Pin-Lock, Passive Vacuum & Active Vacuum suspension security",
          "Reduced pistoning, enhanced balance & skin breakdown prevention"
        ]
      },
      systems: [
        {
          title: "Custom Socket Designs",
          subtitle: "Anatomical Fit & Load Distribution",
          subsections: [
            {
              title: "Specific Weight-Bearing Sockets",
              description: "Engineered to direct weight-bearing pressure toward pressure-tolerant anatomical regions while relieving sensitive bony prominences.",
              indications: ["Targeted pressure relief", "Scar & graft protection", "Transtibial & transfemoral applications", "Custom thermoplastic & carbon lamination"]
            },
            {
              title: "Total Surface Weight-Bearing Sockets",
              description: "Designed to distribute load evenly across the entire surface area of the residual limb to improve comfort, proprioception, and circulation.",
              indications: ["Even load distribution", "Enhanced proprioceptive feedback", "Optimal volume management", "Reduced shear forces & friction"]
            }
          ]
        },
        {
          title: "Protective Liners & Material Interfaces",
          subtitle: "Comfort, Friction Reduction & Tissue Preservation",
          subsections: [
            {
              title: "Silicone Liners",
              description: "Durable medical silicone providing consistent suspension control and high mechanical stability for active users.",
              indications: ["High durability & control", "Consistent suspension engagement", "Active lifestyle management"]
            },
            {
              title: "TPE (Thermoplastic Elastomer) Liners",
              description: "Soft, flexible, and skin-friendly material infused with mineral oils for sensitive skin and tissue care.",
              indications: ["Soft & skin-friendly interface", "Sensitive tissue protection", "Mineral oil skin conditioning"]
            },
            {
              title: "Polyurethane (PU) Liners",
              description: "Flowable material providing excellent pressure distribution and shock absorption for bony or irregular residual limbs.",
              indications: ["Superior pressure distribution", "High shock absorption", "Ideal for bony prominences & sensitive limbs"]
            }
          ]
        },
        {
          title: "Suspension Systems",
          subtitle: "Stability Supporting Rehabilitation Progression",
          devices: [
            {
              name: "Shuttle Lock (Pin-Lock) System",
              description: "Secure mechanical attachment for predictable engagement and easy donning/doffing."
            },
            {
              name: "Passive Vacuum System",
              description: "Enhances limb-socket contact through negative pressure and one-way expulsion valves."
            },
            {
              name: "Active Vacuum System",
              description: "Advanced electric or mechanical pump providing superior volume management, zero pistoning, and maximum suspension stability."
            }
          ]
        }
      ],
      clinicalPrecision: {
        title: "Integrated B2B Support for Prosthetic Teams",
        description: "Quantum Medical operates as a clinical partner, ensuring that socket, liner, and suspension decisions integrate smoothly into therapy protocols and long-term prosthetic management strategies.",
        supportPillars: [
          "Detailed residual limb assessment and measurement",
          "Advanced socket fabrication with precise alignment",
          "Collaborative planning with physios & prosthetists",
          "Volume management guidance & follow-up adjustments",
          "Consistent turnaround timelines for institutional settings"
        ],
        summary: "By focusing on precision engineering and coordinated communication, we help facilities standardise prosthetic outcomes while maintaining individualised care."
      }
    }),
  mk("silicone-restoration", "Silicone Restoration", "Prosthetics", "team",
    "Life-like silicone prostheses for fingers, hands, ears, nose and more.",
    "Silicone restoration is a specialised area of prosthetic care focused on recreating the natural appearance and protective function of missing fingers, toes, or partial limbs. For clinical teams managing trauma, diabetic complications, congenital limb differences, or post-surgical limb loss, access to precision-fabricated silicone prostheses supports both functional recovery and psychosocial rehabilitation.",
    ["Hand-matched skin tones", "Realistic detail & texture", "Comfortable daily wear", "Durable medical silicone"],
    [],
    {
      introParagraphs: [
        "Silicone restoration is a specialised area of prosthetic care focused on recreating the natural appearance and protective function of missing fingers, toes, or partial limbs. For clinical teams managing trauma, diabetic complications, congenital limb differences, or post-surgical limb loss, access to precision-fabricated silicone prostheses supports both functional recovery and psychosocial rehabilitation.",
        "Quantum Medical partners with hospitals, orthopaedic surgeons, plastic surgeons, and rehabilitation professionals to deliver custom silicone restorations that integrate seamlessly into multidisciplinary care pathways.",
        "Partial limb loss requires more than cosmetic replacement. Proper prosthetic planning must consider load distribution, pressure protection, gait mechanics, and long-term tissue health."
      ],
      focusPillars: [
        "Anatomical Skin-Tone Matching",
        "Plantar Pressure Offloading",
        "Fine Motor & Grip Support",
        "Footwear Contour & Balance",
        "Psychosocial Confidence & Aesthetics"
      ],
      rehabilitationRole: {
        title: "Advanced Solutions for Partial Limb Loss",
        description: "Quantum Medical provides patient-specific silicone prosthetic devices designed to support stability, alignment, and daily function while restoring natural anatomical form.",
        supportsRecovery: [
          "Improve gait symmetry and forward progression",
          "Redistribute plantar pressure to protect residual tissue",
          "Enhance standing balance and postural control",
          "Restore foot contour for improved footwear compatibility",
          "Provide grip assistance, fine motor support & finger symmetry"
        ],
        protocolBenefits: [
          "Detailed residual limb assessment",
          "Digital measurement and precision moulding",
          "Structured fitting protocols",
          "Adjustment and review coordination",
          "Alignment with physiotherapy and occupational therapy plans"
        ]
      },
      systems: [
        {
          title: "Lower Limb & Partial Foot Restoration",
          subtitle: "Partial Foot, Syme's & Toe Fillers",
          subsections: [
            {
              title: "Partial Foot Prosthesis",
              description: "Indicated in toe, ray, transmetatarsal, Lisfranc, Chopart, or Syme's amputations, diabetic foot complications, trauma, or congenital absence.",
              indications: ["Toe & ray amputations", "Transmetatarsal, Lisfranc & Chopart levels", "Diabetic foot pressure protection", "Footwear contour restoration"]
            },
            {
              title: "Silicone Toe Fillers",
              description: "Prescribed to prevent footwear collapse, reduce shear forces, and restore missing forefoot volume for enhanced in-shoe stability.",
              indications: ["Preventing footwear collapse", "Reducing friction & pressure points", "Improved in-shoe stability", "Protection of sensitive residual tissue"]
            }
          ]
        },
        {
          title: "Upper Limb & Hand Restoration",
          subtitle: "Finger & Partial Hand Restorations",
          subsections: [
            {
              title: "Silicone Finger & Partial Hand Prostheses",
              description: "Recommended for traumatic finger amputations, congenital limb differences, tumor resections, or post-surgical partial hand removal.",
              indications: ["Grip assistance & light stabilization", "Fine motor task performance", "Ergonomic hand symmetry", "Custom skin-tone & anatomical matching"]
            }
          ]
        }
      ],
      clinicalPrecision: {
        title: "Collaborative Clinical Workflow",
        description: "Quantum Medical supports partner institutions with predictable fabrication timelines and consistent quality standards aligned with institutional rehabilitation programmes.",
        supportPillars: [
          "Detailed residual limb assessment",
          "Digital measurement & precision moulding",
          "Structured fitting protocols",
          "Adjustment and review coordination",
          "Alignment with physio & occupational therapy"
        ],
        summary: "Our goal is to provide predictable fabrication timelines and consistent quality standards that align with institutional rehabilitation programmes."
      }
    }),
  mk("pediatric-prosthetics", "Pediatric Prosthetics", "Pediatric", "pediatric",
    "Playful, durable and rapidly re-fabricated as children grow.",
    "Supporting children with limb differences goes beyond providing a device; it requires a team-based approach that considers their growth and developmental needs. This approach includes coordinated rehabilitation and long-term functional support.",
    ["Grows with the child", "Lightweight & tough", "Fun, personalised designs", "Fast, low-cost re-fabrication"],
    [],
    {
      introParagraphs: [
        "Supporting children with limb differences goes beyond providing a device; it requires a team-based approach that considers their growth and developmental needs. This approach includes coordinated rehabilitation and long-term functional support.",
        "Quantum Medical partners with pediatric rehabilitation units, hospitals, therapy teams, and other care providers to deliver prosthetic solutions that promote natural movement and adapt to the child’s changing needs.",
        "This B2B partnership model creates a streamlined ecosystem of collaboration between clinics, hospitals, and multidisciplinary healthcare providers."
      ],
      focusPillars: [
        "Growth-Accommodating Components",
        "Lightweight Energy-Efficient Design",
        "Early Motor Skill Acquisition",
        "Play, School & Sports Readiness",
        "Rapid Digital Re-Fabrication"
      ],
      rehabilitationRole: {
        title: "Evidence-Backed Pediatric Prosthetic Design",
        description: "Quantum Medical pediatric prosthetic systems are engineered for clinical efficiency and real-world functionality to support key developmental milestones.",
        supportsRecovery: [
          "Lightweight construction for minimized energy expenditure and ease of movement",
          "Growth-accommodating components to extend device use and reduce frequent refitting",
          "Stable alignment systems to support early motor skill acquisition",
          "Activity-appropriate components for play, schooling, and daily function",
          "Child-appropriate cosmetic, color, and functional finishing options"
        ],
        protocolBenefits: [
          "Consistent, evidence-based pediatric prosthetic care",
          "Seamless integration with physiotherapy and occupational therapy",
          "Reliable, growth-accommodating modular designs",
          "Clear communication and follow-up workflows for clinical teams",
          "Rapid digital re-fabrication cycles for fast-turnaround refittings"
        ]
      },
      systems: [
        {
          title: "Pediatric Lower-Limb Prosthetics",
          subtitle: "Ambulation, Gait & Play Milestones",
          subsections: [
            {
              title: "Lower-Limb Pediatric Systems",
              description: "Supports functional milestones from crawling and initial ambulation to running and play, emphasizing gait development and biomechanical stability.",
              indications: ["Pediatric-specific comfort sockets", "Adjustable pylons for rapid growth", "Energy-return pediatric feet", "Crawling, walking & running stability"]
            }
          ]
        },
        {
          title: "Pediatric Upper-Limb Prosthetics",
          subtitle: "Bilateral Engagement & School Environment",
          subsections: [
            {
              title: "Upper-Limb Pediatric Systems",
              description: "Designed to support functional engagement, bilateral hand use, and developmental tasks across school and play environments.",
              indications: ["Passive stabilization devices", "Body-powered grasp/release mechanics", "Myoelectric pediatric hands", "Sports, art, cycling & classroom terminal tools"]
            }
          ]
        }
      ],
      clinicalPrecision: {
        title: "Collaborative Support for Clinical Teams",
        description: "Quantum Medical's pediatric prosthetic services act as an extension of your care continuum, supporting referral workflows and multidisciplinary collaboration.",
        supportPillars: [
          "Growth management & regular tracking protocols",
          "Integration with physio & occupational therapy",
          "Rapid digital fabrication & production efficiency",
          "Pediatric biomechanics & growth trend design",
          "Clear documentation & follow-up coordination"
        ],
        summary: "This collaborative framework supports clinicians by enhancing predictability in care outcomes, reducing refit delays, and ensuring devices remain functional across growth stages."
      }
    }),
  mk("cranial-orthoses", "Cranial Orthoses", "Pediatric", "pediatric",
    "Cranial remolding helmets from a safe, touch-free 3D scan.",
    "Infant skull growth is most rapid during the first year of life, with nearly 85% of cranial development occurring before 12 months. During this critical period, positional factors, birth-related influences, or congenital conditions may result in cranial asymmetry or flattening.",
    ["Touch-free 3D capture", "Lightweight & breathable", "Precise remolding geometry", "Regular growth reviews"],
    [],
    {
      introParagraphs: [
        "Infant skull growth is most rapid during the first year of life, with nearly 85% of cranial development occurring before 12 months. During this critical period, positional factors, birth-related influences, or congenital conditions may result in cranial asymmetry or flattening.",
        "Cranial remoulding orthoses provide a non-invasive, clinically guided approach to support symmetrical skull development by working with the infant’s natural growth patterns.",
        "For pediatricians, neonatologists, and rehabilitation teams, Quantum Medical supports clinical partners with custom-fabricated cranial helmet solutions designed to deliver measurable improvement within a typical 3–4 month treatment window."
      ],
      focusPillars: [
        "Non-Compressive Growth Guidance",
        "Touch-Free 3D Volumetric Scan",
        "3-4 Month Correction Window",
        "Plagiocephaly & Brachycephaly Support",
        "Infant Comfort & Caregiver Guidance"
      ],
      rehabilitationRole: {
        title: "Principle of Cranial Remoulding",
        description: "Cranial helmets do not apply compressive force to the skull. Instead, they are designed to guide growth by allowing expansion in areas requiring correction while maintaining space where shape is already optimal.",
        supportsRecovery: [
          "Non-invasive growth direction (no active compressive pressure)",
          "Optimal intervention window before 12 months of age (effective up to 18 months)",
          "Targeted relief zones for flattened cranial regions",
          "Correction for torticollis-related positional head tilt asymmetry",
          "Lightweight, breathable materials designed for 23-hour daily infant wear"
        ],
        protocolBenefits: [
          "Specialist 3D volumetric shape analysis & asymmetry documentation",
          "Collaborative treatment planning with neonatologists & pediatricians",
          "Scan-based custom helmet fabrication with growth guidance voids",
          "Professional fitting, safety checks & caregiver compliance education",
          "Objective 3D follow-up scans & progress tracking every 3-4 weeks"
        ]
      },
      systems: [
        {
          title: "Conditions Managed with Cranial Orthoses",
          subtitle: "Early Intervention & Asymmetry Correction",
          subsections: [
            {
              title: "Positional Plagiocephaly & Brachycephaly",
              description: "Plagiocephaly involves asymmetrical flattening on one side of the skull. Brachycephaly involves symmetrical flattening at the back resulting in a wider skull shape.",
              indications: ["Asymmetrical occipital flattening", "Symmetrical posterior head flattening", "Restricted sleep positioning asymmetry", "Pediatric physical therapy integration"]
            },
            {
              title: "Scaphocephaly & Mixed Cranial Deformities",
              description: "Scaphocephaly presents as a long, narrow head shape due to restricted lateral growth. Mixed deformities involve multi-planar asymmetry requiring custom correction.",
              indications: ["Long, narrow cranial contours", "Multi-planar asymmetry patterns", "Custom volumetric expansion zones", "Close clinical growth monitoring"]
            },
            {
              title: "Torticollis & Persistent Skull Asymmetry",
              description: "Head tilt secondary to muscular torticollis or deformities that have not improved beyond 5-6 months of conservative repositioning.",
              indications: ["Postural torticollis head tilt asymmetry", "Failure of repositioning & physio alone", "Intervention beyond 5-6 months of age", "Congenital intrauterine positioning contours"]
            }
          ]
        }
      ],
      clinicalPrecision: {
        title: "Structured Workflow for Partner Teams",
        description: "Quantum Medical provides an end-to-end clinical workflow supporting pediatricians, neonatologists, and rehabilitation teams throughout the 3-4 month helmet programme.",
        supportPillars: [
          "Specialist 3D evaluation & baseline shape analysis",
          "Collaborative target outcome treatment planning",
          "Scan-based custom helmet fabrication",
          "Professional fitting & caregiver education",
          "Ongoing 3D monitoring & objective progress tracking"
        ],
        summary: "This structured 5-step workflow ensures predictable correction, infant safety, and high caregiver compliance."
      }
    }),
  mk("scoliosis-bracing", "Scoliosis Bracing", "Pediatric", "lab",
    "Corrective and nocturnal bracing designed from full-torso 3D data.",
    "Early identification and a well-structured bracing strategy play a critical role in influencing long-term outcomes in scoliosis management. For healthcare teams managing pediatric and adult spinal conditions, access to precise, data-driven bracing solutions supports consistent curve control, improved patient compliance, and better functional mobility.",
    ["Curve-specific correction", "Low-profile daytime designs", "Nocturnal bracing options", "Comfort for compliance"],
    [{ id: "nocturnal", label: "Nocturnal Braces" }],
    {
      introParagraphs: [
        "Early identification and a well-structured bracing strategy play a critical role in influencing long-term outcomes in scoliosis management. For healthcare teams managing pediatric and adult spinal conditions, access to precise, data-driven bracing solutions supports consistent curve control, improved patient compliance, and better functional mobility.",
        "Scoliosis is a three-dimensional spinal deformity characterized by lateral curvature, vertebral rotation, and postural asymmetry. It is commonly identified during late childhood or adolescence, particularly during growth spurts, but may also develop or progress in adulthood.",
        "At Quantum Medical, we partner with orthopaedic surgeons, pediatric specialists, and rehabilitation teams to deliver advanced CAD/CAM-engineered scoliosis braces that combine anatomical accuracy with comfortable, lifestyle-compatible designs."
      ],
      focusPillars: [
        "3D Pattern-Specific Curve Correction",
        "Full-Torso CAD/CAM Anatomical Precision",
        "Daytime & Nocturnal Bracing Systems",
        "Adolescent & Adult Degenerative Care",
        "Physiotherapy & Schroth Integration"
      ],
      rehabilitationRole: {
        title: "Understanding Scoliosis & Bracing Principles",
        description: "Scoliosis bracing is recommended when there is a risk of curve progression or functional compromise. Early clinical assessment and data-driven pad placement are essential for controlling three-plane deformity.",
        supportsRecovery: [
          "Adolescent Idiopathic Scoliosis (AIS) active growth phase curve control",
          "Congenital Scoliosis support for vertebral malformations",
          "Neuromuscular Scoliosis trunk stabilization (CP, Muscular Dystrophy, SMA)",
          "Degenerative Adult Scoliosis alignment & pain reduction",
          "Kyphoscoliosis & combined hyperkyphosis posture correction"
        ],
        protocolBenefits: [
          "Full-torso 3D volumetric optical scanning (no radiation)",
          "CAD/CAM pad & expansion void placement based on Rigo-Chêneau classification",
          "Daytime low-profile breathable braces for school & activity wear",
          "Recumbent hyper-corrective nighttime braces for maximal compliance",
          "Integration with Schroth method & scoliosis-specific physical therapy"
        ]
      },
      systems: [
        {
          title: "Custom Scoliosis Bracing Systems",
          subtitle: "3-Plane Curve Correction & Recumbent Options",
          subsections: [
            {
              title: "Daytime Scoliosis Braces",
              description: "Designed for extended daily wear, providing pattern-specific three-plane correction using CAD-designed pad and relief placement. Available in lightweight 3D-printed lattices.",
              indications: ["Adolescent idiopathic scoliosis", "Low-profile school & daily wear", "3D-printed breathable shells", "Pattern-specific Rigo-Chêneau correction"]
            },
            {
              title: "Nighttime Scoliosis Braces",
              description: "Applies high-magnitude corrective forces in recumbent sleeping positions, improving tolerance and compliance, particularly for adolescents.",
              indications: ["Recumbent hyper-correction", "Standalone nocturnal therapy", "High-compliance adolescent options", "Combined day/night treatment plans"]
            },
            {
              title: "Rigid & Semi-Rigid Spinal Orthoses",
              description: "Rigid braces for scoliosis, kyphosis, and lordosis, alongside semi-rigid chairback orthoses and Raney flexion jackets.",
              indications: ["Rigid TLSO & CTLSO designs", "Hyperkyphosis posture correction", "Chairback & Raney flexion devices", "Adult degenerative spinal fatigue"]
            }
          ]
        }
      ],
      clinicalPrecision: {
        title: "Collaborative Support for Clinical Teams",
        description: "Quantum Medical works as an extension of your clinical team, supporting consistent decision-making, accurate brace delivery, and coordinated follow-up throughout the treatment cycle.",
        supportPillars: [
          "Full-torso 3D optical scanning & curve analysis",
          "Curve classification & CAD pad design alignment",
          "Collaborative planning with orthopaedic surgeons",
          "Integration with Schroth & physical therapy protocols",
          "Scheduled growth reviews & in-brace X-ray verification support"
        ],
        summary: "Our approach is designed to integrate seamlessly into hospital, clinic, and rehabilitation workflows, ensuring bracing solutions align with clinical prescriptions and physiotherapy goals."
      }
    }),
  mk("walker-canes-crutches", "Walker, Canes & Crutches", "Mobility", "team",
    "Everyday mobility aids fitted correctly for safety and independence.",
    "Safe, progressive mobility is a core component of successful rehabilitation. Whether patients are recovering from orthopaedic surgery, managing neurological conditions, or presenting with balance and gait impairments, the correct ambulatory aid plays a direct role in fall prevention, confidence, and functional recovery.",
    ["Correctly sized & fitted", "Lightweight, stable frames", "Grip & terrain options", "Patient training included"],
    [],
    {
      introParagraphs: [
        "Safe, progressive mobility is a core component of successful rehabilitation. Whether patients are recovering from orthopaedic surgery, managing neurological conditions, or presenting with balance and gait impairments, the correct ambulatory aid plays a direct role in fall prevention, confidence, and functional recovery.",
        "Quantum Medical collaborates with hospitals, orthopaedic departments, physiotherapy centres, and long-term care providers to supply walkers, canes, and crutches aligned with prescribed weight-bearing protocols and staged rehabilitation plans.",
        "Our focus is not just product supply, but structured clinical integration across inpatient, outpatient, and home-care settings."
      ],
      focusPillars: [
        "Staged Weight-Bearing Progression",
        "Anthropometric Sizing & Height Adjustment",
        "Unilateral & Bilateral Gait Offloading",
        "Inpatient & Home-Care Fall Prevention",
        "Institutional B2B Inventory Management"
      ],
      rehabilitationRole: {
        title: "Walkers, Canes & Crutches Clinical Spectrum",
        description: "From early post-op max-stability walkers to targeted unilateral canes and non-weight-bearing crutches, Quantum Medical matches ambulatory aids to surgical protocols and therapy goals.",
        supportsRecovery: [
          "Walkers – Maximum stability for early mobilisation & high fall risk patients",
          "Canes – Targeted unilateral support for mild instability & osteoarthritis offloading",
          "Crutches – Controlled complete/partial non-weight-bearing fracture & ligament protection",
          "Anthropometric height adjustment to prevent upper-limb strain & posture breakdown",
          "Gait instruction, tip inspection & patient safety education for long-term adherence"
        ],
        protocolBenefits: [
          "Device selection aligned with surgical & physical therapy weight-bearing protocols",
          "Precise fitting based on patient height, arm span & strength measurements",
          "Coordination with surgeons, physios & occupational therapy teams",
          "Reliable inventory management for hospital discharge planning",
          "Consistent supply across acute, subacute, and community care settings"
        ]
      },
      systems: [
        {
          title: "Ambulatory Aid Categories",
          subtitle: "Walkers, Canes & Crutches Selection",
          subsections: [
            {
              title: "Walkers (Maximum Early Stability)",
              description: "Provides maximum stability by redistributing weight through upper extremities while reducing stress on healing joints and weakened limbs.",
              indications: ["Post-op knee or hip replacement recovery", "Significant balance impairment", "Lower-limb weakness or sensory deficits", "Neurological coordination disorders & high fall risk"]
            },
            {
              title: "Canes (Targeted Unilateral Support)",
              description: "Prescribed during later rehab stages or for long-term support in degenerative conditions, offering unilateral assistance while preserving natural gait.",
              indications: ["Single-point, tripod & quad cane options", "Early-stage osteoarthritis offloading", "Post-injury residual weakness", "Age-related gait adaptations"]
            },
            {
              title: "Crutches (Controlled Offloading)",
              description: "Essential when partial or complete non-weight-bearing protocols are required following trauma or surgery to protect healing tissues.",
              indications: ["Foot, ankle, knee, or hip injuries", "Ligament reconstruction procedures", "Fracture management & non-weight-bearing protocols", "Underarm axillary & forearm elbow crutch options"]
            }
          ]
        }
      ],
      clinicalPrecision: {
        title: "Integrated Mobility Support for Healthcare Providers",
        description: "Quantum Medical provides structured B2B support designed to complement clinical workflows and discharge planning protocols.",
        supportPillars: [
          "Protocol-aligned device selection & fitting",
          "Precise anthropometric height & grip adjustments",
          "Coordination with surgeons, physios & OTs",
          "Reliable inventory management for hospitals",
          "Training support for staged mobility progression"
        ],
        summary: "Our goal is to help facilities standardise mobility pathways while maintaining patient-centred flexibility."
      }
    }),
  mk("custom-seating", "Custom Seating", "Mobility", "lab",
    "Pressure-relieving custom seating for posture, comfort and skin integrity.",
    "Effective postural management requires more than standard cushions or modular seating components. For patients with complex neuromuscular, orthopaedic, or developmental conditions, seating must be accurately contoured, clinically justified, and carefully integrated into the broader rehabilitation plan.",
    ["Pressure redistribution", "Postural support & alignment", "Skin-integrity focus", "Modular, adjustable builds"],
    [],
    {
      introParagraphs: [
        "Effective postural management requires more than standard cushions or modular seating components. For patients with complex neuromuscular, orthopaedic, or developmental conditions, seating must be accurately contoured, clinically justified, and carefully integrated into the broader rehabilitation plan.",
        "Quantum Medical partners with hospitals, rehabilitation centres, long-term care facilities, and therapy teams to design and deliver custom foam-carved seating systems that align with clearly defined clinical goals. Using advanced 3D scanning and robotic carving technology, each system is anatomically shaped to the user, ensuring consistent pelvic positioning, optimal pressure distribution, and long-term postural stability.",
        "Our seating solutions are structured to integrate seamlessly with existing wheelchair bases and mobility platforms, supporting efficient implementation within clinical workflows."
      ],
      focusPillars: [
        "Robotic 3D Foam-Carved Precision",
        "Pelvic Alignment & Postural Stability",
        "Tissue Pressure Relief & Sore Prevention",
        "GRIZZLY Paediatric Special Stroller",
        "Manual & Powered Wheelchair Compatibility"
      ],
      rehabilitationRole: {
        title: "Clinical Advantages for Healthcare Partners",
        description: "Our custom foam-carved seating systems are developed to support measurable therapeutic outcomes while maintaining durability and usability in real-world environments.",
        supportsRecovery: [
          "Digitally carved seating for precise 3D anatomical contouring",
          "Suitable for paediatric, adult, and geriatric populations",
          "Lightweight yet structurally supportive foam & frame construction",
          "Universal compatibility with most powered and manual wheelchair systems",
          "Removable, easy-to-clean medical covers with antimicrobial material options"
        ],
        protocolBenefits: [
          "Consistent pelvic positioning & scoliosis posture support",
          "Optimal pressure redistribution to protect vulnerable skin",
          "Tilt-in-space & recline integration for posture relief",
          "Crash-tested medical transport compatibility for paediatric push chairs",
          "Wide range of belts, harnesses, lateral supports, and headrests"
        ]
      },
      systems: [
        {
          title: "Paediatric Mobility & Push Chair Solutions",
          subtitle: "GRIZZLY Special Stroller & Paediatric Rehabilitation",
          subsections: [
            {
              title: "GRIZZLY Special Stroller",
              description: "Clinically structured mobility solution engineered for adjustability and growth, supporting children 85–140 cm in height and up to 45 kg.",
              indications: ["Adaptive growth system (seat depth 25–37 cm; back height 57–70 cm)", "Adjustable footrests, trunk supports & pelvic belts", "Tilt-in-space & recline functions for postural control", "Crash-tested design suitable for medical transport programmes"]
            }
          ]
        },
        {
          title: "Custom Carved Seating & Postural Accessories",
          subtitle: "Full-Body Contouring & Platform Integration",
          devices: [
            {
              name: "Robotic 3D Carved Foam Inserts",
              description: "Custom contoured backrests and seat cushions carved from high-density multi-layer foam using 3D volumetric patient scans."
            },
            {
              name: "Postural Belts, Harnesses & Lateral Supports",
              description: "Comprehensive range of pelvic positioning belts, chest harnesses, thoracic laterals, and headrests for complex seating setups."
            }
          ]
        }
      ],
      clinicalPrecision: {
        title: "Evidence-Based Postural Seating Partnerships",
        description: "Quantum Medical provides structured, evidence-based postural seating solutions designed to integrate seamlessly into hospital and rehabilitation mobility programmes.",
        supportPillars: [
          "Advanced 3D volumetric scanning & posture mapping",
          "Robotic foam-carving precision fabrication",
          "Therapy-aligned pelvic positioning & pressure management",
          "Powered & manual wheelchair platform integration",
          "Ongoing fit review, growth adjustments & cover replacements"
        ],
        summary: "Each system is designed to balance pressure management, trunk stability, pelvic alignment, and functional participation, supporting both therapy objectives and day-to-day comfort."
      }
    }),
];

export const getDevice = (slug) => DEVICES.find((d) => d.slug === slug);
export const CATEGORIES = ["Orthotics", "Prosthetics", "Pediatric", "Mobility"];

export const HERO_CALLOUTS = [
  "Personalized AI-driven solutions for Orthotics & Prosthetics",
  "3D Printed, GAIT Analysis & CAD/CAM Designed Devices",
  "Highly Experienced Team of Health & Medical Professionals",
];
