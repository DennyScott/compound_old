Router.map(function() {
  this.route('home', {
      path: '/'
    }),

    this.route('dashboard', {
      path: 'dashboard',
      layoutTemplate: 'loggedIn'
    }),

    this.route('profile', {
      path: 'profile',
      layoutTemplate: 'loggedIn'
    }),

    this.route('project', {
      path:'project',
      layoutTemplate: 'loggedIn'
    })
});
