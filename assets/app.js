(function() {
    'use strict';
    var rcrApp = angular.module('rcrApp', ['ui.router', 'rzModule']);

    rcrApp
        .config(rcrConfig)
        .controller('rcrCtrl', rcrCtrl);

    rcrConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function rcrConfig($stateProvider, $urlRouterProvider) {
        var lang = getCookie('tp-lang') || 'en';

        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'pages/home/home-' + lang + '.html'
        });

    }

    rcrCtrl.$inject = ['$scope'];
    function rcrCtrl($scope) {
        var rcr = this;
        
        rcr.init           = init;
        rcr.openModal      = openModal;
        rcr.toggleLanguage = toggleLanguage;
        rcr.currentLanguage = getCookie('tp-lang') || 'en';

        // rcr.data      = {
        //     en: {},
        //     bm: {}
        // }
        // loadJSON('assets/fixture-en.json', function(response) {
        //     rcr.data.en = JSON.parse(response);
        // });
        // loadJSON('assets/fixture-bm.json', function(response) {
        //     rcr.data.bm = JSON.parse(response);
        // });
        // rcr.lang      = rcr.lang || 'en';

        $scope.slider = {
            value: 500,
            options: {
                floor: 500,
                ceil: 3000,
                step: 500
            }
        };

        function init() {
            var offsetValue = 50;
            initializeSmoothScroll(offsetValue);
        }

        function openModal(id) {
            $('#' + id).modal('show');
        }

        function toggleLanguage(lang) {
            setCookie("tp-lang", lang, 3);
            location.reload();
        }
    }
})();