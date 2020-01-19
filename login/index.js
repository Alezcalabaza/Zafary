const correo = window.document.querySelector('#correo');
const password = window.document.querySelector('#password');
const boton = window.document.querySelector('#boton');
<<<<<<< HEAD
const mserror = window.document.querySelector('.errorms');
boton.addEventListener('click', MostrarDatos);
correo.addEventListener('focus', fcmp);
=======

boton.addEventListener('click', MostrarDatos);
>>>>>>> 7198161bab67de08a7f04ef94e24a75a91678b01

function MostrarDatos() {
    const correoValue = correo.value;
    const passwordValue = password.value;
<<<<<<< HEAD
=======

>>>>>>> 7198161bab67de08a7f04ef94e24a75a91678b01
    if (correoValue !== '') {
        console.log('correo: ' + correo.value);
        console.log('password: ' + password.value);
        correo.value = "";
        password.value = "";
        correo.focus();
<<<<<<< HEAD
        if (correoValue == "ejemplo@gmail.com" && passwordValue == '123456') {
            console.log('Iniciando Sesion...');
            document.location.assign('../Layout/index.html');
        } else {
            console.log('Email y/o contraseña incorrectos');
            mserror.classList.remove(['ocult']);
=======

        if (correoValue == "ejemplp@gmail.com" && passwordValue == '123456') {
            console.log('Iniciando Sesion...');
        } else {
            console.log('Email y/o contraseña incorrectos');
>>>>>>> 7198161bab67de08a7f04ef94e24a75a91678b01
        }
    } else {
        console.log('no has escrito nada')
    }
<<<<<<< HEAD
}

function fcmp() {
    mserror.classList.add(['ocult']);
=======
>>>>>>> 7198161bab67de08a7f04ef94e24a75a91678b01
}