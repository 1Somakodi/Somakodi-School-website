// components/index.ts
// IMPORTANT:
// - No "use client"
// - No re-exports of Navbar or Footer
// - Only shared, layout-safe exports

export { Layout } from "./layout";
export { FixedPlugin } from "./fixed-plugin";

// If later you need to expose ONLY pure UI components (no hooks, no context),
// you may add them here cautiously.
