Tasks = new Meteor.Collection('tasks');

Meteor.methods({
	/**
	 * This function will data validate the new story being passed
	 * and then if no errors occur, place this new story in
	 * the Story collection
	 * @param  {[object]} storyAttributes [A prelimeanry story object, containg the title, description, and url]
	 * @return {[string]}                   [A String of its ID in the collection]
	 */
	 task: function(taskAttributes){

		// var user = Meteor.user();
		// var userName = Meteor.user().profile.firstName + " " + Meteor.user().profile.lastName;

		// //Ensures that the user is logged in
		// if (!user){
		// 	throw new Meteor.Error(401, "You need to log in to create new stories");
		// }

		if(!taskAttributes.title){
			throw new Meteor.Error(422, 'Error 422: Task must have a title');
		}

		//filling in other keys
		var finalTask = _.extend(_.pick(taskAttributes, 'title', 'description', 'storyID'), {
			// authorID: user._id,
			// authorName: userName,
			submitted: new Date().getTime(),
			lastUpdated: new Date().getTime(),
			checklist: [],
			comments: [],
			attachments: [],
			ratings: [],
			scheduledDate: []
		});

		//Inserts new story into collection
		var taskID = Tasks.insert(finalTask);
		Meteor.call('updateStoryDate', finalTask.storyID);
		//returns the ID of the new story
		return taskID;
	},

	// addChecklistItem: function(id, listItem){
	// 	var item = {
	// 		title: listItem.title,
	// 		isChecked: false
	// 	};
	// 	var task = Stories.findOne(id);
	// 	var maxID = 0;
	// 	story.tasks.forEach(function(entry) {
	// 		if(entry.id > maxID){
	// 			maxID = entry.id;
	// 		}
	// 	});
	// 	finalizedTask.id = maxID+1;
	// 	Tasks.update(id, {$push: {'checklist': item}});
	// },

	// updateChecklist: function(id, list){
	// 	var found = Tasks.findOne(id);
	// 	found.checklist = list;
	// 	Tasks.update(id, found);
	// },

	// addComment: function(id, comment){
	// 	var finalComment = {
	// 		comment: comment.comment,
	// 		authorName: authorName,
	// 		authorID: authorID,
	// 		submitted: new Date().getTime(),
	// 		lastUpdated: new Date().getTime(),
	// 		likes: 0
	// 	};
	// 	Tasks.update(id, {$push: {'comments': finalComment}});
	// },

	// addRating: function(id, rating){
	// 	var finalRating = {
	// 		amount: rating.amount,
	// 		title: rating.title,
	// 		authorID: authorID,
	// 		authorName: authorName,
	// 		submitted: new Date().getTime(),
	// 		lastUpdated: new Date().getTime()
	// 	};
	// 	Tasks.update(id, {$push: {'ratings': finalRating}});
	// },

	// removeTask: function(id){
	// 	Tasks.remove(id);
	// },

	// updateTask: function(task) {
	// 	task.lastUpdated = new Date().getTime;
	// 	Tasks.update(id, task);
	// }
	// 
	addTask: function(id, task){
		//Need to check input
		var finalizedTask = _.extend(_.pick(task, 'title', 'description'), {

		});
		var story = Stories.findOne(id);
		var maxID = 0;
		story.tasks.forEach(function(entry) {
			if(entry.id > maxID){
				maxID = entry.id;
			}
		});
		finalizedTask.id = maxID+1;
		Stories.update(id, {$push: {'tasks': finalizedTask}});
	},

	removeTask: function(id, taskID){
		Stories.update(id, {$pull: {'tasks' : {'id': taskID}}});
	},

	updateTask: function(id, task){
		var story = Stories.findOne(id);
		var tasks = story.tasks;
		for(i = 0; i < tasks.length; i++){
			if(tasks[i].id === task.id){
				tasks[i] = task;
			}
		}
		Stories.update(id, {$set: {'tasks' : tasks}});
	},

	removeStory: function(id){
		Stories.remove(id);
	}
});