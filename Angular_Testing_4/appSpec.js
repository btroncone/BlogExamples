describe('The simpleController', function(){
  var $controller, $rootscope, scope;
  
  beforeEach(module('ngTestingApp'));
  
  beforeEach(inject(function(_$rootScope_,_$controller_){
    $rootScope = _$rootScope_;
    $controller = _$controller_;
    scope = $rootScope.$new();
  }));
  
  beforeEach(function(){
    $controller("simpleController as vm", {
            $scope: scope
        });
  });
  
  it('should have the title "Angular Testing Demo"', function(){
    expect(scope.vm.title).toBe('Angular Testing Demo');
  });
  
  it('should be able to add two numbers', function(){
    var result = scope.vm.add(1,2);
    expect(result).toBe(3);
  });
  
  it('should be able to subtract two numbers', function(){
    var result = scope.vm.subtract(2,1);
    expect(result).toBe(1);
  })
  
});

describe('The simpleControllerWithService using $httpBackend', function(){
  var $controller, $rootScope, $httpBackend, scope;
  
  beforeEach(module('ngTestingApp'));
  
  beforeEach(inject(function(_$rootScope_,_$controller_, _$httpBackend_){
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        scope = $rootScope.$new();
    }));
    
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
    
    beforeEach(function () {
        $httpBackend.when("GET","/api/data").respond([{},{},{}]);
     
        $controller("simpleControllerWithService as vm", {
            $scope: scope
        });
        $httpBackend.flush();
    });
    
    it('should retrieve a list of objects upon activation', function(){
      expect(scope.vm.data.length).toBe(3);
    })
  
})