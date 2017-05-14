import { InstagramPage } from './app.po';

describe('instagram App', () => {
  let page: InstagramPage;

  beforeEach(() => {
    page = new InstagramPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
