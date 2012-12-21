'use strict';

/* Controllers */

function UserController($scope,$resource){
        $scope.user = $resource('/api/user').get();
}

