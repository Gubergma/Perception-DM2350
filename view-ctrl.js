var time = 5000; //amount of time the containter will be visable

var count = 1;

function listToQuiz() {
	//$('.all-lists').hide();
	$('.quizView').show();
}

function timeOutList1(){
	$('.shopping-list-1').hide();
	$('.quizView').show();
}

function timeOutList2(){
	$('.shopping-list-2').hide();
	$('.quizView').show();
}
function timeOutList3(){
	$('.shopping-list-3').hide();
	$('.quizView').show();
}
function timeOutList4(){
	$('.shopping-list-4').hide();
	$('.quizView').show();
}

// $('#quizForm').submit(function(){
// 	console.log("hej")
// 	$('.quizView').hide();

// })

function nextQuiz(){

	if(count==1){	
		$('.shopping-list-1').show();
		$('.middleView').hide();
		setTimeout(timeOutList1,time)
	}
	else if(count==2){
		//count = count+1;
		$('.shopping-list-2').show();
		$('.middleView').hide();
		setTimeout(timeOutList2,time)
	}
	else if(count==3){
		//count = count+1;
		$('.shopping-list-3').show();
		$('.middleView').hide();
		setTimeout(timeOutList3,time)
	}
	else if(count == 4){
		//count = count+1;
		$('.shopping-list-4').show();
		$('.middleView').hide();
		setTimeout(timeOutList4,time)
	}
	else{
		$('.end').show();
	}
	count = count+1;
	//return count;
}

function showHoldUp(){
	$('.middleView').show();
	$('.quizView').hide();
	$('.welcome').hide();		

}




