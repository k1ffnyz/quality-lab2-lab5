
/// <reference types="node" />

import { defineConfig, devices } from '@playwright/test';

/**
 * Настройки Playwright для запуска автоматизированных тестов.
 */

export default defineConfig({
  // Папка, в которой находятся тесты
  testDir: './tests',

  // Запуск тестов параллельно
  fullyParallel: true,

  // Запрет запуска тестов с test.only в CI
  forbidOnly: !!process.env.CI,

  // Повторный запуск упавших тестов в CI
  retries: process.env.CI ? 2 : 0,

  // Количество рабочих процессов
  workers: process.env.CI ? 1 : undefined,

  // Формирование HTML-отчёта
  reporter: 'html',

  // Общие настройки браузеров
  use: {
    // Сохраняю трассировку при повторном запуске теста
    trace: 'on-first-retry',
  },

  // Браузеры, в которых запускаются тесты
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
