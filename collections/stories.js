Stories = new Mongo.Collection('stories');

var Schemas = {};

Schemas.Stories = new SimpleSchema({
	title: {
		type: String,
		label: 'Title',
		max: 100
	},
	description: {
		type: String,
		label: 'Description',
		max: 300
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
	},
	projectID: {
		type: String,
		label: 'Project ID'
	},
	position: {
		type: Number,
		label: 'Position',
		optional: true
	},
	taskCount: {
		type: Number,
		label: 'Task Count',
		min: 0
	}
});

Stories.attachSchema(Schemas.Stories);


Meteor.methods({

	story: function(storyAttributes) {

		var user = Meteor.user();

		//Ensures that the user is logged in
		if (!user) {
			throw new Meteor.Error(401, "You need to log in to create new stories");
		}

		if (!storyAttributes.title) {
			throw new Meteor.Error(422, 'Error 422: Story must have a title');
		}

		//filling in other keys
		var story = _.extend(_.pick(storyAttributes, 'title', 'description', 'projectID'), {
			authorID: user._id,
			submitted: new Date(),
			lastUpdated: new Date(),
			updateAuthorID: user._id,
			position: '', // int number position
			taskCount: 0
		});

		//Inserts new project into collection
		var storyID = Stories.insert(story);

		//returns the ID of the new project
		return storyID;
	},

	//-----------------------------------STORY UPDATE METHODS----------------------------------------------//


	updateStory: function(storyAttributes) {
		var user = Meteor.user();

		//Ensures that the user is logged in
		if (!user) {
			throw new Meteor.Error(401, "You need to log in to update stories");
		}

		//filling in other keys
		var story = _.extend(_.pick(storyAttributes, 'title', 'description', 'projectID', 'position', '_id'), {
			lastUpdated: new Date(),
			updateAuthorID: user._id,
		});
		var returnStuff = Stories.update(story);

		return returnStuff;
	},

	//---------------------------------END OF STORY UPDATE METHODS-----------------------------------------//

	//-----------------------------------STORY REMOVE METHODS----------------------------------------------//


	removeStory: function(id) {
		var user = Meteor.user();
		var found = Stories.findOne(id);
		if (found.authorID === user._id) {
			Stories.remove(id);
		} else {
			throw new Meteor.Error(405, "You need to own this project to delete it");
		}
	}
	//---------------------------------END OF STORY REMOVE METHODS-----------------------------------------//
});