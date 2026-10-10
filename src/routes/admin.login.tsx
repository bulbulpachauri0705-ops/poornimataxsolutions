import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useState } from "react";

import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin/login")({
  component: AdminLogin,
});

const NAVY = "#062B49";
const GOLD = "#D9A928";
const BORDER = "#E8ECF0";
const BG = "#F4F6F9";
const MUTED = "#8A94A6";

function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (authError) {
      setError("Invalid email or password.");
      return;
    }
    await router.navigate({ to: "/admin" });
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
              Admin Panel
            </p>
          </div>
        </div>

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
          <div>
            <label
              className="mb-1.5 block text-xs font-medium"
              style={{ color: MUTED }}
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
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

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-xs" style={{ color: MUTED }}>
              <input
                type="checkbox"
                className="rounded"
                style={{ accentColor: NAVY }}
              />
              Remember me
            </label>
            <Link
              to="/admin/forgot-password"
              className="text-xs hover:underline"
              style={{ color: GOLD }}
            >
              Forgot Password?
            </Link>
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
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}