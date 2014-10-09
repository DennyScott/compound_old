var project;
Template.project.rendered = function() {

	$("#scrumInner").sortable();
	$("#scrumInner").disableSelection();


	$(".scrumColumn").sortable({
		connectWith: ".scrumColumn",
		placeholder: "portlet-placeholder ui-corner-all",
		cancel: ".add-card"
	});




	//this will have the users tasks fade in when the page is rendered
	$('.image.user-task')
	.transition('fade up');

	$('.empty-portlet:first').hide();

	$('.add-stage').unbind();
	$('.add-stage').popup({
		on: "click",
		html: UI.toHTML(Template['stageCreation'])
	});


};

Template.project.events({
	'click .make-full-screen' : function(e){
		$('body').addClass('bodyWhite');
		$('.ui.page.grid').hide();
		$('#fullScreen-scrumboard').show();
	},

})


