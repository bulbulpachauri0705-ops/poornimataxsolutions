import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useState } from "react";

import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin/forgot-password")({
  component: ForgotPassword,
});

const NAVY = "#062B49";
const GOLD = "#D9A928";
const BORDER = "#E8ECF0";
const BG = "#F4F6F9";
const MUTED = "#8A94A6";

function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Always show the same success message regardless of whether the email exists
    // to prevent user enumeration attacks.
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/admin/reset-password`,
    });
    setLoading(false);
    setSent(true);
  }

  return (
    <div
      className="flex min-h-screen items-center justify-center p-4"
      style={{ background: BG }}
    >
      <div
        className="w-full max-w-sm rounded-2xl p-8"
        style={{
          background: "#fff",
          border: `1px solid ${BORDER}`,
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        }}
      >
        <div className="mb-8 flex flex-col items-center gap-3">
          <span
            className="flex size-12 items-center justify-center rounded-xl text-lg font-bold"
            style={{ background: GOLD, color: NAVY }}
          >
            P
          </span>
          <div className="text-center">
            <p className="text-base font-bold" style={{ color: NAVY }}>
              Poornima Tax Solution
            </p>
            <p className="text-xs" style={{ color: MUTED }}>
              Reset your password
            </p>
          </div>
        </div>

        {sent ? (
          <div className="text-center space-y-4">
            <div
              className="mx-auto flex size-12 items-center justify-center rounded-full"
              style={{ background: "#E8F0E8", color: "#1A7A1A" }}
            >
              <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium" style={{ color: NAVY }}>
                Check your email
              </p>
              <p className="text-xs mt-1" style={{ color: MUTED }}>
                If an account exists for <strong>{email}</strong>, a password reset link has been sent.
              </p>
            </div>
            <button
              onClick={() => router.navigate({ to: "/admin/login" })}
              className="w-full rounded-lg py-2.5 text-sm font-semibold"
              style={{ background: NAVY, color: "#fff" }}
            >
              Back to Sign in
            </button>
          </div>
        ) : (
          <>
            <p className="text-xs text-center mb-6" style={{ color: MUTED }}>
              Enter your admin email address and we'll send you a link to reset your password.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="mb-1.5 block text-xs font-medium"
                  style={{ color: MUTED }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="w-full rounded-lg px-3 py-2.5 text-sm outline-none"
                  style={{
                    background: BG,
                    border: `1px solid ${BORDER}`,
                    color: NAVY,
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg py-2.5 text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ background: NAVY, color: "#fff" }}
              >
                {loading ? "Sending…" : "Send Reset Link"}
              </button>
              <p className="text-center text-xs" style={{ color: MUTED }}>
                <Link to="/admin/login" className="hover:underline" style={{ color: GOLD }}>
                  Back to Sign in
                </Link>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}