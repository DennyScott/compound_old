Tasks = new Meteor.Collection('tasks');

var Schemas = {};

Schemas.Tasks = new SimpleSchema({
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
	storyID: {
		type: String,
		label: 'Story ID'
	},
	autherID: {
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
	updatedAuthorID: {
		type: String,
		label: 'Last Updated By Author ID'
	},
	state: {
		type: String,
		label: 'State'
		optional: true
	},
	position: {
		type: Number,
		label: 'Position'
		optional: true
	}
});

Tasks.attachSchema(Schemas.Tasks);

Meteor.methods({

	 addTask: function(taskAttributes){

		var user = Meteor.user();

		//Ensures that the user is logged in
		if (!user){
			throw new Meteor.Error(401, "You need to log in to create new tasks");
		}

		if(!taskAttributes.title){
			throw new Meteor.Error(422, 'Error 422: Task must have a title');
		}

		//filling in other keys
		var task = _.extend(_.pick(taskAttributes, 'title', 'description', 'storyID'), {
			authorID: user._id,
			submitted: new Date().getTime(),
			lastUpdated: new Date().getTime(),
			updateAuthorID: user._id,
			state: '', 				// String title of stage
			position: '', 			// int number position
		});

		//Inserts new project into collection
		var taskID = Tasks.insert(task);

		//returns the ID of the new project
		return taskID;
	}
});