Template.task.rendered = function () {
	$('.ui.modal')
      .modal()
    ;

    $('.card-menu')
  .popup({
    on: 'click'
  });

$('#popover_test').unbind();
console.log();
$('#popover_test').popup({
	on: "click",
	html: UI.toHTML(Template['collaborators'])
});


//   $('.all-collabs .image')
//   .dimmer({
//     on: 'hover'
//   })
// ;

//console.log($('.all-collabs.image'));


};

Template.task.events({
	'click .card-menu': function () {
		$('.collab-person .image')
		  .dimmer({
		    on: 'hover'
		 	});

			$('.popup-content').on('click', function() {
				console.log('woah');
			});
	}
});
