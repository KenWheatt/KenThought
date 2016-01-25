 describe('Homepage for KenThought', function() {
    
          var homepage = require('./pages/homepage.js');
     
               // console.log(homepage);
    
    beforeEach(function(){
         browser.ignoreSynchronization = true;
        browser.get('http://localhost:3000');
    });
    
    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('KenThought');
    });
    
    it('should have link to linkedIn', function() {
        expect(homepage.linkedInLink.isPresent()).toBe(true);
        homepage.linkedInLink.click();
        browser.sleep(2000);
        var newName = browser.driver.getCurrentUrl();
        expect(newName).toEqual('https://www.linkedin.com/in/kenwheatt');
    });
     
     it('should have link to facebook', function() {
        expect(homepage.faceBookLink.isPresent()).toBe(true);
        homepage.faceBookLink.click();
        browser.sleep(2000);
        var newName = browser.driver.getCurrentUrl();
        expect(newName).toEqual('https://www.facebook.com/kenandrae.wheatt');
    });
     
     it('should have a title', function() {
         var width = 656;
         var height = 517;
         browser.driver.manage().window().setSize(width, height);
         expect(homepage.hamburgDrop.isPresent()).toBe(true);
         browser.sleep(2000);
    });
});