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
				states: ['To Do', 'Doing', 'Done'],
				storyCount: 0,
				taskCount: 0,
				sprintCount: 0
			};

			var pID = Projects.insert(project);

			var sprint = {
				title: 'First Sprint',
				description: 'This is our first sprint',
				authorID: '1234',
				projectID: pID,
				storyCount: 0,
				taskCount: 0,
				submitted: new Date(),
				lastUpdated: new Date(),
				updateAuthorID: '1234'
			}

			var sprintID = Sprints.insert(sprint);

			var updateProjectProperties = {
				currentSprintID: sprintID
			};

			Projects.update(pID, {$set: updateProjectProperties}, function(error) {
				if(error) {
					console.log(error);
				}
			});

			for (var x = 1; x <= 4; x++) {
				var story = {
					title: 'Awesome Story ' + x,
					description: 'This Story Must Be Awesome!',
					authorID: '1234',
					submitted: new Date(),
					lastUpdated: new Date(),
					updateAuthorID: '1234',
					projectID: pID,
					position: x,
					taskCount: x,
					sprintID: sprintID
				}

				var storyID = Stories.insert(story);
				var state = 'Done';
				for (var i = 1; i <= story.taskCount; i++) {
					if (state === 'Done') {
						state = 'To Do';
					} else if (state === 'To Do') {
						state = 'Doing';
					} else if (state === 'Doing') {
						state = 'Done';
					}

					var task = {
						'title': 'Awesome Task ' + i,
						'description': 'Some Description',
						'storyID': storyID,
						'projectID': pID,
						'authorID': '1234',
						'submitted': new Date(),
						'lastUpdated': new Date(),
						'updateAuthorID': '1234',
						'state': state, // String title of stage
						'position': i, // int number position
					};
					Tasks.insert(task);
				}
			}
		}
	}
}