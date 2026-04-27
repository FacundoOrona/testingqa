// @ts-check
import { defineConfig, devices } from "@playwright/test";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./tests",
  timeout: 60000,
  expect: {
    timeout: 15000,
  },

  /* Paralelismo */
  fullyParallel: true,

  /* Seguridad en CI */
  forbidOnly: !!process.env.CI,

  /* Reintentos */
  retries: process.env.CI ? 2 : 0,

  /* Workers */
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ["html"], // reporte visual de Playwright
    ["allure-playwright"], // integración con Allure
  ],

  /* Configuración global */
  use: {
    // baseURL: 'http://localhost:3000',

    trace: "on-first-retry",

    /* 👇 CLAVE para Allure */
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  /* Navegadores */
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

  /* Servidor local (opcional) */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
