import { newE2EPage } from '@stencil/core/testing';

describe('limel-tab-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<limel-tab-bar></limel-tab-bar>');

    const element = await page.find('limel-tab-bar');
    expect(element).toHaveClass('hydrated');
  });
});
