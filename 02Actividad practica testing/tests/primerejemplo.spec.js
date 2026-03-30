import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.google.com/?zx=1774477780879&no_sw_cr=1");
  await expect(page.getByRole("img", { name: "Google" })).toBeVisible();
  await expect(page.getByRole("search")).toContainText("Buscar con Google");
  await page.getByRole("button", { name: "Voy a tener suerte" }).click();
  await expect(
    page.getByRole("link", { name: "Google doodles" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Google doodles" }).click();
  await expect(page.getByRole("search")).toContainText("Voy a tener suerte");
  await expect(page.getByRole("search")).toContainText("Modo IA");
  await page.getByRole("img", { name: "Google" }).click();
  await expect(page.getByRole("combobox", { name: "Buscar" })).toBeEmpty();
  await page.getByRole("combobox", { name: "Buscar" }).click();
  await page.getByRole("combobox", { name: "Buscar" }).click();
  await page.getByRole("combobox", { name: "Buscar" }).click();
  await page.getByRole("combobox", { name: "Buscar" }).fill("tiger woods");
  await page.goto(
    "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dtiger%2Bwoods%26sca_esv%3D3902f2b246b46b37%26source%3Dhp%26ei%3D3GTEabfwDde05OUPgsr5wA4%26iflsig%3DAFdpzrgAAAAAacRy7BTCY5vxlUA8RnhP5jvXQ1of0red%26ved%3D0ahUKEwi3zoXgj7yTAxVXGrkGHQJlHugQ4dUDCBQ%26uact%3D5%26oq%3Dtiger%2Bwoods%26gs_lp%3DEgdnd3Mtd2l6Igt0aWdlciB3b29kczILEC4YgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIuIsEUNXpA1jLhQRwBHgAkAEAmAFkoAHxCKoBBDEzLjG4AQPIAQD4AQGYAhKgAqsJqAIKwgIKEAAYAxjqAhiPAcICChAuGAMY6gIYjwHCAggQABiABBixA8ICERAuGIAEGLEDGNEDGIMBGMcBwgIOEC4YgAQYsQMY0QMYxwHCAggQLhiABBixA8ICDhAAGIAEGLEDGIMBGIoFwgIFEC4YgATCAg4QLhiABBixAxiDARiKBcICERAuGIAEGLEDGIMBGMcBGK8BwgIJEC4YgAQYChgLwgIPEC4YgAQYsQMYgwEYChgLwgIPEAAYgAQYsQMYgwEYChgLwgIJEAAYgAQYChgLmANn8QWrL2OvsYchkJIHBDE2LjKgB9fEAbIHBDEyLjK4B6AJwgcGMC4xNi4yyAcqgAgA%26sclient%3Dgws-wiz%26sei%3DhmXEad2gHPry5OUP-MGzuA0&q=EgS-ZxHGGIbLkc4GIjDguRFr8iItjPaGEmIOrfn-ncrw_3ry-bWHCDmz6uD5X73iadIbUUbaao4luP_0V-kyAVJaAUM",
  );
  await page
    .locator('iframe[name="a-gfet6vmkk2y8"]')
    .contentFrame()
    .getByRole("checkbox", { name: "No soy un robot" })
    .click();
  await page
    .locator('iframe[name="c-gfet6vmkk2y8"]')
    .contentFrame()
    .locator('[id="11"]')
    .click();
  await page
    .locator('iframe[name="c-gfet6vmkk2y8"]')
    .contentFrame()
    .locator('[id="15"]')
    .click();
  await page
    .locator('iframe[name="c-gfet6vmkk2y8"]')
    .contentFrame()
    .locator('[id="7"]')
    .click();
  await page
    .locator('iframe[name="c-gfet6vmkk2y8"]')
    .contentFrame()
    .locator('[id="5"]')
    .click();
  await page
    .locator('iframe[name="c-gfet6vmkk2y8"]')
    .contentFrame()
    .locator('[id="10"]')
    .click();
  await page
    .locator('iframe[name="c-gfet6vmkk2y8"]')
    .contentFrame()
    .locator('[id="13"]')
    .click();
  await page
    .locator('iframe[name="c-gfet6vmkk2y8"]')
    .contentFrame()
    .locator('[id="13"]')
    .click();
  await page
    .locator('iframe[name="c-gfet6vmkk2y8"]')
    .contentFrame()
    .locator('[id="15"]')
    .click();
  await page
    .locator('iframe[name="c-gfet6vmkk2y8"]')
    .contentFrame()
    .getByRole("button", { name: "Verificar" })
    .click();
  await page
    .locator('iframe[name="c-gfet6vmkk2y8"]')
    .contentFrame()
    .locator('[id="6"]')
    .click();
  await page
    .locator('iframe[name="c-gfet6vmkk2y8"]')
    .contentFrame()
    .locator('[id="5"]')
    .click();
  await page
    .locator('iframe[name="c-gfet6vmkk2y8"]')
    .contentFrame()
    .locator('[id="7"]')
    .click();
  await page
    .locator('iframe[name="c-gfet6vmkk2y8"]')
    .contentFrame()
    .locator('[id="4"]')
    .click();
  await page
    .locator('iframe[name="c-gfet6vmkk2y8"]')
    .contentFrame()
    .getByRole("button", { name: "Verificar" })
    .click();
});
