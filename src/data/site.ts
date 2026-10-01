export const site = {
  name: "Poornima Tax Solution",
  tagline: "Your Tax. Our Priority.",
  positioning: "Tax | Compliance | Growth",
  phone: "8171306923",
  phoneDisplay: "+91 81713 06923",
  email: "info@poornimataxsolutions.com",
  whatsapp: "918171306923",
  areaServed: "India",
  description:
    "Poornima Tax Solution provides income tax return filing, GST, TDS, PAN, accounting and business registration services — FSSAI, firm, trademark and MSME (Udyam) — for individuals, professionals, startups and businesses in India.",
};

export const telHref = `tel:+91${site.phone}`;
export const mailHref = `mailto:${site.email}`;
export const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hello Poornima Tax Solution, I would like to book a tax consultation.",
)}`;

export type Service = {
  slug: string;
  title: string;
  tag: string;
  short: string;
  /** Answer-first summary used for AEO/GEO extraction and meta description. */
  answer: string;
  includes: string[];
  documents: string[];
  process: { step: string; detail: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "income-tax-return-filing",
    title: "Income Tax Return Filing",
    tag: "ITR 1 to ITR 7",
    short:
      "Accurate preparation and filing of income tax returns for salaried individuals, professionals, businesses and trusts.",
    answer:
      "Income tax return filing is the yearly declaration of your income, deductions and taxes paid to the Income Tax Department. Poornima Tax Solution reviews your income sources, selects the correct ITR form (ITR 1 to ITR 7), computes your tax, and files the return with acknowledgement so refunds and notices are handled correctly.",
    includes: [
      "Form selection from ITR 1 to ITR 7 based on your income sources",
      "Computation of taxable income, deductions and tax payable",
      "Return preparation, filing and e-verification support",
      "Refund tracking and assistance with department notices",
      "Revised and belated return filing where applicable",
    ],
    documents: [
      "PAN and Aadhaar",
      "Form 16 or salary statements",
      "Bank interest and capital gains statements",
      "Business or professional income summary, if applicable",
      "Investment and deduction proofs",
    ],
    process: [
      { step: "Share your requirement", detail: "Send your documents and income details over WhatsApp, email or in person." },
      { step: "Expert review", detail: "We verify your income, Form 26AS/AIS data and eligible deductions." },
      { step: "Filing and support", detail: "We file the return, share the acknowledgement and stay available for follow-up." },
    ],
    faqs: [
      {
        q: "Which ITR form applies to a salaried person?",
        a: "Most salaried individuals with income from salary, one house property and interest income file ITR 1. If you have capital gains, more than one property or foreign assets, a different form applies. We confirm the correct form after reviewing your income sources.",
      },
      {
        q: "Can a missed return still be filed?",
        a: "A belated or updated return can often still be filed within the timelines allowed by the Income Tax Act, usually with interest or a late fee. Share your details and we will confirm the options available in your case.",
      },
      {
        q: "How long does a refund take?",
        a: "Refunds are processed by the Income Tax Department after the return is verified, commonly within a few weeks. We track the status and help resolve mismatches that hold up processing.",
      },
    ],
  },
  {
    slug: "tax-planning-advisory",
    title: "Tax Planning & Advisory",
    tag: "Save More, Legally",
    short:
      "Structured, lawful planning of income, deductions and investments so your tax outgo is managed through the year.",
    answer:
      "Tax planning is the lawful arrangement of income, investments and deductions to manage your tax liability before the year closes. Poornima Tax Solution reviews your income structure, compares the old and new regimes, and recommends eligible deductions and timing so nothing is claimed after the window has passed.",
    includes: [
      "Old vs new regime comparison for your income profile",
      "Deduction and exemption planning under the Income Tax Act",
      "Salary and income structuring guidance",
      "Advance tax estimation and payment schedule",
      "Advisory for freelancers, professionals and business owners",
    ],
    documents: [
      "Latest salary structure or income projection",
      "Existing investment and insurance details",
      "Loan statements, if any",
      "Previous year's return",
    ],
    process: [
      { step: "Share your requirement", detail: "Tell us your income sources and current investments." },
      { step: "Expert review", detail: "We model your liability across regimes and identify eligible options." },
      { step: "Plan and support", detail: "You receive a clear plan with timelines, and we review it as the year progresses." },
    ],
    faqs: [
      {
        q: "When should tax planning start?",
        a: "At the start of the financial year. Planning early lets you spread investments, plan advance tax and avoid rushed decisions in March.",
      },
      {
        q: "Is the new regime better for everyone?",
        a: "No. The better option depends on your income level and the deductions you actually claim. We compare both regimes with your real numbers before recommending one.",
      },
    ],
  },
  {
    slug: "tds-compliance-refunds",
    title: "TDS Compliance & Refunds",
    tag: "Stay Compliant",
    short:
      "TDS return preparation, certificate issue, mismatch correction and refund follow-up within statutory deadlines.",
    answer:
      "TDS compliance covers deducting tax at the correct rate, depositing it on time, filing quarterly TDS returns and issuing Form 16 or 16A. Poornima Tax Solution handles quarterly filings, corrects credit mismatches in Form 26AS or the AIS, and follows up on refunds arising from excess deduction.",
    includes: [
      "Quarterly TDS return preparation and filing",
      "Form 16 and Form 16A issue support",
      "26AS and AIS mismatch reconciliation",
      "Correction statements and default resolution",
      "Refund claims for excess TDS deducted",
    ],
    documents: [
      "TAN and PAN details",
      "Deduction and challan details",
      "Deductee-wise payment records",
      "Existing notices or default intimations",
    ],
    process: [
      { step: "Share your requirement", detail: "Provide deduction records, challans and any notices received." },
      { step: "Expert review", detail: "We reconcile deductions with deposits and the tax credit statement." },
      { step: "Filing and support", detail: "Returns and corrections are filed, and refunds or defaults are followed up." },
    ],
    faqs: [
      {
        q: "What happens if a TDS return is filed late?",
        a: "A late fee applies for each day of delay and interest applies on late deposit of tax. Filing the pending quarters promptly limits the amount payable.",
      },
      {
        q: "Why is TDS missing from my tax credit statement?",
        a: "Usually the deductor has not filed the return, or your PAN was quoted incorrectly. We identify the cause and coordinate a correction statement.",
      },
    ],
  },
  {
    slug: "business-corporate-taxation",
    title: "Business & Corporate Taxation",
    tag: "For Individuals, Startups & Businesses",
    short:
      "Ongoing tax and compliance support for proprietorships, partnerships, LLPs and companies.",
    answer:
      "Business and corporate taxation covers computing business income, meeting statutory filing dates and keeping records audit-ready. Poornima Tax Solution supports proprietorships, partnerships, LLPs and companies with return filing, advance tax, books review and a compliance calendar so deadlines are not missed.",
    includes: [
      "Business and corporate income tax return filing",
      "Advance tax computation and quarterly scheduling",
      "Books of accounts review and audit coordination",
      "Compliance calendar for recurring filings",
      "Advisory on business structure and taxation impact",
    ],
    documents: [
      "Financial statements or trial balance",
      "Bank statements for the year",
      "GST and TDS filing summaries",
      "Registration documents of the entity",
    ],
    process: [
      { step: "Share your requirement", detail: "Tell us your entity type, turnover and current compliance status." },
      { step: "Expert review", detail: "We review your books, filings and pending obligations." },
      { step: "Compliance and support", detail: "Filings are completed and a calendar keeps the next ones on track." },
    ],
    faqs: [
      {
        q: "Do small businesses need an audit?",
        a: "Audit applicability depends on turnover, the presumptive scheme chosen and cash transaction levels. We check your numbers against the current thresholds and confirm what applies.",
      },
      {
        q: "Can you support a newly registered startup?",
        a: "Yes. We help set up the compliance calendar, registrations and filing routine from the first year onward.",
      },
    ],
  },
  {
    slug: "gst-registration-filing",
    title: "GST Registration & Filing",
    tag: "Hassle-Free Compliance",
    short:
      "GST registration, monthly and annual returns, reconciliation and ongoing compliance for businesses.",
    answer:
      "GST compliance covers registration, periodic returns such as GSTR-1 and GSTR-3B, input tax credit reconciliation and the annual return. Poornima Tax Solution handles registration end to end and manages recurring filings with reconciliation so credit is not lost and late fees are avoided.",
    includes: [
      "New GST registration and amendments",
      "GSTR-1, GSTR-3B and annual return filing",
      "Input tax credit reconciliation with GSTR-2B",
      "E-way bill and invoicing guidance",
      "Notice reply and cancellation or revocation support",
    ],
    documents: [
      "PAN, Aadhaar and photograph of the proprietor or partners",
      "Business address proof",
      "Bank account details",
      "Sales and purchase registers for filings",
    ],
    process: [
      { step: "Share your requirement", detail: "Tell us your business type and whether you need registration or filings." },
      { step: "Expert review", detail: "We verify documents, turnover and credit eligibility." },
      { step: "Filing and support", detail: "Registration or returns are filed and reconciled every period." },
    ],
    faqs: [
      {
        q: "When is GST registration required?",
        a: "Registration is required once turnover crosses the prescribed threshold for your state and supply type, and in certain cases such as inter-state supply or e-commerce sales regardless of turnover. We confirm applicability for your business.",
      },
      {
        q: "What happens if GST returns are not filed?",
        a: "Late fees and interest accumulate, input credit gets blocked and the registration can eventually be cancelled. Pending returns can be regularised, and we help plan the catch-up.",
      },
    ],
  },
  {
    slug: "pan-services",
    title: "PAN Services",
    tag: "New / Correction / Linkage",
    short:
      "Assistance with new PAN applications, correction of existing details and PAN-Aadhaar linkage.",
    answer:
      "PAN services cover applying for a new Permanent Account Number, correcting name, date of birth or other details on an existing PAN, and linking PAN with Aadhaar. Poornima Tax Solution prepares the application, checks supporting documents and tracks it until the PAN is issued or updated.",
    includes: [
      "New PAN application for individuals and entities",
      "Correction or update of existing PAN details",
      "PAN-Aadhaar linkage assistance",
      "Reprint and duplicate PAN requests",
      "Document verification before submission",
    ],
    documents: [
      "Identity proof (Aadhaar, passport or voter ID)",
      "Address proof",
      "Date of birth proof",
      "Existing PAN copy, for corrections",
    ],
    process: [
      { step: "Share your requirement", detail: "Tell us whether you need a new PAN, a correction or linkage." },
      { step: "Expert review", detail: "We check your documents against the current application requirements." },
      { step: "Application and support", detail: "The application is submitted and we track it until it is processed." },
    ],
    faqs: [
      {
        q: "Is PAN-Aadhaar linkage mandatory?",
        a: "Yes, PAN must be linked with Aadhaar for most taxpayers, and an unlinked PAN can become inoperative. We assist with linkage and with reactivating an inoperative PAN.",
      },
      {
        q: "How long does a new PAN take?",
        a: "Processing usually takes a few working days after successful submission and verification. We share the acknowledgement so you can track progress.",
      },
    ],
  },
  {
    slug: "fssai-license",
    title: "FSSAI License",
    tag: "Food Business Compliance",
    short:
      "New FSSAI registration and license applications, renewals and modifications for food businesses of every size.",
    answer:
      "An FSSAI license is the food safety registration or license that every business manufacturing, processing, packing, storing, distributing or selling food in India must hold. Poornima Tax Solution checks whether you need the Basic Registration, State License or Central License, prepares and files the application, and follows it through to issue and renewal.",
    includes: [
      "Eligibility check: Basic Registration vs State or Central License",
      "New FSSAI application preparation and filing",
      "License renewal and modification of license details",
      "Guidance on displaying the FSSAI logo and license number",
      "Support with queries or clarifications raised during processing",
    ],
    documents: [
      "Photo ID and PAN of the proprietor or partners",
      "Passport-size photograph",
      "Address proof of the business premises",
      "Nature of business and product details",
      "Water test report or premises layout plan, where applicable",
    ],
    process: [
      { step: "Share your requirement", detail: "Tell us your food business type, products and turnover." },
      { step: "Expert review", detail: "We confirm the correct license category and check your documents." },
      { step: "Application and support", detail: "The application is filed and we track it until the license is issued." },
    ],
    faqs: [
      {
        q: "Which FSSAI license applies to my food business?",
        a: "Basic Registration generally covers food businesses with turnover up to ₹12 lakh, the State License covers larger state-level operations, and the Central License applies to importers, exporters and large manufacturers. We confirm the correct category from your turnover and activity.",
      },
      {
        q: "How long is an FSSAI license valid?",
        a: "You can choose a validity of 1 to 5 years at the time of application. Renewal must be filed before expiry, and we send reminders and handle the renewal application for you.",
      },
    ],
  },
  {
    slug: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping",
    tag: "Clean Books, Every Month",
    short:
      "Day-to-day bookkeeping, reconciliations and financial statements that keep every filing accurate.",
    answer:
      "Accounting and bookkeeping mean recording every transaction of the business, reconciling bank statements and maintaining ledgers and financial statements. Poornima Tax Solution keeps books current on a monthly or quarterly cycle so GST returns, TDS filings and the annual income tax return all flow from the same accurate numbers.",
    includes: [
      "Recording of sales, purchases, expenses and journal entries",
      "Bank and cash reconciliation every period",
      "Receivables and payables tracking",
      "Preparation of financial statements and trial balance",
      "Books review before GST, TDS and income tax filings",
    ],
    documents: [
      "Bank statements for the period",
      "Sales and purchase invoices",
      "Expense bills and vouchers",
      "Loan statements, if any",
      "Previous books or software backup, if switching to us",
    ],
    process: [
      { step: "Share your requirement", detail: "Tell us your transaction volume and how often you want the books updated." },
      { step: "Setup", detail: "We set up the chart of accounts and bring opening balances in order." },
      { step: "Recurring updates", detail: "Books are updated and reconciled every period, ready for each filing." },
    ],
    faqs: [
      {
        q: "Do I need monthly bookkeeping as a small business?",
        a: "Even small businesses benefit from at least quarterly updates. Regular bookkeeping keeps GST input credit from lapsing, surfaces receivables early and makes the year-end return far cheaper to prepare.",
      },
      {
        q: "Can you take over books mid-year?",
        a: "Yes. We can pick up from your last updated records, complete the pending period and keep the remaining year current.",
      },
    ],
  },
  {
    slug: "firm-registration",
    title: "Firm Registration",
    tag: "Start Right",
    short:
      "Registration of proprietorships, partnership firms, LLPs and companies with the tax registrations each needs.",
    answer:
      "Firm registration gives your business a legal identity — as a proprietorship, partnership firm, LLP or company — along with the PAN, TAN and GST registrations it needs to operate. Poornima Tax Solution helps you choose the right structure for your scale and liability, prepares the incorporation documents and completes the registration end to end.",
    includes: [
      "Advisory on the right structure: proprietorship, partnership, LLP or company",
      "Name availability check",
      "Partnership deed or incorporation document preparation",
      "PAN, TAN and GST registration for the new entity",
      "Post-registration compliance calendar and first-filing support",
    ],
    documents: [
      "PAN and Aadhaar of the owner, partners or directors",
      "Address proof of the business premises",
      "Passport-size photographs",
      "Two or three proposed business names",
      "Brief description of the business activity",
    ],
    process: [
      { step: "Share your requirement", detail: "Tell us what the business will do, with how many owners and at what scale." },
      { step: "Structure and documents", detail: "We recommend the structure and prepare the registration documents." },
      { step: "Registration and support", detail: "Registrations are completed and your first filings are planned." },
    ],
    faqs: [
      {
        q: "Which structure should I register — proprietorship, LLP or company?",
        a: "It depends on your scale, number of owners and liability comfort. A proprietorship is simplest, an LLP separates personal liability with light compliance, and a company suits businesses raising investment. We compare the options for your situation before registering.",
      },
      {
        q: "How long does firm registration take?",
        a: "A proprietorship with tax registrations is typically completed within a few working days, while an LLP or company takes longer due to incorporation formalities. We share the exact timeline once the structure is chosen.",
      },
    ],
  },
  {
    slug: "trademark-registration",
    title: "Trademark Registration",
    tag: "Protect Your Brand",
    short:
      "Trademark search, application filing in the correct class and follow-up through examination to registration.",
    answer:
      "Trademark registration protects your brand name, logo or tagline and gives you exclusive rights to use it for your goods or services. Poornima Tax Solution runs an availability search, files the application in the correct class, responds to examination objections and tracks the mark until it is registered.",
    includes: [
      "Trademark availability search before filing",
      "Identification of the correct class of goods or services",
      "Trademark application preparation and filing",
      "Response to examination reports and objections",
      "Renewal reminders and renewal filing support",
    ],
    documents: [
      "The brand name, logo or tagline to be registered",
      "PAN and ID proof of the applicant",
      "Nature of business and goods or services",
      "Date and proof of first use, if the mark is already in use",
    ],
    process: [
      { step: "Share your requirement", detail: "Send us the mark you want to protect and what you sell under it." },
      { step: "Search and filing", detail: "We search for conflicts and file the application in the right class." },
      { step: "Tracking to registration", detail: "Objections are answered and the application is tracked to grant." },
    ],
    faqs: [
      {
        q: "How long does trademark registration take?",
        a: "Registration typically takes several months to over a year depending on examination and objections. You can start using the ™ symbol as soon as the application is filed, and ® once the mark is registered.",
      },
      {
        q: "Can I file a trademark before using the brand?",
        a: "Yes. Applications can be filed on a 'proposed to be used' basis, which secures your filing date while you prepare the launch.",
      },
    ],
  },
  {
    slug: "msme-udyam-registration",
    title: "MSME (Udyam) Registration",
    tag: "Udyam Certificate",
    short:
      "Udyam registration for micro, small and medium enterprises, unlocking loans, subsidies and tender benefits.",
    answer:
      "MSME (Udyam) registration enrolls a micro, small or medium enterprise on the government's Udyam portal using its PAN, GSTIN and investment and turnover figures. Registration unlocks benefits such as easier credit, subsidy schemes, protection against delayed payments and preference in government tenders. Poornima Tax Solution files the registration and shares the Udyam certificate once issued.",
    includes: [
      "Classification check: micro, small or medium enterprise",
      "Udyam application filing with PAN and GSTIN",
      "Corrections and updates to an existing Udyam certificate",
      "Guidance on the benefits registration unlocks",
      "Certificate copy shared once issued",
    ],
    documents: [
      "PAN and GSTIN of the business",
      "Aadhaar of the proprietor, partner or director",
      "Investment and turnover figures",
      "Basic business and bank details",
    ],
    process: [
      { step: "Share your requirement", detail: "Send the business PAN, GSTIN and Aadhaar of the owner." },
      { step: "Classification", detail: "We confirm your enterprise category from investment and turnover." },
      { step: "Registration and certificate", detail: "The application is filed and the Udyam certificate is shared with you." },
    ],
    faqs: [
      {
        q: "Does Udyam registration need renewal?",
        a: "No. Once issued, the Udyam certificate is valid for the lifetime of the enterprise, though details should be updated if investment or turnover classification changes.",
      },
      {
        q: "What benefits does MSME registration give?",
        a: "Registered MSMEs get easier access to credit, eligibility for government subsidy schemes, statutory protection against delayed payments and preference in government tenders.",
      },
    ],
  },
];

export const stats = [
  { value: "100+", label: "Average client files handled every month" },
  { value: "40+", label: "Files as our standing base caseload" },
  { value: "Unlimited", label: "MSME (Udyam) registrations — no cap on volume" },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

export const whyUs = [
  {
    title: "Reliable",
    detail: "Deadlines tracked, filings completed on time and records kept ready for future reference.",
  },
  {
    title: "Transparent",
    detail: "Scope and fees explained before work starts, with no surprise additions later.",
  },
  {
    title: "Client Focused",
    detail: "You speak directly to the professional handling your file, in plain language.",
  },
  {
    title: "Committed to Your Success",
    detail: "Advice looks beyond this filing to how your tax position develops next year.",
  },
];

export const generalFaqs = [
  {
    q: "What services does Poornima Tax Solution provide?",
    a: "Income tax return filing, tax planning and advisory, TDS compliance and refunds, business and corporate taxation, GST registration and filing, PAN services, accounting and bookkeeping, and registrations including FSSAI license, firm registration, trademark registration and MSME (Udyam) registration for individuals, professionals, startups and businesses.",
  },
  {
    q: "How do I book a consultation?",
    a: `Send an enquiry through the contact form, call ${site.phoneDisplay}, message on WhatsApp or email ${site.email}. Share your requirement and we will confirm a suitable time.`,
  },
  {
    q: "What documents should I keep ready for ITR filing?",
    a: "PAN and Aadhaar, Form 16 or salary statements, bank interest details, capital gains statements, business income summary if applicable, and proofs for the deductions you plan to claim.",
  },
  {
    q: "Do you work with clients outside your city?",
    a: "Yes. Documents can be shared digitally and consultations can be held over call or WhatsApp, so location is not a constraint within India.",
  },
  {
    q: "Can you help with a notice received from the department?",
    a: "Yes. Share the notice and the related return, and we will review what it asks for and prepare a response within the stated timeline.",
  },
  {
    q: "Do you handle GST and income tax together?",
    a: "Yes. Many businesses use us for GST returns, TDS filings and income tax together, which keeps the numbers consistent across filings.",
  },
];
