import { browser } from 'k6/browser';
import { check } from 'k6';

export const scenario = {
  executor: 'shared-iterations',
  options: {
    browser: {
      type: 'chromium',
    },
  },
  vus: 2,
  iterations: 2,
};

export async function test() {
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await page.goto('https://test.k6.io/my_messages.php');

    await Promise.all([
      page.screenshot({ path: 'screenshots/home.png' }),
      page.locator('input[name="login"]').type('admin'),
      page.locator('input[name="password"]').type('123'),
    ])
    await page.screenshot({ path: 'screenshots/login-form-filled.png' });

    await Promise.all([
      page.waitForNavigation(),
      page.locator('input[type="submit"]').click(),
    ]);
    
    // Wait for react loading
    // await Promise.all([
    //   page.locator('button').click(),
    //   page.screenshot({ path: 'screenshots/login-waiting.png' }),
    //   page.waitForLoadState('networkidle')
    // ])
    await page.screenshot({ path: 'screenshots/logged-in.png' });

    await check(page.locator('h2'), {
      header: async (h2) => (await h2.textContent()) == 'Welcome, admin!'
    });
  } finally {
    await page.close();
  }
}