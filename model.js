
function saveResult(subjectId, colorType, chosenObjects, listItems){
	// chosenObject and listItems []
	var foundItems = [];
	var missedItems = [];
	var wrongAnswers = [];
	var result = {
		subject: subjectId,
		type: colorType
	};
	for (i = 0; i < chosenObjects.length; i++) {
		var found = false;
		for (j = 0; j < listItems.length; j++) {
			if (chosenObjects[i] == listItems[j]) {
				found = true;
				break
			}
		}
		if (found){
			foundItems.push(chosenObjects[i]);
		} else {
			wrongAnswers.push(chosenObjects[i])
		}
	}
	for (i = 0; i < listItems.length; i++){
		var missed = true
		for (j = 0; j < foundItems.length; j++) {
			if (listItems[i] == foundItems[j]){
				missed = false
				break
			}
		}
		if (missed){
			missedItems.push(listItems[i])
		}
	}
	result.foundItems = foundItems;
	result.missedItems = missedItems;
	result.wrongAnswers = wrongAnswers;
	return result
}



var items = [
	{
		id: 1,
		name: 'Eggs',
		image: 'images/egg.jpg'
	},
	{
		id: 2,
		name: 'Apple',
		image: 'images/apple.jpg'
	},
	{
		id: 3,
		name: 'Cucumber',
		image: 'images/cucumber.jpg'
	},
	{
		id: 4,
		name: 'Juice',
		image: 'images/juice.jpg'
	},
	{
		id: 5,
		name: 'Meat',
		image: 'images/meat.jpg'
	},
	{
		id: 6,
		name: 'Milk',
		image: 'images/milk.jpg'
	},
	{
		id: 7,
		name: 'Pear',
		image: 'images/pear.jpg'
	},
	{
		id: 8,
		name: 'Sundried',
		image: 'images/sundried.jpg'
	},
	{
		id: 9,
		name: 'Banana',
		image: 'images/banana.jpg'
	},
	{
		id: 10,
		name: 'Butter',
		image: 'images/butter.jpg'
	},
	{
		id: 11,
		name: 'Cheese',
		image: 'images/cheese.jpg'
	},
	{
		id: 12,
		name: 'Tomato',
		image: 'images/tomato.jpg'
	},
	{
		id: 13,
		name: 'Flour',
		image: 'images/flour.jpg'
	},
	{
		id: 14,
		name: 'Sugar',
		image: 'images/sugar.jpg'
	},
	{
		id: 15,
		name: 'Tooth Paste',
		image: 'images/toothpaste.jpg'
	},
	{
		id: 16,
		name: 'Fish',
		image: 'images/fish.jpg'
	}
]

