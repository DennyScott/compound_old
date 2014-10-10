var project;
Template.project.rendered = function() {


};

Template.project.events({
	'click .make-full-screen' : function(e){
		$('body').addClass('bodyWhite');
		$('.ui.page.grid').hide();
		$('#fullScreen-scrumboard').show();
	},

})


