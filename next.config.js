/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

// Work around Node 25 exposing a malformed `localStorage` object in some
// environments (e.g. `{}` without Web Storage methods), which breaks SSR.
if (
  typeof globalThis.localStorage === "object" &&
  globalThis.localStorage !== null &&
  typeof globalThis.localStorage.getItem !== "function"
) {
  try {
    Reflect.deleteProperty(globalThis, "localStorage");
  } catch {
    globalThis.localStorage = undefined;
  }
}

/** @type {import("next").NextConfig} */
const config = {
  // Allow mobile devices on the local network to load Next.js dev assets.
  allowedDevOrigins: ["192.168.1.81", "*.local"],
};

export default config;
