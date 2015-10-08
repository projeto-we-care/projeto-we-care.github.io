'use strict';

/**
 * @ngdoc service
 * @name appApp.sendData
 * @description
 * # sendData
 * Service in the appApp.
 */
angular.module('appApp')
  .service('sendData', ['$http', function ($http) {
    var obj = {};

    obj.submitForm = function(content) {
      $http({
        method: 'POST',
        url: 'http://localhost:1337/joinUs/create',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        transformRequest: function(content) {
            var str = [];
            for(var p in content)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(content[p]));
            return str.join("&");
        },
        data: {nome: content.nome, email: content.email, telefone: content.telefone, mensagem: content.mensagem}
      }).success(function (data) {
        console.log('Send:', data);
      });
    };

    obj.removeUser = function(id) {
      $http({
        method: 'POST',
        url: 'http://localhost:1337/joinUs/destroy/' + id,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: {id: id}
      }).success(function (data) {
        console.log('Send:', data);
      });
    };

    return obj;
  }]);
