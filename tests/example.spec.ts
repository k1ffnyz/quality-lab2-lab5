
import { test, expect } from '@playwright/test';

// Проверяю, что главная страница Playwright открывается
// и содержит правильный заголовок
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Проверяю, что заголовок страницы содержит слово Playwright
  await expect(page).toHaveTitle(/Playwright/);
});

// Проверяю переход к разделу Get started
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Нахожу ссылку Get started и нажимаю на неё
  await page.getByRole('link', { name: 'Get started' }).click();

  // Проверяю, что на открывшейся странице появился заголовок Installation
  await expect(
    page.getByRole('heading', { name: 'Installation' })
  ).toBeVisible();
});
