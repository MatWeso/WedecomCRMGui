import { WedecomCRMGuiPage } from './app.po';

describe('wedecom-crmgui App', function() {
  let page: WedecomCRMGuiPage;

  beforeEach(() => {
    page = new WedecomCRMGuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
