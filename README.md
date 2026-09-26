# 📰 News Media

A full-stack **News Media Web Application** built with **React, Node.js, Express, and MongoDB**.

This project allows users to browse news, view news details, create and manage news content, and authenticate using a secure login/register system.

## ✨ Features

* User Registration & Login
* Cookie-based Authentication
* JWT Authentication
* Create News
* Update News
* Delete News
* View News Details
* Pagination
* Responsive Frontend

## 🛠️ Technologies

### Frontend

* React
* React Router
* Axios
* Tailwind CSS
* Vite
* JavaScript (JSX)

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Bcrypt
* Express Validator
* Cookie Parser
* CORS
* Morgan
* Dotenv

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/news_media.git

cd news_media
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
DATABASE_URL=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```

Then start the backend:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

### 3. Setup Frontend

Open another terminal:

```bash
cd frondend
npm install
```

Start the React development server:

```bash
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

## 🔐 Authentication

The application uses **JWT authentication** to protect news-related operations.

Authentication is handled through:

* JSON Web Token
* HTTP cookies
* Authentication middleware
* Password hashing with Bcrypt

## 🗄️ Database

This project uses **MongoDB** as the database and **Mongoose** as the ODM.

Main models:

* `Users`
* `News`

## 🎨 Frontend Pages

The frontend contains several pages:

* Home
* Login
* Register
* Create News
* News Details

Reusable components include:

* Navigation Bar
* News Item
* Pagination

## 🧪 Development

Run the backend:

```bash
cd backend
npm run dev
```

Run the frontend:

```bash
cd frondend
npm run dev
```

Build the frontend for production:

```bash
npm run build
```


## 👨‍💻 Author

**Aye**

Engineer & Developer

---

⭐ If you find this project useful, feel free to star the repository!

**Made with ❤️ using React, Node.js, Express & MongoDB.**
