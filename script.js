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

function checkEmail(input) {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(input.value.trim())) {
		showSuccess(input);
	} else {
		showError(input, 'Email is not valid');
	}
}
function getInputName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function checkRequire(inputArr) {
	inputArr.forEach((input) => {
		if (input.value.trim() === '') {
			showError(input, `${getInputName(input)} is required`);
		} else {
			showSuccess(input);
		}
	});
}
function checkLength(input, min, max) {
	if (input.value.length < min) {
		showError(
			input,
			`${getInputName(input)} must be at least ${min} characters long`
		);
	} else if (input.value.length > max) {
		showError(
			input,
			`${getInputName(input)} must be less than ${max} characters long`
		);
	} else {
		showSuccess(input);
	}
}

function checkPasswordMatch(input1, input2) {
	if (input1.value !== input2.value) {
		showError(input2, 'Passwords do not match ');
	} else {
		showSuccess(input2);
	}
}

form.addEventListener('submit', function (e) {
	e.preventDefault();
	checkRequire([username, email, password, retypedPassword]);
	checkLength(username, 3, 15);
	checkLength(password, 6, 25);
	checkEmail(email);
	checkPasswordMatch(password, retypedPassword);
});
