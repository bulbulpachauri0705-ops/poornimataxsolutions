import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as Trigger2, h as Slot, i as Root2, n as Header$1, r as Item, t as Content2, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { c as createFileRoute, d as useRouter, f as notFound, i as HeadContent, l as createRootRouteWithContext, o as createRouter, r as Scripts, s as Outlet, u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as ArrowRight, _ as ChevronUp, a as ShieldCheck, b as Building2, c as Phone, d as Mail, f as Landmark, g as CircleCheck, h as FileBadge, i as Store, l as MessageCircle, m as FileText, n as Users, o as Receipt, p as IdCard, r as Tags, s as PiggyBank, t as X, u as Menu, v as ChevronDown, x as BookOpenCheck, y as Check } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-lQKYrG8V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var site = {
	name: "Poornima Tax Solution",
	tagline: "Your Tax. Our Priority.",
	positioning: "Tax | Compliance | Growth",
	phone: "8171306923",
	phoneDisplay: "+91 81713 06923",
	email: "info@poornimataxsolutions.com",
	whatsapp: "918171306923",
	areaServed: "India",
	description: "Poornima Tax Solution provides income tax return filing, GST, TDS, PAN, accounting and business registration services — FSSAI, firm, trademark and MSME (Udyam) — for individuals, professionals, startups and businesses in India."
};
var telHref = `tel:+91${site.phone}`;
var mailHref = `mailto:${site.email}`;
var waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Poornima Tax Solution, I would like to book a tax consultation.")}`;
var services = [
	{
		slug: "income-tax-return-filing",
		title: "Income Tax Return Filing",
		tag: "ITR 1 to ITR 7",
		short: "Accurate preparation and filing of income tax returns for salaried individuals, professionals, businesses and trusts.",
		answer: "Income tax return filing is the yearly declaration of your income, deductions and taxes paid to the Income Tax Department. Poornima Tax Solution reviews your income sources, selects the correct ITR form (ITR 1 to ITR 7), computes your tax, and files the return with acknowledgement so refunds and notices are handled correctly.",
		includes: [
			"Form selection from ITR 1 to ITR 7 based on your income sources",
			"Computation of taxable income, deductions and tax payable",
			"Return preparation, filing and e-verification support",
			"Refund tracking and assistance with department notices",
			"Revised and belated return filing where applicable"
		],
		documents: [
			"PAN and Aadhaar",
			"Form 16 or salary statements",
			"Bank interest and capital gains statements",
			"Business or professional income summary, if applicable",
			"Investment and deduction proofs"
		],
		process: [
			{
				step: "Share your requirement",
				detail: "Send your documents and income details over WhatsApp, email or in person."
			},
			{
				step: "Expert review",
				detail: "We verify your income, Form 26AS/AIS data and eligible deductions."
			},
			{
				step: "Filing and support",
				detail: "We file the return, share the acknowledgement and stay available for follow-up."
			}
		],
		faqs: [
			{
				q: "Which ITR form applies to a salaried person?",
				a: "Most salaried individuals with income from salary, one house property and interest income file ITR 1. If you have capital gains, more than one property or foreign assets, a different form applies. We confirm the correct form after reviewing your income sources."
			},
			{
				q: "Can a missed return still be filed?",
				a: "A belated or updated return can often still be filed within the timelines allowed by the Income Tax Act, usually with interest or a late fee. Share your details and we will confirm the options available in your case."
			},
			{
				q: "How long does a refund take?",
				a: "Refunds are processed by the Income Tax Department after the return is verified, commonly within a few weeks. We track the status and help resolve mismatches that hold up processing."
			}
		]
	},
	{
		slug: "tax-planning-advisory",
		title: "Tax Planning & Advisory",
		tag: "Save More, Legally",
		short: "Structured, lawful planning of income, deductions and investments so your tax outgo is managed through the year.",
		answer: "Tax planning is the lawful arrangement of income, investments and deductions to manage your tax liability before the year closes. Poornima Tax Solution reviews your income structure, compares the old and new regimes, and recommends eligible deductions and timing so nothing is claimed after the window has passed.",
		includes: [
			"Old vs new regime comparison for your income profile",
			"Deduction and exemption planning under the Income Tax Act",
			"Salary and income structuring guidance",
			"Advance tax estimation and payment schedule",
			"Advisory for freelancers, professionals and business owners"
		],
		documents: [
			"Latest salary structure or income projection",
			"Existing investment and insurance details",
			"Loan statements, if any",
			"Previous year's return"
		],
		process: [
			{
				step: "Share your requirement",
				detail: "Tell us your income sources and current investments."
			},
			{
				step: "Expert review",
				detail: "We model your liability across regimes and identify eligible options."
			},
			{
				step: "Plan and support",
				detail: "You receive a clear plan with timelines, and we review it as the year progresses."
			}
		],
		faqs: [{
			q: "When should tax planning start?",
			a: "At the start of the financial year. Planning early lets you spread investments, plan advance tax and avoid rushed decisions in March."
		}, {
			q: "Is the new regime better for everyone?",
			a: "No. The better option depends on your income level and the deductions you actually claim. We compare both regimes with your real numbers before recommending one."
		}]
	},
	{
		slug: "tds-compliance-refunds",
		title: "TDS Compliance & Refunds",
		tag: "Stay Compliant",
		short: "TDS return preparation, certificate issue, mismatch correction and refund follow-up within statutory deadlines.",
		answer: "TDS compliance covers deducting tax at the correct rate, depositing it on time, filing quarterly TDS returns and issuing Form 16 or 16A. Poornima Tax Solution handles quarterly filings, corrects credit mismatches in Form 26AS or the AIS, and follows up on refunds arising from excess deduction.",
		includes: [
			"Quarterly TDS return preparation and filing",
			"Form 16 and Form 16A issue support",
			"26AS and AIS mismatch reconciliation",
			"Correction statements and default resolution",
			"Refund claims for excess TDS deducted"
		],
		documents: [
			"TAN and PAN details",
			"Deduction and challan details",
			"Deductee-wise payment records",
			"Existing notices or default intimations"
		],
		process: [
			{
				step: "Share your requirement",
				detail: "Provide deduction records, challans and any notices received."
			},
			{
				step: "Expert review",
				detail: "We reconcile deductions with deposits and the tax credit statement."
			},
			{
				step: "Filing and support",
				detail: "Returns and corrections are filed, and refunds or defaults are followed up."
			}
		],
		faqs: [{
			q: "What happens if a TDS return is filed late?",
			a: "A late fee applies for each day of delay and interest applies on late deposit of tax. Filing the pending quarters promptly limits the amount payable."
		}, {
			q: "Why is TDS missing from my tax credit statement?",
			a: "Usually the deductor has not filed the return, or your PAN was quoted incorrectly. We identify the cause and coordinate a correction statement."
		}]
	},
	{
		slug: "business-corporate-taxation",
		title: "Business & Corporate Taxation",
		tag: "For Individuals, Startups & Businesses",
		short: "Ongoing tax and compliance support for proprietorships, partnerships, LLPs and companies.",
		answer: "Business and corporate taxation covers computing business income, meeting statutory filing dates and keeping records audit-ready. Poornima Tax Solution supports proprietorships, partnerships, LLPs and companies with return filing, advance tax, books review and a compliance calendar so deadlines are not missed.",
		includes: [
			"Business and corporate income tax return filing",
			"Advance tax computation and quarterly scheduling",
			"Books of accounts review and audit coordination",
			"Compliance calendar for recurring filings",
			"Advisory on business structure and taxation impact"
		],
		documents: [
			"Financial statements or trial balance",
			"Bank statements for the year",
			"GST and TDS filing summaries",
			"Registration documents of the entity"
		],
		process: [
			{
				step: "Share your requirement",
				detail: "Tell us your entity type, turnover and current compliance status."
			},
			{
				step: "Expert review",
				detail: "We review your books, filings and pending obligations."
			},
			{
				step: "Compliance and support",
				detail: "Filings are completed and a calendar keeps the next ones on track."
			}
		],
		faqs: [{
			q: "Do small businesses need an audit?",
			a: "Audit applicability depends on turnover, the presumptive scheme chosen and cash transaction levels. We check your numbers against the current thresholds and confirm what applies."
		}, {
			q: "Can you support a newly registered startup?",
			a: "Yes. We help set up the compliance calendar, registrations and filing routine from the first year onward."
		}]
	},
	{
		slug: "gst-registration-filing",
		title: "GST Registration & Filing",
		tag: "Hassle-Free Compliance",
		short: "GST registration, monthly and annual returns, reconciliation and ongoing compliance for businesses.",
		answer: "GST compliance covers registration, periodic returns such as GSTR-1 and GSTR-3B, input tax credit reconciliation and the annual return. Poornima Tax Solution handles registration end to end and manages recurring filings with reconciliation so credit is not lost and late fees are avoided.",
		includes: [
			"New GST registration and amendments",
			"GSTR-1, GSTR-3B and annual return filing",
			"Input tax credit reconciliation with GSTR-2B",
			"E-way bill and invoicing guidance",
			"Notice reply and cancellation or revocation support"
		],
		documents: [
			"PAN, Aadhaar and photograph of the proprietor or partners",
			"Business address proof",
			"Bank account details",
			"Sales and purchase registers for filings"
		],
		process: [
			{
				step: "Share your requirement",
				detail: "Tell us your business type and whether you need registration or filings."
			},
			{
				step: "Expert review",
				detail: "We verify documents, turnover and credit eligibility."
			},
			{
				step: "Filing and support",
				detail: "Registration or returns are filed and reconciled every period."
			}
		],
		faqs: [{
			q: "When is GST registration required?",
			a: "Registration is required once turnover crosses the prescribed threshold for your state and supply type, and in certain cases such as inter-state supply or e-commerce sales regardless of turnover. We confirm applicability for your business."
		}, {
			q: "What happens if GST returns are not filed?",
			a: "Late fees and interest accumulate, input credit gets blocked and the registration can eventually be cancelled. Pending returns can be regularised, and we help plan the catch-up."
		}]
	},
	{
		slug: "pan-services",
		title: "PAN Services",
		tag: "New / Correction / Linkage",
		short: "Assistance with new PAN applications, correction of existing details and PAN-Aadhaar linkage.",
		answer: "PAN services cover applying for a new Permanent Account Number, correcting name, date of birth or other details on an existing PAN, and linking PAN with Aadhaar. Poornima Tax Solution prepares the application, checks supporting documents and tracks it until the PAN is issued or updated.",
		includes: [
			"New PAN application for individuals and entities",
			"Correction or update of existing PAN details",
			"PAN-Aadhaar linkage assistance",
			"Reprint and duplicate PAN requests",
			"Document verification before submission"
		],
		documents: [
			"Identity proof (Aadhaar, passport or voter ID)",
			"Address proof",
			"Date of birth proof",
			"Existing PAN copy, for corrections"
		],
		process: [
			{
				step: "Share your requirement",
				detail: "Tell us whether you need a new PAN, a correction or linkage."
			},
			{
				step: "Expert review",
				detail: "We check your documents against the current application requirements."
			},
			{
				step: "Application and support",
				detail: "The application is submitted and we track it until it is processed."
			}
		],
		faqs: [{
			q: "Is PAN-Aadhaar linkage mandatory?",
			a: "Yes, PAN must be linked with Aadhaar for most taxpayers, and an unlinked PAN can become inoperative. We assist with linkage and with reactivating an inoperative PAN."
		}, {
			q: "How long does a new PAN take?",
			a: "Processing usually takes a few working days after successful submission and verification. We share the acknowledgement so you can track progress."
		}]
	},
	{
		slug: "fssai-license",
		title: "FSSAI License",
		tag: "Food Business Compliance",
		short: "New FSSAI registration and license applications, renewals and modifications for food businesses of every size.",
		answer: "An FSSAI license is the food safety registration or license that every business manufacturing, processing, packing, storing, distributing or selling food in India must hold. Poornima Tax Solution checks whether you need the Basic Registration, State License or Central License, prepares and files the application, and follows it through to issue and renewal.",
		includes: [
			"Eligibility check: Basic Registration vs State or Central License",
			"New FSSAI application preparation and filing",
			"License renewal and modification of license details",
			"Guidance on displaying the FSSAI logo and license number",
			"Support with queries or clarifications raised during processing"
		],
		documents: [
			"Photo ID and PAN of the proprietor or partners",
			"Passport-size photograph",
			"Address proof of the business premises",
			"Nature of business and product details",
			"Water test report or premises layout plan, where applicable"
		],
		process: [
			{
				step: "Share your requirement",
				detail: "Tell us your food business type, products and turnover."
			},
			{
				step: "Expert review",
				detail: "We confirm the correct license category and check your documents."
			},
			{
				step: "Application and support",
				detail: "The application is filed and we track it until the license is issued."
			}
		],
		faqs: [{
			q: "Which FSSAI license applies to my food business?",
			a: "Basic Registration generally covers food businesses with turnover up to ₹12 lakh, the State License covers larger state-level operations, and the Central License applies to importers, exporters and large manufacturers. We confirm the correct category from your turnover and activity."
		}, {
			q: "How long is an FSSAI license valid?",
			a: "You can choose a validity of 1 to 5 years at the time of application. Renewal must be filed before expiry, and we send reminders and handle the renewal application for you."
		}]
	},
	{
		slug: "accounting-bookkeeping",
		title: "Accounting & Bookkeeping",
		tag: "Clean Books, Every Month",
		short: "Day-to-day bookkeeping, reconciliations and financial statements that keep every filing accurate.",
		answer: "Accounting and bookkeeping mean recording every transaction of the business, reconciling bank statements and maintaining ledgers and financial statements. Poornima Tax Solution keeps books current on a monthly or quarterly cycle so GST returns, TDS filings and the annual income tax return all flow from the same accurate numbers.",
		includes: [
			"Recording of sales, purchases, expenses and journal entries",
			"Bank and cash reconciliation every period",
			"Receivables and payables tracking",
			"Preparation of financial statements and trial balance",
			"Books review before GST, TDS and income tax filings"
		],
		documents: [
			"Bank statements for the period",
			"Sales and purchase invoices",
			"Expense bills and vouchers",
			"Loan statements, if any",
			"Previous books or software backup, if switching to us"
		],
		process: [
			{
				step: "Share your requirement",
				detail: "Tell us your transaction volume and how often you want the books updated."
			},
			{
				step: "Setup",
				detail: "We set up the chart of accounts and bring opening balances in order."
			},
			{
				step: "Recurring updates",
				detail: "Books are updated and reconciled every period, ready for each filing."
			}
		],
		faqs: [{
			q: "Do I need monthly bookkeeping as a small business?",
			a: "Even small businesses benefit from at least quarterly updates. Regular bookkeeping keeps GST input credit from lapsing, surfaces receivables early and makes the year-end return far cheaper to prepare."
		}, {
			q: "Can you take over books mid-year?",
			a: "Yes. We can pick up from your last updated records, complete the pending period and keep the remaining year current."
		}]
	},
	{
		slug: "firm-registration",
		title: "Firm Registration",
		tag: "Start Right",
		short: "Registration of proprietorships, partnership firms, LLPs and companies with the tax registrations each needs.",
		answer: "Firm registration gives your business a legal identity — as a proprietorship, partnership firm, LLP or company — along with the PAN, TAN and GST registrations it needs to operate. Poornima Tax Solution helps you choose the right structure for your scale and liability, prepares the incorporation documents and completes the registration end to end.",
		includes: [
			"Advisory on the right structure: proprietorship, partnership, LLP or company",
			"Name availability check",
			"Partnership deed or incorporation document preparation",
			"PAN, TAN and GST registration for the new entity",
			"Post-registration compliance calendar and first-filing support"
		],
		documents: [
			"PAN and Aadhaar of the owner, partners or directors",
			"Address proof of the business premises",
			"Passport-size photographs",
			"Two or three proposed business names",
			"Brief description of the business activity"
		],
		process: [
			{
				step: "Share your requirement",
				detail: "Tell us what the business will do, with how many owners and at what scale."
			},
			{
				step: "Structure and documents",
				detail: "We recommend the structure and prepare the registration documents."
			},
			{
				step: "Registration and support",
				detail: "Registrations are completed and your first filings are planned."
			}
		],
		faqs: [{
			q: "Which structure should I register — proprietorship, LLP or company?",
			a: "It depends on your scale, number of owners and liability comfort. A proprietorship is simplest, an LLP separates personal liability with light compliance, and a company suits businesses raising investment. We compare the options for your situation before registering."
		}, {
			q: "How long does firm registration take?",
			a: "A proprietorship with tax registrations is typically completed within a few working days, while an LLP or company takes longer due to incorporation formalities. We share the exact timeline once the structure is chosen."
		}]
	},
	{
		slug: "trademark-registration",
		title: "Trademark Registration",
		tag: "Protect Your Brand",
		short: "Trademark search, application filing in the correct class and follow-up through examination to registration.",
		answer: "Trademark registration protects your brand name, logo or tagline and gives you exclusive rights to use it for your goods or services. Poornima Tax Solution runs an availability search, files the application in the correct class, responds to examination objections and tracks the mark until it is registered.",
		includes: [
			"Trademark availability search before filing",
			"Identification of the correct class of goods or services",
			"Trademark application preparation and filing",
			"Response to examination reports and objections",
			"Renewal reminders and renewal filing support"
		],
		documents: [
			"The brand name, logo or tagline to be registered",
			"PAN and ID proof of the applicant",
			"Nature of business and goods or services",
			"Date and proof of first use, if the mark is already in use"
		],
		process: [
			{
				step: "Share your requirement",
				detail: "Send us the mark you want to protect and what you sell under it."
			},
			{
				step: "Search and filing",
				detail: "We search for conflicts and file the application in the right class."
			},
			{
				step: "Tracking to registration",
				detail: "Objections are answered and the application is tracked to grant."
			}
		],
		faqs: [{
			q: "How long does trademark registration take?",
			a: "Registration typically takes several months to over a year depending on examination and objections. You can start using the ™ symbol as soon as the application is filed, and ® once the mark is registered."
		}, {
			q: "Can I file a trademark before using the brand?",
			a: "Yes. Applications can be filed on a 'proposed to be used' basis, which secures your filing date while you prepare the launch."
		}]
	},
	{
		slug: "msme-udyam-registration",
		title: "MSME (Udyam) Registration",
		tag: "Udyam Certificate",
		short: "Udyam registration for micro, small and medium enterprises, unlocking loans, subsidies and tender benefits.",
		answer: "MSME (Udyam) registration enrolls a micro, small or medium enterprise on the government's Udyam portal using its PAN, GSTIN and investment and turnover figures. Registration unlocks benefits such as easier credit, subsidy schemes, protection against delayed payments and preference in government tenders. Poornima Tax Solution files the registration and shares the Udyam certificate once issued.",
		includes: [
			"Classification check: micro, small or medium enterprise",
			"Udyam application filing with PAN and GSTIN",
			"Corrections and updates to an existing Udyam certificate",
			"Guidance on the benefits registration unlocks",
			"Certificate copy shared once issued"
		],
		documents: [
			"PAN and GSTIN of the business",
			"Aadhaar of the proprietor, partner or director",
			"Investment and turnover figures",
			"Basic business and bank details"
		],
		process: [
			{
				step: "Share your requirement",
				detail: "Send the business PAN, GSTIN and Aadhaar of the owner."
			},
			{
				step: "Classification",
				detail: "We confirm your enterprise category from investment and turnover."
			},
			{
				step: "Registration and certificate",
				detail: "The application is filed and the Udyam certificate is shared with you."
			}
		],
		faqs: [{
			q: "Does Udyam registration need renewal?",
			a: "No. Once issued, the Udyam certificate is valid for the lifetime of the enterprise, though details should be updated if investment or turnover classification changes."
		}, {
			q: "What benefits does MSME registration give?",
			a: "Registered MSMEs get easier access to credit, eligibility for government subsidy schemes, statutory protection against delayed payments and preference in government tenders."
		}]
	}
];
var stats = [
	{
		value: "100+",
		label: "Average client files handled every month"
	},
	{
		value: "40+",
		label: "Files as our standing base caseload"
	},
	{
		value: "Unlimited",
		label: "MSME (Udyam) registrations — no cap on volume"
	}
];
var serviceBySlug = (slug) => services.find((s) => s.slug === slug);
var whyUs = [
	{
		title: "Reliable",
		detail: "Deadlines tracked, filings completed on time and records kept ready for future reference."
	},
	{
		title: "Transparent",
		detail: "Scope and fees explained before work starts, with no surprise additions later."
	},
	{
		title: "Client Focused",
		detail: "You speak directly to the professional handling your file, in plain language."
	},
	{
		title: "Committed to Your Success",
		detail: "Advice looks beyond this filing to how your tax position develops next year."
	}
];
var generalFaqs = [
	{
		q: "What services does Poornima Tax Solution provide?",
		a: "Income tax return filing, tax planning and advisory, TDS compliance and refunds, business and corporate taxation, GST registration and filing, PAN services, accounting and bookkeeping, and registrations including FSSAI license, firm registration, trademark registration and MSME (Udyam) registration for individuals, professionals, startups and businesses."
	},
	{
		q: "How do I book a consultation?",
		a: `Send an enquiry through the contact form, call ${site.phoneDisplay}, message on WhatsApp or email ${site.email}. Share your requirement and we will confirm a suitable time.`
	},
	{
		q: "What documents should I keep ready for ITR filing?",
		a: "PAN and Aadhaar, Form 16 or salary statements, bank interest details, capital gains statements, business income summary if applicable, and proofs for the deductions you plan to claim."
	},
	{
		q: "Do you work with clients outside your city?",
		a: "Yes. Documents can be shared digitally and consultations can be held over call or WhatsApp, so location is not a constraint within India."
	},
	{
		q: "Can you help with a notice received from the department?",
		a: "Yes. Share the notice and the related return, and we will review what it asks for and prepare a response within the stated timeline."
	},
	{
		q: "Do you handle GST and income tax together?",
		a: "Yes. Many businesses use us for GST returns, TDS filings and income tax together, which keeps the numbers consistent across filings."
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 border-t border-border bg-primary text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-10 py-14 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl",
							children: site.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-primary-foreground/70",
							children: site.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mt-4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-primary-foreground/70",
							children: "Tax, compliance and advisory support for individuals, professionals and businesses across India."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Services",
					className: "text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2",
						children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services/$slug",
							params: { slug: s.slug },
							className: "text-primary-foreground/75 hover:text-accent",
							children: s.title
						}) }, s.slug))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Company",
					className: "text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Company"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2",
						children: [
							{
								to: "/about",
								label: "About"
							},
							{
								to: "/why-us",
								label: "Why Poornima"
							},
							{
								to: "/blog",
								label: "Insights"
							},
							{
								to: "/contact",
								label: "Contact"
							},
							{
								to: "/privacy-policy",
								label: "Privacy Policy"
							},
							{
								to: "/terms",
								label: "Terms & Disclaimer"
							}
						].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "text-primary-foreground/75 hover:text-accent",
							children: l.label
						}) }, l.to))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: telHref,
								className: "flex items-center gap-2 hover:text-accent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "size-4",
									"aria-hidden": "true"
								}), site.phoneDisplay]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: mailHref,
								className: "flex items-center gap-2 break-all hover:text-accent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									className: "size-4 shrink-0",
									"aria-hidden": "true"
								}), site.email]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: waHref,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center gap-2 hover:text-accent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
									className: "size-4",
									"aria-hidden": "true"
								}), "WhatsApp enquiry"]
							}) })
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-primary-foreground/15",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex flex-col gap-2 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					site.name,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Information on this site is general in nature and not a substitute for advice." })]
			})
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/why-us",
		label: "Why Us"
	},
	{
		to: "/blog",
		label: "Insights"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page flex h-18 items-center justify-between gap-4 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-10 items-center justify-center rounded-sm bg-primary font-display text-lg text-primary-foreground",
						children: "P"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-base text-primary sm:text-lg",
							children: site.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase",
							children: site.positioning
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Primary",
					className: "hidden items-center gap-7 lg:flex",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						activeOptions: { exact: item.to === "/" },
						className: "text-sm text-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary data-[status=active]:underline data-[status=active]:decoration-accent data-[status=active]:decoration-2 data-[status=active]:underline-offset-8",
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-3 lg:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: telHref,
						className: "flex items-center gap-2 text-sm font-medium text-primary hover:text-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							className: "size-4",
							"aria-hidden": "true"
						}), site.phoneDisplay]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Book Consultation"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex size-10 items-center justify-center rounded-sm border border-border text-primary lg:hidden",
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-background lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Mobile",
				className: "container-page flex flex-col py-3",
				children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					className: "border-b border-border/60 py-3 text-sm text-foreground/85",
					children: item.label
				}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							onClick: () => setOpen(false),
							children: "Book Consultation"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: telHref,
							children: ["Call ", site.phoneDisplay]
						})
					})]
				})]
			})
		})]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var BASE_URL = "https://poornimataxsolutions.com";
var abs = (path) => `${BASE_URL}${path}`;
/**
* Builds a consistent, self-referencing meta set for a page.
* Keeps title/description/og/twitter aligned for search engines,
* answer engines and AI assistants.
*/
function pageMeta({ title, description, path, type = "website", image = "/og-image.jpg", imageAlt = "Poornima Tax Solution — tax and compliance consultancy in Mathura, India" }) {
	return [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: type
		},
		{
			property: "og:url",
			content: abs(path)
		},
		{
			property: "og:image",
			content: image
		},
		{
			property: "og:image:alt",
			content: imageAlt
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: title
		},
		{
			name: "twitter:description",
			content: description
		},
		{
			name: "twitter:image",
			content: image
		}
	];
}
var canonical = (path) => [{
	rel: "canonical",
	href: abs(path)
}];
var ldScript = (data) => ({
	type: "application/ld+json",
	children: JSON.stringify(data)
});
var organizationLd = {
	"@context": "https://schema.org",
	"@type": "ProfessionalService",
	"@id": `${BASE_URL}/#organization`,
	url: BASE_URL,
	name: site.name,
	description: site.description,
	slogan: site.tagline,
	telephone: telHref.replace("tel:", ""),
	email: site.email,
	areaServed: {
		"@type": "Country",
		name: site.areaServed
	},
	knowsAbout: [
		"Income tax return filing",
		"Tax planning",
		"TDS compliance",
		"GST registration and filing",
		"PAN services",
		"Corporate taxation",
		"FSSAI licensing",
		"Accounting and bookkeeping",
		"Firm registration",
		"Trademark registration",
		"MSME Udyam registration"
	],
	availableLanguage: ["en", "hi"]
};
var faqLd = (faqs) => ({
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: faqs.map((f) => ({
		"@type": "Question",
		name: f.q,
		acceptedAnswer: {
			"@type": "Answer",
			text: f.a
		}
	}))
});
var breadcrumbLd = (items) => ({
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: items.map((it, i) => ({
		"@type": "ListItem",
		position: i + 1,
		name: it.name,
		item: it.item
	}))
});
var serviceLd = ({ name, description, path }) => ({
	"@context": "https://schema.org",
	"@type": "Service",
	name,
	description,
	serviceType: name,
	url: abs(path),
	provider: {
		"@type": "ProfessionalService",
		name: site.name,
		telephone: site.phone
	},
	areaServed: {
		"@type": "Country",
		name: site.areaServed
	}
});
/** HowTo schema built from a service's ordered process steps. */
var howToLd = (steps, name, description, path) => ({
	"@context": "https://schema.org",
	"@type": "HowTo",
	name,
	description,
	totalTime: "PT1H",
	step: steps.map((s, i) => ({
		"@type": "HowToStep",
		position: i + 1,
		name: s.step,
		url: `${abs(path)}#step-${i + 1}`,
		text: s.detail
	}))
});
var styles_default = "/assets/styles-D2znjRII.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$14 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Poornima Tax Solution — Tax, GST & Compliance Experts" },
			{
				name: "description",
				content: site.description
			},
			{
				name: "author",
				content: site.name
			},
			{
				property: "og:site_name",
				content: site.name
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "en_IN"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#0f1b3d"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Playfair+Display:wght@500;600&display=swap"
			}
		],
		scripts: [ldScript(organizationLd)]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en-IN",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$14.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
		]
	});
}
var img_default = "/assets/img-LigjXe4i.png";
function CtaBand({ title = "Let's make your tax journey simpler.", intro = "Tell us what you need and we will respond with the next step, the documents required and an honest view of the timeline." }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-primary py-16 text-primary-foreground sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid items-center gap-10 md:grid-cols-[1.2fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Get Started"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl sm:text-4xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mt-4" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-base/7 text-primary-foreground/75",
					children: intro
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "bg-accent text-accent-foreground hover:bg-accent/90",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Book a Consultation"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								className: "border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: telHref,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										className: "size-4",
										"aria-hidden": "true"
									}), " Call"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								className: "border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: mailHref,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
										className: "size-4",
										"aria-hidden": "true"
									}), " Email"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								className: "border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: waHref,
									target: "_blank",
									rel: "noopener noreferrer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
										className: "size-4",
										"aria-hidden": "true"
									}), " WhatsApp"]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-primary-foreground/60",
						children: [
							site.phoneDisplay,
							" · ",
							site.email
						]
					})
				]
			})]
		})
	});
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header$1, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function FaqList({ faqs }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
		type: "single",
		collapsible: true,
		className: "w-full",
		children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
			value: `item-${i}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
				className: "text-left font-display text-base sm:text-lg",
				children: f.q
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
				className: "text-base/7 text-muted-foreground",
				children: f.a
			})]
		}, f.q))
	});
}
function Section({ children, className, id, tone = "cream" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("py-16 sm:py-20", tone === "white" && "bg-card", tone === "navy" && "bg-primary text-primary-foreground", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children
		})
	});
}
function SectionHeading({ eyebrow, title, intro, center, as: As = "h2" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("max-w-2xl", center && "mx-auto text-center"),
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(As, {
				className: "mt-3 text-3xl sm:text-4xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("gold-rule mt-4", center && "mx-auto") }),
			intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-base/7 opacity-80",
				children: intro
			})
		]
	});
}
function StatsBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Our track record",
		className: "bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page grid gap-8 py-12 sm:grid-cols-3 sm:py-14",
			children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-l-2 border-accent pl-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-4xl text-accent sm:text-5xl",
					children: s.value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm/6 opacity-85",
					children: s.label
				})]
			}, s.label))
		})
	});
}
var posts = [
	{
		slug: "documents-needed-for-itr-filing",
		title: "Documents you need before filing your income tax return",
		category: "Income Tax",
		excerpt: "A practical checklist of what to collect before ITR filing, so the return is accurate the first time.",
		publishedAt: "2026-06-12",
		readingTime: "4 min read",
		seoTitle: "Documents Needed for ITR Filing in India: Full Checklist",
		seoDescription: "Checklist of documents required to file an income tax return in India: PAN, Aadhaar, Form 16, interest certificates, capital gains statements and deduction proofs.",
		sections: [
			{
				heading: "The short answer",
				body: ["To file an income tax return in India you need PAN and Aadhaar, proof of every income source for the year, details of tax already paid, and proof of the deductions you plan to claim. Collecting these before you start avoids revised returns later."]
			},
			{
				heading: "Identity and access",
				body: ["PAN and Aadhaar, linked with each other, plus access to the income tax portal and the bank account where a refund should arrive. The bank account must be pre-validated for the refund to be credited."]
			},
			{
				heading: "Income proofs",
				body: ["Salaried taxpayers need Form 16 from every employer worked with during the year. Add interest certificates from banks and post office, rent receipts or house property details, capital gains statements from your broker, and a summary of business or freelance receipts if you have any."]
			},
			{
				heading: "Taxes already paid",
				body: ["Download Form 26AS and the Annual Information Statement. These show TDS deducted, advance tax paid and high-value transactions reported against your PAN. Any mismatch here is the most common reason a return gets flagged."]
			},
			{
				heading: "Deduction proofs",
				body: ["Keep investment and insurance receipts, home loan interest certificates, tuition fee receipts, medical insurance premium proofs and donation receipts. Under the new regime most of these are not claimable, so confirm your regime before you assume a deduction applies."]
			}
		]
	},
	{
		slug: "old-vs-new-tax-regime-how-to-choose",
		title: "Old vs new tax regime: how to decide which suits you",
		category: "Tax Planning",
		excerpt: "The regime that saves more depends on the deductions you actually claim, not on general advice.",
		publishedAt: "2026-05-28",
		readingTime: "5 min read",
		seoTitle: "Old vs New Tax Regime: How to Choose the Right One",
		seoDescription: "Understand how the old and new income tax regimes differ, who benefits from each, and how to compare them using your own income and deductions.",
		sections: [
			{
				heading: "The short answer",
				body: ["The old regime suits taxpayers who claim substantial deductions such as housing loan interest, insurance and specified investments. The new regime suits those with few deductions who prefer lower slab rates. The only reliable way to choose is to compute your tax under both using your actual figures."]
			},
			{
				heading: "What changes between the two",
				body: ["The old regime offers lower slab thresholds with a long list of exemptions and deductions. The new regime offers wider slabs and a higher standard deduction, but removes most exemptions. Your break-even point depends on how much you genuinely claim, not on how much you could claim in theory."]
			},
			{
				heading: "When the old regime usually wins",
				body: ["Taxpayers repaying a home loan, paying substantial rent with HRA in their salary structure, or making regular specified investments often come out ahead under the old regime because those claims reduce taxable income significantly."]
			},
			{
				heading: "When the new regime usually wins",
				body: ["Early-career salaried taxpayers, professionals without housing loans, and anyone who does not want to lock money into deduction-linked products generally pay less under the new regime and file with far less paperwork."]
			},
			{
				heading: "How to decide properly",
				body: ["Compute both at the start of the financial year, not in March. Salaried taxpayers can usually switch each year at the time of filing, while those with business income face restrictions on switching back. We run this comparison as part of a tax planning review."]
			}
		]
	},
	{
		slug: "gst-return-filing-basics-for-small-business",
		title: "GST return filing basics for a small business",
		category: "GST",
		excerpt: "What has to be filed, how often, and what actually goes wrong when a filing is delayed.",
		publishedAt: "2026-05-09",
		readingTime: "4 min read",
		seoTitle: "GST Return Filing Basics for Small Businesses in India",
		seoDescription: "Learn which GST returns a small business must file, how input tax credit reconciliation works, and what happens when GST returns are filed late.",
		sections: [
			{
				heading: "The short answer",
				body: ["A registered business normally files outward supply details in GSTR-1 and a summary return in GSTR-3B for each period, plus an annual return where applicable. Input tax credit must be reconciled with GSTR-2B before the summary return is filed, otherwise credit can be lost."]
			},
			{
				heading: "The recurring cycle",
				body: ["Record sales invoices, report them in GSTR-1, match purchase credit against GSTR-2B, then pay and file GSTR-3B. Businesses under the quarterly scheme follow the same steps at a quarterly interval with monthly tax payments."]
			},
			{
				heading: "Why reconciliation matters",
				body: ["Credit is available only when your supplier has reported the invoice. Reconciling every period surfaces missing invoices while there is still time to have the supplier correct them, instead of discovering the gap during an annual review."]
			},
			{
				heading: "Cost of delay",
				body: ["Late filing attracts a daily late fee and interest on unpaid tax, blocks subsequent period filings, and prolonged non-filing can lead to cancellation of registration. Catching up early keeps the cost contained."]
			}
		]
	},
	{
		slug: "gst-slab-structure-simplified",
		title: "GST slab structure simplified: from six slabs to four",
		category: "GST",
		excerpt: "The GST rate structure has been rationalised from six slabs to four. Here is what changed and what it means for your invoicing and filings.",
		publishedAt: "2026-09-20",
		readingTime: "4 min read",
		seoTitle: "GST Slab Update: Rate Structure Simplified from Six Slabs to Four",
		seoDescription: "India's GST slab structure has been simplified from six slabs to four. Understand what changed, how it affects pricing and invoices, and what businesses should update.",
		sections: [
			{
				heading: "The short answer",
				body: ["Earlier, GST rates were spread across six slabs — 0%, 5%, 12%, 18%, 28% and special rates for certain goods. The structure has now been simplified to four: nil (exempt), 5%, 18% and a 40% rate for a small list of demerit goods. Most items from the 12% slab have moved into 5% or 18%, and most 28% items have moved to 18%."]
			},
			{
				heading: "What changed in practice",
				body: ["The 12% slab has largely been merged into the 5% and 18% slabs, and the 28% slab has been mostly folded into 18%, with a short list of demerit goods — such as pan masala, aerated sugary drinks and luxury vehicles — attracting the 40% rate. Everyday items such as many food staples, medicines and essentials have seen reductions to 5% or nil."]
			},
			{
				heading: "What businesses should update",
				body: ["Price lists, item-wise GST rates in accounting software, e-invoice and e-way bill masters, and HSN-wise rate mapping all need to reflect the new slabs from the effective date. Invoices raised on or after the change must apply the new rate, and credit notes or revised invoices may be needed for supplies straddling the changeover."]
			},
			{
				heading: "Impact on input credit and filings",
				body: ["Input tax credit continues to follow the rate actually charged by your supplier, so reconcile GSTR-2B against the new rates during the transition period. GSTR-1 and GSTR-3B filings continue as before; the change is in the rate applied per item, not in the return process itself."]
			},
			{
				heading: "How we help",
				body: ["We update client rate masters, review HSN-wise mapping, and check that invoices and returns apply the correct slab from the effective date. Share your item list and we will confirm the new rate for each one."]
			}
		]
	}
];
var postBySlug = (slug) => posts.find((p) => p.slug === slug);
var title = "Income Tax & GST Services in Mathura | Poornima Tax Solution";
var description = "Poornima Tax Solution provides income tax return filing, GST, accounting, FSSAI, business registration, trademark and MSME services in Mathura and across India.";
var serviceIcons = [
	FileText,
	PiggyBank,
	Receipt,
	Building2,
	Landmark,
	IdCard,
	FileBadge,
	BookOpenCheck,
	Store,
	Tags,
	ShieldCheck
];
var Route$13 = createFileRoute("/")({
	head: () => ({
		meta: pageMeta({
			title,
			description,
			path: "/"
		}),
		links: canonical("/"),
		scripts: [
			ldScript(organizationLd),
			ldScript(faqLd(generalFaqs)),
			ldScript({
				"@context": "https://schema.org",
				"@type": "WebSite",
				"@id": `${BASE_URL}/#website`,
				name: site.name,
				url: BASE_URL,
				description: site.description,
				publisher: { "@id": `${BASE_URL}/#organization` },
				inLanguage: ["en", "hi"]
			})
		]
	}),
	component: Home
});
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid items-center gap-12 py-16 md:grid-cols-[1.1fr_1fr] md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Tax & Compliance Services in Mathura"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-4xl sm:text-5xl lg:text-6xl",
						children: "Income Tax, GST & Compliance Services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mt-6" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 max-w-xl text-lg/8 text-muted-foreground",
						children: [site.name, " helps individuals, professionals, startups and businesses with income tax filing, GST, accounting, registrations and ongoing compliance in Mathura and across India."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Book a Consultation"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services",
								children: ["Explore Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-2 text-sm text-foreground/80 sm:grid-cols-2",
						children: [
							"ITR filing & tax matters",
							"GST registration & filing",
							"Business registrations",
							"Accounting & compliance"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
								className: "size-4 text-accent",
								"aria-hidden": "true"
							}), t]
						}, t))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: img_default,
					alt: "Poornima Tax Solution tax and compliance consultant in Mathura",
					width: 768,
					height: 922,
					className: "aspect-[4/3] w-full rounded-sm object-cover object-center shadow-lg"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsBand, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "What we do",
			title: "Tax and compliance services in Mathura",
			intro: "Tax, accounting, licensing and registration support for individuals, professionals and businesses in Mathura and across India."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: services.map((s, i) => {
				const Icon = serviceIcons[i % serviceIcons.length] ?? FileText;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/services/$slug",
					params: { slug: s.slug },
					className: "group flex flex-col rounded-sm border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-10 items-center justify-center rounded-sm bg-secondary text-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs tracking-widest text-accent uppercase",
							children: s.tag
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-xl text-primary",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 flex-1 text-sm/6 text-muted-foreground",
							children: s.short
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-accent",
							children: ["Learn more", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "size-4 transition-transform group-hover:translate-x-1",
								"aria-hidden": "true"
							})]
						})
					]
				}, s.slug);
			})
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Why choose us",
				title: "Reliable. Transparent. Client focused."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: whyUs.map((w, i) => {
					const Icon = [
						ShieldCheck,
						FileText,
						Users,
						CircleCheck
					][i % 4] ?? ShieldCheck;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-7 text-accent",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-lg text-primary",
							children: w.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm/6 text-muted-foreground",
							children: w.detail
						})
					] }, w.title);
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "How it works",
			title: "How our tax and compliance services work"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-10 grid gap-6 md:grid-cols-3",
			children: [
				["Share your requirement", "Send documents over WhatsApp, email or in person."],
				["Expert review", "We verify income, credits and eligible deductions."],
				["Filing & support", "We file, share acknowledgement and handle follow-ups."]
			].map(([t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-sm border border-border bg-card p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-3xl text-accent",
						children: ["0", i + 1]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-lg text-primary",
						children: t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm/6 text-muted-foreground",
						children: d
					})
				]
			}, t))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Insights",
					title: "Tax guides in plain language"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/blog",
					className: "text-sm font-medium text-primary hover:text-accent",
					children: "All articles →"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 md:grid-cols-3",
				children: posts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog/$slug",
					params: { slug: p.slug },
					className: "rounded-sm border border-border p-6 hover:border-accent",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-accent uppercase",
							children: p.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-lg text-primary",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm/6 text-muted-foreground",
							children: p.excerpt
						})
					]
				}, p.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "FAQ",
			title: "Frequently asked questions about tax and GST services"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 max-w-3xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { faqs: generalFaqs })
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
var about_desk_default = "/assets/about-desk-BTrlj0O2.jpg";
function PageHero({ eyebrow, title, intro, crumbs }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-card py-14 sm:py-18",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [
				crumbs && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Breadcrumb",
					className: "mb-6 text-xs text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "flex flex-wrap items-center gap-2",
						children: [crumbs.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "/"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: c.to,
								className: "hover:text-primary",
								children: c.label
							})]
						}, c.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "/"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: title
							})]
						})]
					})
				}),
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl text-4xl sm:text-5xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mt-5" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-lg/8 text-muted-foreground",
					children: intro
				})
			]
		})
	});
}
var Route$12 = createFileRoute("/about")({
	head: () => ({
		meta: pageMeta({
			title: "About Poornima Tax Solution | Tax & Compliance Consultants",
			description: "Learn about Poornima Tax Solution, a tax and compliance practice helping individuals, professionals, startups and businesses across India file accurately and on time.",
			path: "/about"
		}),
		links: canonical("/about")
	}),
	component: About
});
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About us",
			title: `About ${site.name}`,
			intro: `${site.tagline} We are a tax and compliance practice built on accuracy, clear communication and filing on time.`,
			crumbs: [{
				label: "Home",
				to: "/"
			}]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-12 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: about_desk_default,
				alt: "Poornima Pachauri seated in her tax and legal consultancy office",
				width: 768,
				height: 1024,
				loading: "lazy",
				className: "aspect-[4/3] w-full rounded-sm object-cover object-center"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Who we are",
					title: "Tax support that stays with you"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-base/8 text-foreground/85",
					children: site.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base/8 text-foreground/85",
					children: "Every file is handled by a professional you can speak to directly. We explain scope and fees before starting, keep records ready for future reference, and follow up until each filing is complete."
				})
			] })]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsBand, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Qualifications",
			title: "Education",
			intro: "A foundation in the arts and law supporting practical, informed tax and compliance guidance."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				["10th Standard", "2013"],
				["12th Standard", "2015"],
				["B.A.", "2018"],
				["LL.B.", "2022"]
			].map(([qualification, year]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "border-l-2 border-accent pl-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl text-accent",
					children: year
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-xl text-primary",
					children: qualification
				})]
			}, qualification))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					["Our mission", "Make tax compliance simple and dependable for every client, regardless of size."],
					["Who we serve", "Salaried individuals, freelancers, professionals, startups, SMEs and companies across India."],
					["How we work", "Documents shared digitally or in person, consultations by call or WhatsApp, filings tracked to completion."]
				].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl text-primary",
					children: t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm/6 text-muted-foreground",
					children: d
				})] }, t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
var Route$11 = createFileRoute("/blog")({ component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
function LeadForm() {
	const [service, setService] = (0, import_react.useState)("");
	const [contactMethod, setContactMethod] = (0, import_react.useState)("Phone call");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);
		if (data.get("company_website")?.trim()) return;
		const name = data.get("name")?.trim() ?? "";
		const phone = data.get("phone")?.trim() ?? "";
		const email = data.get("email")?.trim() ?? "";
		const message = data.get("message")?.trim() ?? "";
		const next = {};
		if (name.length < 2) next.name = "Please enter your full name.";
		if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, "").slice(-10))) next.phone = "Enter a valid 10-digit Indian mobile number.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) next.email = "Enter a valid email address.";
		if (!service) next.service = "Select the service you need.";
		if (message.length < 10) next.message = "Tell us a little more about your requirement.";
		setErrors(next);
		if (Object.keys(next).length > 0) {
			toast.error("Please correct the highlighted fields.");
			return;
		}
		setSent(true);
		toast.success("Thank you. Your enquiry has been received.");
		form.reset();
		setService("");
	}
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-accent/40 bg-card p-8 shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-2xl",
				children: "Thank you. Your enquiry has been received."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-base/7 text-muted-foreground",
				children: [
					"We will get back to you on your preferred contact method. For anything urgent, call",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: telHref,
						className: "font-medium text-primary underline",
						children: site.phoneDisplay
					}),
					" ",
					"or message us on",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: waHref,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "font-medium text-primary underline",
						children: "WhatsApp"
					}),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-6",
				variant: "outline",
				onClick: () => setSent(false),
				children: "Send another enquiry"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "rounded-lg border border-border bg-card p-6 shadow-soft sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: "Request a consultation"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Share a few details and we will respond with the next step and documents needed."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "name",
						label: "Full name",
						error: errors.name,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "name",
							name: "name",
							autoComplete: "name",
							placeholder: "Your name",
							required: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "phone",
						label: "Mobile number",
						error: errors.phone,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "phone",
							name: "phone",
							type: "tel",
							inputMode: "numeric",
							autoComplete: "tel",
							placeholder: "10-digit mobile",
							required: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "email",
						label: "Email",
						error: errors.email,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "email",
							name: "email",
							type: "email",
							autoComplete: "email",
							placeholder: "you@example.com",
							required: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "city",
						label: "City (optional)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "city",
							name: "city",
							autoComplete: "address-level2",
							placeholder: "Your city"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "service",
						label: "Service required",
						error: errors.service,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: service,
							onValueChange: setService,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								id: "service",
								className: "w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select a service" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: s.title,
								children: s.title
							}, s.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "Other / not sure",
								children: "Other / not sure"
							})] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "contact-method",
						label: "Preferred contact method",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: contactMethod,
							onValueChange: setContactMethod,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								id: "contact-method",
								className: "w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: [
								"Phone call",
								"WhatsApp",
								"Email"
							].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: m,
								children: m
							}, m)) })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "message",
							label: "Your requirement",
							error: errors.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "message",
								name: "message",
								rows: 5,
								placeholder: "For example: salaried ITR filing for FY 2024-25 with capital gains",
								required: true
							})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute -left-[9999px]",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "company_website",
					children: "Leave this field empty"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "company_website",
					name: "company_website",
					tabIndex: -1,
					autoComplete: "off"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				size: "lg",
				className: "mt-7 w-full sm:w-auto",
				children: "Send enquiry"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-muted-foreground",
				children: "Enquiries are reviewed by the tax professional handling your case. No sensitive documents should be sent through this form."
			})
		]
	});
}
function Field({ id, label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor: id,
			className: "mb-2 block text-sm",
			children: label
		}),
		children,
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			role: "alert",
			className: "mt-2 text-xs text-destructive",
			children: error
		})
	] });
}
var Route$10 = createFileRoute("/contact")({
	head: () => ({
		meta: pageMeta({
			title: "Contact Poornima Tax Solution | Book a Tax Consultation",
			description: `Book a tax consultation with Poornima Tax Solution. Call ${site.phoneDisplay}, WhatsApp us or email ${site.email} for ITR, GST, TDS and PAN support.`,
			path: "/contact"
		}),
		links: canonical("/contact")
	}),
	component: Contact
});
function Contact() {
	const items = [
		{
			icon: Phone,
			label: "Call",
			value: site.phoneDisplay,
			href: telHref
		},
		{
			icon: MessageCircle,
			label: "WhatsApp",
			value: site.phoneDisplay,
			href: waHref
		},
		{
			icon: Mail,
			label: "Email",
			value: site.email,
			href: mailHref
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: "Book a consultation",
		intro: "Share your requirement and we will reply with the next step, documents needed and an honest timeline.",
		crumbs: [{
			label: "Home",
			to: "/"
		}]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-12 lg:grid-cols-[1.4fr_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-sm border border-border bg-card p-6 sm:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: "Send an enquiry"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "space-y-4",
			children: [items.map(({ icon: Icon, label, value, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href,
				target: label === "WhatsApp" ? "_blank" : void 0,
				rel: "noopener noreferrer",
				className: "flex items-center gap-4 rounded-sm border border-border bg-card p-5 hover:border-accent",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-6 text-accent",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-xs tracking-widest text-muted-foreground uppercase",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary",
					children: value
				})] })]
			}, label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: [
					"Serving clients across ",
					site.areaServed,
					". Consultations available by call, WhatsApp or in person."
				]
			})]
		})]
	}) })] });
}
var Route$9 = createFileRoute("/llms-full.txt")({ server: { handlers: { GET: () => {
	const lines = [];
	lines.push("# Poornima Tax Solution — Full Content for AI Agents");
	lines.push(`> ${site.description} Your tax. Our priority.`);
	lines.push(`> Phone: ${site.phoneDisplay} | Email: ${site.email} | WhatsApp: +${site.whatsapp}`);
	lines.push(`> Mathura, India | Serving individuals, professionals, startups and businesses across India.`);
	lines.push("");
	lines.push(`Base URL: ${BASE_URL}`);
	lines.push("");
	lines.push("## Services");
	lines.push("");
	for (const s of services) {
		lines.push(`### ${s.title}`);
		lines.push(`Category: ${s.tag}`);
		lines.push(`URL: ${BASE_URL}/services/${s.slug}`);
		lines.push("");
		lines.push("Short answer:");
		lines.push(s.short);
		lines.push("");
		lines.push("Detailed answer:");
		lines.push(s.answer);
		lines.push("");
		lines.push("What's included:");
		for (const i of s.includes) lines.push(`- ${i}`);
		lines.push("");
		lines.push("How the process works:");
		for (const p of s.process) lines.push(`1. ${p.step}: ${p.detail}`);
		lines.push("");
		lines.push("Documents required:");
		for (const d of s.documents) lines.push(`- ${d}`);
		lines.push("");
		lines.push("Frequently asked questions:");
		for (const f of s.faqs) {
			lines.push(`Q: ${f.q}`);
			lines.push(`A: ${f.a}`);
			lines.push("");
		}
		lines.push("");
	}
	lines.push("## General FAQs");
	lines.push("");
	for (const f of generalFaqs) {
		lines.push(`Q: ${f.q}`);
		lines.push(`A: ${f.a}`);
		lines.push("");
	}
	lines.push("## Insights / Blog");
	lines.push("");
	for (const p of posts) {
		lines.push(`### ${p.title}`);
		lines.push(`Category: ${p.category} | Published: ${p.publishedAt} | Reading time: ${p.readingTime}`);
		lines.push(`URL: ${BASE_URL}/blog/${p.slug}`);
		lines.push("");
		lines.push(`Excerpt: ${p.excerpt}`);
		lines.push("");
		for (const sec of p.sections) {
			lines.push(`### ${sec.heading}`);
			for (const b of sec.body) lines.push(b);
			lines.push("");
		}
		lines.push("");
	}
	lines.push("## Key Pages");
	lines.push(`- Home: ${BASE_URL}/`);
	lines.push(`- About: ${BASE_URL}/about`);
	lines.push(`- Services: ${BASE_URL}/services`);
	lines.push(`- Blog: ${BASE_URL}/blog`);
	lines.push(`- Contact: ${BASE_URL}/contact`);
	lines.push(`- Privacy policy: ${BASE_URL}/privacy-policy`);
	lines.push(`- Terms: ${BASE_URL}/terms`);
	lines.push(`- Why us: ${BASE_URL}/why-us`);
	lines.push("");
	const text = lines.join("\n");
	return new Response(text, { headers: {
		"Content-Type": "text/plain; charset=utf-8",
		"Cache-Control": "public, max-age=300, s-maxage=600"
	} });
} } } });
var Route$8 = createFileRoute("/privacy-policy")({
	head: () => ({
		meta: pageMeta({
			title: "Privacy Policy | Poornima Tax Solution",
			description: "How Poornima Tax Solution collects, uses and protects the personal and financial information you share with us.",
			path: "/privacy-policy"
		}),
		links: canonical("/privacy-policy")
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Privacy Policy",
		intro: "How we handle the information you share with us.",
		crumbs: [{
			label: "Home",
			to: "/"
		}]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-3xl space-y-5 text-base/8 text-foreground/85",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [site.name, " collects only the details needed to respond to your enquiry and deliver the services you request, such as your name, contact details and tax documents."] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Your information is used solely to prepare filings, communicate with you and meet legal obligations. We do not sell or rent personal data to third parties." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Documents are stored securely and shared only with government portals or authorities as required for your filings." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"You may request access to, correction of, or deletion of your data at any time by emailing ",
				site.email,
				"."
			] })
		]
	}) })] })
});
var Route$7 = createFileRoute("/services")({ component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
var Route$6 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		"/",
		"/services",
		"/about",
		"/why-us",
		"/blog",
		"/contact",
		"/privacy-policy",
		"/terms",
		...services.map((s) => `/services/${s.slug}`),
		...posts.map((p) => `/blog/${p.slug}`)
	].map((p) => `  <url><loc>${BASE_URL}${p}</loc></url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: { "Content-Type": "application/xml" } });
} } } });
var Route$5 = createFileRoute("/terms")({
	head: () => ({
		meta: pageMeta({
			title: "Terms & Disclaimer | Poornima Tax Solution",
			description: "Terms of use and disclaimer for the Poornima Tax Solution website and the general tax information published on it.",
			path: "/terms"
		}),
		links: canonical("/terms")
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Terms & Disclaimer",
		intro: "Please read these terms before using this website.",
		crumbs: [{
			label: "Home",
			to: "/"
		}]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-3xl space-y-5 text-base/8 text-foreground/85",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The content on this website is general information and does not constitute professional advice for your specific situation." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"Tax laws, rates and thresholds change frequently. Please consult ",
				site.name,
				" before acting on any information published here."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Engagement for services begins only after scope and fees are confirmed with you in writing." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [site.name, " is not liable for decisions made solely on the basis of website content."] })
		]
	}) })] })
});
var Route$4 = createFileRoute("/why-us")({
	head: () => ({
		meta: pageMeta({
			title: "Why Choose Poornima Tax Solution | Reliable, Transparent Tax Experts",
			description: "Why clients choose Poornima Tax Solution: deadlines tracked, transparent fees, direct access to your tax professional and advice that looks ahead.",
			path: "/why-us"
		}),
		links: canonical("/why-us")
	}),
	component: WhyUs
});
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Why us",
			title: "Why clients choose Poornima",
			intro: "Four commitments shape how every return, registration and compliance file is handled.",
			crumbs: [{
				label: "Home",
				to: "/"
			}]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2",
			children: whyUs.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-sm border border-border bg-card p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
						className: "size-7 text-accent",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-2xl text-primary",
						children: w.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base/7 text-muted-foreground",
						children: w.detail
					})
				]
			}, w.title))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
var Route$3 = createFileRoute("/blog/")({
	head: () => ({
		meta: pageMeta({
			title: "Tax Insights & Guides for India | Poornima Tax Solution",
			description: "Plain-language guides on ITR filing, GST, TDS and tax planning in India, written by the Poornima Tax Solution team.",
			path: "/blog"
		}),
		links: canonical("/blog")
	}),
	component: BlogIndex
});
function BlogIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Insights",
		title: "Tax guides & insights",
		intro: "Practical, plain-language explanations of the filings and deadlines that matter to Indian taxpayers.",
		crumbs: [{
			label: "Home",
			to: "/"
		}]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: posts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "flex flex-col rounded-sm border border-border bg-card p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs tracking-widest text-accent uppercase",
					children: [
						p.category,
						" · ",
						p.readingTime
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-xl text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/blog/$slug",
						params: { slug: p.slug },
						className: "hover:text-accent",
						children: p.title
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 flex-1 text-sm/6 text-muted-foreground",
					children: p.excerpt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
					dateTime: p.publishedAt,
					className: "mt-4 text-xs text-muted-foreground",
					children: new Date(p.publishedAt).toLocaleDateString("en-IN", { dateStyle: "long" })
				})
			]
		}, p.slug))
	}) })] });
}
var Route$2 = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const post = postBySlug(params.slug);
		if (!post) throw notFound();
		return { post };
	},
	head: ({ loaderData, params }) => {
		if (!loaderData) return { meta: [{ title: "Article not found" }, {
			name: "robots",
			content: "noindex"
		}] };
		const p = loaderData.post;
		const path = `/blog/${params.slug}`;
		return {
			meta: [
				...pageMeta({
					title: p.seoTitle,
					description: p.seoDescription,
					path,
					type: "article"
				}),
				{
					property: "article:published_time",
					content: p.publishedAt
				},
				{
					property: "article:section",
					content: p.category
				}
			],
			links: canonical(path),
			scripts: [ldScript({
				"@context": "https://schema.org",
				"@type": "Article",
				headline: p.title,
				description: p.seoDescription,
				datePublished: p.publishedAt,
				dateModified: p.publishedAt,
				mainEntityOfPage: abs(path),
				author: {
					"@type": "Organization",
					name: site.name,
					url: BASE_URL
				},
				publisher: {
					"@type": "Organization",
					name: site.name,
					url: BASE_URL
				}
			}), ldScript(breadcrumbLd([
				{
					name: "Home",
					item: abs("/")
				},
				{
					name: "Insights",
					item: abs("/blog")
				},
				{
					name: p.title,
					item: abs(path)
				}
			]))]
		};
	},
	notFoundComponent: PostNotFound,
	component: PostPage
});
function PostNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "text-3xl",
		children: "Article not found"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/blog",
		className: "mt-4 inline-block text-primary underline",
		children: "All articles"
	})] });
}
function PostPage() {
	const { post: p } = Route$2.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: `${p.category} · ${p.readingTime}`,
			title: p.title,
			intro: p.excerpt,
			crumbs: [{
				label: "Home",
				to: "/"
			}, {
				label: "Insights",
				to: "/blog"
			}]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mx-auto max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						"By ",
						site.name,
						" · ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
							dateTime: p.publishedAt,
							children: new Date(p.publishedAt).toLocaleDateString("en-IN", { dateStyle: "long" })
						})
					]
				}),
				p.sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl",
						children: s.heading
					}), s.body.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base/8 text-foreground/85",
						children: b
					}, b))]
				}, s.heading)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-12 rounded-sm border border-border bg-card p-5 text-sm text-muted-foreground",
					children: "This article is general information, not advice for your specific case. Rules and thresholds change; contact us to confirm what applies to you."
				})
			]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
var Route$1 = createFileRoute("/services/")({
	head: () => ({
		meta: pageMeta({
			title: "Tax Services: ITR, GST, TDS, PAN & Tax Planning | Poornima Tax Solution",
			description: "Explore our tax services in India: income tax return filing, tax planning, TDS compliance, business taxation, GST registration and filing, and PAN services.",
			path: "/services"
		}),
		links: canonical("/services"),
		scripts: [ldScript(breadcrumbLd([{
			name: "Home",
			item: abs("/")
		}, {
			name: "Services",
			item: abs("/services")
		}])), ldScript({
			"@context": "https://schema.org",
			"@type": "ItemList",
			itemListElement: services.map((s, i) => ({
				"@type": "ListItem",
				position: i + 1,
				name: s.title,
				url: abs(`/services/${s.slug}`)
			}))
		})]
	}),
	component: ServicesPage
});
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Services",
			title: "Tax & compliance services",
			intro: "From yearly ITR filing to recurring GST and TDS compliance, each service is handled by a professional who explains the scope and fees before work starts.",
			crumbs: [{
				label: "Home",
				to: "/"
			}]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2",
			children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-sm border border-border bg-card p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-accent uppercase",
						children: s.tag
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-2xl text-primary",
						children: s.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm/6 text-muted-foreground",
						children: s.answer
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services/$slug",
						params: { slug: s.slug },
						className: "mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-accent",
						children: ["View details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				]
			}, s.slug))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
var Route = createFileRoute("/services/$slug")({
	loader: ({ params }) => {
		const service = serviceBySlug(params.slug);
		if (!service) throw notFound();
		return { service };
	},
	head: ({ loaderData, params }) => {
		if (!loaderData) return { meta: [{ title: "Service not found" }, {
			name: "robots",
			content: "noindex"
		}] };
		const s = loaderData.service;
		const path = `/services/${params.slug}`;
		const description = s.answer.length > 158 ? s.short : s.answer;
		return {
			meta: pageMeta({
				title: `${s.title} in India | Poornima Tax Solution`,
				description,
				path
			}),
			links: canonical(path),
			scripts: [
				ldScript(serviceLd({
					name: s.title,
					description: s.answer,
					path
				})),
				ldScript(faqLd(s.faqs)),
				ldScript(howToLd(s.process, s.title, s.answer, path)),
				ldScript(breadcrumbLd([
					{
						name: "Home",
						item: abs("/")
					},
					{
						name: "Services",
						item: abs("/services")
					},
					{
						name: s.title,
						item: abs(path)
					}
				]))
			]
		};
	},
	notFoundComponent: ServiceNotFound,
	component: ServiceDetail
});
function ServiceNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "text-3xl",
		children: "Service not found"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/services",
		className: "mt-4 inline-block text-primary underline",
		children: "View all services"
	})] });
}
function ServiceDetail() {
	const { service: s } = Route.useLoaderData();
	const others = services.filter((o) => o.slug !== s.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: s.tag,
			title: s.title,
			intro: s.short,
			crumbs: [{
				label: "Home",
				to: "/"
			}, {
				label: "Services",
				to: "/services"
			}]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[1.4fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-2xl",
					children: [
						"What is ",
						s.title.toLowerCase(),
						"?"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base/8 text-foreground/85",
					children: s.answer
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-12 text-2xl",
					children: "What's included"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-3",
					children: s.includes.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-base/7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
								className: "mt-1 size-5 shrink-0 text-accent",
								"aria-hidden": "true"
							}),
							" ",
							i
						]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-12 text-2xl",
					children: "How the process works"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-5 space-y-5",
					children: s.process.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-2xl text-accent",
							children: ["0", i + 1]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg text-primary",
							children: p.step
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm/6 text-muted-foreground",
							children: p.detail
						})] })]
					}, p.step))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-12 text-2xl",
					children: "Frequently asked questions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { faqs: s.faqs })
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-6 lg:sticky lg:top-24 lg:self-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-sm border border-border bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl",
							children: "Documents required"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 list-disc space-y-2 pl-5 text-sm/6 text-muted-foreground",
							children: s.documents.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: d }, d))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-6 w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Book a Consultation"
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-sm border border-border bg-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl",
						children: "Related services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm",
						children: others.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services/$slug",
							params: { slug: o.slug },
							className: "text-primary hover:text-accent",
							children: o.title
						}) }, o.slug))
					})]
				})]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
var IndexRoute = Route$13.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$14
});
var AboutRoute = Route$12.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$14
});
var BlogRoute = Route$11.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$14
});
var ContactRoute = Route$10.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$14
});
var LlmsFullDottxtRoute = Route$9.update({
	id: "/llms-full.txt",
	path: "/llms-full.txt",
	getParentRoute: () => Route$14
});
var PrivacyPolicyRoute = Route$8.update({
	id: "/privacy-policy",
	path: "/privacy-policy",
	getParentRoute: () => Route$14
});
var ServicesRoute = Route$7.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$14
});
var SitemapDotxmlRoute = Route$6.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$14
});
var TermsRoute = Route$5.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$14
});
var WhyUsRoute = Route$4.update({
	id: "/why-us",
	path: "/why-us",
	getParentRoute: () => Route$14
});
var BlogIndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => BlogRoute
});
var BlogSlugRoute = Route$2.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => BlogRoute
});
var ServicesIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => ServicesRoute
});
var ServicesSlugRoute = Route.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ServicesRoute
});
var BlogRouteChildren = {
	BlogSlugRoute,
	BlogIndexRoute
};
var BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
var ServicesRouteChildren = {
	ServicesSlugRoute,
	ServicesIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	BlogRoute: BlogRouteWithChildren,
	ContactRoute,
	LlmsFullDottxtRoute,
	PrivacyPolicyRoute,
	ServicesRoute: ServicesRoute._addFileChildren(ServicesRouteChildren),
	SitemapDotxmlRoute,
	TermsRoute,
	WhyUsRoute
};
var routeTree = Route$14._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
