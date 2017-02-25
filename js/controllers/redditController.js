var app = angular.module('myModule');

app.controller('redditController', function($scope, myFactory){
  myFactory.grabData().then(function(items){
    $scope.redditObj=items;
    $scope.listing=$scope.redditObj.data.data.children;
  });
})
