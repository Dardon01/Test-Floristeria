import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sanangel.com.co/');
  await page.getByRole('link', { name: 'cilindro con 24 rosas' }).click();
  await page.getByRole('button', { name: 'Añadir al carrito' }).click();
  await page.getByRole('link', { name: 'San Angel Flores' }).click();
  await page.getByRole('link', { name: 'Presente bouquet rosas' }).click();
  await page.getByRole('button', { name: 'Añadir al carrito' }).click();
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('cell', { name: 'Total', exact: true }).click();
});