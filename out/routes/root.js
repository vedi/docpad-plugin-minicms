// Generated by IcedCoffeeScript 1.8.0-a
(function() {
  var cc, sessionBridge, slugify;

  sessionBridge = require('../utils/sessionBridge');

  slugify = require('../utils/slugify');

  cc = require('coffeecup');

  module.exports = function(req, res) {
    var config, content, docpad, session;
    docpad = this.docpad;
    config = this.config;
    session = sessionBridge.get(req);
    if (!session.authenticated) {
      res.redirect('/' + this.config.prefix.url + '/login?url=' + req.url);
      return;
    }
    content = cc.render(require('../components/layout/index'), {
      config: this.config,
      slugify: slugify
    });
    res.set('Content-Type', 'text/html; charset=UTF-8');
    return res.send(cc.render(require('../components/layout'), {
      layout: 'index',
      url: req.url,
      config: this.config,
      prefix: this.config.prefix.url,
      title: 'Admin',
      content: content,
      slugify: slugify
    }));
  };

}).call(this);
