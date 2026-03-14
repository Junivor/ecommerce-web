# Ecommerce Web - User Management

A fullstack CRUD application with **React.js** frontend, **Express.js** backend, and **MySQL** database.

## Project Structure

```
ecommerce-web/
├── docker-compose.yml       # Docker Compose orchestration
├── backend/                 # Express.js REST API
│   ├── app.js               # Express app setup
│   ├── bin/www              # Server entry point
│   ├── config/db.js         # MySQL connection pool
│   ├── controllers/         # Request handlers
│   └── routes/              # API route definitions
├── frontend/                # React.js (Vite) UI
│   ├── src/
│   │   ├── api/             # API service layer
│   │   ├── components/      # Reusable UI components
│   │   └── pages/           # Page-level components
│   └── nginx.conf           # Nginx config for Docker
└── mysql/
    └── init.sql             # Database initialization script
```

## API Endpoints

| Method | Endpoint          | Description        |
|--------|-------------------|--------------------|
| GET    | `/api/users`      | Get all users      |
| GET    | `/api/users/:id`  | Get user by ID     |
| POST   | `/api/users`      | Create a new user  |
| PUT    | `/api/users/:id`  | Update a user      |
| DELETE | `/api/users/:id`  | Delete a user      |

## Run Locally (without Docker)

### Prerequisites
- Node.js 18+
- MySQL 8.0+ running locally

### 1. Setup the Database
```bash
mysql -u root -p < mysql/init.sql
```

### 2. Start the Backend
```bash
cd backend
npm install
# Edit .env if your MySQL credentials differ
npm run dev
```
Backend runs at: `http://localhost:3000`

### 3. Start the Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend runs at: `http://localhost:5173`

## Run with Docker Compose

```bash
docker compose up --build
```

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000/api/users
- **MySQL**: localhost:3306

To stop:
```bash
docker compose down
```

To stop and remove data:
```bash
docker compose down -v
```

