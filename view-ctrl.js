var time = 1000; //amount of time the containter will be visable

var count = 1;


function listToQuiz() {
	$('.all-lists').hide();
	$('.quizView').show();
}


$('#quizForm').submit(function(){
	$('.quizView').hide();
})

function nextQuiz(){

	console.log(count);
	

	if(count == 1){
		$('.shopping-list-1').show();
		$('middleView').hide();
		setTimeout(listToQuiz,time)//hides container after 7000 ms
	}
	else if(count == 2){
		$('.shopping-list-2').show();
		$('middleView').hide();
		setTimeout(listToQuiz,time)
	}
	else if(count == 3){
		$('.shopping-list-3').show();
		$('middleView').hide();
		setTimeout(listToQuiz,time)
	}
	else if(count == 4){
		$('.shopping-list-4').show();
		$('middleView').hide();
		setTimeout(listToQuiz,time)
	}
	else{
		//show end-screen
	}
	count = count+1;
}

function showHoldUp(){
	$('middleView').show();

}

$("button").click(function(event){
    event.preventDefault();
    var chosenItems = $("#quizForm input:checkbox:checked").map(function(){
      return $(this).val();
    }).get();
    console.log(chosenItems); // chosenItems är en array som har alla valda items
});


