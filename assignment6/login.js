window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const Username = urlParams.get('username');
	const Password = urlParams.get('password');

	var user = document.forms["myLogin"]["username"].value;
    var pass = document.forms["myLogin"]["password"].value;
	if(Username == user && Password == pass){
		alert("Login successfuly");
	}
	else{
		alert("Username Or Password Wrong.");
	}
	return false;
}

			