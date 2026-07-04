import { configDefaults, defineConfig } from "vitest/config";

const isCI = process.env.CI?.toLowerCase() === "true";

export default defineConfig({
  test: {
    clearMocks: true,
    ...(isCI
      ? { hookTimeout: 30000, testTimeout: 30000 }
      : { exclude: ["test/e2e/**", ...configDefaults.exclude] }),
  },
});
