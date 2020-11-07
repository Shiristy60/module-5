const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
}); 

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function validation(e) {
	const name = document.querySelector('#name').value;
	const validName = document.querySelector('#validName');

	const email = document.querySelector('#email').value;
	const validEmail = document.querySelector('#validEmail');

	const password = document.querySelector('#password').value;
	const validPassword = document.querySelector('#validPassword');

	//name validation
	if(name === "")
		validName.innerHTML = "**Please fill the name.";
	else{
		if(name.length <3 || name.length>20)
			validName.innerHTML = "**Name should be between 3 and 20 characters.";
		else {
			if(!isNaN(name))
				validName.innerHTML = "**Name should have only characters.";
			else{
				validName.innerHTML = "";
			}
		}
	}
	//email validation
	if(email === "")
		validEmail.innerHTML = "**Please fill the email.";
	else{
		if(email.indexOf('@') <= 0) 
			validEmail.innerHTML = "** @ at invalid position.";
		else {
			if( (email.charAt(emai.length - 4) != '.') || (email.charAt(emai.length - 3) != '.'))
				validEmail.innerHTML = "** . at invalid position.";
			else {
				validEmail.innerHTML = "";
				return false;
			}
		} 
	}

	//password validaton
	if(password === "") 
		validPassword.innerHTML = "**Please fill the password.";
	else {
		if(password.length <5 || password.length>20)
			validPassword.innerHTML = "**Password should be between 5 and 20 characters.";
		else{
			validPassword.innerHTML = "";
			return false;
		}
	}
}

