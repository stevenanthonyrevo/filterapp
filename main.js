var myApp = angular.module('myApp', []);

myApp.factory('Avengers', function() {
    var Avengers = {};
    Avengers.cast = [
     {
      name: "Robert Downey Jr.",
      character: "Tony Stark / Iron Man"
        },
        {
           name: "Chris Evans",
           character: "Steve Rogers / Captin America"
        },
        {
        name: "Mark Ruffalo",
        character: "Bruce Banner / The Hulk"
      },
    {
        name: "Tina Benko",
        character: "NASA Scientist"
      }
    ];
    return Avengers;
})

function AvengersCtrl($scope, Avengers) {
    $scope.avengers = Avengers;
}