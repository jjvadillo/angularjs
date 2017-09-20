angular.module("commonModule")
.directive('appPie',function () {
    return{
        template : `
            <footer>
                {{autor}}
            </footer>`,
        restrict : 'AE' ,
        scope: {
            autor: '@autor'
        }      
    }
})

