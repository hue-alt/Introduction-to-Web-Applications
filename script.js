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
});
