var time = 5000; //amount of time the shopping list will be visable
var count = 1;
var testTwoList = ["15","13","3","9","1","5","11","12","8"]
var testThreeList = ["6","2","3","5","4","1","7","8","9"]
var testFourList = ["10","13","12","11","14","15","8","0","1"]

// data för dom första testen
var colorType = 'disharmonious red'
var currentTest = ["0","9","4","6","7","3","8","2","10"]

function listToQuiz() {
	//$('.all-lists').hide();
	$('.quizView').show();
}

function timeOutList1(){
	$('.bg').removeClass('dis-red')
	$('.shopping-list-1').hide();
	$('.quizView').show();
}

function timeOutList2(){
	currentTest = testTwoList
	colorType = 'harmonious red'
	$('.bg').removeClass('har-red')
	$('.shopping-list-2').hide();
	$('.quizView').show();
}
function timeOutList3(){
	currentTest = testThreeList
	colorType = 'disharmonious green'
	$('.bg').removeClass('dis-green')
	$('.shopping-list-3').hide();
	$('.quizView').show();
}
function timeOutList4(){
	currentTest = testFourList
	colorType = 'harmonious green'
	$('.bg').removeClass('har-green')
	$('.shopping-list-4').hide();
	$('.quizView').show();
}

// $('#quizForm').submit(function(){
// 	console.log("hej")
// 	$('.quizView').hide();

// })

function nextQuiz(){
	if(count==1){
		$('.bg').addClass('dis-red')
		$('.shopping-list-1').show();
		$('.middleView').hide();
		setTimeout(timeOutList1,time)
	}
	else if(count==2){
		$('.bg').addClass('har-red')
		$('.shopping-list-2').show();
		$('.middleView').hide();
		setTimeout(timeOutList2,time)
	}
	else if(count==3){
		$('.bg').addClass('dis-green')
		$('.shopping-list-3').show();
		$('.middleView').hide();
		setTimeout(timeOutList3,time)
	}
	else if(count == 4){
		$('.bg').addClass('har-green')
		$('.shopping-list-4').show();
		$('.middleView').hide();
		setTimeout(timeOutList4,time)
	}
	else{
		$('.middleView').hide();		
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




