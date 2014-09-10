(function(){
  angular
    .module('ngTestingApp', [])
    .factory('simpleService', simpleService)
    .controller('simpleController', simpleController)
    .controller('simpleControllerWithService', simpleControllerWithService)
    
    
    simpleControllerWithService.$inject = ['simpleService'];
    simpleService.$inject = ['$http'];
    
    function simpleService($http){
      var service = {
        getSomeData: getSomeData
      }
      
      return service;
      
      function getSomeData(){
        return $http.get('/api/data')
          .then(function(response){
            return response.data;
          })
      }
    }
    
    function simpleController(){
      var vm = this;
      vm.title = "Angular Testing Demo";
      vm.add = add;
      vm.subtract = subtract;
      
      function add(firstNumber, secondNumber){
        return firstNumber + secondNumber;
      }
      
      function subtract(firstNumber, secondNumber){
        return firstNumber - secondNumber;
      }
    }
    
    function simpleControllerWithService(simpleService){
      var vm = this;
      vm.title = "My Angular App";
      vm.data = [];
      
      activate();
      function activate(){
        return simpleService.getSomeData()
          .then(function(data){
            vm.data = data;
            return vm.data;
          })
      }
      
    }
    
    
})();