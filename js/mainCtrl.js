angular.module('chatroom').controller('mainCtrl', function($scope, messageService) {


            $scope.getMessages = function() {
                messageService.getMessages()
                    .then(function(result) {
                        $scope.messages = result;
                      })
                    }




$scope.postMessage = function(message){

messageService.postMessage(message)}






                setInterval(function(){
                  $scope.getMessages();
                }, 1500)

      })
