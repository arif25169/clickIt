angular.module("quizModule").config(function ($routeProvider) {
    $routeProvider
        .when("/create", {
            templateUrl: '/public/quiz/createQuiz.html',
            title: "Create",
            controller: 'quizCtrl'
        })
        .when("/join", {
            templateUrl: '/public/quiz/joinQuiz.html',
            title: "Join",
            controller: 'quizCtrl'
        })
        .when("/take", {
            templateUrl: '/public/quiz/takeQuiz.html',
            title: "Take",
            controller: 'quizCtrl'
        })
        .when("/welcome", {
            templateUrl: '/public/quiz/welcome.html',
            title: "Home",
        })
        .when("/", {
            templateUrl: '/public/quiz/welcome.html',
            title: "Home",
        })
        .otherwise({
            templateUrl: '/public/quiz/404.html',
            title: "Page Not Found",
        });
});