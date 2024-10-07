document.addEventListener("DOMContentLoaded", function () {
    fetchRandomUser();
});

function fetchRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const userContainer = document.getElementById('random-user');
            userContainer.innerHTML = `
                <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <img src="${user.picture.large}" alt="Random User">
            `;
        })
        .catch(error => console.log('Error:', error));
}

// Keresd meg az összes navigációs linket
const links = document.querySelectorAll('nav ul li a');

// Adjunk hozzá eseménykezelőt minden linkhez
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Megakadályozza az alapértelmezett kattintási viselkedést

        const targetId = this.getAttribute('href'); // Az ID, ahova ugrani szeretnél
        const targetElement = document.querySelector(targetId); // Keresd meg a cél elemet

        // Gördülékeny görgetés a cél elemhez
        targetElement.scrollIntoView({
            behavior: 'smooth', // Görgetési stílus
            block: 'start' // A cél elem kezdő pozíciója
        });
    });
});
