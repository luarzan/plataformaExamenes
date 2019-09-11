    app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'templates/profiles.html',
        controller:'profileCtrl'
    })
    .when('/exam',{
        templateUrl:'templates/exam.html',
    })
    // .when('/profiles',{
    //     templateUrl:'templates/loading-page.html',
    // })
    .otherwise({
        redirectTo:'/loadin-page.html'
    })
})
