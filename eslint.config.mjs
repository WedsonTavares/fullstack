// Flat ESLint config using the official Next.js config to ensure the Next plugin is applied.
import next from "eslint-config-next";

export default [
  // Use Next's recommended flat config
  next,
  // Project ignores and custom rules
  {
    ignores: ["node_modules/**", ".next/**"],
  },
  {
    rules: {
      // exemplo: 'no-console': 'warn'
    },
  },
];
