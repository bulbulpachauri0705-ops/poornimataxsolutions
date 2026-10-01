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
    title: "Documents you need before filing your income tax return",
    category: "Income Tax",
    excerpt:
      "A practical checklist of what to collect before ITR filing, so the return is accurate the first time.",
    publishedAt: "2026-06-12",
    readingTime: "4 min read",
    seoTitle: "Documents Needed for ITR Filing in India: Full Checklist",
    seoDescription:
      "Checklist of documents required to file an income tax return in India: PAN, Aadhaar, Form 16, interest certificates, capital gains statements and deduction proofs.",
    sections: [
      {
        heading: "The short answer",
        body: [
          "To file an income tax return in India you need PAN and Aadhaar, proof of every income source for the year, details of tax already paid, and proof of the deductions you plan to claim. Collecting these before you start avoids revised returns later.",
        ],
      },
      {
        heading: "Identity and access",
        body: [
          "PAN and Aadhaar, linked with each other, plus access to the income tax portal and the bank account where a refund should arrive. The bank account must be pre-validated for the refund to be credited.",
        ],
      },
      {
        heading: "Income proofs",
        body: [
          "Salaried taxpayers need Form 16 from every employer worked with during the year. Add interest certificates from banks and post office, rent receipts or house property details, capital gains statements from your broker, and a summary of business or freelance receipts if you have any.",
        ],
      },
      {
        heading: "Taxes already paid",
        body: [
          "Download Form 26AS and the Annual Information Statement. These show TDS deducted, advance tax paid and high-value transactions reported against your PAN. Any mismatch here is the most common reason a return gets flagged.",
        ],
      },
      {
        heading: "Deduction proofs",
        body: [
          "Keep investment and insurance receipts, home loan interest certificates, tuition fee receipts, medical insurance premium proofs and donation receipts. Under the new regime most of these are not claimable, so confirm your regime before you assume a deduction applies.",
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
    seoTitle: "GST Slab Update: Rate Structure Simplified from Six Slabs to Four",
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

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);
