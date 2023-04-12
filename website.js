const btn = document.querySelector('.navclick')
const bar = document.querySelector('.navbar')

btn.addEventListener('click', () => {
    navbar.classList.toggle('active')
    btn.classList.toggle('active')

})