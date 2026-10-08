export type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  seoTitle: string;
  seoDescription: string;
  sections: { heading: string; body: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "documents-needed-for-itr-filing",

    title: "Documents Required for ITR Filing in India: Complete Checklist",

    category: "Income Tax",

    excerpt:
      "Learn which documents are required for ITR filing in India, including PAN, Aadhaar, Form 16, bank statements and deduction proofs.",

    publishedAt: "2026-06-12",

    readingTime: "4 min read",

    seoTitle: "Documents Required for ITR Filing in India: Full Checklist",

    seoDescription:
      "Checklist of documents required for ITR filing in India, including PAN, Aadhaar, Form 16, bank statements, Form 26AS, AIS and deduction proofs.",

    sections: [
      {
        heading: "Documents Required for ITR Filing in India",
        body: [
          "The documents required for income tax return filing depend on your income sources and the tax regime you choose. Keep your PAN, Aadhaar, income proofs, tax payment details and deduction proofs ready before starting your ITR.",
        ],
      },

      {
        heading: "1. PAN Card and Aadhaar Card",
        body: [
          "Keep your PAN and Aadhaar details ready for income tax return filing. Make sure your PAN and Aadhaar are correctly linked and that your personal details are accurate.",
        ],
      },

      {
        heading: "2. Form 16 for Salaried Employees",
        body: [
          "If you are a salaried employee, keep Form 16 issued by your employer. If you worked for more than one employer during the financial year, keep Form 16 from each employer.",
        ],
      },

      {
        heading: "3. Bank Statements and Interest Certificates",
        body: [
          "Keep your bank statements and interest certificates from banks or post offices. These documents help you report savings account interest, fixed deposit interest and other interest income correctly.",
        ],
      },

      {
        heading: "4. Form 26AS and Annual Information Statement",
        body: [
          "Download Form 26AS and check your Annual Information Statement (AIS) before filing your return. These records contain information about TDS, tax payments and certain financial transactions reported against your PAN.",
        ],
      },

      {
        heading: "5. Capital Gains Documents",
        body: [
          "If you sold shares, mutual funds, property or other capital assets, keep the relevant capital gains statements and transaction details. Your broker or financial institution may provide the required statements.",
        ],
      },

      {
        heading: "6. House Property Documents",
        body: [
          "If you have income from house property, keep rent details, property information, home loan interest certificates and other relevant documents needed to calculate your taxable income.",
        ],
      },

      {
        heading: "7. Business or Freelance Income Documents",
        body: [
          "Business owners and freelancers should keep records of receipts, invoices, bank transactions and other income-related documents. The exact documents depend on the nature of the business or professional activity.",
        ],
      },

      {
        heading: "8. Documents for Tax Deductions",
        body: [
          "Keep investment, insurance, tuition fee, home loan interest, medical insurance and eligible donation receipts if you plan to claim deductions. Check whether the deduction is available under your chosen tax regime.",
        ],
      },

      {
        heading: "9. Check Your Tax Details Before Filing",
        body: [
          "Before submitting your income tax return, compare your income and tax details with Form 16, Form 26AS and AIS. Checking these details can help identify mismatches before filing.",
        ],
      },

      {
        heading: "ITR Filing Document Checklist",
        body: [
          "Before starting your ITR, make sure you have PAN and Aadhaar details, Form 16 if salaried, bank statements, interest certificates, Form 26AS, AIS, capital gains statements where applicable, business or freelance income records and eligible deduction proofs.",
        ],
      },

      {
        heading: "Need Help With ITR Filing?",
        body: [
          "If you are unsure which documents are required for your income tax return, Poornima Tax Solution can help you prepare and file your ITR with the required information and supporting documents.",
        ],
      },

      {
        heading: "Frequently Asked Questions About ITR Filing Documents",
        body: [
          "What documents are required for ITR filing? Common documents include PAN, Aadhaar, Form 16 for salaried taxpayers, bank statements, Form 26AS, AIS, capital gains statements where applicable, and documents supporting eligible deductions.",
        ],
      },

      {
        heading: "What documents are required for income tax return filing?",
        body: [
          "The documents required depend on your income sources. Salaried taxpayers may need Form 16, while business owners, freelancers, investors and property owners may need additional income and transaction records.",
        ],
      },

      {
        heading: "What is the ITR filing checklist?",
        body: [
          "Before filing your ITR, keep your PAN and Aadhaar details, income documents, bank statements, Form 26AS, AIS, tax deduction information and other applicable supporting documents ready.",
        ],
      },
    ],
  },

  {
    slug: "old-vs-new-tax-regime-how-to-choose",

    title: "Old vs new tax regime: how to decide which suits you",

    category: "Tax Planning",

    excerpt:
      "The regime that saves more depends on the deductions you actually claim, not on general advice.",

    publishedAt: "2026-05-28",

    readingTime: "5 min read",

    seoTitle: "Old vs New Tax Regime: How to Choose the Right One",

    seoDescription:
      "Understand how the old and new income tax regimes differ, who benefits from each, and how to compare them using your own income and deductions.",

    sections: [
      {
        heading: "The short answer",
        body: [
          "The old regime suits taxpayers who claim substantial deductions such as housing loan interest, insurance and specified investments. The new regime suits those with few deductions who prefer lower slab rates. The only reliable way to choose is to compute your tax under both using your actual figures.",
        ],
      },

      {
        heading: "What changes between the two",
        body: [
          "The old regime offers lower slab thresholds with a long list of exemptions and deductions. The new regime offers wider slabs and a higher standard deduction, but removes most exemptions. Your break-even point depends on how much you genuinely claim, not on how much you could claim in theory.",
        ],
      },

      {
        heading: "When the old regime usually wins",
        body: [
          "Taxpayers repaying a home loan, paying substantial rent with HRA in their salary structure, or making regular specified investments often come out ahead under the old regime because those claims reduce taxable income significantly.",
        ],
      },

      {
        heading: "When the new regime usually wins",
        body: [
          "Early-career salaried taxpayers, professionals without housing loans, and anyone who does not want to lock money into deduction-linked products generally pay less under the new regime and file with far less paperwork.",
        ],
      },

      {
        heading: "How to decide properly",
        body: [
          "Compute both at the start of the financial year, not in March. Salaried taxpayers can usually switch each year at the time of filing, while those with business income face restrictions on switching back. We run this comparison as part of a tax planning review.",
        ],
      },
    ],
  },

  {
    slug: "gst-return-filing-basics-for-small-business",

    title: "GST return filing basics for a small business",

    category: "GST",

    excerpt:
      "What has to be filed, how often, and what actually goes wrong when a filing is delayed.",

    publishedAt: "2026-05-09",

    readingTime: "4 min read",

    seoTitle: "GST Return Filing Basics for Small Businesses in India",

    seoDescription:
      "Learn which GST returns a small business must file, how input tax credit reconciliation works, and what happens when GST returns are filed late.",

    sections: [
      {
        heading: "The short answer",
        body: [
          "A registered business normally files outward supply details in GSTR-1 and a summary return in GSTR-3B for each period, plus an annual return where applicable. Input tax credit must be reconciled with GSTR-2B before the summary return is filed, otherwise credit can be lost.",
        ],
      },

      {
        heading: "The recurring cycle",
        body: [
          "Record sales invoices, report them in GSTR-1, match purchase credit against GSTR-2B, then pay and file GSTR-3B. Businesses under the quarterly scheme follow the same steps at a quarterly interval with monthly tax payments.",
        ],
      },

      {
        heading: "Why reconciliation matters",
        body: [
          "Credit is available only when your supplier has reported the invoice. Reconciling every period surfaces missing invoices while there is still time to have the supplier correct them, instead of discovering the gap during an annual review.",
        ],
      },

      {
        heading: "Cost of delay",
        body: [
          "Late filing attracts a daily late fee and interest on unpaid tax, blocks subsequent period filings, and prolonged non-filing can lead to cancellation of registration. Catching up early keeps the cost contained.",
        ],
      },
    ],
  },

  {
    slug: "gst-slab-structure-simplified",

    title: "GST slab structure simplified: from six slabs to four",

    category: "GST",

    excerpt:
      "The GST rate structure has been rationalised from six slabs to four. Here is what changed and what it means for your invoicing and filings.",

    publishedAt: "2026-09-20",

    readingTime: "4 min read",

    seoTitle:
      "GST Slab Update: Rate Structure Simplified from Six Slabs to Four",

    seoDescription:
      "India's GST slab structure has been simplified from six slabs to four. Understand what changed, how it affects pricing and invoices, and what businesses should update.",

    sections: [
      {
        heading: "The short answer",
        body: [
          "Earlier, GST rates were spread across six slabs — 0%, 5%, 12%, 18%, 28% and special rates for certain goods. The structure has now been simplified to four: nil (exempt), 5%, 18% and a 40% rate for a small list of demerit goods. Most items from the 12% slab have moved into 5% or 18%, and most 28% items have moved to 18%.",
        ],
      },

      {
        heading: "What changed in practice",
        body: [
          "The 12% slab has largely been merged into the 5% and 18% slabs, and the 28% slab has been mostly folded into 18%, with a short list of demerit goods — such as pan masala, aerated sugary drinks and luxury vehicles — attracting the 40% rate. Everyday items such as many food staples, medicines and essentials have seen reductions to 5% or nil.",
        ],
      },

      {
        heading: "What businesses should update",
        body: [
          "Price lists, item-wise GST rates in accounting software, e-invoice and e-way bill masters, and HSN-wise rate mapping all need to reflect the new slabs from the effective date. Invoices raised on or after the change must apply the new rate, and credit notes or revised invoices may be needed for supplies straddling the changeover.",
        ],
      },

      {
        heading: "Impact on input credit and filings",
        body: [
          "Input tax credit continues to follow the rate actually charged by your supplier, so reconcile GSTR-2B against the new rates during the transition period. GSTR-1 and GSTR-3B filings continue as before; the change is in the rate applied per item, not in the return process itself.",
        ],
      },

      {
        heading: "How we help",
        body: [
          "We update client rate masters, review HSN-wise mapping, and check that invoices and returns apply the correct slab from the effective date. Share your item list and we will confirm the new rate for each one.",
        ],
      },
    ],
  },
];

export const postBySlug = (slug: string) =>
  posts.find((p) => p.slug === slug);