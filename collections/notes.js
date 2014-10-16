Notes = new Mongo.Collection('notes');

var Schemas = {};

Schemas.Notes = new SimpleSchema({
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
	sprintID: {
		type: String,
		label: 'Sprint ID',
		optional: true
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
	x: {
		type: Number,
		label: 'X Position',
	},
	y: {
		type: Number,
		label: 'Y Position',
	},
	taskCount: {
		type: Number,
		label: 'Task Count',
		min: 0
	}
});

Notes.attachSchema(Schemas.Notes);


Meteor.methods({

	note: function(noteAttributes) {

		var user = Meteor.user();

		//Ensures that the user is logged in
		if (!user) {
			throw new Meteor.Error(401, "You need to log in to create new notes");
		}

		if (!noteAttributes.title) {
			throw new Meteor.Error(422, 'Error 422: Note must have a title');
		}

		//filling in other keys
		var note = _.extend(_.pick(noteAttributes, 'title', 'description', 'projectID', 'sprintID'), {
			authorID: user._id,
			submitted: new Date(),
			lastUpdated: new Date(),
			updateAuthorID: user._id,
			position: '', // int number position
			taskCount: 0
		});

		if (noteAttributes.sprintID) {
			note.sprintID = noteAttributes.sprintID;
			Sprints.update(note.sprintID, {
				$inc: {
					noteCount: 1
				}
			});
		}

		//Updates Projects to have one more note counted
		Projects.update(note.projectID, {
			$inc: {
				noteCount: 1
			}
		});

		//Inserts new project into collection
		var noteID = Notes.insert(note);

		//returns the ID of the new project
		return noteID;
	},

	//-----------------------------------STORY UPDATE METHODS----------------------------------------------//


	updateNote: function(noteAttributes) {
		var user = Meteor.user();

		//Ensures that the user is logged in
		if (!user) {
			throw new Meteor.Error(401, "You need to log in to update notes");
		}

		//filling in other keys
		var note = _.extend(_.pick(noteAttributes, 'title', 'description', 'projectID', 'position', 'sprintID'), {
			lastUpdated: new Date(),
			updateAuthorID: user._id,
		});

		var isSprint = false;

		if (note.sprintID) {
			var found = Notes.findOne(noteAttributes._id);

			if (!found.sprintID) {
				isSprint = true;
			}
		}
		var returnStuff = Notes.update(noteAttributes._id, note);

		if (isSprint) {
			Sprints.update(note.sprintID, {
				$inc: {
					noteCount: 1
				}
			});
		}

		return returnStuff;
	},

	//---------------------------------END OF STORY UPDATE METHODS-----------------------------------------//

	//-----------------------------------STORY REMOVE METHODS----------------------------------------------//


	removeNote: function(id) {
		var user = Meteor.user();
		var found = Notes.findOne(id);
		if (found.authorID === user._id) {
			//Updates Projects to have one more note counted
			Projects.update(note.projectID, {
				$inc: {
					noteCount: -1
				}
			});
			Notes.remove(id);
		} else {
			throw new Meteor.Error(405, "You need to own this project to delete it");
		}
	}
	//---------------------------------END OF STORY REMOVE METHODS-----------------------------------------//
});