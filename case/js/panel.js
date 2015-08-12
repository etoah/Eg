$(function(){
	var ITEM_TEMPLATE='<div class="panel-row">未命名</div>';
	
	$("[data-additem]").click(function(){
		$(this).parent().before(ITEM_TEMPLATE);
		
	})
})