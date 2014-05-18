var sliding = false;

Template.project.rendered = function(){

};

Template.project.events({
    'mouseenter .launch.attached' : function(event){
        var button = $(event.currentTarget);
        $(button).animate({
            width: '170px'
        }, 300, function(){
            button.find('.text').show();
        });
    },

    'click #menu' : function(){

        var $sidebar = $('.ui.sidebar');
        var $launchButton = $('.launch.attached');

        $sidebar.sidebar({
        }).sidebar('toggle');


        $launchButton.toggleClass('pushed');


    },

    'mouseleave .launch.attached' : function(event){
        var button = $(event.currentTarget);
        button.find('.text').hide();
        button.stop().animate({
            width: '70px'
        }, 300);
    }
});
