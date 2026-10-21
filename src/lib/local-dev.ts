/**
 * Local development helpers.
 *
 * `import.meta.env.DEV` is statically replaced with `false` by Vite when it
 * builds for production - in BOTH the client bundle and the server bundle.
 * Every check built on top of it therefore evaluates to "off" in the deployed
 * site, so the local-only behaviour can never be reached in production even
 * if someone spoofs a Host header.
 */

export const isDevBuild = import.meta.env.DEV;

const LOCAL_HOSTNAMES = new Set(["localhost", "127.0.0.1", "::1", "[::1]"]);

export function isLocalHostname(hostname: string | null | undefined): boolean {
  if (!hostname) return false;
  return LOCAL_HOSTNAMES.has(hostname.trim().toLowerCase());
}

/**
 * Browser side check.
 *
 * True only when the page is running from the dev server AND the browser is
 * talking to the local machine. Used to skip the admin login screen while
 * developing.
 */
export function isLocalDevBrowser(): boolean {
  if (!isDevBuild) return false;
  if (typeof window === "undefined") return false;
  return isLocalHostname(window.location.hostname);
}
