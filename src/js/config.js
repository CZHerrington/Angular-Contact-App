function config ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('root', {
      templateUrl: 'templates/layout.template.html',
      abstract: true
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.template.html',
      controller: 'HomeController as vm'
    })
    .state('root.add', {
      url: '/add',
      templateUrl: 'templates/add.template.html',
      controller: 'AddController as vm'
    })
    .state('root.detail', {
      url: '/contact/:id',
      templateUrl: 'templates/detail.template.html',
      controller: 'DetailController as vm'
    });

  $urlRouterProvider.otherwise('/');

}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };
