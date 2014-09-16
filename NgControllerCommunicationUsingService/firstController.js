(function(){
  angular
    .module('communicationDemoApp')
    .controller('firstController', firstController);
    
    firstController.$inject = ['demoService'];
    
    function firstController(demoService){
      var vm = this;
      vm.person = {};
      vm.addPerson = addPerson;
      
      
      function addPerson(){
        demoService.addPerson(vm.person);
        vm.person = {};
      }

    }
    
})();