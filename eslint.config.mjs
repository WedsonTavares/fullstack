// Minimal flat ESLint config compatible with Next.js 15+.
// This avoids using the old "extends" key and avoids importing CommonJS-only packages.
export default [
  {
    ignores: ["node_modules/**", ".next/**"],
  },
  {
    // Project-level rules can go here. Keep empty to use defaults.
    rules: {},
  },
];
