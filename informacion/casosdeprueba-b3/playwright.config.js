// @ts-check
import { defineConfig, devices } from "@playwright/test";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./test-personales",

  /* Paralelismo */
  fullyParallel: true,

  /* Evita subir test.only a CI */
  forbidOnly: !!process.env.CI,

  /* Reintentos */
  retries: process.env.CI ? 2 : 0,

  /* Workers */
  workers: process.env.CI ? 1 : undefined,

  /* ✅ REPORTERS (HTML + ALLURE) */
  reporter: [["html", { open: "never" }], ["allure-playwright"]],

  /* Config compartida */
  use: {
    /* URL base (opcional, podés usarla después) */
    // baseURL: 'https://opensource-demo.orangehrmlive.com',

    /* Trace para debugging */
    trace: "on-first-retry",

    /* Evidencia automática */
    screenshot: "only-on-failure",
    video: "retain-on-failure",

    /* Timeout opcional */
    // actionTimeout: 10000,
  },

  /* Browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],

  /* Server local (no lo necesitás ahora) */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
