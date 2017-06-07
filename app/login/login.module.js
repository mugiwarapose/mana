/**
 * loginModule
 * Created by cruve on 2017/6/7.
 */

var loginApp = angular.module('loginApp',['ui.router']);

loginApp.controller('loginController',['$scope','$state',function ($scope,$state) {

    $scope.userInfo={
        userName:'admin',
        password:'1234'
    }
    $scope.login = function () {
        var username = $scope.userInfo.userName;
        var password = $scope.userInfo.password;
        if(username=="admin" && password=="1234"){
            //$location.path('http://'+$location.host()+'/index.html');
            $state.go('main')

        }
    }
}])
