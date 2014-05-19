Template.project.rendered = function(){

    $( ".scrumColumn" ).sortable({
      connectWith: ".scrumColumn",
      placeholder: "portlet-placeholder ui-corner-all",
  });

    $( ".portlet" )
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
