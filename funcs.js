const menu = document.getElementsByClassName('menu')[0]
const linha1 = document.getElementsByClassName('linha1')[0]
const linha2 = document.getElementsByClassName('linha2')[0]
const linha3 = document.getElementsByClassName('linha3')[0]
const header = document.querySelector('header')
const nav = document.getElementsByTagName('nav')[0]

function mostrarOpc() {
    if (nav.style.display == 'none' || nav.style.display == '') {
        menu.style = 'height: 39px; width: 52px'
        linha1.classList.add('rodar-negativo')
        linha2.style.display = 'none'
        linha3.classList.add('rodar')
        nav.style.display = 'flex'
    } else {
        nav.style.display = 'none'
        linha1.classList.remove('rodar-negativo')
        linha2.style.display = 'block'
        linha3.classList.remove('rodar')
    }
}

function mudarTamanho() {
    if (window.innerWidth >= 968) {
        nav.style.display = 'flex'
    } else {
        nav.style.display = 'none'
    }
}

function scrolling(){
    header.classList.toggle('scrolling', scrollY > 20)

}
window.addEventListener('scroll',  scrolling)