document.addEventListener('DOMContentLoaded', () => {
    const filmList = document.getElementById('films');
    const titleElement = document.getElementById('title');
    const posterElement = document.getElementById('poster');
    const descriptionElement = document.getElementById('description');
    const runtimeElement = document.getElementById('runtime');
    const showtimeElement = document.getElementById('showtime');
    const ticketsLeftElement = document.getElementById('tickets-left');
    const buyTicketButton = document.getElementById('buy-ticket');
    // Remove placeholder list item
  document.querySelector('#films .placeholder')?.remove();

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
        //mark movie as sold out
        if (film.capacity - film.tickets_sold <= 0) {
            li.classList.add('sold-out');
          }
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
    ticketsLeftElement.textContent =
    film.capacity - film.tickets_sold > 0
     ? `Tickets Available: ${film.capacity - film.tickets_sold}`
            :'Tickets Available: Sold Out';

     // Update the button based on ticket availability
     const newBuyTicketHandler = () => handleBuyTicket(film);
     buyTicketButton.replaceWith(buyTicketButton.cloneNode(true));
     const updatedButton = document.getElementById('buy-ticket');
     updatedButton.addEventListener('click', newBuyTicketHandler);
     // Handle tickets and update sold-out state
function handleBuyTicket(film) {
    if (film.capacity - film.tickets_sold > 0) {
        film.tickets_sold++;
        ticketsLeftElement.textContent = `Tickets Available: ${film.capacity - film.tickets_sold}`;

        // If no tickets left, mark as sold-out
        if (film.capacity - film.tickets_sold <= 0) {
            buyTicketButton.textContent = 'Sold Out';
            buyTicketButton.disabled = true;
             // Update film item in the list
             const filmItem = Array.from(filmList.children).find(item => item.textContent === film.title);
             if (filmItem) {
                 filmItem.classList.add('sold-out');
             }
         }
     }
 }
    }
  });