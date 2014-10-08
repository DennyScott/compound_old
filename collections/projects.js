Projects = new Mongo.Collection('projects');

var Schemas = {};

Schemas.Projects = new SimpleSchema({
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
	states: {
		type: [String],
		label: 'States',
		optional: true
	}
});

Projects.attachSchema(Schemas.Projects);

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
			throw new Meteor.Error(401, "You need to log in to create new projects");
		}

		//filling in other keys
		var proj = _.extend(_.pick(projectAttributes, 'title', 'description'), {
			authorID: user._id,
			submitted: new Date(),
			lastUpdated: new Date(),
			updateAuthorID: user._id,
		});

		//Inserts new project into collection
		var projectID = Projects.insert(proj);

		//returns the ID of the new project
		return projectID;
	},

	//-----------------------------------PROJECT UPDATE METHODS----------------------------------------------//


	updateProject: function(projectAttributes) {
				
		var user = Meteor.user();

		//Ensures that the user is logged in
		if (!user){
			throw new Meteor.Error(401, "You need to log in to edit projects");
		}

		//filling in other keys
		var proj = _.extend(_.pick(projectAttributes, 'title', 'description'), {
			lastUpdated: new Date(),
			updateAuthorID: user._id,
		});

		Projects.update(projectAttributes._id, proj);
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

