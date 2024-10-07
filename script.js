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
