var project;
Template.project.rendered = function() {

};

Template.project.events({
	'click #open-backlog' : function(){
		var $sidebar = $('.ui.sidebar.right');

		$sidebar.sidebar({
			overlay:true
		}).sidebar('toggle');


	}
})


