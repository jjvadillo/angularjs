angular.module('miApp').controller("personasCntr", [function(){
	var vm=this;
	
	vm.listado = [];
	vm.elementoActual = {};
	vm.modo = 'list';
	
	var idActual = {};
	
	vm.load = function() {
		if(vm.listado.length == 0){
			vm.listado = [
				{ id: 1, nombre:"Pepito", apellidos: "Grillo", edad: 155},
				{ id: 2, nombre:"Carmelo", apellidos: "Coton", edad: 55},
				{ id: 3, nombre:"Pier", apellidos: "Nodoy Una", edad: 65},
				{ id: 4, nombre:"Otro", apellidos: "Mas", edad: 18 }
			];
		}
	};
	
	vm.add = function() {
		vm.modo = 'add';
		vm.elementoActual = {};
	};
	
	vm.edit = function(id) {
		vm.modo = 'edit';
		vm.elementoActual = angular.copy(
				vm.listado.find(function(ele) { return ele.id === id })
				);
		idActual = id;
	};

	vm.view = function(id) {
		vm.modo = 'view';
		vm.elementoActual = angular.copy(
				vm.listado.find(function(ele) { return ele.id === id })
				);
	};
	
	vm.remove = function(id) {
		if(window.confirm("¿Seguro?")) {
			var ind = vm.listado.findIndex(function(ele) { return ele.id === id });
			vm.listado.splice(ind, 1);
			vm.load();
		}
	};
	
	vm.send = function() {
		if(vm.modo == 'add') {
			vm.listado.push(vm.elementoActual);
			vm.modo = 'list';
			vm.load();
		} else if(vm.modo == 'edit') {
			var ind = vm.listado.findIndex(function(ele) { return ele.id === idActual });
			vm.listado[ind] = vm.elementoActual;
			vm.elementoActual = {};
			vm.modo = 'list';
			vm.load();
		} else {
			vm.modo = 'list';
			vm.load();
		}
	};
	
	vm.cancel = function() {
		vm.modo = 'list';
		vm.load();
	};
	
	vm.load();
}]);	