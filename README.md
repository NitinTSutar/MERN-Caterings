# MERN-Caterings

A full-stack MERN starter with separate frontend and backend apps in one repository:

- `Client/` -> React (JavaScript) + Vite + Tailwind CSS + Axios + Zustand
- `Server/` -> Node.js + Express + MongoDB (Mongoose)

## Project Structure

```text
MERN-Caterings/
  Client/
  Server/
```

## Prerequisites

Make sure you have installed:

- Node.js (v18+ recommended)
- npm (comes with Node.js)
- MongoDB (local or cloud connection string)

## Local Setup

### 1. Clone and open project

```bash
git clone <your-repo-url>
cd MERN-Caterings
```

### 2. Setup Backend (`Server`)

```bash
cd Server
npm install
```

Create `.env` file in `Server/` and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
```

Start backend:

```bash
npm run dev
```

Backend runs at:

- `http://localhost:5000`
- Health route: `http://localhost:5000/api/health`

### 3. Setup Frontend (`Client`)

Open a new terminal:

```bash
cd Client
npm install
```

Create `.env` file in `Client/` and add:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Start frontend:

```bash
npm run dev
```

Frontend runs at the Vite URL shown in terminal (usually `http://localhost:5173`).

## Available Scripts

### Client

- `npm run dev` -> start development server
- `npm run build` -> create production build
- `npm run preview` -> preview production build

### Server

- `npm run dev` -> start server with nodemon
- `npm start` -> start server with node

## Troubleshooting

- If you see `MONGO_URI is missing in environment variables`, confirm:
  - file name is exactly `.env` inside `Server/`
  - key name is exactly `MONGO_URI`
  - server is started from `Server/` directory

