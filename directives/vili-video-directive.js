angular.module('videoModule', [])
    .directive('viliVideo', ['$rootScope', function($rootScope) {
        'use strict';
        // Runs during compile
        return {
            restrict: 'E', // restrict only to elements
            scope: {
                video: '=',
                currentUser:'=' // for future functionality when SHARE/LIKE/EDIT/DELETE are implemented
            },
            templateUrl: 'views/vili-video-view.html', // template location
            controller: function($scope, $element, $attrs, $transclude) {

                $scope.share = function(){
                  alert('SHARE to be implemented');
                }

                $scope.like = function(){
                  alert('LIKE to be implemented');
                }

                $scope.edit = function(){
                  alert('EDIT to be implemented');
                }

                $scope.delete = function(){
                  alert('DELETE to be imeplemented');
                }
            }
        };
    }]);
