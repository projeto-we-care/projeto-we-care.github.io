'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:HelpCtrl
 * @description
 * # HelpCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('HelpCtrl', ['$scope', 'getData', 'sendData', function ($scope, getData, sendData) {
    // mostra os usuários
    getData.getHelp(function(data) {
      $scope.users = data;
    });

    // remove o usuário
    $scope.removerUser = function(id, index) {
      sendData.removeUser(id);

      $scope.users.splice(index, 1);
    };
  }]);
