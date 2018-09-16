let checkLogin=(email,password,allusers) =>{

	let isUserFound=false;
	let passwordCorrect=false;

	for(currentUser in allusers){
       
       if(allusers[currentUser]['email']==email){

       	if(allusers[currentUser['password']==password]){

       		isUserFound=true;
       		passwordCorrect=true;

       		break;
       	}else{
       		isUserFound=true;
       		passwordCorrect=false;
       		break;
       	}
       	

       }else{
       	isUserFound=false;
       }

	}// end of for Loop

	if(isUserFound==true and passwordCorrect==true){

		console.log("You are Logged in");

	}
	else if (isUserFound==true and passwordCorrect==false) {

		console.log("You have provided incorrect password");
	}
	else{
		console.log("No user with this email found");
	}
}