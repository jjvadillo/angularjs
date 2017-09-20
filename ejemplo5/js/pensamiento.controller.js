class AppController {
    
    $onInit() {
        this.provincias = [
            {
                idProvincia:1,
                nombre:"Badajoz"
            },
            {
                idProvincia:2,
                nombre:"Madrid"
            },
            {
                idProvincia:3,
                nombre:"Barcelona"
            },
            {
                idProvincia:4,
                nombre:"Caceres"
            },
        ];
    }
}

angular.module("appMain")
.controller("pensamiento.controller", AppController);