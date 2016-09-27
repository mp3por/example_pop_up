angular.module('popUpModule', [])
    .directive('viliPopUp', ['$rootScope', function($rootScope) {
        'use strict';
        // Runs during compile
        return {
            restrict: 'E', // restrict only to elements
            templateUrl: 'views/vili-pop-up-view.html', // template location
            controller: function($scope, $element, $attrs, $transclude) {

                var defaultUser = { // default user
                        picture: '/pictures/profile_vili.png', // profile pic
                        name: 'Velin Kerkov' // name
                    },

                    // represents a video
                    video = {
                        url: 'https://www.youtube.com/watch?v=VfcW7seyCkQ', // video's URL
                        // video's comments array
                        comments: []
                    };

                // expose video object to view
                $scope.video = video;

                // expose user object to view
                $scope.current_user = defaultUser;

                /**
                 * Handle function which opens a video supplied by the user.
                 * @param  {Boolean} isFormValid idicates if form is valid based on form validation
                 * @return {[type]}              nothing
                 */
                $scope.videoFormSubmit = function(isFormValid) {
                    if (isFormValid) {
                        // weak validation
                        // TODO: use regex to handle all variants of a youtube video's link
                        // TODO: use ng-pattern directive so that the form validates itself during submision
                        if (video.url.indexOf('youtube') < 0) {
                            $scope.linkNotFromYoutubeError = true;
                            $scope.hasUserSuppliedVideo = false;
                        } else {
                            $scope.linkNotFromYoutubeError = false;
                            $scope.hasUserSuppliedVideo = true;
                        }
                    } else {
                        // handle errors
                        // usually done by showing an alert or ng-showing a span next to the input field to explain what is wrong
                    }
                };
            }
        };
    }]);
