const form = document.getElementById('login-form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();

	if (usernameValue === '') {
		setErrorFor(username, 'Nome de usuário não pode ficar em branco');
	} else {
		setSuccessFor(username);
	}

	if (passwordValue === '') {
		setErrorFor(password, 'Senha não pode ficar em branco');
	} else {
		setSuccessFor(password);
	}
});

function setErrorFor(input, message) {
	const formGroup = input.parentElement