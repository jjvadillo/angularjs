angular.module('miApp', ['myCore', 'ngRoute']);

angular.module('miApp').config(['$routeProvider',  function($routeProvider) {
    $routeProvider
      .when('/personas', {
        templateUrl: 'views/personas/list.html', controller: 'personasURL', controllerAs: 'vm'
      })
      .when('/personas/add', {
        templateUrl: 'views/personas/add.html', controller: 'personasURL', controllerAs: 'vm'
      })
      .when('/personas/:id/edit', {
        templateUrl: 'views/personas/edit.html', controller: 'personasURL', controllerAs: 'vm'
      })
      .when('/personas/:id/:kk*', {
        templateUrl: 'views/personas/view.html', controller: 'personasURL', controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
}])
angular.module('miApp').controller("principalCntr", [function(){
	var vm=this;
	vm.menu = [
		{tmpl: 'views/personas.html', descripcion: "Personas"},
		{tmpl: 'views/calculadora.html', descripcion: "Calculadora"},
		{tmpl: 'templateId.html', descripcion: "Interior"},
		{tmpl: 'views/vista1.html', descripcion: "Vista 1"},
		{tmpl: 'views/vista2.html', descripcion: "Vista 2"}
	];
	vm.tmplActual = vm.menu[0].tmpl;
	vm.cambiaOpcion = function(indx) {
		vm.tmplActual = vm.menu[indx].tmpl;
	};
}]);

angular.module('miApp').controller("miController", [function(){
	var vm=this;
	
	vm.nombre = 'MUNDO';
	vm.msg = '';
	vm.persona = { id: 1, nombre:"Pepito", apellidos: "Grillo", edad: 155};
	vm.ver = true;
	vm.estilo={
			  color:"#FF0000",
			  backgroundColor:'yellow'
			};
	vm.clasesCss={error:true, remarcado:false, importante:true };
	vm.misClasesCss = "error importante";
	
	vm.saluda = function() {
		vm.msg = "Hola " + vm.nombre;
	};
	vm.despide = function() {
		vm.msg = "Adios " + vm.nombre;
	};
	vm.di = function(algo) {
		vm.msg = "Dice " + algo;
	};
	vm.cambia = function() {
		vm.ver = !vm.ver;
		vm.clasesCss.remarcado = true;
	};

	vm.calcula = function(a,b) {return a+b;};
	
	
	vm.provincias = [
		{id: 1, nombre: "Caceres"},
		{id: 2, nombre: "BADAJOZ"},
		{id: 3, nombre: "Sevilla"},
		{id: 4, nombre: "Cordoba"}
	];
	vm.idProvincia = 2;
	vm.addProvincia = function() {
		vm.provincias.push({id: 5, nombre: "Madrid"});
		vm.idProvincia = 5;
	};
}]);

angular.module('miApp').controller("demo1Cntr", ['Auth', function(Auth) {
	var vm=this;
	
	vm.titulo = 'Estoy en el controlador demo1Cntr';
	vm.kk = Auth;
}]);

angular.module('miApp').controller("demo2Cntr", ['Auth', function(Auth){
	var vm=this;
	
	vm.rslt = 'Demo de otro controlador';
	vm.usr = Auth;
}]);







