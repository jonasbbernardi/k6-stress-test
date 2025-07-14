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
  const ss_path = 'results/screenshots';

  try {
    // Access page
    await page.goto('https://test.k6.io/my_messages.php');

    // Screenshot home and fill login form
    await Promise.all([
      page.screenshot({ path: `${ss_path}/home.png` }),
      page.locator('input[name="login"]').type('admin'),
      page.locator('input[name="password"]').type('123'),
    ])

    // Screenshot login from fielled
    await page.screenshot({ path: `${ss_path}/login-form-filled.png` });

    // Click on submit and wait navigation (document load)
    await Promise.all([
      page.waitForNavigation(),
      page.locator('input[type="submit"]').click(),
    ]);
    
    // Wait for react loading
    // await page.waitForLoadState('networkidle');

    // Screenshot logged in page
    await page.screenshot({ path: `${ss_path}/logged-in.png` });

    // Validate welcome header
    await check(page.locator('h2'), {
      header: async (h2) => (await h2.textContent()) == 'Welcome, admin!'
    });
  } finally {
    await page.close();
  }
}