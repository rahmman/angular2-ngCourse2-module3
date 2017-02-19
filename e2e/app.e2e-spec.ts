import { A3FeatureModulePage } from './app.po';

describe('a3-feature-module App', function() {
  let page: A3FeatureModulePage;

  beforeEach(() => {
    page = new A3FeatureModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
