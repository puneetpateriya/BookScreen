# IMovies — Movie Ticket Booking

A responsive movie-ticket booking demo built with React, Vite, Express and MongoDB.

## Features
- Responsive movie discovery and search
- Movie details with showtime selection
- Interactive seat selection and ticket total
- Booking API with MongoDB persistence
- Local-device fallback when the API/database is not configured

## Run locally
1. Install Node.js 18 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env` and set `MONGODB_URI` to your MongoDB connection string.
4. Run `npm run dev`.
5. Open the Vite URL shown in your terminal (normally http://localhost:5173).

The Express API runs on port 5000. Without MongoDB, the API health endpoint still works, while bookings fall back to local browser storage.

## API
- `GET /api/health` — API status
- `POST /api/bookings` — save a booking

## Build
Run `npm run build` to create the production frontend in `dist/`.
