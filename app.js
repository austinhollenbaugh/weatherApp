angular.module("weatherApp", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/',
      templateUrl: './components/home/home.html',
      controller: 'homeCtrl'
    });
  });
