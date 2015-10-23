angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
/**
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  */
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('ContatoCtrl', function($scope,$cordovaEmailComposer, $window, $ionicLoading) {
    $scope.mapa_width = $window.innerWidth ;
    $scope.mapa_height = $window.innerHeight*0.4;
    $scope.telefone1 = cfg.telefones.contato1;
    $scope.telefone2 = cfg.telefones.contato2;
    var email = cfg.email.contato;
    $scope.send = function() {
        $cordovaEmailComposer.open(email).then(null, function () {
                                                  //cancelar
        });
    };
            /**
            $cordovaEmailComposer.isAvailable().then(function() {
                  jQuery("#mapa").html(cfg.email.contato.sendto);
                                                     
                                                     }, function () {
                  jQuery("#mapa").html("not available");
                                                     // not available
                                                     });
            
            
            $cordovaEmailComposer.open(email).then(null, function () {
                                                  //cancelar
                                                   });
                                                   */
});
