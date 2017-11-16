$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            


function submitText() {
	
	var randomNum = (Math.round(Math.random()));
	
	document.getElementById("textinput").value = randomNum;
	
	if (randomNum == 0) {
		
		navigator.notification.beep(1);
		navigator.vibrate(1000);
		
	} else {
		
		navigator.notification.beep(2);
		navigator.vibrate(2000);
		
	}
	
};


	

