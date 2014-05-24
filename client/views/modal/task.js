Template.task.rendered = function () {
	$('.ui.modal')
      .modal()
    ;

    $('.card-menu')
  .popup({
    on: 'click'
  });

//Injects the collaborators-side template as a popover
$('#popover-collaborators').unbind();
$('#popover-collaborators').popup({
	on: "click",
	html: UI.toHTML(Template['collaborators-side'])
});

//Injects the collaborators-side template as a popover
$('#popover-tags').unbind();
$('#popover-tags').popup({
	on: "click",
	html: UI.toHTML(Template['tags-side'])
});

//Injects the checklist-side template as a popover
$('#popover-checklist').unbind();
$('#popover-checklist').popup({
	on: "click",
	html: UI.toHTML(Template['checklist-side'])
});

//Injects the story-points-side template as a popover
$('#popover-story-points').unbind();
$('#popover-story-points').popup({
	on: "click",
	html: UI.toHTML(Template['story-points-side'])
});

};

Template.task.events({
	//Handles the Collaborators Popover Menu
	'click .collab-menu': function () {
		//Handles activating the hover dimming effect on pictures
		$('.collab-person .image')
		  .dimmer({
		    on: 'hover'
		 	});

		  	//Handles changing the checkbox area on clicks
			$('.collab-person').on('click', function() {
				if($(this).hasClass('isChecked')){
					$(this).removeClass('isChecked')
					$(this).find('.checkbox').removeClass('checked').addClass('empty');
				} else {
					$(this).addClass('isChecked')
					$(this).find('.checkbox').addClass('checked').removeClass('empty');
				}
			});
	},

	//Handles Tag Popup Menu
	'click .tag-menu' : function () {

	},

	//Handles Checklist Popup Menu
	'click .checklist-menu' : function () {
		$('.pop-task').on('click', function() {
			$(this).find(".checkbox").addClass('checked').removeClass('empty');
			$(this).transition('fade down');
		});
	},

	//Handles Story Point Popup Menu
	'click .story-points-menu' : function () {
		
	},

	//Handles Schedule Menu
	'click .schedule-menu' : function () {
		
	},

	//Handles the Analytics Menu
	'click .analytics-menu' : function () {
		
	}


});
