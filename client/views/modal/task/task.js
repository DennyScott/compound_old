Template.task.rendered = function () {
	$('.ui.modal')
      .modal()
    ;

    $('.card-menu')
  .popup({
    on: 'click'
  });

  $('.story-point-area').rating('disable');
  $('.story-point-area').rating('set rating', 3);


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
		$('.collab-image').each(function(i, obj){
			if($(this).hasClass('isChecked')){
				$(this).dimmer('show');
			}
		});

		  	//Handles changing the check and dimming on clicks
			$('.collab-image').on('click', function() {
				if($(this).hasClass('isChecked')){
					$(this).removeClass('isChecked');
					$(this).find('.icon').removeClass('checkmark');
					$(this).dimmer('hide');
				} else {
					$(this).addClass('isChecked')
					$(this).find('.icon').addClass('checkmark');
					$(this).dimmer('show');
				}
			});
	},

	//Handles Tag Popup Menu
	'click .tag-menu' : function () {
		//Handles activating the hover dimming effect on pictures
		$('.tag-image').each(function(i, obj){
			if($(this).hasClass('isChecked')){
				$(this).find('.icon').show();
			} else {
				$(this).find('.icon').hide();
			}
		});

		//Handles changing the check and dim on clicks
			$('.tag-image').on('click', function() {
				$(this).find('.icon').toggle();
			});
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
		$('.pop-rate .rating').rating();
		$('.pop-rate .rating').each(function(i, obj){
			var randomnumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
			$(this).rating('set rating', randomnumber);
		});		
	},

	//Handles Schedule Menu
	'click .schedule-menu' : function () {
		
	},

	//Handles the Analytics Menu
	'click .analytics-menu' : function () {
		
	}


});
