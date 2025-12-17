// data/businessTypes.js

export const businessTypes = [
  {
    title: "Private Limited Company",
    slug: "private-limited-company",
    bigtitlle:
      "Private Limited Company Registration in India: Complete Guide 2025",
    sideindex: [
      "Introduction",
      "Key Benefits",
      "Eligibility Requirements",
      "Documents Required",
      "Registration Process",
      "Frequently Asked Questions",
    ],
    sidesimilarites: [
      "Limited Liability Partnership",
      "One Person Company",
      "Registered Partnership",
    ],
    description:
      "Ideal for startups and growing businesses with limited liability protection.",
    details:
      "This structure restricts the number of shareholders to 50 and prohibits public trading of shares, ensuring a secure and professional business setup. It also makes raising funds easier and provides a strong foundation for sustainable growth.",
    content: {
      introduction:
        "A Private Limited Company is a privately held business entity with limited liability protection. It's the most preferred structure for startups and growing businesses, offering legal separation between owners and the company, making it an independent legal entity.",
      keybenefits: [
        "Limited Liability Protection: Personal assets are protected from business debts",
        "Separate Legal Entity: Company exists independently of its owners",
        "Easy Fundraising: Attract investors and venture capital more easily",
        "Credibility & Trust: Enhanced professional image with clients and partners",
        "Perpetual Succession: Company continues even if shareholders change",
        "Tax Benefits: Lower tax rates and various exemptions available",
        "Easy Transferability: Shares can be transferred to others",
      ],
      eligibilityRequirements: [
        "Minimum 2 Directors (Maximum 15)",
        "Minimum 2 Shareholders",
        "Directors must have DIN (Director Identification Number)",
        "At least one director must be an Indian resident",
        "Minimum Capital: No minimum requirement",
      ],
      documentsRequiredDetailed: [
        "PAN Card",
        "Aadhaar Card",
        "Address Proof",
        "Passport-size photographs",
        "Registered office address proof",
        "Rent agreement (if rented)",
      ],
      registrationProcess: [
        "DSC & DIN Application",
        "Name Approval",
        "Document Filing",
        "Incorporation",
      ],
      faq: [
        {
          question:
            "How long does it take to register a Private Limited Company?",
          answer:
            "Typically 15-20 working days from the date of submission of all required documents. This includes DSC procurement, DIN allocation, name approval, and final incorporation.",
        },
        {
          question:
            "Can a foreign national be a director in an Indian Private Limited Company?",
          answer:
            "Yes, foreign nationals can be directors, but at least one director must be an Indian resident. Foreign directors need to obtain a DIN and Digital Signature Certificate.",
        },
        {
          question: "What is the minimum paid-up capital required?",
          answer:
            "There is no minimum paid-up capital requirement for Private Limited Companies. You can start with any capital amount, even ₹1,000.",
        },
        {
          question: "Can directors and shareholders be the same persons?",
          answer:
            " Yes, the same persons can be both directors and shareholders. You need minimum 2 persons to fulfill both roles in a Private Limited Company.",
        },
      ],
    },
  },

  // Limited Liability Partnership

  {
    title: "Limited Liability Partnership",
    slug: "limited-liability-partnership",
    bigtitlle: "Limited Liability Partnership Registration: Complete Guide",
    sideindex: [
      "Introduction",
      "Key Benefits",
      "Eligibility Requirements",
      "Documents Required",
      // "Registration Process",
      "Frequently Asked Questions",
    ],
    sidesimilarites: [
      "Private Limited Company",
      "Partnership Firm",
      "OPC One Person Company",
    ],
    description:
      "Combines benefits of partnership and corporation with limited liability.",
    details:
      "Partners are not personally liable for business debts, and compliance requirements are minimal, making it easier to manage while maintaining credibility.",

    content: {
      introduction:
        "A Limited Liability Partnership combines the benefits of a partnership and a company. It provides limited liability protection to partners while maintaining the flexibility of a partnership structure. Ideal for professional services and small to medium businesses.",
      keybenefits: [
        "Limited Liability: Partners' personal assets are protected",
        "No Minimum Capital: Start with any capital amount",
        "Separate Legal Entity: Can own property and enter contracts",
        "Flexible Management: Less compliance compared to companies",
        "Tax Efficiency: No dividend distribution tax",
        "Perpetual Succession: Continues despite partner changes",
        "Easy to Maintain: Lower compliance requirements",
      ],
      eligibilityRequirements: [
        "Minimum 2 Designated Partners (No maximum limit)",
        "At least one partner must be Indian resident",
        "Partners can be individuals or companies",
        "No minimum capital requirement",
      ],
      documentsRequiredDetailed: [
        "PAN Card",
        "Aadhaar Card",
        "Address Proof",
        "Photographs",
        "Registered office proof",
        "Rent agreement/Ownership documents",
      ],
      faq: [
        {
          question:
            "What's the difference between LLP and Private Limited Company?",
          answer:
            "LLP has lower compliance requirements, no audit requirement for small LLPs, and no dividend distribution tax. However, it cannot raise equity funding from investors or go public like a Private Limited Company.",
        },
        {
          question: "Is audit mandatory for LLP?",
          answer:
            "Audit is mandatory only if annual turnover exceeds ₹40 lakhs or contribution exceeds ₹25 lakhs. Small LLPs below these thresholds are exempt from audit.",
        },
        {
          question: "Can an LLP be converted to a Private Limited Company?",
          answer:
            "Yes, an LLP can be converted to a Private Limited Company by following the conversion process under the Companies Act, subject to fulfilling all requirements.",
        },
        {
          question: "What are the annual compliance requirements for LLP?",
          answer:
            "LLPs must file Annual Return (Form 11) and Statement of Account & Solvency (Form 8) every year. Income tax returns must also be filed annually.",
        },
      ],
    },
  },

  // One Person Company (OPC)

  {
    title: "One Person Company (OPC)",
    slug: "one-person-company",
    bigtitlle:
      "One Person Company (OPC) Registration in India: Complete Guide 2025",
    sideindex: [
      "Introduction",
      "Key Benefits",
      "Eligibility Requirements",
      "Documents Required",
      // "Registration Process",
      "Frequently Asked Questions",
    ],
    sidesimilarites: [
      "Private Limited Company",
      "Limited Liability Partnership",
      "Registered Partnership",
    ],
    description:
      "Empowering solo entrepreneurs with limited liability and complete business control.",
    details: "",

    content: {
      introduction:
        "One Person Company is a business structure where a single individual can form a company with limited liability. It's perfect for solo entrepreneurs who want the benefits of a private limited company without multiple directors or shareholders.",
      keybenefits: [
        "Single Ownership: 100% control with one person",
        "Limited Liability: Personal assets remain protected",
        "Separate Legal Entity: Independent legal existence",
        "Easy to Form: Simpler compliance than Pvt Ltd",
        "Credibility: Better than sole proprietorship",
        "Perpetual Succession: Nominee director provision",
        "No Minimum Capital: Start with any amount",
      ],
      eligibilityRequirements: [
        "Only one person required as Member/Director",
        "Must be Indian Citizen and Resident",
        "One Nominee Director required",
        "Cannot form more than one OPC",
        "Cannot convert from existing company",
      ],
      documentsRequiredDetailed: [
        "PAN Card",
        "Aadhaar Card",
        "Proof of residence",
        "Photographs",
        "Registered office documents",
        "Nominee's consent and documents",
      ],
      faq: [
        {
          question: "Can an OPC have more than one director later?",
          answer:
            "If OPC's turnover exceeds ₹2 crores or paid-up capital exceeds ₹50 lakhs for 2 consecutive years, it must convert to a Private Limited Company with minimum 2 directors.",
        },
        {
          question: "What is the role of a nominee in OPC?",
          answer:
            "The nominee becomes the member/director in case of death or incapacity of the sole member. The nominee must give consent but doesn't have any rights until such event occurs.",
        },
        {
          question: "Can NRI or foreign nationals form an OPC?",
          answer:
            "No, only Indian citizens who are residents in India can incorporate an OPC. NRIs and foreign nationals are not eligible to form an OPC in India.",
        },
        {
          question: "What are the annual compliance requirements for OPC?",
          answer:
            "OPC must file Annual Return (MGT-7), Financial Statements (AOC-4), Income Tax Return, and maintain statutory registers. It's easier than Private Limited compliance.",
        },
      ],
    },
  },

  // Registered Partnership

  {
    title: "Registered Partnership",
    slug: "registered-partnership",
    bigtitlle:
      "Legally Recognized Partnership for Shared Growth and Protection",
    sideindex: [
      "Introduction",
      "Key Benefits",
      "Eligibility Requirements",
      "Documents Required",
      // "Registration Process",
      "Frequently Asked Questions",
    ],
    sidesimilarites: [
      "Private Limited Company",
      "Limited Liability Partnership",
      "One Person Company",
    ],
    description:
      "A partnership where partners share profits, duties, and growth.",
    details: "",

    content: {
      introduction:
        "A Registered Partnership is formed when two or more persons come together to carry on business and share profits. Registration with the Registrar of Firms provides legal recognition and protection under the Indian Partnership Act, 1932.",
      keybenefits: [
        "Easy Formation: Simple and quick registration process",
        "Shared Responsibility: Partners share workload and decisions",
        "Flexible Structure: Easy to manage and modify",
        "Tax Benefits: Partners taxed individually",
        "Legal Recognition: Can file suits and claim set-off",
        "Low Compliance: Minimal regulatory requirements",
        "Cost-Effective: Lower formation and maintenance costs",
      ],
      eligibilityRequirements: [
        "Minimum 2 Partners (Maximum 20 for regular business, 10 for banking)",
        "Partners must be individuals (not companies)",
        "Must have a Partnership Deed",
        "All partners must have PAN",
      ],
      documentsRequiredDetailed: [
        "Partnership Deed",
        "PAN Card of all partners",
        "Address proof",
        "Photographs",
        "Proof of principal place of business",
        "Rent agreement/Ownership proof",
      ],
      faq: [
        {
          question:
            "What's the difference between registered and unregistered partnership?",
          answer:
            "Registered partnerships can file suits against third parties, claim set-off, and have better legal standing. Unregistered partnerships cannot file suits to enforce rights against third parties.",
        },
        {
          question: "Are partners personally liable for partnership debts?",
          answer:
            "Yes, in a partnership, all partners have unlimited liability. Their personal assets can be used to settle partnership debts. This is different from LLP or Private Limited Company.",
        },
        {
          question: "Can a partnership firm be converted to LLP?",
          answer:
            "Yes, a registered partnership firm can be converted to an LLP through a simple conversion process, which provides limited liability protection to partners.",
        },
        {
          question: "Is registration mandatory for partnership firms?",
          answer:
            "Registration is not mandatory but highly recommended. Without registration, the firm cannot file suits against third parties or claim set-off in legal proceedings.",
        },
      ],
    },
  },

  // GST Certificate

  {
    title: "GST Certificate",
    slug: "gst-certificate",
    bigtitlle:
      "Legal Tax Identity for Businesses Engaged in Interstate Trade and Growth",
    sideindex: [
      "Introduction",
      "Key Benefits",
      "Eligibility Requirements",
      "Documents Required",
      // "Registration Process",
      "Frequently Asked Questions",
    ],
    sidesimilarites: [
      "Company Compliances",
      "Startup India Certificate",
      "Udyam Certificate/MSME",
    ],
    description:
      "A tax ID enabling businesses to collect GST, comply with law, and trade interstate.",
    details: "",

    content: {
      introduction:
        "Goods and Services Tax (GST) registration is mandatory for businesses with turnover exceeding ₹40 lakhs (₹20 lakhs for services). It's a unique identification number for businesses to collect tax on behalf of the government and provides legal recognition for interstate trade.",
      keybenefits: [
        "Legal Recognition: Authorized to collect tax from customers",
        "Input Tax Credit: Claim credit on business purchases",
        "Interstate Sales: Legally sell across all Indian states",
        "Competitive Edge: Deal with registered businesses",
        "Government Tenders: Participate in government contracts",
        "Easy Compliance: Simplified tax filing system",
        "Professional Image: Enhanced business credibility",
      ],
      eligibilityRequirements: [
        "Businesses with turnover >₹40 lakhs (goods) or >₹20 lakhs (services)",
        "Interstate suppliers",
        "E-commerce sellers",
        "Casual taxable persons",
        "Businesses with online sales",
      ],
      documentsRequiredDetailed: [
        "PAN Card",
        "Aadhaar Card",
        "Business registration proof",
        "Bank account details",
        "Address proof",
        "Photographs",
        "Business place proof (rent/ownership)",
      ],
      faq: [
        {
          question: "Is GST registration mandatory for all businesses?",
          answer:
            "No, GST registration is mandatory only if your aggregate turnover exceeds ₹40 lakhs (₹20 lakhs for services). However, it's mandatory for interstate suppliers and e-commerce sellers regardless of turnover.",
        },
        {
          question: "How long does GST registration take?",
          answer:
            "GST registration typically takes 7-10 working days after submission of all documents and verification by the GST department. You'll receive your GSTIN upon approval.",
        },
        {
          question: "What is the validity period of GST registration?",
          answer:
            "GST registration is valid indefinitely as long as the business is operational and complies with filing requirements. There's no need for renewal, but you must file returns regularly.",
        },
        {
          question: "Can I cancel my GST registration if I close my business?",
          answer:
            "Yes, you can apply for GST cancellation within 30 days of closing your business or if you're no longer liable for GST. The cancellation process is done online through the GST portal.",
        },
      ],
    },
  },

  // Company Compliances

  {
    title: "Company Compliances",
    slug: "company-compliances",
    bigtitlle:
      "Ensuring Legal Compliance and Corporate Transparency for Every Company",
    sideindex: [
      "Introduction",
      "Key Benefits",
      "Eligibility Requirements",
      // "Documents Required",
      // "Registration Process",
      "Frequently Asked Questions",
    ],
    sidesimilarites: [
      "Startup India Certificate",
      "Udyam Certificate/MSME",
      "Import Export Code",
    ],
    description:
      "Key legal requirements for companies to maintain compliance and transparency.",
    details: "",

    content: {
      introduction:
        "Company compliances are mandatory statutory requirements that every registered company must fulfill as per the Companies Act, 2013 and other regulations. These include annual filings, board meetings, AGMs, tax returns, and various regulatory submissions to maintain active and legal status.",
      keybenefits: [
        "Legal Protection: Avoid penalties and legal issues",
        "Good Standing: Maintain active company status",
        "Investor Confidence: Attracts funding and partnerships",
        "Tax Benefits: Ensure all eligible deductions claimed",
        "Avoid Prosecution: Directors protected from legal action",
        "Bank Relations: Easier loan approvals and credit",
        "Business Growth: Focus on business while we handle compliance",
      ],
      eligibilityRequirements: [
        "ROC Annual Filing (AOC-4 & MGT-7)",
        "Income Tax Returns",
        "GST Returns",
        "Board Meetings (Min 4 per year)",
        "Annual General Meeting",
        "Maintenance of Statutory Registers",
        "DIN KYC",
        "DIR-3 KYC",
      ],
      // documentsRequiredDetailed: [
      //   "PAN Card",
      //   "Aadhaar Card",
      //   "Business registration proof",
      //   "Bank account details",
      //   "Address proof",
      //   "Photographs",
      //   "Business place proof (rent/ownership)",
      // ],
      faq: [
        {
          question: "What happens if I miss compliance deadlines?",
          answer:
            "Missing compliance deadlines can result in penalties ranging from ₹100 per day to significant amounts. Directors may face disqualification, and the company status may become 'Strike Off' eligible.",
        },
        {
          question: "How many board meetings are required annually?",
          answer:
            "Private Limited Companies must hold minimum 4 board meetings per year with a maximum gap of 120 days between two consecutive meetings. One meeting must be held in each quarter.",
        },
        {
          question: "What is the due date for filing annual returns?",
          answer:
            "Annual Return (MGT-7) must be filed within 60 days from the date of AGM. Financial Statements (AOC-4) must be filed within 30 days from the date of AGM.",
        },
        {
          question: "Can we revive a struck-off company?",
          answer:
            "Yes, a struck-off company can be restored through a revival application to NCLT (National Company Law Tribunal) along with payment of pending dues and penalties.",
        },
      ],
    },
  },

  // Startup India Certificate

  {
    title: "Startup India Certificate",
    slug: "startup-india-certificate",
    bigtitlle:
      "Official Recognition Empowering Innovative Startups with Government Benefits",
    sideindex: [
      "Introduction",
      "Key Benefits",
      "Eligibility Requirements",
      "Documents Required",
      // "Registration Process",
      "Frequently Asked Questions",
    ],
    sidesimilarites: [
      "Udyam Certificate/MSME",
      "Import Export Code",
      "ICEGATE Registration",
    ],
    description:
      "Government recognition granting startups tax benefits, funding, and easier compliance.",
    details: "",

    content: {
      introduction:
        "Startup India Certificate is a recognition provided by DPIIT (Department for Promotion of Industry and Internal Trade) to innovative startups. This certification unlocks numerous benefits including tax exemptions, easier compliance, IPR benefits, and access to government funding programs.",
      keybenefits: [
        "Tax Exemption: 3 years of Income Tax exemption",
        "Self Certification: 9 labor and 3 environment laws",
        "IPR Benefits: 80% rebate on patent filing fees",
        "Easy Funding: Access to government schemes and funds",
        "Relaxed Norms: Public procurement relaxations",
        "Fast-Track Exits: Closure in 90 days",
        "Networking: Access to startup ecosystem and events",
      ],
      eligibilityRequirements: [
        "Incorporated as Pvt Ltd/LLP/Partnership",
        "Less than 10 years old",
        "Annual turnover less than ₹100 crores",
        "Working towards innovation/development",
        "Not formed by splitting existing business",
      ],
      documentsRequiredDetailed: [
        "Certificate of Incorporation",
        "Details of directors/partners",
        "Brief about innovation",
        "Pitch deck",
        "Website/product links",
        "Recommendation letter (if available)",
      ],
      faq: [
        {
          question:
            "What is the eligibility for tax exemption under Startup India?",
          answer:
            "To avail 3-year tax exemption, startup must be recognized by DPIIT and obtain Inter-Ministerial Board (IMB) certification proving innovation and scalability potential.",
        },
        {
          question: "Can sole proprietorships get Startup India recognition?",
          answer:
            "No, only Private Limited Companies, LLPs, and Registered Partnerships are eligible for Startup India recognition. Sole proprietorships are not eligible.",
        },
        {
          question: "How long does it take to get Startup India certificate?",
          answer:
            "The recognition is usually granted within 2-3 working days if all documents are in order and the application meets the eligibility criteria.",
        },
        {
          question: "Is there any fee for Startup India registration?",
          answer:
            "No, the Startup India recognition process is completely free. You can apply directly through the Startup India portal without any charges.",
        },
      ],
    },
  },

  // Udyam Certificate/MSME

  {
    title: "Udyam Certificate/MSME",
    slug: "udyam-certificate-msme",
    bigtitlle:
      "Government Recognition Empowering MSMEs with Exclusive Benefits and Support",
    sideindex: [
      "Introduction",
      "Key Benefits",
      "Eligibility Requirements",
      "Documents Required",
      // "Registration Process",
      "Frequently Asked Questions",
    ],
    sidesimilarites: [
      "Import Export Code",
      "ICEGATE Registration",
      "GST Certificate",
    ],
    description:
      "Online recognition providing MSMEs with a unique ID, subsidies, loans, and scheme advantages.",
    details: "",

    content: {
      introduction:
        "Udyam Registration (formerly Udyog Aadhaar) is a government recognition for Micro, Small & Medium Enterprises (MSMEs). It's a completely online, paperless process that provides a unique identification number and unlocks numerous benefits including priority sector lending, subsidies, and government scheme access.",
      keybenefits: [
        "Easy Loans: Priority lending from banks at lower interest",
        "Government Subsidies: Access to various subsidy schemes",
        "Tax Benefits: Reduced fees for various registrations",
        "Protection: Against delayed payments from buyers",
        "Tender Benefits: Exemption from EMD in government tenders",
        "Credit Guarantee: Collateral-free loans under CGTMSE",
        "ISO Certification: Subsidized certification costs",
      ],
      eligibilityRequirements: [
        "Micro: Investment <₹1 Cr, Turnover <₹5 Cr",
        "Small: Investment <₹10 Cr, Turnover <₹50 Cr",
        "Medium: Investment <₹50 Cr, Turnover <₹250 Cr",
      ],
      documentsRequiredDetailed: [
        "Aadhaar Card of proprietor/partner/director",
        "PAN Card",
        "Business details",
        "Bank account details",
        "GSTIN (if available)",
      ],
      faq: [
        {
          question: "Is Udyam registration mandatory for all businesses?",
          answer:
            "It's not mandatory but highly beneficial for MSMEs. Registration provides access to various government schemes, priority lending, and protection against delayed payments.",
        },
        {
          question: "Can I update my Udyam registration details later?",
          answer:
            "Yes, you can update your Udyam registration details anytime through the official portal. Information is auto-updated annually from GST and ITR data.",
        },
        {
          question: "What is the validity of Udyam certificate?",
          answer:
            "Udyam registration is valid for the lifetime of the enterprise. There's no need for renewal, but you must ensure your details remain updated.",
        },
        {
          question: "Can service businesses also register for Udyam?",
          answer:
            "Yes, both manufacturing and service sector enterprises can register under Udyam. The classification is based on investment and turnover criteria.",
        },
      ],
    },
  },

  // Import Export Code

  {
    title: "Import Export Code",
    slug: "import-export-code",
    bigtitlle:
      "Essential Lifetime License for Businesses Engaged in Global Trade",
    sideindex: [
      "Introduction",
      "Key Benefits",
      "Eligibility Requirements",
      "Documents Required",
      // "Registration Process",
      "Frequently Asked Questions",
    ],
    sidesimilarites: [
      "ICEGATE Registration",
      "GST Certificate",
      "Company Compliances",
    ],
    description:
      "A required 10-digit license allowing businesses to legally import and export worldwide.",
    details: "",

    content: {
      introduction:
        "Import Export Code (IEC) is a 10-digit unique identification number mandatory for any business wanting to import or export goods and services from India. Issued by DGFT (Directorate General of Foreign Trade), it's a lifetime validity code with no renewal requirements.",
      keybenefits: [
        "Global Trade: Legally import/export goods worldwide",
        "Lifetime Validity: One-time registration, no renewals",
        "Customs Clearance: Smooth clearance of shipments",
        "Export Benefits: Avail export incentives and schemes",
        "Foreign Exchange: Receive payments from abroad",
        "Business Expansion: Access international markets",
        "Quick Process: Get code within 10-15 days",
      ],
      eligibilityRequirements: [
        "All importers and exporters",
        "Manufacturers exporting products",
        "Service exporters",
        "E-commerce exporters",
        "Trading companies",
        "NOT required for personal imports/exports below specified limits",
      ],
      documentsRequiredDetailed: [
        "PAN Card",
        "Aadhaar Card (for proprietorship)",
        "Cancelled cheque/Bank certificate",
        "Photograph",
        "Business address proof",
        "Registration certificate (for companies/LLPs)",
      ],
      faq: [
        {
          question: "Can I export without IEC code?",
          answer:
            "No, IEC is mandatory for both import and export of goods and services except for certain exempted categories. Without IEC, customs will not clear your shipments.",
        },
        {
          question: "Do I need separate IEC for import and export?",
          answer:
            "No, a single IEC code is sufficient for both import and export activities. You don't need separate codes for different activities.",
        },
        {
          question: "Does IEC need to be renewed?",
          answer:
            "No, IEC has lifetime validity and doesn't require renewal. However, you must update your details if there are any changes in your business information.",
        },
        {
          question: "Can I apply for IEC before starting my business?",
          answer:
            "You need to have a business entity (proprietorship/partnership/company) and PAN card to apply for IEC. Individual persons cannot obtain IEC without business registration.",
        },
      ],
    },
  },

  // ICEGATE Registration

  {
    title: "ICEGATE Registration",
    slug: "icegate-registration",
    bigtitlle:
      "Single-Window Digital Portal Simplifying Customs Compliance for Trade",
    sideindex: [
      "Introduction",
      "Key Benefits",
      "Eligibility Requirements",
      "Documents Required",
      // "Registration Process",
      "Frequently Asked Questions",
    ],
    sidesimilarites: [
      "GST Certificate",
      "Company Compliances",
      "Startup India Certificate",
    ],
    description:
      "A national portal offering a single-window digital system for smooth import and export filings.",
    details: "",

    content: {
      introduction:
        "ICEGATE (Indian Customs Electronic Gateway) is the national portal of Indian Customs for electronic filing of import/export documentation. It provides a single-window interface for the trade to interact with Customs and enables online filing of Bills of Entry, Shipping Bills, and other customs documents.",
      keybenefits: [
        "Paperless Process: File all customs documents online",
        "Time Saving: Faster customs clearance",
        "Track Shipments: Real-time status tracking",
        "Secure Platform: Digital signature enabled transactions",
        "Transparency: Complete visibility of customs processes",
        "24/7 Access: File documents anytime, anywhere",
        "Cost Effective: Reduced operational costs",
      ],
      eligibilityRequirements: [
        "Importers and Exporters",
        "Customs House Agents",
        "Shipping Lines",
        "Airlines",
        "Freight Forwarders",
        "Warehouse Operators",
        "Anyone dealing with customs documentation",
      ],
      documentsRequiredDetailed: [
        "IEC Code",
        "PAN Card",
        "Business registration documents",
        "Digital Signature Certificate (DSC)",
        "Email ID and mobile number",
        "Authorized signatory details",
      ],
      faq: [
        {
          question: "Is ICEGATE registration mandatory for import-export?",
          answer:
            "Yes, ICEGATE registration is mandatory for filing customs documents electronically. It's required for both importers and exporters conducting business through Indian customs.",
        },
        {
          question: "Do I need Digital Signature for ICEGATE?",
          answer:
            "Yes, a Class 2 or Class 3 Digital Signature Certificate (DSC) is mandatory for ICEGATE registration and for filing documents on the portal.",
        },
        {
          question: "How long does ICEGATE registration take?",
          answer:
            "ICEGATE registration typically takes 2-3 working days after submission of all required documents and DSC. The credentials are sent via email.",
        },
        {
          question: "Can I track my shipments through ICEGATE?",
          answer:
            "Yes, ICEGATE provides real-time tracking of your Bills of Entry and Shipping Bills. You can monitor the status of customs clearance process online.",
        },
      ],
    },
  },

  // Startup India Seedfund

  {
    title: "Startup India Seedfund",
    slug: "startup-india-seedfund",
    bigtitlle:
      "Financial Support for Startups to Validate Ideas and Achieve Growth Milestones",
    sideindex: [
      "Introduction",
      "Key Benefits",
      "Eligibility Requirements",
      "Documents Required",
      // "Registration Process",
      "Frequently Asked Questions",
    ],
    sidesimilarites: ["RKVY-Raftaar", "NAIFF", "PMEGP"],
    description:
      "Funding up to ₹50 lakhs to help startups build prototypes, validate ideas, and reach growth milestones.",
    details: "",

    content: {
      introduction:
        "The Startup India Seed Fund Scheme (SISFS) provides financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialization. The scheme aims to support startups with funding up to ₹50 lakhs to validate their business ideas and achieve key milestones.",
      keybenefits: [
        "Grant Funding: Up to ₹20 lakhs for proof of concept",
        "Debt/Convertible: Up to ₹50 lakhs for commercialization",
        "No Equity Dilution: Grant component doesn't require equity",
        "Validation Support: Help in product development and testing",
        "Mentorship: Access to incubators and mentors",
        "Network Access: Connect with investors and industry experts",
        "Fast Approval: Quick evaluation and disbursement process",
      ],
      eligibilityRequirements: [
        "DPIIT recognized startup",
        "Incorporated less than 2 years ago",
        "Working on innovative product/service",
        "Not received more than ₹10 lakhs from govt schemes",
        "Applied through eligible incubator",
      ],
      documentsRequiredDetailed: [
        "DPIIT Certificate",
        "Incorporation Certificate",
        "Detailed project report",
        "Financial projections",
        "Team details",
        "Pitch deck",
        "Incubator recommendation",
      ],
      faq: [
        {
          question: "Can I apply directly or need an incubator?",
          answer:
            "You must apply through an eligible incubator empaneled under the Startup India Seed Fund Scheme. Direct applications are not accepted.",
        },
        {
          question: "What is the selection process?",
          answer:
            "Selection involves evaluation by the incubator's Expert Advisory Committee (EAC) based on innovation, scalability, team capability, and market potential.",
        },
        {
          question: "How is the fund disbursed?",
          answer:
            "Seed support up to ₹20 lakhs is provided as grant in milestones. Up to ₹50 lakhs can be provided as debt or debt-linked instruments through the incubator.",
        },
        {
          question: "Can a startup apply to multiple incubators?",
          answer:
            "Yes, but a startup can receive funding from only one incubator under this scheme. Multiple applications increase chances but funding is limited to one source.",
        },
      ],
    },
  },

  // RKVY-Raftaar

  {
    title: "RKVY-Raftaar",
    slug: "rkvy-raftaar",
    bigtitlle:
      "Boosting Agri-Innovation and Rural Entrepreneurship with Financial Support",
    sideindex: [
      "Introduction",
      "Key Benefits",
      "Eligibility Requirements",
      "Documents Required",
      // "Registration Process",
      "Frequently Asked Questions",
    ],
    sidesimilarites: ["NAIFF", "PMEGP", "CGTMSE"],
    description:
      "Government support funding innovative agricultural projects to boost agri-innovation and rural entrepreneurship.",
    details: "",

    content: {
      introduction:
        "Rashtriya Krishi Vikas Yojana - Remunerative Approaches for Agriculture and Allied sector Rejuvenation (RKVY-RAFTAAR) is a government scheme to promote innovation and agri-entrepreneurship. It provides financial support to agri-startups and rural enterprises for innovative projects in agriculture and allied sectors.",
      keybenefits: [
        "Grant Support: Up to ₹25 lakhs per startup",
        "Incubation Support: Access to agri-business incubators",
        "Mentorship: Expert guidance in agriculture sector",
        "Infrastructure: Use of incubator facilities and equipment",
        "Market Linkages: Connect with buyers and distributors",
        "Networking: Access to agri-innovation ecosystem",
        "Technology Access: Latest agri-tech solutions",
      ],
      eligibilityRequirements: [
        "Startups in agriculture and allied sectors",
        "Registered entity (Pvt Ltd/LLP/Partnership)",
        "Innovative solution in agri-tech",
        "Less than 5 years old",
        "Should not have received funding >₹50 lakhs",
      ],
      documentsRequiredDetailed: [
        "Business registration proof",
        "Project proposal",
        "Financial projections",
        "Team profile",
        "Innovation description",
        "Market analysis",
        "Proof of concept (if available)",
      ],
      faq: [
        {
          question: "What sectors are covered under RKVY-Raftaar?",
          answer:
            "Agriculture, horticulture, animal husbandry, dairy, fisheries, food processing, agri-marketing, agri-logistics, and other allied agricultural activities are covered.",
        },
        {
          question: "How much funding can a startup get?",
          answer:
            "Startups can receive up to ₹25 lakhs as grant support through empaneled incubators. Additional support may be available for infrastructure and marketing.",
        },
        {
          question: "Is equity dilution required?",
          answer:
            "No, the grant component doesn't require equity dilution. However, specific terms depend on the incubator and nature of support provided.",
        },
        {
          question: "Can non-agriculture startups apply?",
          answer:
            "No, only startups working in agriculture and allied sectors are eligible. The innovation must have direct impact on farming community or agricultural value chain.",
        },
      ],
    },
  },

  // NAIFF

  {
    title: "NAIFF",
    slug: "naiff",
    bigtitlle:
      "Financing Solutions to Strengthen Agricultural Infrastructure and Community Farming",
    sideindex: [
      "Introduction",
      "Key Benefits",
      "Eligibility Requirements",
      "Documents Required",
      // "Registration Process",
      "Frequently Asked Questions",
    ],
    sidesimilarites: ["PMEGP", "CGTMSE", "Mudra Loan"],
    description:
      "Medium- to long-term financing for post-harvest infrastructure and community farming, with interest and credit support.",
    details: "",

    content: {
      introduction:
        "National Agriculture Infra Financing Facility (NAIFF) provides medium to long-term debt financing for investment in viable projects for post-harvest management infrastructure and community farming assets. It aims to improve agricultural infrastructure and logistics with interest subvention and credit guarantee support.",
      keybenefits: [
        "Interest Subvention: 3% per annum up to ₹2 crores",
        "Credit Guarantee: Coverage for loans up to ₹2 crores",
        "Long Tenure: Repayment period up to 10 years",
        "Large Funding: Support for projects up to ₹100 crores",
        "Moratorium Period: Up to 2 years for repayment",
        "Infrastructure Focus: Cold chain, warehousing, processing units",
        "Easy Access: Available through all scheduled banks",
      ],
      eligibilityRequirements: [
        "Primary Agricultural Credit Societies",
        "Farmers Producer Organizations",
        "Joint Liability Groups",
        "Self Help Groups",
        "Farmers",
        "Aggregation Infrastructure Providers",
        "Startups in agri-infrastructure",
      ],
      documentsRequiredDetailed: [
        "Project report",
        "Financial statements",
        "Land documents",
        "Business registration",
        "KYC documents",
        "Quotations for machinery",
        "Technical feasibility report",
      ],
      faq: [
        {
          question: "What type of projects are eligible?",
          answer:
            "Projects for post-harvest infrastructure like cold storage, warehouses, pack houses, sorting units, ripening chambers, processing units, and assaying units are eligible.",
        },
        {
          question: "What is the maximum loan amount?",
          answer:
            "There is no upper limit on loan amount. However, interest subvention and credit guarantee benefits are available only up to ₹2 crores per project.",
        },
        {
          question: "Do I need collateral for the loan?",
          answer:
            "For loans up to ₹2 crores, CGTMSE credit guarantee is available, making it collateral-free. For higher amounts, collateral may be required as per bank norms.",
        },
        {
          question: "How to apply for NAIFF?",
          answer:
            "Apply through scheduled commercial banks, cooperative banks, RRBs, or NABARD. Submit detailed project report with technical and financial viability assessment.",
        },
      ],
    },
  },

  // PMEGP

  {
    title: "PMEGP",
    slug: "pmegp",
    bigtitlle:
      "Credit-Linked Support to Boost Micro-Enterprises and Employment Generation",
    sideindex: [
      "Introduction",
      "Key Benefits",
      "Eligibility Requirements",
      "Documents Required",
      // "Registration Process",
      "Frequently Asked Questions",
    ],
    sidesimilarites: ["CGTMSE", "Mudra Loan", "Startup Seed Support"],
    description:
      "A credit-linked subsidy scheme aiding micro-enterprises to boost employment in manufacturing and services.",
    details: "",

    content: {
      introduction:
        "Prime Minister's Employment Generation Programme (PMEGP) is a credit-linked subsidy scheme for setting up new micro-enterprises in manufacturing and service sectors. The scheme provides margin money subsidy ranging from 15% to 35% of project cost to generate employment opportunities.",
      keybenefits: [
        "Subsidy Support: 15-35% of project cost as subsidy",
        "Easy Loans: Remaining 65-85% as bank loan",
        "No Collateral: For loans up to ₹10 lakhs",
        "Manufacturing: Projects up to ₹50 lakhs eligible",
        "Services: Projects up to ₹20 lakhs eligible",
        "Employment: Generate self and wage employment",
        "Pan-India: Available across all states",
      ],
      eligibilityRequirements: [
        "Age: Above 18 years",
        "Education: Min 8th pass for manufacturing",
        "No existing enterprise under PMEGP",
        "Family income criteria: Rural areas advantage",
        "Special categories: SC/ST/OBC/Minorities/Women/Physically Handicapped/NER/Hill/Border areas get higher subsidy",
      ],
      documentsRequiredDetailed: [
        "Aadhaar Card",
        "Educational certificates",
        "Caste certificate (if applicable)",
        "Project report",
        "Bank statement",
        "Photographs",
        "Proof of ownership/lease of premises",
      ],
      faq: [
        {
          question: "What is the subsidy percentage under PMEGP?",
          answer:
            "General category: 15% (urban), 25% (rural). Special category (SC/ST/OBC/Minorities/Women/PHC/Ex-servicemen/NER): 25% (urban), 35% (rural) of project cost.",
        },
        {
          question: "Can I apply online for PMEGP?",
          answer:
            "Yes, applications are accepted online through the PMEGP portal (www.kviconline.gov.in). You need to register and submit your detailed project report online.",
        },
        {
          question: "What is the maximum project cost?",
          answer:
            "For manufacturing sector: ₹50 lakhs. For business/service sector: ₹20 lakhs. The subsidy is calculated on these maximum limits.",
        },
        {
          question: "How long does approval take?",
          answer:
            "After online application, district-level committee evaluates within 60-90 days. Bank loan sanction takes additional 30-45 days. Total process: 3-4 months.",
        },
      ],
    },
  },

  // CGTMSE

  {
    title: "CGTMSE",
    slug: "cgtmse",
    bigtitlle:
      "Collateral-Free Credit Support to Empower Micro and Small Enterprises",
    sideindex: [
      "Introduction",
      "Key Benefits",
      "Eligibility Requirements",
      "Documents Required",
      // "Registration Process",
      "Frequently Asked Questions",
    ],
    sidesimilarites: ["Mudra Loan", "Startup Seed Support", "Project Finance"],
    description:
      "Collateral-free loan guarantees allowing micro and small enterprises to access bank credit without assets.",
    details: "",

    content: {
      introduction:
        "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) provides collateral-free credit to micro and small enterprises. The scheme guarantees loans extended by banks and financial institutions, enabling entrepreneurs to get loans without pledging property or assets.",
      keybenefits: [
        "Collateral-Free: No need to pledge property or assets",
        "Guarantee Coverage: Up to 85% of loan amount",
        "High Loan Amount: Coverage up to ₹5 crores",
        "Quick Approval: Faster loan processing by banks",
        "Lower Interest: Better rates due to guarantee",
        "Risk Mitigation: Reduces bank's lending risk",
        "Wide Coverage: Available through all banks",
      ],
      eligibilityRequirements: [
        "Micro and Small Enterprises only",
        "New and existing enterprises",
        "Manufacturing and Service sectors",
        "Loan amount: Up to ₹5 crores (₹2 crores for higher guarantee)",
        "Should have Udyam Registration",
      ],
      documentsRequiredDetailed: [
        "Udyam Registration",
        "Project report",
        "Financial statements",
        "KYC documents",
        "Business plan",
        "Quotations for machinery/equipment",
        "Bank statements",
      ],
      faq: [
        {
          question: "What is the guarantee coverage percentage?",
          answer:
            "For loans up to ₹5 lakhs: 85% for MSE in NER and women entrepreneurs, 75% for others. For loans >₹5 lakhs: 80% for MSE in NER and women, 75% for others.",
        },
        {
          question: "Is there any guarantee fee?",
          answer:
            "Yes, banks charge a one-time guarantee fee ranging from 0.75% to 1.5% of the loan amount, plus annual service fee of 0.75% on outstanding loan amount.",
        },
        {
          question: "Can existing businesses also avail CGTMSE?",
          answer:
            "Yes, both new and existing MSMEs can avail CGTMSE guarantee for term loans and working capital loans. The scheme covers credit for expansion and modernization too.",
        },
        {
          question: "Which banks provide CGTMSE loans?",
          answer:
            "All scheduled commercial banks, Regional Rural Banks, and select financial institutions are covered under CGTMSE. Check with your bank for CGTMSE loan facility.",
        },
      ],
    },
  },

  // Mudra Loan

  {
    title: "Mudra Loan",
    slug: "mudra-loan",
    bigtitlle: "Flexible Loans to Fuel Growth of Micro and Small Businesses",
    sideindex: [
      "Introduction",
      "Key Benefits",
      "Eligibility Requirements",
      "Documents Required",
      "Registration Process",
      "Frequently Asked Questions",
    ],
    sidesimilarites: [
      "Startup Seed Support",
      "Project Finance",
      "Venture Capital Funds",
    ],
    description:
      "Tiered loans—Shishu, Kishore, Tarun—supporting the growth of micro and small enterprises.",
    details: "",

    content: {
      introduction:
        "Pradhan Mantri Mudra Yojana (PMMY) provides loans to micro and small business units to help them expand and grow. The loans are categorized into three segments - Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 lakhs), and Tarun (₹5 lakhs to ₹10 lakhs) to cater to different business needs.",
      keybenefits: [
        "Easy Access: Available through banks, NBFCs, MFIs",
        "No Collateral: Loans without security for most cases",
        "Low Interest: Competitive interest rates",
        "Flexible Amount: ₹50K to ₹10 lakhs based on need",
        "Quick Approval: Fast processing and disbursal",
        "Wide Coverage: Manufacturing, trading, services",
        "Credit Card: Mudra Card for working capital",
      ],
      eligibilityRequirements: [
        "mall business owners",
        "Shopkeepers",
        "Micro-manufacturers",
        "Service providers",
        "Artisans",
        "Food processors",
        "Self-employed",
        "Small industries",
        "No existing loan default",
      ],
      documentsRequiredDetailed: [
        "Identity proof",
        "Address proof",
        "Business registration",
        "Income proof",
        "Bank statements",
        "Business plan/quotations",
        "Photographs",
        "Caste certificate (if applicable)",
      ],
      registrationProcess: [
        "Choose Loan Category",
        "Select Lender",
        "Submit Application",
        "Get Disbursement",
      ],
      faq: [
        {
          question: "What are the three categories of Mudra loans?",
          answer:
            "Shishu: Up to ₹50,000 for startup/early stage. Kishore: ₹50,000 to ₹5 lakhs for established businesses. Tarun: ₹5 lakhs to ₹10 lakhs for expansion needs.",
        },
        {
          question: "Is subsidy available under Mudra scheme?",
          answer:
            "No, Mudra is a loan scheme, not a subsidy. However, interest rates are competitive and no collateral is required for most loans, making it accessible.",
        },
        {
          question: "Can I apply for Mudra loan online?",
          answer:
            "Yes, many banks and NBFCs offer online application for Mudra loans. You can apply through bank websites or visit Udyamimitra portal for assistance.",
        },
        {
          question: "What is the repayment period?",
          answer:
            "Repayment period varies from 3 to 7 years depending on the loan category and nature of business. Working capital loans typically have shorter tenure than term loans.",
        },
      ],
    },
  },

  // Startup Seed Support

  {
    title: "Startup Seed Support",
    slug: "startup-seed-support",
    bigtitlle: "Early-Stage Funding and Support to Nurture Innovative Startups",
    sideindex: [
      "Introduction",
      "Key Benefits",
      "Eligibility Requirements",
      "Documents Required",
      // "Registration Process",
      "Frequently Asked Questions",
    ],
    sidesimilarites: [
      "Project Finance",
      "Venture Capital Funds",
      "Startup India Seedfund",
    ],
    description:
      "Grants, soft loans, and equity support for startups to validate ideas, prototype, and operate.",
    details: "",

    content: {
      introduction:
        "Various state and central government seed support schemes provide early-stage funding to startups for validation, prototyping, and initial operations. These schemes offer grants, soft loans, and equity support to innovative startups across different sectors and stages of development.",
      keybenefits: [
        "Early-Stage Funding: Capital for validation and MVP",
        "Mentorship Programs: Expert guidance and support",
        "Incubation Access: Workspace and infrastructure",
        "Network Building: Connect with investors and partners",
        "Minimal Dilution: Grant components available",
        "Validation Support: Help in proof of concept",
        "Multiple Options: State and central schemes available",
      ],
      eligibilityRequirements: [
        "Early-stage startup (typically <2 years)",
        "DPIIT recognition (for most schemes)",
        "Innovative product/service",
        "Scalable business model",
        "Strong founding team",
        "Specific sector focus (varies by scheme)",
      ],
      documentsRequiredDetailed: [
        "Startup registration",
        "DPIIT certificate",
        "Business plan",
        "Pitch deck",
        "Financial projections",
        "Team credentials",
        "Product/service details",
        "Market research",
      ],
      faq: [
        {
          question: "What's the typical seed funding amount?",
          answer:
            "Seed funding typically ranges from ₹10 lakhs to ₹50 lakhs depending on the scheme. Some schemes offer up to ₹1 crore for specific sectors or advanced-stage startups.",
        },
        {
          question: "Can I apply to multiple seed schemes simultaneously?",
          answer:
            "Yes, you can apply to multiple schemes, but you must disclose all funding sources. Some schemes restrict cumulative government funding amount received.",
        },
        {
          question: "Do all seed schemes require equity?",
          answer:
            "No, many schemes provide grants that don't require equity dilution. However, some schemes offer convertible instruments or may take nominal equity stake.",
        },
        {
          question: "How long does approval take?",
          answer:
            "Approval timelines vary from 2-6 months depending on the scheme, completeness of application, and evaluation cycles. Some schemes have specific application windows.",
        },
      ],
    },
  },

  // Project Finance

  {
    title: "Project Finance",
    slug: "project-finance",
    bigtitlle:
      "Funding Large-Scale Projects Based on Cash Flows and Project Assets",
    sideindex: [
      "Introduction",
      "Key Benefits",
      "Eligibility Requirements",
      "Documents Required",
      // "Registration Process",
      "Frequently Asked Questions",
    ],
    sidesimilarites: [
      "Venture Capital Funds",
      "Startup India Seedfund",
      "RKVY-Raftaar",
    ],
    description:
      "Funding for capital-intensive projects based on project cash flows and assets, not sponsor balance sheets.",
    details: "",

    content: {
      introduction:
        "Project Finance is a funding structure based on the cash flows and assets of a specific project rather than the balance sheet of sponsors. It's ideal for large capital-intensive projects in infrastructure, manufacturing, renewable energy, and other sectors requiring substantial investment.",
      keybenefits: [
        "Large Funding: Support for projects above ₹1 crore",
        "Off-Balance Sheet: Doesn't burden sponsor's balance sheet",
        "Risk Sharing: Distributed among multiple parties",
        "Long Tenure: Extended repayment period",
        "Structured Finance: Customized to project needs",
        "Asset-Based: Collateral is the project itself",
        "Tax Efficient: Optimized tax structuring",
      ],
      eligibilityRequirements: [
        "Infrastructure projects",
        "Manufacturing plants",
        "Renewable energy projects",
        "Real estate development",
        "Mining operations",
        "Power plants",
        "Telecom infrastructure",
        "Large-scale commercial projects",
      ],
      documentsRequiredDetailed: [
        "Detailed project report",
        "Financial model",
        "Techno-economic feasibility",
        "Land documents",
        "Environmental clearances",
        "Contracts/agreements",
        "Promoter financials",
        "Bank statements",
      ],
      faq: [
        {
          question: "What is the minimum project cost for project finance?",
          answer:
            "Typically, project finance is viable for projects above ₹10 crores. However, structured finance can be arranged for smaller projects depending on sector and viability.",
        },
        {
          question: "What is the debt-equity ratio in project finance?",
          answer:
            "Typical debt-equity ratio is 70:30 to 80:20, but it varies based on project type, sector, and risk assessment. Infrastructure projects may get higher debt ratios.",
        },
        {
          question: "How long does project finance approval take?",
          answer:
            "Due to detailed due diligence, appraisal takes 3-6 months. This includes technical, financial, legal, and environmental assessment. Documentation and disbursement add another 1-2 months.",
        },
        {
          question: "Is personal guarantee required?",
          answer:
            "In true project finance, reliance is on project assets and cash flows. However, promoters may need to provide limited guarantees during construction phase or for specific covenants.",
        },
      ],
    },
  },

  // Venture Capital Funds

  {
    title: "Venture Capital Funds",
    slug: "venture-capital-funds",
    bigtitlle:
      "Equity Investment and Strategic Support to Accelerate High-Growth Startups",
    sideindex: [
      "Introduction",
      "Key Benefits",
      "Eligibility Requirements",
      // "Documents Required",
      // "Registration Process",
      // "Frequently Asked Questions",
    ],
    sidesimilarites: ["Startup India Seedfund", "RKVY-Raftaar", "NAIFF"],
    description: "",
    details: "",

    content: {
      introduction:
        "Venture Capital (VC) funding is equity investment in high-growth startups and companies with significant potential. VCs provide not just capital but also strategic guidance, network access, and operational support to help startups scale rapidly and achieve market leadership.",
      keybenefits: [
        "Large Capital: Funding from ₹50 lakhs to ₹100+ crores",
        "Strategic Guidance: Experienced mentors and advisors",
        "Network Access: Industry connections and partnerships",
        "Credibility Boost: Validation from reputed investors",
        "Follow-on Funding: Support in subsequent rounds",
        "Operational Support: Help in hiring, marketing, operations",
        "Exit Opportunities: Strategic exits and acquisitions",
      ],
      eligibilityRequirements: [
        "Scalable business model",
        "Large addressable market",
        "Strong founding team",
        "Product-market fit",
        "Traction and growth metrics",
        "Clear differentiation",
        "Technology/innovation edge",
        "Exit potential",
      ],
      // documentsRequiredDetailed: [
      //   "DPIIT Certificate",
      //   "Incorporation Certificate",
      //   "Detailed project report",
      //   "Financial projections",
      //   "Team details",
      //   "Pitch deck",
      //   "Incubator recommendation",
      // ],
      // faq: [
      //   {
      //     question: "What is the minimum project cost for project finance?",
      //     answer: "Typically, project finance is viable for projects above ₹10 crores. However, structured finance can be arranged for smaller projects depending on sector and viability."
      //   },
      //   {
      //     question: "What is the debt-equity ratio in project finance?",
      //     answer: "Typical debt-equity ratio is 70:30 to 80:20, but it varies based on project type, sector, and risk assessment. Infrastructure projects may get higher debt ratios."
      //   },
      //   {
      //     question: "How long does project finance approval take?",
      //     answer: "Due to detailed due diligence, appraisal takes 3-6 months. This includes technical, financial, legal, and environmental assessment. Documentation and disbursement add another 1-2 months."
      //   },
      //   {
      //     question: "Is personal guarantee required?",
      //     answer: "In true project finance, reliance is on project assets and cash flows. However, promoters may need to provide limited guarantees during construction phase or for specific covenants."
      //   }
      // ],
    },
  },
];
