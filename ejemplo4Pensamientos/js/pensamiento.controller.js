

class AppController {
    
    $onInit() {
        this.atexto = [];
    }
    aniadir () {
        this.atexto.push(this.texto);
        this.texto='';
    }
}

angular.module("appMain")
.controller("pensamiento.controller", AppController);