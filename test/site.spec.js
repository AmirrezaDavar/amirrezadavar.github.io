const { test, expect } = require("@playwright/test");
const AxeBuilder = require("@axe-core/playwright").default;

const pages = [
  ["/", "Amirreza Davar"],
  ["/research/", "Research"],
  ["/publications/", "Publications"],
  ["/projects/", "Projects"],
  ["/cv/", "CV"],
  ["/news/", "News"],
  ["/contact/", "Contact"],
  ["/projects/chicgrasp/", "ChicGrasp"],
  ["/projects/chicken-manipulation/", "Learning-based deformable-object manipulation"],
  ["/projects/contact-aware/", "Contact-aware deformable tool manipulation"],
];

for (const [url, heading] of pages) {
  test(`${url} renders accessibly without overflow`, async ({ page }) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(url);
    expect(response.status()).toBe(200);
    await expect(page.locator("h1")).toHaveText(heading);
    expect(await page.locator('link[rel="canonical"]').getAttribute("href")).toBe(`https://amirrezadavar.github.io${url}`);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    expect(
      await page
        .locator("img")
        .evaluateAll((images) => images.filter((image) => image.complete && image.naturalWidth === 0).map((image) => image.src))
    ).toEqual([]);
    const accessibility = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(accessibility.violations.map(({ id, nodes }) => ({ id, targets: nodes.map(({ target }) => target) }))).toEqual([]);
    expect(errors).toEqual([]);
  });
}

test("navigation, citations, theme persistence, and screenshots", async ({ page }, testInfo) => {
  await page.goto("/");
  await page.screenshot({ path: `artifacts/home-${testInfo.project.name}.png`, fullPage: true });
  if (testInfo.project.name === "mobile") {
    const toggle = page.getByRole("button", { name: "Toggle navigation" });
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
  }
  const nav = page.getByRole("navigation", { name: "Main navigation" });
  await nav.getByRole("link", { name: "Publications", exact: true }).click();
  await expect(page).toHaveURL(/\/publications\/$/);
  const details = page.locator("details.citation").first();
  await details.locator("summary").focus();
  await page.keyboard.press("Enter");
  await expect(details).toHaveAttribute("open", "");
  await expect(details.locator("pre")).toContainText("@article");
  if (testInfo.project.name === "mobile") await page.getByRole("button", { name: "Toggle navigation" }).click();
  await page.getByRole("button", { name: "Change color theme" }).click();
  await page.getByRole("button", { name: "Change color theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  const accessibility = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  expect(accessibility.violations.map(({ id, nodes }) => ({ id, targets: nodes.map(({ target }) => target) }))).toEqual([]);
  await page.screenshot({ path: `artifacts/publications-dark-${testInfo.project.name}.png`, fullPage: true });
});

test("tablet navigation and demo playback", async ({ page }) => {
  await page.setViewportSize({ width: 700, height: 1000 });
  await page.goto("/projects/chicgrasp/");
  const toggle = page.getByRole("button", { name: "Toggle navigation" });
  await toggle.click();
  await expect(page.getByRole("navigation").getByRole("link", { name: "Contact", exact: true })).toBeVisible();
  await toggle.click();
  await page.locator("video").evaluate(async (video) => {
    video.muted = true;
    await video.play();
  });
  await expect.poll(() => page.locator("video").evaluate((video) => video.currentTime)).toBeGreaterThan(0);
});

test("Selected shows exactly ChicGrasp and the review; All restores every entry", async ({ page }) => {
  await page.goto("/publications/");
  const browser = page.locator("[data-publications]");
  await expect(browser.locator(".publication-entry:visible")).toHaveCount(2);
  await expect(browser.locator("#davar2026chicgrasp")).toBeVisible();
  await expect(browser.locator("#mahmoudi2024survey")).toBeVisible();
  await expect(browser.locator("#mahmoudi2026koopman")).toBeHidden();
  await expect(browser.locator("#davar2025chicgrasp_poster")).toBeHidden();
  await browser.getByRole("button", { name: "All", exact: true }).click();
  await expect(browser.locator(".publication-entry:visible")).toHaveCount(4);
  await expect(browser.getByRole("heading", { name: "Conference presentations" })).toBeVisible();
  await browser.getByRole("button", { name: "Selected", exact: true }).focus();
  await page.keyboard.press("Enter");
  await expect(browser.locator(".publication-entry:visible")).toHaveCount(2);
  await page.goto("/");
  await expect(page.locator(".home-publications .publication-entry")).toHaveCount(2);
  await expect(page.locator(".home-publications #mahmoudi2024survey")).toBeVisible();
});
