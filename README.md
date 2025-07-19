# Weather App

A modern weather application built with Rails 7 and Tailwind CSS.

## Features

- Clean, modern UI with Tailwind CSS
- Responsive design for mobile and desktop
- Weather information display
- Search functionality for cities

## Technology Stack

- **Backend**: Ruby on Rails 7
- **Frontend**: Tailwind CSS
- **Database**: PostgreSQL
- **JavaScript**: Hotwire (Turbo + Stimulus)

## Getting Started

### Prerequisites

- Ruby 3.3.0
- PostgreSQL
- Node.js (for Tailwind CSS)

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:ferbin17/weather_app.git
   cd weather_app
   ```

2. Install dependencies:

   ```bash
   bundle install
   ```

3. Set up the database:

   ```bash
   rails db:create
   rails db:migrate
   ```

4. Start the development server:

   ```bash
   bin/dev
   ```

5. Visit `http://localhost:3000` in your browser.

## Development

The application uses:

- **Tailwind CSS** for styling
- **Hotwire** for dynamic interactions
- **Importmaps** for JavaScript dependency management

## License

This project is open source and available under the [MIT License](LICENSE).
