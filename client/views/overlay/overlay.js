var transEndEventNames = {
		'WebkitTransition': 'webkitTransitionEnd',
		'MozTransition': 'transitionend',
		'OTransition': 'oTransitionEnd',
		'msTransition': 'MSTransitionEnd',
		'transition': 'transitionend'
	};

var transEndEventName;
var support;


Template.overlay.rendered = function() {

	transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
	support = { transitions : Modernizr.csstransitions };
}

Template.overlay.events({
	'click #trigger-overlay' : function(event, template){
		$('#fullScreen-scrumboard').show();
		toggleOverlay(template.find('.overlay'), $('div.main-content')[0]);
	},

	'click button.overlay-close' : function(event, template) {
		toggleOverlay(template.find('.overlay'), $('div.main-content')[0]);
	}
})

function toggleOverlay(overlay, container) {
	console.log(overlay);
	console.log(container);
	if( classie.has( overlay, 'open' ) ) {
		classie.remove( overlay, 'open' );
		classie.remove( container, 'overlay-open' );
		classie.add( overlay, 'close' );
		var onEndTransitionFn = function( ev ) {
			if( support.transitions ) {
				if( ev.propertyName !== 'visibility' ) return;
				this.removeEventListener( transEndEventName, onEndTransitionFn );
				$('#fullScreen-scrumboard').hide();
			}
			classie.remove( overlay, 'close' );
		};
		if( support.transitions ) {
			overlay.addEventListener( transEndEventName, onEndTransitionFn );
		}
		else {
			onEndTransitionFn();
		}
	}
	else if( !classie.has( overlay, 'close' ) ) {
		classie.add( overlay, 'open' );
		classie.add( container, 'overlay-open' );
	}
}

