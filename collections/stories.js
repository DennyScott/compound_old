Stories = new Meteor.Collection('stories');

Meteor.methods({

	 addStory: function(storyAttributes){

		var user = Meteor.user();

		//Ensures that the user is logged in
		if (!user){
			throw new Meteor.Error(401, "You need to log in to create new stories");
		}

		if(!storyAttributes.title){
			throw new Meteor.Error(422, 'Error 422: Story must have a title');
		}

		//filling in other keys
		var story = _.extend(_.pick(storyAttributes, 'title', 'description', 'projectID'), {
			authorID: user._id,
			submitted: new Date().getTime(),
			lastUpdated: new Date().getTime(),
			updateAuthorID: user._id,
			stage: '', 				// String title of stage
			position: '', 			// int number position
			scheduledDate: null 	// Date Object
		});

		//Inserts new project into collection
		var storyID = Stories.insert(story);

		//returns the ID of the new project
		return storyID;
	},

	//-----------------------------------STORY UPDATE METHODS----------------------------------------------//
	
	updateStoryDescription: function(id, description){
		Stories.update(id, {$set: {'description': description}});
		Meteor.call('updateStory', id);
	},

	
	updateStory: function(id) {
		var user = Meteor.user();
		var now = new Date().getTime;
		Stories.update(id, {$set: {'lastUpdated': now,  'updateAuthorID': user._id}});
	},

	
	updateTitle: function(id, title) {
		Stories.update(id, {$set: {'title': title}});
		Meteor.call('updateStory', id);
	},

	
	updateAuthor: function(id, author) {
		Stories.update(id, {$set: {'authorID': author}});
		Meteor.call('updateStory', id);
	},

	updateScheduledDate: function(id, date) {
		Stories.update(id, {$set: {'scheduledDate': date}});
		Meteor.call('updateStory', id);
	},

	updateStage: function(id, stage) {
		Stories.update(id, {$set: {'stage': stage}});
		Meteor.call('updateStory', id);
	},

	updatePosition: function(id, position) {
		Stories.update(id, {$set: {'position': position}});
		Meteor.call('updateStory', id);
	},

	//---------------------------------END OF STORY UPDATE METHODS-----------------------------------------//

	//-----------------------------------STORY REMOVE METHODS----------------------------------------------//
	
	
	removeStory: function(id) {
		var user = Meteor.user();
		var found = Stories.findOne(id);
		if(found.authorID === user._id){
			Stories.remove(id);
		} else {
			throw new Meteor.Error(405, "You need to own this project to delete it");
		}
	}
	//---------------------------------END OF STORY REMOVE METHODS-----------------------------------------//
});