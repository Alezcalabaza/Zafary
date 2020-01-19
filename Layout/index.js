const btnhme = document.querySelector('#btn_hme');
const btnwzp = document.querySelector('#btn_wzp');
const btnzpy = document.querySelector('#btn_zpy');


btnhme.addEventListener('click', cargarpaginahme);
btnwzp.addEventListener('click', cargarpaginawzp);
btnzpy.addEventListener('click', cargarpaginazpy);

function cargarpaginahme() {
    const contd = document.querySelector('#contenedor_d');
    contd.setAttribute('src', '../home/index.html');
}

function cargarpaginawzp() {
    const contd = document.querySelector('#contenedor_d');
    contd.setAttribute('src', '../Whatzapp/index.html');
}

function cargarpaginazpy() {
    const contd = document.querySelector('#contenedor_d');
    contd.setAttribute('src', '../Zpotify/index.html');
}