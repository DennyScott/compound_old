Projects = new Meteor.Collection('projects');

Meteor.methods({

	/**
	 * Creates a new project and places it in the Projects table
	 * @param  {[Object]} projectAttributes [A object containing a title and description]
	 * @return {[String]}                   [ID of the new Project]
	 */
	 project: function(projectAttributes){

		var user = Meteor.user();

		//Ensures that the user is logged in
		if (!user){
			throw new Meteor.Error(401, "You need to log in to create new stories");
		}

		if(!projectAttributes.title){
			throw new Meteor.Error(422, 'Error 422: Project must have a title');
		}

		//filling in other keys
		var proj = _.extend(_.pick(storyAttributes, 'title', 'description'), {
			authorID: user._id,
			submitted: new Date().getTime(),
			lastUpdated: new Date().getTime(),
			updateAuthorID: user._id,
			stories: [], 	// {id, submitted, lastUpdated, authorID, stage, position, scheduledDate, label[], collaborators[]}
			iteration: [],	// {id, startDate, endDate, storyId}
			comments: [],  	//{id, submitted, lastUpdated, authorID}
			labels: [],    	//{id, color, name}
			storyScrumColumns: [], //{id, columnNumber, title}
			projectScrumColumns: [] //{id, columnNumber, title}
		});

		//Inserts new project into collection
		var projectID = Projects.insert(proj);

		//returns the ID of the new project
		return projectID;
	},

	//-----------------------------------PROJECT UPDATE METHODS----------------------------------------------//
	
	/**
	 * Updates the Description of a Project
	 * @param  {[String]} id          [The ID of the Project to update]
	 * @param  {[String]} description [The new description of that Project]
	 * @return {[void]}             [No Return]
	 */
	updateProjectDescription: function(id, description){
		Projects.update(id, {$set: {'description': description}});
		Meteor.call('updateProject', id);
	},

	/**
	 * Update the update vitols of a project
	 * @param  {[String]} id [The ID of the Project]
	 * @return {[void]}    [No Return]
	 */
	updateProject: function(id) {
		var user = Meteor.user();
		var now = new Date().getTime;
		Projects.update(id, {$set: {'lastUpdated': now,  'updateAuthorID': user._id}});
	},

	/**
	 * Update the Title of a Project
	 * @param  {String} id    The ID of the Project
	 * @param  {String} title The New title of the Project
	 * @return {void}       No Return
	 */
	updateTitle: function(id, title) {
		Projects.update(id, {$set: {'title': title}});
		Meteor.call('updateProject', id);
	},

	/**
	 * Update the Author ownership of the Project
	 * @param  {String} id     The ID of the project
	 * @param  {String} author The ID of the author
	 * @return {void}        No Return
	 */
	updateAuthor: function(id, author) {
		Projects.update(id, {$set: {'authorID': author}});
		Meteor.call('updateProject', id);
	},

	//---------------------------------END OF PROJECT UPDATE METHODS-----------------------------------------//

	//-----------------------------------PROJECT REMOVE METHODS----------------------------------------------//
	
	/**
	 * Removes a project for the projects collection
	 * @param  {String} id The ID of the project
	 * @return {void}    No Return
	 */
	removeProject: function(id) {
		var user = Meteor.user();
		var found = Projects.findOne(id);
		if(found.authorID === user._id){
			Projects.remove(id);
		} else {
			throw new Meteor.Error(405, "You need to own this project to delete it");
		}
	}
	//---------------------------------END OF PROJECT REMOVE METHODS-----------------------------------------//
});