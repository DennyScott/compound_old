Template.task.rendered = function () {
	$('.ui.modal')
      .modal()
    ;

    $('.card-menu')
  .popup({
    on: 'click'
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
	}
});
$(document).ready(function(){
  $('.isCheck').click(function () {
		console.log("Hi!");
	});
});

function sayHello() {
	console.log("I've said hello!");
}

