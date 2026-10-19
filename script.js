document.addEventListener('DOMContentLoaded', () => {
    const clock = document.getElementById('clock');
    if (clock) {
        const updateClock = () => {
            clock.textContent = new Date().toLocaleTimeString('pl-PL');
        };
        updateClock();
        setInterval(updateClock, 1000);
    }

    document.querySelectorAll('header nav a').forEach(link => {
        if (window.location.href.includes(link.getAttribute('href'))) {
            link.style.color = '#e5a93c';
        }
    });

    const filterButtons = document.querySelectorAll('.gallery-filters .filter-btn');
    const sections = document.querySelectorAll('.city-gallery');

    function filterGallery(city) {
        filterButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.city === city));
        sections.forEach(sec => sec.hidden = (city !== 'all' && sec.id !== city));
        localStorage.setItem('preferredCity', city);
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            filterGallery(btn.dataset.city);
        });
    });

    const savedCity = localStorage.getItem('preferredCity');
    if (savedCity) filterGallery(savedCity);

    if (!document.cookie.includes('visited=true')) {
        document.cookie = 'visited=true; path=/; max-age=86400';
    }

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value.trim();
            const fullname = document.getElementById('fullname').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!email || !fullname || !message) {
                alert('Proszę wypełnić wszystkie pola formularza!');
                return;
            }

            if (!email.includes('@')) {
                alert('Podaj poprawny adres e-mail!');
                return;
            }

            alert('Wiadomość została wysłana!');
            form.reset();
        });
    }
});
