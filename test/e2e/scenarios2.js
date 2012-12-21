describe('app', function() {
  beforeEach(function() {    browser().navigateTo('../../app/app.test.html');});
  it('should render the response', function() {
    expect(element('.bar').text().tobe('bar');
  });
});