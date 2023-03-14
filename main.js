const navbar = document.querySelector('#navbar');
const openNavBarButton = document.querySelector('#open-navbar');

openNavBarButton.onclick = function () {
    if(navbar.classList.contains('active-navbar')) {
        navbar.classList.remove('active-navbar');
    } else {
        navbar.classList.add('active-navbar')
    }
}
