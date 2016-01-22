 var homepage = require('./pages/homepage.js');


console.log(homepage);

describe('Homepage for KenThought', function() {
   
    
    browser.ignoreSynchronization = true;
    
    beforeEach(function(){
        browser.get('http://localhost:3000');
    });
    
    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('KenThought');
    });
    
    it('should have links to linkedIn and facebook', function() {
        expect(homepage.linkedInLink.isPresent()).toBe(true);
    });
});