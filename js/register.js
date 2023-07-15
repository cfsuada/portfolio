function saveData() {
	var name = document.getElementById("name").value;
	var password = document.getElementById("phonenumber").value;
    var password2 = document.getElementById("phonenumber-2").value;
	var phonenumber = document.getElementById("phonenumber").value;
	var email = document.getElementById("email").value;
    sessionStorage.password = password;
    sessionStorage.password2 = password2;
	sessionStorage.name = name;
	sessionStorage.email = email;
	sessionStorage.phonenumber = phonenumber;
}

function prefillData() {
	if (sessionStorage.firstname != null) {
		document.getElementById("name").value = sessionStorage.name;
		document.getElementById("email").value = sessionStorage.email;
		document.getElementById("phonenumber").value = sessionStorage.phonenumber;
        document.getElementById("password").value = sessionStorage.password;
		document.getElementById("password-2").value = sessionStorage.password2;
	}
}

function init() {
	var regForm = document.getElementById("rg-form");
	regForm.onsubmit = saveData;
	prefillData()
}

window.onload = init;