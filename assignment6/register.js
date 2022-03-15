window.onload = pageLoad;

function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    var pass = document.forms["myForm"]["password"];
    var repass = document.forms["myForm"]["repassword"];
    
    if(pass.value != repass.value){
        
        var ERRORMSG = document.getElementById("errormsg");
        ERRORMSG.innerHTML = "password ไม่ตรงกัน";
        return false;
    }
    else{
        return true;
    }
    
}