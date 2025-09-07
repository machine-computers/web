import type { Config } from "tailwindcss";
import baseConfig from "@machine/design/tailwind-config";

export default {
  ...baseConfig,
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "../../packages/design/src/**/*.{ts,tsx}",
  ],
} satisfies Config;
