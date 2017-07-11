import { Assing4BindingPage } from './app.po';

describe('assing4-binding App', () => {
  let page: Assing4BindingPage;

  beforeEach(() => {
    page = new Assing4BindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
