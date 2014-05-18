Stories = new Meteor.Collection('stories');

Meteor.methods({
	/**
	 * This function will data validate the new story being passed
	 * and then if no errors occur, place this new story in
	 * the Story collection
	 * @param  {[object]} storyAttributes [A prelimeanry story object, containg the title, description, and url]
	 * @return {[string]}                   [A String of its ID in the collection]
	 */
	story: function(storyAttributes){

		var user = Meteor.user();
		var userName = Meteor.user().profile.firstName + " " + Meteor.user().profile.lastName;

		//Ensures that the user is logged in
		if (!user){
			throw new Meteor.Error(401, "You need to log in to create new stories");
		}

		if(!storyAttributes.title){
			throw new Meteor.Error(422, 'Error 422: Story must have a title');
		}

		if(Stories.findOne({"title" : storyAttributes.title, 'authorID': user._id})) {
			throw new Meteor.Error(423, 'Must have a unique name');
		}

		//filling in other keys
		var proj = _.extend(_.pick(storyAttributes, 'title'), {
			authorID: user._id,
			authorName: userName,
			overview: "Please Create An Overview",
			submitted: new Date().getTime(),
			lastUpdated: new Date().getTime()
			
		});

		//Inserts new story into collection
		var storyID = Stories.insert(proj);
		//returns the ID of the new story
		return storyID;
	},

	/**
	 * This function will update the story passed to
	 * have a new update Author and update Time
	 * @param  String id The id of the story to be updated
	 * @return void    Returns nothing
	 */
	updateStory: function(story){
		var user = Meteor.user();
		var id = story._id;
		var userName = Meteor.user().profile.firstName + " " + Meteor.user().profile.lastName;

		story.lastUpdated = new Date().getTime;

		Stories.update(id, story);
	},

	updateStoryOverview: function(story, overview){
		var user = Meteor.user();
		var id = story._id;
		var userName = Meteor.user().profile.firstName + " " + Meteor.user().profile.lastName;

		story.lastUpdated = new Date().getTime;
		story.overview = overview;
		Stories.update(id, story);
	},

	removeStory: function(id){
		Stories.remove(id);
	}
});