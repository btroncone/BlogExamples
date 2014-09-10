(function(){
  
  angular
    .module('ngTemplatingDemo')
    .controller('simpleController', simpleController)
    
    simpleController.$inject = ['simpleService'];
    
    function simpleController(simpleService){
      var vm = this;
      vm.sampleData = [];
      vm.simpleModel = {name: 'Angular', language: 'Javascript'};
      vm.filterModel = {amount: 10.43, firstName: 'brian', number: 14.422334}
      vm.pets = [{name: 'Riko', breed: 'Boston Terrier'},{name: 'Frank', breed: 'Boston Terrier'},{name: 'Sally', breed: 'Golden Retriver'}];
      vm.selectedPet = vm.pets[0];
      vm.otherSelectedPet = vm.pets[2];
      vm.helloWorld = true;
      vm.applyClass = false;
      vm.toggleHelloWorld = toggleHelloWorld;
      vm.increaseRating = increaseRating;
      vm.decreaseRating = decreaseRating;
      
      activate();
      function activate(){
        vm.sampleData = simpleService.getSampleData();
        return vm.sampleData;
      }
      
      function toggleHelloWorld(){
        vm.helloWorld = !vm.helloWorld;
      }
      
      function increaseRating($index){
          vm.sampleData[$index].rating += 1;
      }
      
      function decreaseRating($index){
          vm.sampleData[$index].rating -= 1;
      }
    }
})();