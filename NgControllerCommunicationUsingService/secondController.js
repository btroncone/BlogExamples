(function(){
  angular
    .module('communicationDemoApp')
    .controller('secondController', secondController);
    
    secondController.$inject = ['demoService'];
    
    function secondController(demoService){
      var vm = this;
      vm.people = demoService.myPeople;
      vm.removePerson = removePerson;
      
      activate();
      
      function activate(){
        vm.people = demoService.getPeople();
      }
      
      function removePerson($index){
        demoService.removePerson($index);
      }
    }
  
})();