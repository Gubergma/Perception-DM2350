function saveResult(colorType, chosenObjects, listItems){
	var foundItems = [];
	var missedItems = [];
	var wrongAnswers = [];
	var result = {
		type: colorType,
		list: listItems,
		chosen_objects: chosenObjects
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
	result.found_items = foundItems;
	result.missed_items = missedItems;
	result.wrong_answers = wrongAnswers;
	sendData(result);
}

function sendData(answers) {
	var jsonString = JSON.stringify(answers);
	console.log(answers);
	// $.ajax({
	// 'url': "senddata.php",
	// 'type': "POST",
	// 'data': {
	//   'answers': jsonString
	// },
	// 'success': function(output) {
	//   console.log('Success!');
	// }
	// });
}

var items = [
	{
		id: 0,
		name: 'Eggs',
		image: 'images/egg.jpg'
	},
	{
		id: 1,
		name: 'Apple',
		image: 'images/apple.jpg'
	},
	{
		id: 2,
		name: 'Cucumber',
		image: 'images/cucumber.jpg'
	},
	{
		id: 3,
		name: 'Juice',
		image: 'images/juice.jpg'
	},
	{
		id: 4,
		name: 'Meat',
		image: 'images/meat.jpg'
	},
	{
		id: 5,
		name: 'Milk',
		image: 'images/milk.jpg'
	},
	{
		id: 6,
		name: 'Pear',
		image: 'images/pear.jpg'
	},
	{
		id: 7,
		name: 'Sundried tomatoes',
		image: 'images/sundried.jpg'
	},
	{
		id: 8,
		name: 'Banana',
		image: 'images/banana.jpg'
	},
	{
		id: 9,
		name: 'Butter',
		image: 'images/butter.jpg'
	},
	{
		id: 10,
		name: 'Cheese',
		image: 'images/cheese.jpg'
	},
	{
		id: 11,
		name: 'Tomato',
		image: 'images/tomato.jpg'
	},
	{
		id: 12,
		name: 'Flour',
		image: 'images/flour.jpg'
	},
	{
		id: 13,
		name: 'Sugar',
		image: 'images/sugar.jpg'
	},
	{
		id: 14,
		name: 'Tooth Paste',
		image: 'images/toothpaste.jpg'
	},
	{
		id: 15,
		name: 'Fish',
		image: 'images/fish.jpg'
	}
]

