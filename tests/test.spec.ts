import { test, expect } from "@playwright/test";

test("test 1", async ({ page }) => {
  await page.goto(
    "https://testpages.eviltester.com/styled/webdriver-example-page"
  );
  await page.getByText("A simple web page for").click();
  await expect(page.getByText("A paragraph of text")).toBeVisible();
  await page.getByText("Another paragraph of text").click();
  await page.getByLabel("Enter some numbers:").click();
  await page.getByLabel("Enter some numbers:").fill("100");
  await page.getByRole("button", { name: "Process On Server" }).click();
  await page.getByRole("link", { name: "Show From Link" }).click();

  await page.goto("https://testpages.eviltester.com/styled/iframes-test.html");
  await expect(page.locator("body")).toContainText("iFrame Example List");
  await page
    .frameLocator("#thedynamichtml")
    .getByText("iFrame List Item 0")
    .click();
  await expect(
    page
      .frameLocator("#thedynamichtml")
      .getByRole("heading", { name: "iFrame" })
  ).toBeVisible();
});
