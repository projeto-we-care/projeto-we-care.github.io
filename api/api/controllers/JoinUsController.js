var createSendToken = require('../services/createSendToken.js');

/**
 * JoinUsController
 *
 * @description :: Server-side logic for managing joinuses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: function (req, res) {
      var client = req.body.client || 'api';
      delete req.body.client;
      var user = req.body;
      JoinUs.create(user).exec(function createCB(err, ùser) {
          if (err) {
              return res.json(err);
          } else {
              createSendToken(ùser, res);
          }
      });
  },

  login: function(req, res) {
    var email = req.body.email;

    JoinUs.findOneByEmail(email).populateAll().exec(function (err, foundUser) {
        if(foundUser != null) {
          return createSendToken(foundUser, res);
        } else {
          return res.json('error');
        }
    });
  },

  teste: function(req, res) {
    return res.json('OK');
  },

  logout: function (req, res) {
    req.session.destroy();
    return res.json('logged out');
  }
};

