import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { services, site, telHref, waHref } from "@/data/site";

type Errors = Partial<Record<"name" | "phone" | "email" | "service" | "message", string>>;

export function LeadForm() {
  const [service, setService] = useState("");
  const [contactMethod, setContactMethod] = useState("Phone call");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users leave this empty.
    if ((data.get("company_website") as string)?.trim()) return;

    const name = (data.get("name") as string)?.trim() ?? "";
    const phone = (data.get("phone") as string)?.trim() ?? "";
    const email = (data.get("email") as string)?.trim() ?? "";
    const message = (data.get("message") as string)?.trim() ?? "";

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your full name.";
    if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, "").slice(-10)))
      next.phone = "Enter a valid 10-digit Indian mobile number.";
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

  if (sent) {
    return (
      <div className="rounded-lg border border-accent/40 bg-card p-8 shadow-soft">
        <h3 className="text-2xl">Thank you. Your enquiry has been received.</h3>
        <p className="mt-3 text-base/7 text-muted-foreground">
          We will get back to you on your preferred contact method. For anything urgent, call{" "}
          <a href={telHref} className="font-medium text-primary underline">
            {site.phoneDisplay}
          </a>{" "}
          or message us on{" "}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline"
          >
            WhatsApp
          </a>
          .
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setSent(false)}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-lg border border-border bg-card p-6 shadow-soft sm:p-8"
    >
      <h2 className="text-2xl">Request a consultation</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Share a few details and we will respond with the next step and documents needed.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" error={errors.name}>
          <Input id="name" name="name" autoComplete="name" placeholder="Your name" required />
        </Field>
        <Field id="phone" label="Mobile number" error={errors.phone}>
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="10-digit mobile"
            required
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
        </Field>
        <Field id="city" label="City (optional)">
          <Input id="city" name="city" autoComplete="address-level2" placeholder="Your city" />
        </Field>

        <Field id="service" label="Service required" error={errors.service}>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger id="service" className="w-full">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s.slug} value={s.title}>
                  {s.title}
                </SelectItem>
              ))}
              <SelectItem value="Other / not sure">Other / not sure</SelectItem>
            </SelectContent>
          </Select>
        </Field>

        <Field id="contact-method" label="Preferred contact method">
          <Select value={contactMethod} onValueChange={setContactMethod}>
            <SelectTrigger id="contact-method" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {["Phone call", "WhatsApp", "Email"].map((m) => (
                <SelectItem key={m} value={m}>
                  {m}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <div className="sm:col-span-2">
          <Field id="message" label="Your requirement" error={errors.message}>
            <Textarea
              id="message"
              name="message"
              rows={5}
              placeholder="For example: salaried ITR filing for FY 2024-25 with capital gains"
              required
            />
          </Field>
        </div>
      </div>

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company_website">Leave this field empty</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <Button type="submit" size="lg" className="mt-7 w-full sm:w-auto">
        Send enquiry
      </Button>
      <p className="mt-3 text-xs text-muted-foreground">
        Enquiries are reviewed by the tax professional handling your case. No sensitive documents
        should be sent through this form.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id} className="mb-2 block text-sm">
        {label}
      </Label>
      {children}
      {error && (
        <p role="alert" className="mt-2 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
