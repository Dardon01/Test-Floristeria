import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sanangel.com.co/');
  await page.getByRole('link', { name: 'cilindro con 24 rosas' }).click();
  await page.getByRole('spinbutton', { name: 'Qty' }).click();
  await page.getByRole('spinbutton', { name: 'Qty' }).click();
  await page.getByRole('spinbutton', { name: 'Qty' }).fill('2');
  await page.getByRole('button', { name: 'Añadir al carrito' }).click();
  await page.getByRole('link', { name: '' }).click();
  await page.locator('#order_review').click();
});