var canMove = false;
Template.project.rendered = function(){

    $( "#scrumInner" ).sortable();
    $( "#scrumInner" ).disableSelection();


  $( ".scrumColumn" ).sortable({
    connectWith: ".scrumColumn",
    placeholder: "portlet-placeholder ui-corner-all",
  });

  $( ".portlet")
  .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
  .find( ".portlet-header" )
  .prepend( "<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");

  $( ".portlet-toggle" ).click(function() {
    var icon = $( this );
    icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
    icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
  });


    //this will have the users tasks fade in when the page is rendered
    $('.image.user-task')
    .transition('fade up')
    ;



  };

  var down = false;
  var x, y, top, left;

  Template.project.events({
    'mousedown .scrumboard' : function(e){
      if($(event.target)[0].id === 'scrumboard'){
       e.preventDefault();
       down=true;
       x=e.pageX;
       left=$('#scrumboard').scrollLeft();

     }
   },

   'mousemove .scrumboard': function(e) {
    if(down){
      var newX=e.pageX;

      $("#scrumboard").scrollLeft(left-newX+x);
    }
  },

  'mouseup .scrumboard' : function(event){
    down = false;
  },
  'click .task' : function(event){
    $('.ui.modal.task')
    .modal('show')
    ;
  }
});
