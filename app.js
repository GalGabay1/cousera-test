(function () { 
    'use strict';
    
    angular.module('lunch_app', [])
    .controller('LunchController', LunchController)
    
    LunchController.$inject = ['$scope'];
    function LunchController($scope) {
      $scope.food_list = ""
      $scope.message = ""
      $scope.messageStyle = {
        color: ''
    };
      $scope.food_click = function(){
        var foods = $scope.food_list.split(',').filter(item => item.trim() !== '');;
        if($scope.food_list == ""){
            $scope.message = "Please enter data first"
            $scope.messageStyle.color = 'red';
        }

        else if(foods.length <= 3){
            $scope.message = "Enjoy!"
            $scope.messageStyle.color = 'green';
        }

        else{
            $scope.message = "Too much!"
            $scope.messageStyle.color = 'green';
        }
      }
    }
    })()