Template.loggedIn.events({
    'mouseenter .launch.attached' : function(event){
        var button = $(event.currentTarget);
        $(button).animate({
            width: '180px'
        }, 300, function(){
            button.find('.text').show();
        });
    },

    'click #menu' : function(){

        var $sidebar = $('.ui.sidebar.left');
        var $launchButton = $('.launch.attached');

        $sidebar.sidebar({
            overlay:true
        }).sidebar('toggle');

        $launchButton.toggleClass('pushed');


    },

    'mouseleave .launch.attached' : function(event){
        var button = $(event.currentTarget);
        button.find('.text').hide();
        button.stop().animate({
            width: '70px'
        }, 300, function(){button.find('.text').hide()});
    }
});

Template.loggedIn.rendered = function(){

  WebFontConfig = {
    google: { families: [ 'Source+Sans+Pro::latin' ] }
  };
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);

  WebFontConfig = {
    google: { families: [ 'Open+Sans+Condensed:300:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); 
};
