const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const date = document.getElementById('date');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navigation.classList.toggle('active');
});


date.innerHTML = new Date().getFullYear();
