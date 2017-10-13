$(document).ready(function() {
	var btnstart = $('.btn-start');

	btnstart.on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		if($('.mail-input').val() == ''){
			alert('Du måste skriva in en mailadress!');
		}
		else {
			survey();
		}

	});
});

function survey() {

	// Show survey area
	$('.startcontent').hide();
	$('.surveycontent').show();
	$('.image-container').show();

	// Get some jquery objects
	var yesbtn = $('.btn-yes');
	var nobtn = $('.btn-no');
	var surveybtn = $('.surveybtn');
	var imageHolder = $('.image-container');
	var mailinput = $('.mail-input');

	// Variables
	var nrOfImages = 31; //Set this to the number of images
	var count = 1;
	var currnum;
	var answers = {};
	var start;
	var end;
	var diff;
	var showTime = 7000; // The amount of time in milliseconds that we will show the images


	var numList = [];

	for (var i = 1; i <= nrOfImages; i++) {
	    numList.push(i);
	}

	function shuffle(a) {
	    var j, x, i;
	    for (i = a.length; i; i--) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
	}

	shuffle(numList);
	// Take out the first image number and create the first image
	currnum = numList.pop();
	var imageUrl = 'images/image_' + currnum + '.png';


	function showButtons() {
		var buttonsHolder = $('.buttons');
		var surveyImage = $('.survey-image');

		imageHolder.html('<div class="questiontext"> Does this webshop seem trustworthy to you?</div>');

		buttonsHolder.show();
		surveyImage.hide();

		// time when they see the buttons
		start = new Date();
	}
	function showImage() {
		var buttonsHolder = $('.buttons');
		var surveyImage = $('.survey-image');

		buttonsHolder.hide();
		surveyImage.show();
	}

	// Add the mail to answers
	answers['mail'] = mailinput.val();

	//Set up first image
	imageHolder.html('<img class="survey-image" src="'+imageUrl+'">')

	setTimeout(showButtons, showTime);

	surveybtn.on('click', function(event) {
		event.preventDefault();
		/* Act on the event */

		// end time
		end = new Date();
		// take the difference and make it a positive number
		diff = (start-end)* -1;

		$answhat = 'testar';
		// create new answer
		answers['ansImageNr_' + currnum] = {val: $(this).data('val'),atime:diff};
		
		if(numList.length == 0){
			$('.buttons').hide();
			endsurvey(answers);
		}
		else {
			currnum = numList.pop(); // New image
			nextimage(currnum,imageHolder);
			showImage();
			setTimeout(showButtons, showTime);
		}
		
	});
}

function nextimage(currnum,imageHolder) {
	// Update images
	imageUrl = 'images/image_' + currnum + '.png';
	imageHolder.html('<img class="survey-image" src="'+imageUrl+'">')
}
function endsurvey(answers){
	$('.endcontent').show();
	$('.image-container').html('<div class="questiontext">Färdigt!<br>Tack för ditt deltagande i studien.<br>Glöm inte att svara på enkäten (Länk i mail)</div>');

	// Now we can send the answers to the database
	sendData(answers);
}

function sendData(answers) {
	var jsonString = JSON.stringify(answers);
	$.ajax({
	'url': "senddata.php",
	'type': "POST",
	'data': {
	  'answers': jsonString
	},
	'success': function(output) {
	  console.log('Success!');
	}
	});
}



