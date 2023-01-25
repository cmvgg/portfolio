const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
    document.getElementById('barra')
    document.getElementById('barra').classList.toggle('active');
});

btnToggle.addEventListener('click', function () {
    document.getElementById('barra.active')
    document.getElementById('barra.active').classList.remove('active');
});
console.log(btnToggle);