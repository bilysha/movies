import { FilmsPage } from './app.po';

describe('films App', function() {
  let page: FilmsPage;

  beforeEach(() => {
    page = new FilmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
