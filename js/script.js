AOS.init();

// Мабільнае бургер-меню

const burger = document.getElementById('burger-menu');
const nav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.nav-link');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});


// Плаўны скрол да якараў на старонцы
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});


// слайдэр для галоўнага блоку

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.hero-slider', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});



// сетка Masonry для медыятэкі
var grid = document.querySelector('.grid');
var iso;

imagesLoaded(grid, function() {
    iso = new Isotope(grid, {
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-item',
            gutter: 20
        }
    });
});

// Логіка фільтрацыі дял медыятэкі

var filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        var filterValue = button.getAttribute('data-filter');
        iso.arrange({ filter: filterValue });
    });
});


// Мадальнае вакно для карткі з інфармацыяй з медыятэкі
const modal = document.getElementById("infoModal");
const closeBtn = document.querySelector(".modal-close");

document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', function() {
        document.getElementById("modalImg").src = this.dataset.fullImg;
        document.getElementById("modalTitle").innerText = this.dataset.title;
        document.getElementById("modalAuthor").innerText = this.dataset.author;
        document.getElementById("modalSource").innerText = this.dataset.source;
        document.getElementById("modalDesc").innerText = this.dataset.desc;
        
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    });
});

closeBtn.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};

// Адкрыццё карцінкі з карткі ў новым вакне ў сыходным памеры
document.getElementById("modalImg").onclick = function() {
    window.open(this.src, '_blank');
};