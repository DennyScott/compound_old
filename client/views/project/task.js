Template.taskCard.rendered = function () {
	$('.scrumInner').sortable().disableSelection();

    $(".scrumColumn").sortable({
        connectWith: '.scrumColumn',
        placeholder: 'portlet-placeholder ui-corner-all',
        cancel: '.add-card'
    }).disableSelection();

}