var findUserByToken = require('../services/findUserByToken');

/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  if (req.session.authenticated) {
    return next();
  } else {
    var token = req.param('token');

    // assíncrono
    findUserByToken(token, function (result) {
        if (result) {
            console.log('findUserByToken', result);
            req.session.authenticated = true;
            req.session.User = result;
            return next();
        } else {
            return res.json({error: true, message: 'invalid token : sessionAuth'});
        }
    });
  }
};
