﻿(function () {
    angular
        .module('routeExample')
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/app/views/default.html'
            })
            .when('/viewOne', {
                templateUrl: '/app/views/viewOne.html',
                //controller: 'yourController',
                //controllerAs: 'vm'
            })
            .when('/viewTwo', {
                templateUrl: '/app/views/viewTwo.html',
                //controller: 'yourSecondController',
                //controllerAs: 'vm'
            });
    }
}());
