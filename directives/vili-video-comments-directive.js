angular.module('commentsModule', [])
    .directive('viliVideoComments', ['$rootScope', function($rootScope) {
        'use strict';
        // Runs during compile
        return {
            restrict: 'E', // restrict only to elements
            scope: {
                video: '=',
                currentUser:'='
            },
            templateUrl: 'views/vili-video-comments-view.html', // template location
            controller: function($scope, $element, $attrs, $transclude) {
              // randome text
              var randomText = "These excellant intentions were strengthed when he enterd the Father Superior's diniing-room, though, stricttly speakin, it was not a dining-room, for the Father Superior had only two rooms alltogether; they were, however, much larger and more comfortable than Father Zossima's. But tehre was was no great luxury about the furnishng of these rooms eithar. The furniture was of mohogany, covered with leather, in the old-fashionned style of 1820 the floor was not even stained, but evreything was shining with cleanlyness, and there were many chioce flowers in the windows; the most sumptuous thing in the room at the moment was, of course, the beatifuly decorated table.";

              // standartizing the comment object
              // TODO: add validity checks
              function comment(creator, created_at, comment_text) {
                  this.creator = creator; // the creator of the comment
                  this.created_at = created_at; // comment's creation date
                  this.comment_text = comment_text; // comment's text
              }

              // add one example comment
              var example_comment = new comment($scope.currentUser, Date.now(), randomText); // add one example comment
              $scope.video.comments.push(example_comment);

              /**
               * Handle function for new comment submition. Creates new comment and adds it to the existing ones
               * @param  {Boolean} isFormValid     indicates if form is valid based on form validation
               * @param  {[type]}  video           the video
               * @param  {[type]}  comment_creator the creator of the comment
               * @param  {[type]}  comment_text    the text of the comment
               * @return {[type]}                  nothing
               */
              $scope.commentFormSubmit = function(isFormValid, video, comment_creator, comment_text) {
                  // TODO: add custom validation if needed

                  // create new comment
                  var new_comment = new comment(comment_creator, Date.now(), comment_text);

                  // add comment to list
                  // TODO: handle comment creation errors when implemented
                  video.comments.unshift(new_comment);
              }

              /**
               * Handle function for new comment reply submition. Does nothing as of now.
               * @param  {Boolean} isFormValid            indicates if form is valid based on form validation
               * @param  {[type]}  video                  the video
               * @param  {[type]}  comment                the comment
               * @param  {[type]}  reply_creator          the creator of the reply
               * @param  {[type]}  new_comment_reply_text the text of the reply
               * @return {[type]}                         nothing
               */
              $scope.commentReplyFormSubmit = function(isFormValid, video, comment, reply_creator, new_comment_reply_text) {
                  // linked to new comment functionality
                  // TODO: handle comment replies as comment replies not as new comments
                  $scope.commentFormSubmit(isFormValid, video, reply_creator, new_comment_reply_text);
              }

            }
        };
    }]);
