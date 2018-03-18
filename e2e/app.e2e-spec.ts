import { GnomesappPage } from './app.po';

describe('gnomesapp App', () => {
  let page: GnomesappPage;

  beforeEach(() => {
    page = new GnomesappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
