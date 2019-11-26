/*document.getElementsByTagName('button')[0].onclick = checkIt;
function checkIt(){
    if(document.getElementsByTagName('input')[0].value == ''){
    document.getElementsByTagName('input')[0].style.borderColor = 'red';
    document.getElementsByTagName('div')[0].innerHTML = 'Нет логина';
    return;
    }
    else{
    if (document.getElementsByTagName('input')[1].value==''||document.getElementsByTagName('input')[1].value.length<5){
    document.getElementsByTagName('input')[1].style.borderColor = 'red';
    document.getElementsByTagName('div')[0].innerHTML = 'Пароль короткий';
    clear();
    return;
    }
else{
    if (document.getElementsByTagName('input')[1].value!=document.getElementsByTagName('input')[2].value){
    document.getElementsByTagName('input')[1].style.borderColor = 'red';
    document.getElementsByTagName('input')[2].style.borderColor = 'red';
    document.getElementsByTagName('div')[0].innerHTML = 'Пароли не совпадают';
    clear();
    return;
}   
} 

    }
function clear(){
    document.getElementsByTagName('input')[0].value = '';
    document.getElementsByTagName('input')[1].value = '';
    document.getElementsByTagName('input')[2].value = '';
}
    }
	
	*/  
	
	/*
const loginInput = document.getElementById('login')
const passwordInput = document.getElementById('password')
const passwordConfirmInput = document.getElementById('password-confirm')
*/  

const loginInput = document.getElementById('login')
const passwordInput = document.getElementById('password')
const passwordConfirmInput = document.getElementById('password-confirm')

const errorsElement = document.getElementById('errors')

loginInput.addEventListener('input', validate)
passwordInput.addEventListener('input', validate)
passwordConfirmInput.addEventListener('input', validate)

loginInput.onchange = validate
passwordInput.onchange = validate
passwordConfirmInput.onchange = validate

function getErrors() {
	if (loginInput.value.length === 0) {
		loginInput.style.borderColor = 'red'
		return 'Не заполнено поле login'
	}
	if (loginInput.value.length > 50) {
		loginInput.style.borderColor = 'red'
		return 'Логин не должен превышать 50 символов'
	}
	if (passwordInput.value.length < 5) {
		passwordInput.style.borderColor = 'red'
		return 'Пароль не может быть меньше 5 символов'
	}
	if (passwordInput.valuelength > 50) {
		passwordInput.style.borderColor = 'red'
		return 'Пароль не должен превышать 50 символов'
	}
	if(passwordInput.value !== passwordConfirmInput.value) {
		passwordInput.style.borderColor = 'red'
		passwordConfirmInput.style.borderColor = 'red'
		return 'Поля "пароль" и "подтверждение пароля" не совпадают'
	}
	
	loginInput.style.borderColor = ''
	passwordInput.style.borderColor = ''
		passwordConfirmInput.style.borderColor = ''
	return false
}

function validate() {

	const errors = getErrors()
	if (errors) {
		errorsElement.innerText = errors
		return
	}
	errorsElement.innerText = ''
}