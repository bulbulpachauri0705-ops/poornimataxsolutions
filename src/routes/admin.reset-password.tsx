import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin/reset-password")({
  component: ResetPassword,
});

const NAVY = "#062B49";
const GOLD = "#D9A928";
const BORDER = "#E8ECF0";
const BG = "#F4F6F9";
const MUTED = "#8A94A6";

function ResetPassword() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    async function verifyToken() {
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);
      const token = params.get("access_token");
      const type = params.get("type");

      if (!token || type !== "recovery") {
        setError("Invalid or expired reset link. Please request a new one.");
        return;
      }

      const { error: verifyError } = await supabase.auth.verifyOTP({
        token,
        type: "recovery",
      });

      if (verifyError) {
        setError("Invalid or expired reset link. Please request a new one.");
        return;
      }

      setVerified(true);
    }

    verifyToken();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setLoading(true);
    const { error: updateError } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (updateError) {
      setError("Failed to update password. Please try again.");
      setLoading(false);
      return;
    }

    setLoading(false);
    await router.navigate({ to: "/admin/login" });
  }

  if (!verified && !error) {
    return (
      <div
        className="flex min-h-screen items-center justify-center p-4"
        style={{ background: BG }}
      >
        <div
          className="w-full max-w-sm rounded-2xl p-8 text-center"
          style={{
            background: "#fff",
            border: `1px solid ${BORDER}`,
          }}
        >
          <p className="text-sm" style={{ color: MUTED }}>
            Verifying reset link…
          </p>
        </div>
      </div>
    );
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
              Create new password
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="mb-1.5 block text-xs font-medium"
              style={{ color: MUTED }}
            >
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                minLength={8}
                className="w-full rounded-lg px-3 py-2.5 text-sm outline-none pr-10"
                style={{
                  background: BG,
                  border: `1px solid ${BORDER}`,
                  color: NAVY,
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs"
                style={{ color: MUTED }}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div>
            <label
              className="mb-1.5 block text-xs font-medium"
              style={{ color: MUTED }}
            >
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={8}
              className="w-full rounded-lg px-3 py-2.5 text-sm outline-none"
              style={{
                background: BG,
                border: `1px solid ${BORDER}`,
                color: NAVY,
              }}
            />
          </div>

          {error && (
            <p className="text-xs text-red-600">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg py-2.5 text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-60"
            style={{ background: NAVY, color: "#fff" }}
          >
            {loading ? "Resetting…" : "Reset Password"}
          </button>

          <p className="text-center text-xs" style={{ color: MUTED }}>
            <Link to="/admin/login" className="hover:underline" style={{ color: GOLD }}>
              Back to Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}