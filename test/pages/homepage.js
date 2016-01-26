var HomePage = function() {
    
       this.linkedInLink = element(by.id('linkedBut'));
       this.faceBookLink = element(by.id('faceBut'));
       this.hamburgDrop = element(by.id('hamBut'));
};

module.exports = new HomePage();