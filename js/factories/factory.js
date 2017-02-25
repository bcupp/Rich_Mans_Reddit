var app = angular.module('myModule');

app.factory('myFactory', function($http){

  return {
    grabData: function() {
      return $http({
        url: 'https://www.reddit.com/r/pics/top/.json',
        method: 'GET'
      }).then (function success(response){
        return response;
      }, function(error) {
        console.log(error);
      });
    }
  }
});
