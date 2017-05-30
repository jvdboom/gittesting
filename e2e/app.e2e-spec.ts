import { GittestingPage } from './app.po';

describe('gittesting App', () => {
  let page: GittestingPage;

  beforeEach(() => {
    page = new GittestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
