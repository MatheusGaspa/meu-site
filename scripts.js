/* scripts.js */
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicators button');

    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = (i === currentIndex) ? 'block' : 'none';
        indicators[i].classList.toggle('active', i === currentIndex);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);

    document.querySelector('.carousel-control-prev').addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    document.querySelector('.carousel-control-next').addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    document.querySelectorAll('.carousel-indicators button').forEach((button, i) => {
        button.addEventListener('click', () => {
            showSlide(i);
        });
    });
});

//função dos link
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const searchIcon = document.getElementById("search-icon");

    const searchLinks = {
        "home": "agencia.html",
        "serviços": "www.google.com",
        "equipe": "equipe.html",
        "blog": "#blog",
        "portfólio": "#portfolio",
        "contato": "#contato"
    };

    searchIcon.addEventListener("click", function() {
        const query = searchInput.value.toLowerCase();
        const link = searchLinks[query];
        if (link) {
            window.location.href = link;
        } else {
            alert("Página não encontrada");
        }
    });
});
