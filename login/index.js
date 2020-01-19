const correo = window.document.querySelector('#correo');
const password = window.document.querySelector('#password');
const boton = window.document.querySelector('#boton');
const mserror = window.document.querySelector('.errorms');
boton.addEventListener('click', MostrarDatos);
correo.addEventListener('focus', fcmp);

function MostrarDatos() {
    const correoValue = correo.value;
    const passwordValue = password.value;
    if (correoValue !== '') {
        console.log('correo: ' + correo.value);
        console.log('password: ' + password.value);
        correo.value = "";
        password.value = "";
        correo.focus();
        if (correoValue == "ejemplo@gmail.com" && passwordValue == '123456') {
            console.log('Iniciando Sesion...');
            document.location.assign('../Layout/index.html');
        } else {
            console.log('Email y/o contraseña incorrectos');
            mserror.classList.remove(['ocult']);
        }
    } else {
        console.log('no has escrito nada')
    }
}

function fcmp() {
    mserror.classList.add(['ocult']);
}