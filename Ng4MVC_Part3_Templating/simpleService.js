(function(){
  
  angular
    .module('ngTemplatingDemo')
    .factory('simpleService', simpleService);
    
    function simpleService(){
      
      var service = {
        getSampleData: getSampleData
      }
      
      return service;
      
      function getSampleData(){
        
        var athletes = [
          {
            name: "Joe",
            rating: 8,
            sports: [ 'Soccer', 'Basketball']
          },
          {
            name: "Bob",
            rating: 9,
            sports: ['Basketball', 'Baseball', 'Tennis']
          },
          {
            name: "Frank",
            rating: 6,
            sports: ['Football', 'Hockey', 'Golf']
          }]
          
          return athletes;
      }
    }
})();