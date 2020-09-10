import { UpFlowMeUIPage } from './app.po';

describe('up-flow-me-ui App', () => {
  let page: UpFlowMeUIPage;

  beforeEach(() => {
    page = new UpFlowMeUIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
