import { GitPrueba00Page } from './app.po';

describe('git-prueba00 App', function() {
  let page: GitPrueba00Page;

  beforeEach(() => {
    page = new GitPrueba00Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
