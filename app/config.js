/**
 * Created by cruve on 2017/6/7.
 */
var app = angular.module('myApp',['ui.router','loginApp']);

app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('login',{
        url:'/login',
        templateUrl:'login.html'
    }).state(
        'main',{
            url:'/main',
            templateUrl:'main.html'
        }
    );
    $urlRouterProvider.otherwise('/login');
});