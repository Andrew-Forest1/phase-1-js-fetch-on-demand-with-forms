const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = event.target.children[1].value
    

        fetch(`http://localhost:3000/movies/${input}`)
        .then(response => response.json())
        .then(data => {
        const movieDetails = document.getElementById("movieDetails");
        movieDetails.innerHTML = `
        <h4>${data.title}</h4>
        <p>${data.summary}</p>`
        });

    });
}

document.addEventListener('DOMContentLoaded', init);