function saveResult(subjectId, colorType, chosenObjects, listItems){
	// chosenObject and listItems []
	var foundItems = [];
	var missedItems = [];
	var wrongAnswers = [];
	var result = {
		subject: subjectId
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
			foundItems.append(chosenObjects[i]);
		} else {
			wrongAnswer.append(chosenObjects[i])
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
			missedItems.append(listItems[i])
		}
	}
		
}