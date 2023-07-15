function saveData() {
	var password = document.getElementById("phonenumber").value;
	var email = document.getElementById("email").value;
    
    sessionStorage.email = email;
    sessionStorage.password = password;
    

}

function prefillData() {
    
	if (sessionStorage.email != null) {
		document.getElementById("email").value = sessionStorage.email;
		document.getElementById("password").value = sessionStorage.password;
	}
    
 
}

function init() {
	var regForm = document.getElementById("login-form");
    var password = document.getElementById("phonenumber")
    var email = document.getElementById("email")
    var btnLg = document.getElementById("btn-lg");
    regForm.onsubmit = saveData;
    prefillData()
	
}

function outit() {
	var tb = document.getElementById("thong-bao");
    tb.innerHTML = 'không được để trống';
}

window.onload = init;

