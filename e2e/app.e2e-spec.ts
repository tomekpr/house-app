import { HouseAppPage } from './app.po';

describe('house-app App', () => {
  let page: HouseAppPage;

  beforeEach(() => {
    page = new HouseAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
