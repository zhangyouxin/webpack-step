module.exports = {
  'demo Test' : function(browser) {
    browser.element('css selector', 'body', function(res) {
      console.log(res)
    });
  }
};