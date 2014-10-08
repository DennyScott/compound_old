Comments = new Mongo.Collection('comments');

var Schemas = {};

Schemas.Comments = new SimpleSchema({
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
	projectID: {
		type: String,
		label: 'Project ID'
	},
	collectionName: {
		type: String,
		label: 'Collection Name'
	}
});

Comments.attachSchema(Schemas.Comments);


Meteor.methods({

	comment: function(commentAttributes) {

		var user = Meteor.user();

		//Ensures that the user is logged in
		if (!user) {
			throw new Meteor.Error(401, "You need to log in to create new comments");
		}

		if (!commentAttributes.title) {
			throw new Meteor.Error(422, 'Error 422: Comment must have a title');
		}

		//filling in other keys
		var comment = _.extend(_.pick(commentAttributes, 'description', 'collectionName', 'foreignID'), {
			authorID: user._id,
			submitted: new Date(),
			lastUpdated: new Date()
		});

		//Inserts new project into collection
		var commentID = Comments.insert(comment);

		//returns the ID of the new project
		return commentID;
	},

	//-----------------------------------STORY UPDATE METHODS----------------------------------------------//


	updateComment: function(commentAttributes) {
		var user = Meteor.user();

		//Ensures that the user is logged in
		if (!user) {
			throw new Meteor.Error(401, "You need to log in to update comments");
		}

		//filling in other keys
		var comment = _.extend(_.pick(commentAttributes, 'description'), {
			lastUpdated: new Date(),
		});

		var returnStuff = Comments.update(commentAttributes._id, comment);

		return returnStuff;
	},

	//---------------------------------END OF STORY UPDATE METHODS-----------------------------------------//

	//-----------------------------------STORY REMOVE METHODS----------------------------------------------//


	removeComment: function(id) {
		var user = Meteor.user();
		var found = Comments.findOne(id);
		if (found.authorID === user._id) {
			Comments.remove(id);
		} else {
			throw new Meteor.Error(405, "You need to own this comment to delete it");
		}
	}
	//---------------------------------END OF STORY REMOVE METHODS-----------------------------------------//
});