myApp.controller('PopupTestController', function ($mdDialog, $scope, UserService) {

    vm = this;
    // vm.userService = UserService;
    vm.myArrayOfDates = [];
    $scope.$watch('myArrayOfDates', function (newValue, oldValue) {
        if (newValue) {
            console.log('my array changed, new size : ' + newValue.length);
            console.log('myArrayOfDates', newValue);
        }
    }, true);
    



})