document.addEventListener('DOMContentLoaded', () => {
    const filmList = document.getElementById('films');
    const titleElement = document.getElementById('title');
    const posterElement = document.getElementById('poster');
    const descriptionElement = document.getElementById('description');
    const runtimeElement = document.getElementById('runtime');
    const showtimeElement = document.getElementById('showtime');
    const ticketsLeftElement = document.getElementById('tickets-left');
    const buyTicketButton = document.getElementById('buy-ticket');
    // Fetch all films
  fetch('http://localhost:3000/films')
  .then(response => response.json())
  .then(films => {
    // Populate film list
    films.forEach(film => {
        const li = document.createElement('li');
        li.textContent = film.title;
        li.classList.add('film-item');
        li.addEventListener('click', () => displayFilmDetails(film));
        filmList.appendChild(li);
  });
  // Display the first movie's details
  displayFilmDetails(films[0]);
});

  // Function to display movie details
  function displayFilmDetails(film) {
    titleElement.textContent = film.title;
    posterElement.src = film.poster;
    descriptionElement.textContent = film.description;
    runtimeElement.textContent = `Runtime: ${film.runtime} minutes`;
    showtimeElement.textContent = `Showtime: ${film.showtime}`;
    ticketsLeftElement.textContent = `Tickets Available: ${film.capacity - film.tickets_sold}`;
    
});