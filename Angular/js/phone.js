/**
 * Created by Lucien on 10/25/2015.
 */


angular.module('ngApp', []).controller('phoneListCtrl',
    function ($scope) {
        $scope.phones = [
            {"name": "Nexus S",
                "snippet": "Fast just got faster with Nexus S."},
            {"name": "Motorola XOOM? with Wi-Fi",
                "snippet": "The Next, Next Generation tablet."},
            {"name": "MOTOROLA XOOM?",
                "snippet": "The Next, Next Generation tablet."}
        ];

        $scope.hello="hello world";
    }
);