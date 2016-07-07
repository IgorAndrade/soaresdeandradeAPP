angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $ionicHistory) {
  })

  .controller('FotosCtrl', function ($scope) {
    $scope.fotos = cfg.fotos;
  })

  .controller('ContatoCtrl', function ($scope, $cordovaEmailComposer, $window, $ionicLoading) {
    $scope.mapa_width = $window.innerWidth;
    $scope.mapa_height = $window.innerHeight * 0.4;
    $scope.telefone1 = cfg.telefones.contato1;
    $scope.telefone2 = cfg.telefones.contato2;
    var email = cfg.email.contato;
    $scope.send = function () {
      $cordovaEmailComposer.open(email).then(null, function () {
        //cancelar
      });
    };

  })

  .controller('noticiasCtrl', function ($scope, Restangular) {
      $scope.items = [];
      $scope.hasMore = true;
      $scope.qtd = 0;
      //loadMore();

      $scope.loadMore = loadMore;
      $scope.doRefresh = doRefresh;
      function loadMore() {
        var q = {
          pg: $scope.qtd,
          qtd: 3,
          sort: {data: 'desc'}
        };
        Restangular.all("/noticia").getList(q).then(
          function (result) {
            $scope.items = $scope.items.concat(result);
            $scope.$broadcast('scroll.infiniteScrollComplete');
            $scope.qtd += result.length;
            $scope.hasMore = (result.length > 0 && $scope.items.length <= 50);
          }, function () {
            $scope.$broadcast('scroll.infiniteScrollComplete');
            $scope.hasMore = false;
          });

      }

      function doRefresh() {
        $scope.items = [];
        $scope.hasMore = true;
        $scope.qtd = 0;
        $scope.$broadcast('scroll.refreshComplete');
      }
    }
  )

;
