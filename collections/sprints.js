Sprints = new Mongo.Collection('sprints');

var Schemas = {};

Schemas.Sprints = new SimpleSchema({
	title: {
		type: String,
		label: 'Title',
		max: 100
	},
	description: {
		type: String,
		label: 'Description',
		max: 300,
		optional: true
	},
	authorID: {
		type: String,
		label: 'Author ID'
	},
	submitted: {
		type: Date,
		label: 'Submitted'
	},
	lastUpdated: {
		type: Date,
		label: 'Last Updated'
	},
	updateAuthorID: {
		type: String,
		label: 'Last Updated By Author ID'
	}
});

Sprints.attachSchema(Schemas.Sprints);


Meteor.methods({

	sprint: function(sprintAttributes) {

		var user = Meteor.user();

		//Ensures that the user is logged in
		if (!user) {
			throw new Meteor.Error(401, "You need to log in to create new sprints");
		}

		if (!sprintAttributes.title) {
			throw new Meteor.Error(422, 'Error 422: Sprint must have a title');
		}

		//filling in other keys
		var sprint = _.extend(_.pick(sprintAttributes, 'title', 'description', 'projectID'), {
			authorID: user._id,
			submitted: new Date(),
			lastUpdated: new Date(),
			updateAuthorID: user._id
		});

		//Inserts new project into collection
		var sprintID = Sprints.insert(sprint);

		//returns the ID of the new project
		return sprintID;
	},

	//-----------------------------------STORY UPDATE METHODS----------------------------------------------//


	updateSprint: function(sprintAttributes) {
		var user = Meteor.user();

		//Ensures that the user is logged in
		if (!user) {
			throw new Meteor.Error(401, "You need to log in to update sprints");
		}

		//filling in other keys
		var sprint = _.extend(_.pick(sprintAttributes, 'title', 'description'), {
			lastUpdated: new Date(),
			updateAuthorID: user._id,
		});
		var returnStuff = Sprints.update(sprintAttributes._id, sprint);

		return returnStuff;
	},

	//---------------------------------END OF STORY UPDATE METHODS-----------------------------------------//

	//-----------------------------------STORY REMOVE METHODS----------------------------------------------//


	removeSprint: function(id) {
		var user = Meteor.user();
		var found = Sprints.findOne(id);
		if (found.authorID === user._id) {
			Sprints.remove(id);
		} else {
			throw new Meteor.Error(405, "You need to own this sprint to delete it");
		}
	}
	//---------------------------------END OF STORY REMOVE METHODS-----------------------------------------//
});