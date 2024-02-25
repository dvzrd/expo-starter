import { by, element, expect } from 'detox';

describe('Main', () => {
  it('should show Proposals List', async () => {
    await expect(element(by.text('Proposal 1'))).toBeVisible();
  });
});
