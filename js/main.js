const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const date = document.getElementById('date');

date.innerHTML = new Date().getFullYear();

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navigation.classList.toggle('active');
});

