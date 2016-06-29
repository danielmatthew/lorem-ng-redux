import { LoremNgPage } from './app.po';

describe('lorem-ng App', function() {
  let page: LoremNgPage;

  beforeEach(() => {
    page = new LoremNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
