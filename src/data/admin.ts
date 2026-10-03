// Demo data — replace with real API calls when backend is ready

export type LeadStatus = "New" | "In Progress" | "Converted" | "Lost";

export type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  date: string;
  status: LeadStatus;
};

export const leads: Lead[] = [
  {
    id: "L001",
    name: "Rajesh Kumar",
    phone: "+91 98765 43210",
    email: "rajesh.kumar@email.com",
    service: "Income Tax Return Filing",
    message: "Need help filing ITR for FY 2024-25. Salaried employee.",
    date: "2025-07-10",
    status: "New",
  },
  {
    id: "L002",
    name: "Priya Sharma",
    phone: "+91 87654 32109",
    email: "priya.sharma@email.com",
    service: "GST Registration & Filing",
    message: "Starting a new business, need GST registration.",
    date: "2025-07-09",
    status: "In Progress",
  },
  {
    id: "L003",
    name: "Amit Verma",
    phone: "+91 76543 21098",
    email: "amit.verma@email.com",
    service: "Firm Registration",
    message: "Want to register a partnership firm with 2 partners.",
    date: "2025-07-08",
    status: "Converted",
  },
  {
    id: "L004",
    name: "Sunita Agarwal",
    phone: "+91 65432 10987",
    email: "sunita.agarwal@email.com",
    service: "Tax Planning & Advisory",
    message: "Looking for tax planning advice for next financial year.",
    date: "2025-07-07",
    status: "New",
  },
  {
    id: "L005",
    name: "Vikram Singh",
    phone: "+91 54321 09876",
    email: "vikram.singh@email.com",
    service: "TDS Compliance & Refunds",
    message: "TDS mismatch in Form 26AS, need help resolving.",
    date: "2025-07-06",
    status: "In Progress",
  },
  {
    id: "L006",
    name: "Meena Gupta",
    phone: "+91 43210 98765",
    email: "meena.gupta@email.com",
    service: "MSME (Udyam) Registration",
    message: "Need Udyam certificate for my small manufacturing unit.",
    date: "2025-07-05",
    status: "Converted",
  },
  {
    id: "L007",
    name: "Deepak Joshi",
    phone: "+91 32109 87654",
    email: "deepak.joshi@email.com",
    service: "Trademark Registration",
    message: "Want to register trademark for my brand name.",
    date: "2025-07-04",
    status: "Lost",
  },
  {
    id: "L008",
    name: "Kavita Yadav",
    phone: "+91 21098 76543",
    email: "kavita.yadav@email.com",
    service: "Accounting & Bookkeeping",
    message: "Need monthly bookkeeping for my retail shop.",
    date: "2025-07-03",
    status: "New",
  },
];

export type BlogStatus = "Published" | "Draft";

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  seoTitle: string;
  metaDescription: string;
  featuredImage: string;
  status: BlogStatus;
  publishedAt: string;
  author: string;
};

export const adminBlogs: BlogPost[] = [
  {
    id: "B001",
    title: "Documents you need before filing your income tax return",
    slug: "documents-needed-for-itr-filing",
    category: "Income Tax",
    excerpt: "A practical checklist of what to collect before ITR filing.",
    seoTitle: "Documents Needed for ITR Filing in India: Full Checklist",
    metaDescription:
      "Checklist of documents required to file an income tax return in India: PAN, Aadhaar, Form 16, interest certificates, capital gains statements and deduction proofs.",
    featuredImage: "",
    status: "Published",
    publishedAt: "2026-06-12",
    author: "Poornima Tax Solution",
  },
  {
    id: "B002",
    title: "Old vs new tax regime: how to decide which suits you",
    slug: "old-vs-new-tax-regime-how-to-choose",
    category: "Tax Planning",
    excerpt: "The regime that saves more depends on the deductions you actually claim.",
    seoTitle: "Old vs New Tax Regime: How to Choose the Right One",
    metaDescription:
      "Understand how the old and new income tax regimes differ, who benefits from each, and how to compare them using your own income and deductions.",
    featuredImage: "",
    status: "Published",
    publishedAt: "2026-05-28",
    author: "Poornima Tax Solution",
  },
  {
    id: "B003",
    title: "GST return filing basics for a small business",
    slug: "gst-return-filing-basics-for-small-business",
    category: "GST",
    excerpt: "What has to be filed, how often, and what actually goes wrong when a filing is delayed.",
    seoTitle: "GST Return Filing Basics for Small Businesses in India",
    metaDescription:
      "Learn which GST returns a small business must file, how input tax credit reconciliation works, and what happens when GST returns are filed late.",
    featuredImage: "",
    status: "Published",
    publishedAt: "2026-05-09",
    author: "Poornima Tax Solution",
  },
  {
    id: "B004",
    title: "GST slab structure simplified: from six slabs to four",
    slug: "gst-slab-structure-simplified",
    category: "GST",
    excerpt: "The GST rate structure has been rationalised from six slabs to four.",
    seoTitle: "GST Slab Update: Rate Structure Simplified from Six Slabs to Four",
    metaDescription:
      "India's GST slab structure has been simplified from six slabs to four. Understand what changed, how it affects pricing and invoices, and what businesses should update.",
    featuredImage: "",
    status: "Draft",
    publishedAt: "2026-09-20",
    author: "Poornima Tax Solution",
  },
];

export const dashboardStats = {
  totalClients: 142,
  totalLeads: 38,
  newInquiries: 12,
  appointments: 7,
  blogPosts: 4,
  seoHealth: 78,
};

export const recentActivity = [
  { id: 1, action: "New lead from Rajesh Kumar", time: "2 hours ago", type: "lead" },
  { id: 2, action: "Blog post published: GST Slab Update", time: "5 hours ago", type: "blog" },
  { id: 3, action: "Lead converted: Amit Verma", time: "1 day ago", type: "lead" },
  { id: 4, action: "SEO meta updated for /services", time: "2 days ago", type: "seo" },
  { id: 5, action: "New inquiry from Sunita Agarwal", time: "2 days ago", type: "lead" },
];

export const topServices = [
  { name: "Income Tax Return Filing", leads: 14, percentage: 37 },
  { name: "GST Registration & Filing", leads: 9, percentage: 24 },
  { name: "Firm Registration", leads: 6, percentage: 16 },
  { name: "Tax Planning & Advisory", leads: 5, percentage: 13 },
  { name: "Others", leads: 4, percentage: 10 },
];

export const monthlyLeads = [
  { month: "Feb", leads: 4 },
  { month: "Mar", leads: 7 },
  { month: "Apr", leads: 5 },
  { month: "May", leads: 9 },
  { month: "Jun", leads: 6 },
  { month: "Jul", leads: 7 },
];
