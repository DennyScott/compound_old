if (Tasks) {
	if (Tasks.find()) {
		if (Tasks.find({}).count() === 0) {
			var task = {
				'title': 'Create DB',
				'description': 'Some Description',
				'storyID': '00000',
				'authorID': 'hnpAjZdFHxvxQPukd',
				'submitted': new Date(),
				'lastUpdated': new Date(),
				'updateAuthorID': 'hnpAjZdFHxvxQPukd',
				'state': 'To Do', // String title of stage
				'position': '1', // int number position
			};
			Tasks.insert(task);
		}
	}
}