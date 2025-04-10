# 🚀 Fullstack Docker App – ASP.NET Core + React + MySQL

This project is a fullstack application that features:

- **ASP.NET Core Web API** (backend)
- **React with Vite** (frontend)
- **MySQL** (database)

The entire stack runs inside Docker containers, making development, deployment, and sharing easy and consistent across environments.

---

## 📁 Project Structure

```
AspNetVueFullstackApp
│
├── backend          # ASP.NET Core API
├── frontend         # React frontend (Vite)
├── docker-compose.yml
└── README.md
```

---

## 🐳 Docker Setup

The `docker-compose.yml` defines three services:

- `mysql` – MySQL 8 database
- `backend` – ASP.NET Core Web API (port `5000`)
- `frontend` – React App served via `serve` (port `3000`)

### ✅ Run the project:

```bash
git clone https://github.com/yavuzoz/AspNetReactFullstackApp.git
cd AspNetReactFullstackApp
docker-compose up -d
```

---

## 🌐 Environment Variables

In your `frontend/.env` file, define the backend API base like this:

```env
# Production (Docker)
VITE_API_BASE_URL=http://localhost:5000/api

# ⚠️ Comment this out if not using localhost dev:
# VITE_API_BASE_URL=http://backend:8080/api
```

---

## 🗀️ Screenshots

### ✅ Working Backend API Response

`GET /api/products` returns the list of products:

![API Response](./frontend/src/assets/Screenshot%202025-04-10%20103158.png)

---

### 🧚‍♂️ Swagger Documentation (API Explorer)

`http://localhost:5000/swagger/index.html`

You can test the API directly through the Swagger UI:

![Swagger UI](./frontend/src/assets/Screenshot%202025-04-10%20103240.png)

---

### 💻 React Frontend Interface

Simple UI to add and delete products using React and Axios:

![React App](./frontend/src/assets/Screenshot%202025-04-10%20103218.png)

---

### ☁️ Published Images on Docker Hub

You can pull these images from Docker Hub and run them without rebuilding:

- `yavuzozbay/frontend-app`
- `yavuzozbay/backend-app`

![Docker Hub](./frontend/src/assets/Screenshot%202025-04-10%20103318.png)

---

---

## 📦 Deployment Scenarios

You can use this project in:

- 💻 Your own local machine  
- 👨‍💼 Your teammates' machines (just need Docker)  
- ☁️ Production server (using CI/CD or manually)

> ✅ No need to install Node.js, .NET, or MySQL locally.  
> ✅ Just pull the repo or images and run `docker-compose up`.

