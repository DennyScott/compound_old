Template.taskCard.rendered = function() {
	$('.scrumInner').sortable().disableSelection();

	$(".scrumColumn").sortable({
		connectWith: '.scrumColumn',
		placeholder: 'portlet-placeholder ui-corner-all',
		cancel: '.add-card, .new-portlet'
	}).disableSelection();

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