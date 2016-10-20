
var dataSet = require("./dataSet.js");
console.log(dataSet.getWebsiteUrl());
var url = dataSet.getWebsiteUrl();
module.exports = {
  'DemotestGoogle' : function (browser) {
    browser
      .url(dataSet.getWebsiteUrl())
      .waitForElementVisible('body', 10000)
      .click('div[id=sign-in]')
      .pause(1000)
      .setValue('input[id=FWloginUsername]', dataSet.getEmailAdress())
      .pause(1000)
      .setValue('input[id=FWloginPassword]', dataSet.getPassword())
      .pause(1000)
      .useXpath()
      .click("//*[@class='webs-ext-btn webs-ext-btn-blue submit']");
      browser.expect.element('body').to.be.present.before(1000);
      browser.end();
  }
};