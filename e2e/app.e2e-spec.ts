import { TakeMeTherePage } from './app.po';

describe('take-me-there App', () => {
  let page: TakeMeTherePage;

  beforeEach(() => {
    page = new TakeMeTherePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
