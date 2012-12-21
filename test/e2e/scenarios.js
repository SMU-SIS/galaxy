'use strict';

describe('AJAX Mocking Test', function() {
  var pauseAll = true;
  pauseAll = window.location.search.replace( "?pauseAll=", "" );
  
  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });

 
  it('Should find the ajax-loaded player name.', function() {
    browser().navigateTo('../../app/index.html');
    expect(element('.carousel-caption span').text()).
        toMatch("Zen");
    if (pauseAll) pause();
  });

   it('should automatically redirect to /contact when last button is pressed.', function() {
    element('.btn:last').click();
    expect(browser().location().url()).toBe("/contact");
    if (pauseAll) pause();


    if (pauseAll) pause();
  });

describe('Navigate directly to links', function() {

    beforeEach(function() {
      browser().navigateTo('#about');
    });


    it('should render about view when user navigates to #about', function() {
      expect(browser().location().url()).toBe("/about");

      if (pauseAll) pause();
    });

  });


  it('Ensure the active menu item is Teams.', function() {
    
    expect(element('.active a:first').text()).
        toMatch("Teams");
    if (pauseAll) pause();
  });

  

});
