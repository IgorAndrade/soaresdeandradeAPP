// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngCordova','ionicLazyLoad','restangular'])

.run(function($ionicPlatform,$rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
        var pg = toState.name;
        if(pg != "app.home"){
            $rootScope.showLogo = true;
        }else
        $rootScope.showLogo = false;
    });
  });
})
  .config(function (RestangularProvider) {
    //RestangularProvider.setBaseUrl("http://192.168.1.140:3000/services");
    RestangularProvider.setBaseUrl("http://soaresdeandrade-irsa.rhcloud.com/services");

  })
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/inicio.html'
        }
      }
    })
  .state('app.quemSomos', {
      url: '/quem_somos',
      views: {
        'menuContent': {
          templateUrl: 'templates/quemSomos.html'
        }
      }
    })
  .state('app.fundadora', {
      url: '/fundadora',
      views: {
        'menuContent': {
          templateUrl: 'templates/fundadora.html'
        }
      }
    })
  .state('app.areaAtuacao', {
      url: '/areaAtuacao',
      views: {
        'menuContent': {
          templateUrl: 'templates/areaAtuacao.html'
        }
      }
    })
  .state('app.equipe', {
      url: '/equipe',
      views: {
        'menuContent': {
          templateUrl: 'templates/equipe.html'
        }
      }
    })
  .state('app.fotos', {
      url: '/fotos',
      views: {
        'menuContent': {
          templateUrl: 'templates/fotos.html',
          controller:'FotosCtrl'
        }
      }
    })
  .state('app.contato', {
      url: '/contato',
      views: {
        'menuContent': {
          templateUrl: 'templates/contato.html',
        controller:'ContatoCtrl'
        }
      }
    })
  .state('app.noticias', {
      url: '/noticias',
      views: {
        'menuContent': {
          templateUrl: 'templates/noticias.html',
        controller:'noticiasCtrl'
        }
      }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
