if (Tasks) {
	if (Tasks.find()) {
		if (Tasks.find({}).count() === 0) {
			var task = {
				'title': 'Create DB',
				'description': 'Some Description',
				'storyID': '00000',
				'authorID': '1234',
				'submitted': new Date(),
				'lastUpdated': new Date(),
				'updateAuthorID': '1234',
				'state': 'To Do', // String title of stage
				'position': '1', // int number position
			};
			for (var i = 0; i < 15; i++) {
				Tasks.insert(task);
			}
		}
	}
}

if (Projects) {
	if (Projects.find()) {
		if (Projects.find().count() === 0) {
			var project = {
				title: 'Super Awesome Project',
				description: 'This Project is super awesome!!!',
				authorID: '1234',
				submitted: new Date(),
				lastUpdated: new Date(),
				updateAuthorID: '1234',
				states: ['To Do', 'Doing', 'Done']
			};

			var pID = Projects.insert(project);

			var story = {
				title: 'Awesome Story 1',
				description: 'This Story Must Be Awesome!',
				authorID: '1234',
				submitted: new Date(),
				lastUpdated: new Date(),
				updateAuthorID: '1234',
				projectID: pID,
				position: 1,
				taskCount: 3
			}

			var storyID = Stories.insert(story);

			for (var i = 1; i <= story.taskCount; i++) {
				var task = {
					'title': 'Awesome Task ' + i,
					'description': 'Some Description',
					'storyID': storyID,
					'authorID': '1234',
					'submitted': new Date(),
					'lastUpdated': new Date(),
					'updateAuthorID': '1234',
					'state': 'To Do', // String title of stage
					'position': i, // int number position
				};
					Tasks.insert(task);
			}

			story = {
				title: 'Awesome Story 2',
				description: 'This Story Must Be Awesome!',
				authorID: '1234',
				submitted: new Date(),
				lastUpdated: new Date(),
				updateAuthorID: '1234',
				projectID: pID,
				position: 4,
				taskCount: 3
			}

			storyID = Stories.insert(story);

			for (var i = 1; i <= story.taskCount; i++) {
				var task = {
					'title': 'Awesome Task ' + i,
					'description': 'Some Description',
					'storyID': storyID,
					'authorID': '1234',
					'submitted': new Date(),
					'lastUpdated': new Date(),
					'updateAuthorID': '1234',
					'state': 'Doing', // String title of stage
					'position': i, // int number position
				};
					Tasks.insert(task);
			}

			story = {
				title: 'Awesome Story 3',
				description: 'This Story Must Be Awesome!',
				authorID: '1234',
				submitted: new Date(),
				lastUpdated: new Date(),
				updateAuthorID: '1234',
				projectID: pID,
				position: 2,
				taskCount: 1
			}

			storyID = Stories.insert(story);

			for (var i = 1; i <= story.taskCount; i++) {
				var task = {
					'title': 'Awesome Task ' + i,
					'description': 'Some Description',
					'storyID': storyID,
					'authorID': '1234',
					'submitted': new Date(),
					'lastUpdated': new Date(),
					'updateAuthorID': '1234',
					'state': 'Done', // String title of stage
					'position': i, // int number position
				};
					Tasks.insert(task);
			}

			story = {
				title: 'Awesome Story 4',
				description: 'This Story Must Be Awesome!',
				authorID: '1234',
				submitted: new Date(),
				lastUpdated: new Date(),
				updateAuthorID: '1234',
				projectID: pID,
				position: 3,
				taskCount: 5
			}

			storyID = Stories.insert(story);

			for (var i = 1; i <= story.taskCount; i++) {
				var task = {
					'title': 'Awesome Task ' + i,
					'description': 'Some Description',
					'storyID': storyID,
					'authorID': '1234',
					'submitted': new Date(),
					'lastUpdated': new Date(),
					'updateAuthorID': '1234',
					'state': 'To Do', // String title of stage
					'position': i, // int number position
				};
					Tasks.insert(task);
			}
		}
	}
}