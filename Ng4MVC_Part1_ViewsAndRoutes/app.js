(function(){
    angular
        .module("demoApp",["ngRoute"])
        //In a real application you would want to move this to a separate file for cleanliness.
        .config(function($routeProvider){
            $routeProvider
                .when("/", {
                    templateUrl: "main.html"
                    //You will generally assign your controllers here as well.
                    //controller: "myController"
                })
                .when("/viewOne", {
                    templateUrl: "viewOne.html"
                })
                .when("/viewTwo", {
                    templateUrl: "viewTwo.html"
                })
                .when("/viewThree", {
                    templateUrl: "viewThree.html"
                })
                .otherwise({redirectTo: "/"});
        });
})();

//var athletes = [
//    {
//        name: "Joe",
//        rating: 8,
//        sports: [ 'Soccer', 'Basketball']
//    },
//    {
//        name: "Bob",
//        rating: 9,
//        sports: ['Basketball', 'Baseball', 'Tennis']
//    },
//    {
//        name: "Frank",
//        rating: 6,
//        sports: ['Football', 'Hockey', 'Golf']
//    }]