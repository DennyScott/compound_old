var canMove = false; //Used to keep track of if the page can move?
var newPort = null; //Used to keep track of the new Portlet Created on add card
var initRun = false; //This is used for when a new card is made so that if a user was to
//Click anywhere else, the card will unfocus
var isDescriptionFocus = false; //Boolean that keeps track if the tab hit is going into a new description


Template.scrumboard.rendered = function() {
	$('#scrumInner').sortable();
	$('#scrumInner').disableSelection();

	$(".scrumColumn").sortable({
		connectWith: '.scrumColumn',
		placeholder: 'portlet-placeholder ui-corner-all',
		cancel: '.add-card'
	});

	$(".portlet")
	.addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
	.find(".portlet-header")
	.prepend("<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");

	$(".portlet-toggle").click(function() {
		var icon = $(this);
		icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
		icon.closest(".portlet").find(".portlet-content").toggle();
	});
}


Template.scrumboard.helpers({
	currentSprint: function () {
		project = Projects.findOne(); //This needs to be found later when a user will be connected to a project
		if(project){
			return Sprints.findOne(project.currentSprintID);
		} else {
			return [];
		}
	},

	stories: function () {
		if(project){
			return Stories.find({sprintID: project.currentSprintID});
		} else {
			return [];
		}
	},

	stateTasks: function () {
		console.log(this === 'To Do');
		return Tasks.find({state: this.state})
	},

	states: function () {
		var states = [];
		for(var i = 0; i < project.states.length; i++) {
			states[i] = {state: project.states[i]};
		}
		return states;
	}
});

var down = false;
var x, y, top, left;

Template.scrumboard.events({
	'mousedown .scrumboard': function(e) {
		console.log(e);
		console.log($(event.currentTarget));
		if ($(event.target)[0].id === 'scrumboard') {
		console.log('in mousedown');	
			e.preventDefault();
			down = true;
			x = e.pageX;
			left = $('#scrumboard').scrollLeft();

		}
	},
	
	'mousemove .scrumboard': function(e) {
		if (down) {
			var newX = e.pageX;

			$("#scrumboard").scrollLeft(left - newX + x);
		}
	},

	'mouseup .scrumboard': function(event) {
		down = false;
	},
	'click .task': function(event) {
		var target = $(event.currentTarget);
		if (target.hasClass('add-card')) {
			//Is the Add Card Button at the bottom of a column
			createNewCard(target);
			initNewCard(target);
		} else if (target.hasClass('new-portlet')) {
			//If the task card clicked is the new one being created
			initNewCard(target);
		} else if (target.hasClass('add-stage')) {
			//If the task card clicked is the new stage card
			$('#stage-input').focus();
			$('#stage-input').on('keydown', function(e) {
				if (e.keyCode === 13) {
					//If the user hits Enter
					e.preventDefault();
					addStage($(this));
				} else if (e.keyCode === 27) {
					//If the user hits ESC
					e.preventDefault();
					$('#stage-input').popup('hide');
				}
			});
		} else {
			//Is a regular task card
			$('.ui.modal.task').modal('show');
		}
	},

	'click .scrumboard': function(event) {
		if (newPort !== null) {
			//If the user is currently in the process of new cards

			if (initRun === true) {
				//if the user clicked the button to add a card, it will run this once, so this bool will make
				//sure this function doesn't immediatly close so it can run again after
				initRun = false;


			} else {
				//When the user clicks the scrum board the card will be set
				newPort.blur();
				newPort = null;
			}
		}
	}
});

/**
 * [initNewCard description]
 * @param  [JQuery Selector]} targetButton [The target button pressed to open the new card]
 * @return {[void]}              [No Return]
 */
function initNewCard(targetButton) {
	initRun = true;
	var target = $(targetButton.siblings('.new-portlet'));
	var titleBox = $(target.find('#new-title'));
	var descriptionBox = $(target.find('#new-description'));
	titleBox.focus();
	newPort = target;

	//This function will handles when the user hits various keys while focused on the title
	titleBox.on('keydown', function(e) {
		if (e.keyCode === 9) {
			//If the User hits tab while in the title
			e.preventDefault();
			isDescriptionFocus = true;
			target.find('#new-description').focus();
		} else if (e.keyCode === 13) {
			//If the user hits Enter
			e.preventDefault();
			enterOnCard(target, targetButton);
		} else if (e.keyCode === 27) {
			//If the user hits ESC
			e.preventDefault();
			escapeCard(target);
		}
	});

	//This is for when the user hits enter on the description
	descriptionBox.on('keydown', function(e) {
		if (e.keyCode === 13) {
			//If the user hits Enter
			e.preventDefault();
			enterOnCard(target, targetButton);
		} else if (e.keyCode === 27) {
			//If the user hits ESC
			e.preventDefault();
			escapeCard(target);
		}
	});

	//When the user drops focus, the card will integrate into the other cards
	target.focusout(function() {
		if (newPort !== null) {
			if (!isDescriptionFocus) {
				unfocusCard($(this));
			} else {
				isDescriptionFocus = false;
			}
		}
	});

}

function addStage(target) {
	//Insert code to add a column to the database, and meteor will automatically add it to the table
}

/**
 * This function allows a user to just exit and destroy a newly created card.
 * @param  jQuery Selector target The target card to destroy
 * @return {[void]}        [No Return]
 */
function escapeCard(target) {
	//If the user HAS NOT entered a name for the card
	target.remove(); //Destroys the empty card
	newPort = null; //Housekeeping on variables
	initRun = false;
}

/**
 * This function is used when creating a new card and the user hits enter
 * @param  {[JQuery Selector]} target       [The target portlet]
 * @param  {[JQuery Selector]} targetButton [The target button that was first clicked]
 * @return {[void]}              [no return]
 */
function enterOnCard(target, targetButton) {
	//If the user hits enter
	if (target.find('#new-title').val().length > 0) {
		//If the user HAS entered a title in the card
		newPort = null;
		//These lines will unfocus the previous card and then create a new card
		unfocusCard(target);
		createNewCard(targetButton);
		initNewCard(targetButton);
		initRun = false; //This is because we don't click the mouse to hit this

	} else {
		//If the user did not enter a card title
		escapeCard(target);
	}
}

/**
 * This fuction will create a new card in the given column
 * @param  {[JQuery Selector]} target [The target button pressed to open the new card]
 * @return {[void]}        [No Return]
 */
function createNewCard(target) {
	var base = $('.empty-portlet:first').clone().show().removeClass('empty-portlet').addClass('new-portlet');
	target.before(base);
}

/**
 * This function will unfocus a card and turn its text areas into actual text, and then remove the areas
 * @param  {[JQuery Selector]} target [The target button pressed to open the new card]
 * @return {[void]}        [No Return]
 */
function unfocusCard(target) {
	var title = target.find('#new-title');
	var description = target.find('#new-description');
	if (!(title.val() === null || title.val() === undefined)) {
		//Check to see that the title is not undefined
		if (title.val().length === 0) {
			escapeCard(target);
		} else {
			//If the title is longer, set it into the card, and remove the text area and input field
			newPort = null;
			target.removeClass('new-portlet');
			target.find('.portlet-header').text(title.val());
			title.remove();
			target.find('.portlet-content').text(description.val());
			description.remove();

			//The code in this else will be deleted, simply add the title and descrption to the database, 
			//and delete the working card
		}
	}
}
