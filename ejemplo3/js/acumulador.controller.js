angular.module("appMain")
.controller("AppController", AppController);

function AppController() {
    this.user ={
        name:'Carlos',
        apellidos:"Vadillo",
    };
    this.curso ='AngularJS';

    this.sumar = function () {
        this.user.name='';
        console.dir(this);
    }
}