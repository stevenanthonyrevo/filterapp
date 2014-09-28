var myApp = angular.module('myApp', []);

myApp.factory('Avengers', function() {
    var Avengers = {};
    Avengers.cast = [
     {
      name: "Robert Downey Jr.",
      character: "Tony Stark | Iron Man", 
      kid: "mike",
      friend: "Jake"  
     }, 
     {
     name: "Chris Evans",
     character: "Steve Rogers | Captin America",
     kid: "Roney",
     friend: "Mark"
     },         
        
     {
     name: "Mark Ruffalo",
     character: "Bruce Banner | The Hulk",
     kid: "kevin",
     friend: "mick"       
     },
     {
     name: "Tina Benko",
     character: "NASA Scientist",
     kid: "fin",
     friend: "daniel"  
      }
    ];
    return Avengers;
})

function AvengersCtrl($scope, Avengers) {
    $scope.avengers = Avengers;
}