const form = document.querySelector('.form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const retypedPassword = document.querySelector('#retyped-password');
const button = document.querySelector('button');

function showError(input, message) {
	const formField = input.parentElement;
	formField.className = 'form__field error';
	const span = formField.querySelector('span');
	span.innerText = message;
}

function showSuccess(input) {
	const formField = input.parentElement;
	formField.className = 'form__field success';
}

form.addEventListener('submit', function (e) {
	e.preventDefault();

	if (username.value === '') {
		showError(username, 'Username is required');
	} else {
		showSuccess(username);
	}
	if (email.value === '') {
		showError(email, 'Username email is required');
	} else {
		showSuccess(email);
	}

	if (password.value === '') {
		showError(password, 'Username password is required');
	} else {
		showSuccess(password);
	}
	if (retypedPassword.value === '') {
		showError(retypedPassword, 'Password confirmation is required');
	} else {
		showSuccess(retypedPassword);
	}
});
