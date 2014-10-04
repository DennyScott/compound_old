Tasks = new Meteor.Collection('tasks');

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
			stage: '', 				// String title of stage
			position: '', 			// int number position
			scheduledDate: null 	// Date Object
		});

		//Inserts new project into collection
		var taskID = Tasks.insert(task);

		//returns the ID of the new project
		return taskID;
	}
});