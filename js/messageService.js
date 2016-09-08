angular.module('chatroom').service('messageService', function($http){

  var baseUrl = 'http://practiceapi.devmounta.in/api/chats';



  this.getMessages = function() {
    return $http.get(baseUrl)
    .then(function(response){
      if(response.status === 200){
        return response.data;
      }
      return response.status;
    })
};

this.postMessage = function(newMessage){
  return $http.post(baseUrl,{"message": newMessage})
    .then(function(response){
    return response.data;
  })
  }







})
