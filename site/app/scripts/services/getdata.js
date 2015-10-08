'use strict';

/**
 * @ngdoc service
 * @name appApp.getData
 * @description
 * # getData
 * Service in the appApp.
 */
angular.module('appApp')
  .service('getData', ['$http', function ($http) {
    var obj = {};

    var users = [];

    obj.getHelp = function(callback) {
      $http.get('http://localhost:1337/joinUs/')
        .success(function(data) {
          users = data;
          callback(data);
        }).error(function(error) {
          console.log('Error getHelp:', error);
        });
    };

    return obj;
  }]);
