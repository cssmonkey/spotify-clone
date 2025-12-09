import { test, expect } from '@playwright/test'

test('homepage shows heading and button', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await expect(page.getByRole('heading', { name: /To get started, edit the page.tsx file./i })).toBeVisible() 
})
