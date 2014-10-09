Meteor.publish('tasks', function() {
	return Tasks.find({});
});

Meteor.publish('projects', function() {
	return Projects.find({});
});

Meteor.publish('stories', function() {
	return Stories.find({});
});

Meteor.publish('sprints', function() {
	return Sprints.find({});
});