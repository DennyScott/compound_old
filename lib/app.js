Router.map(function() {
  this.route('home', {
    path: '/',
    waitOn: function() {
      return [Meteor.subscribe('tasks'), Meteor.subscribe('projects'), Meteor.subscribe('stories'), Meteor.subscribe('sprints')];
    },
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
    path: 'project',
    layoutTemplate: 'loggedIn',
    onBeforeAction: AccountsTemplates.ensureSignedIn,
    waitOn: function() {
      return [Meteor.subscribe('tasks'), Meteor.subscribe('projects'), Meteor.subscribe('stories'), Meteor.subscribe('sprints')];
    },
  })
});