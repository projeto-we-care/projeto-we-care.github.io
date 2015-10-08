'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:JoinUsCtrl
 * @description
 * # JoinUsCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('JoinUsCtrl', ['$scope', 'sendData', '$location', function ($scope, sendData, $location) {
    $scope.formTeste = {};

    $scope.submitForm = function(nome, email, telefone, mensagem) {
      $scope.formTeste = {
        nome: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem,
      };

      sendData.submitForm($scope.formTeste);
      $location.path('/help')
    };
  }]);
