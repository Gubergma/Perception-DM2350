var time = 7000; //amount of time the containter will be visable

function hideView() {
	var shoppingList = $('.shopping-list');
	shoppingList.hide();
}

setTimeout(hideView, time); //hides container after 7000 ms
