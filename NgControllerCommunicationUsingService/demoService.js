(function(){
  angular
    .module('communicationDemoApp')
    .factory('demoService', demoService);
    
  function demoService(){
      var service = {
        myPeople: myPeople,
        getPeople: getPeople,
        addPerson: addPerson,
        removePerson: removePerson
      }
      var myPeople = [];
      
      return service;
      
      function getPeople(){
        myPeople = [{name: 'Joe', age: 40},{name: 'Frank', age: 33}];
        return myPeople;
      }
      
      function addPerson(person){
        myPeople.push({name: person.name, age: person.age});
      }
      
      function removePerson(index){
        myPeople.splice(index, 1);
      }
    }
})();

