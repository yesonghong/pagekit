angular.module('site', ['Application', 'ngResource', 'ngRoute'])

    .value('name', 'site')

    .value('UIkit', jQuery.UIkit)

    .factory('Node', ['$resource', 'Application', function($resource, App) {
        return $resource(App.url('/node/:id'), {}, {
            query: { method: 'GET', responseType: 'json' }
        });
    }])

    .config(['$routeProvider', function($routeProvider) {

        $routeProvider.when("/create/:type", {
            templateUrl: 'site.edit',
            controllerAs: 'vm',
            controller: 'editCtrl'
        });

        $routeProvider.when("/edit/:id", {
            templateUrl: 'site.edit',
            controllerAs: 'vm',
            controller: 'editCtrl'
        });

        $routeProvider.otherwise({
            templateUrl: 'site.list',
            controllerAs: 'vm',
            controller: 'indexCtrl'
        });

    }]);
