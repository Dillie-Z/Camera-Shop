var app = angular.module("myApp", [])
app.controller("CameraController", function($scope, $rootScope, $log) {

    $scope.cameras = [{
        title: 'Nikon D3100 DSLR',
        image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
        rating: 3.4,
        price: 369.99,
        onSale: true
    }, {
        title: 'Canon EOS 70D',
        image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
        rating: 2.0,
        price: 1099.0,
        onSale: false
    }, {
        title: 'Nikon D810A',
        image: 'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
        rating: 4.2,
        price: 3796.95,
        onSale: true
    }];

    $scope.subTotal = 0;
    $scope.total = 0;
    $scope.cartItems = [];

    var tax = 0.08;

    $scope.addCamera = function(camera) {
        $scope.cartItems.push(camera);
        updateSubTotal();
    }

    $scope.removeCamera = function(item){
      var index = $scope.cartItems.indexOf(item);
      $scope.cartItems.splice(index,1);
      updateSubTotal()
    }

    updateSubTotal = function() {
        var subSum = 0;
        for (var i = 0; i < $scope.cartItems.length; i++) {
            subSum += $scope.cartItems[i].price;
        }
        $scope.subTotal = subSum;
        $scope.total = $scope.subTotal + ($scope.subTotal * tax);
    }

});
