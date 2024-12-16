# Flatdango : Movie Ticket App
A simple movie ticketing application that displays a list of films, their details, and allows users to buy tickets for available films.
## Features

- View a list of available films.
- Display film details including description, runtime, showtime, and poster.
- Mark films as "Sold Out" when tickets are no longer available.
- Buy tickets for films that are not sold out.
- Real-time updates to ticket availability.
## Technologies Used

- **HTML**: Structure of the webpage.
- **CSS**: Styling for the app layout and user interface.
- **JavaScript**: Client-side functionality, including fetching data, rendering films, and handling ticket purchases.
- **JSON Server**: Mock server to simulate an API for film data.
## Prerequisites

Ensure the following are installed before running the application,

- **Node.js**: [Download and Install Node.js](https://nodejs.org/)
- **JSON Server**: [Installation Guide](https://github.com/typicode/json-server)

## Installation

Follow these steps to set up the project locally:

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/film-ticket-booking-app.git
```
### 2. Navigate to the project directory:
```bash
cd film-ticket-booking-app
```
### 3. Install dependencies:
You will need to install JSON Server globally to run the mock API:
```bash
npm install -g json-server
```
### 4. Set up JSON Server:
You can either create your own ``` db.json``` file or use the one provided in the repository.
The ```db.json ```file contains mock data about films, including titles, posters, descriptions, showtimes,
capacities, and tickets sold.

### 5. Start the mock server:
Run the following command to start the JSON Server on ``` localhost:3000```:
``` bash
json-server --watch db.json --port 3000
```
### 6. Open the project in your browser:
Once the server is running, open the ``` index.html ```file in your browser to view the app. 
The app will fetch the list of films from the mock API and display the details.

## Contributions
 Feel free to fork the repository.Contributions are always welcome!

## License
This project is licensed under the MIT License 