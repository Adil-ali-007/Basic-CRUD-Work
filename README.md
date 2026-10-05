# 📚 Basic CRUD Work

A simple **MERN Stack CRUD application** for managing books.
This project was built to understand and implement the fundamental **Create, Read, Update, and Delete (CRUD)** operations using React, Node.js, Express.js, and MongoDB.

## 🚀 Features

* ➕ Add a new book
* 📖 View all books
* ✏️ Update book details
* 🗑️ Delete a book
* 🔄 React frontend connected with Express backend
* 🌐 REST API implementation
* 🗄️ MongoDB database integration
* ⚡ Axios for API requests
* 🎨 Responsive frontend interface

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Axios
* CSS

### Backend

* Node.js
* Express.js
* Mongoose

### Database

* MongoDB

### Development Tools

* Git
* GitHub
* VS Code
* Nodemon

## 📂 Project Structure

```text
Basic-CRUD-Work/
│
├── client/
│   └── vite-project/
│       ├── public/
│       ├── src/
│       │   ├── component/
│       │   │   ├── Home.jsx
│       │   │   └── Navbar.jsx
│       │   ├── App.jsx
│       │   ├── App.css
│       │   ├── index.css
│       │   └── main.jsx
│       ├── axiosInstance.js
│       ├── package.json
│       └── vite.config.js
│
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── book.controller.js
│   │   ├── db/
│   │   │   └── db.js
│   │   ├── models/
│   │   │   └── book.model.js
│   │   └── routes/
│   │       └── book.route.js
│   ├── index.js
│   └── package.json
│
└── README.md
```

## 🔄 CRUD Operations

This application implements the four basic database operations:

| Operation  | Purpose                        |
| ---------- | ------------------------------ |
| **Create** | Add a new book                 |
| **Read**   | Fetch and display books        |
| **Update** | Edit existing book information |
| **Delete** | Remove a book                  |

## 🔌 API Endpoints

The backend provides REST API endpoints for managing books.

| Method   | Endpoint               | Description    |
| -------- | ---------------------- | -------------- |
| `GET`    | `/book/booklists`      | Get all books  |
| `POST`   | `/book/addbook`        | Add a new book |
| `PUT`    | `/book/updatebook/:id` | Update a book  |
| `DELETE` | `/book/deletebook/:id` | Delete a book  |

> The exact base URL depends on the backend port configured in your project.

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Adil-ali-007/Basic-CRUD-Work.git
```

```bash
cd Basic-CRUD-Work
```

### 2. Setup Backend

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file if your backend configuration requires environment variables.

Example:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
```

Start the backend:

```bash
npm start
```

Or, if you use Nodemon:

```bash
npm run dev
```

### 3. Setup Frontend

Open another terminal:

```bash
cd client/vite-project
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

## 🗄️ Database

This project uses **MongoDB** with **Mongoose** for database management.

The application stores book information such as:

* Book Name
* Book Title
* Author
* Selling Price
* Publish Date

Make sure MongoDB is running before starting the backend.

## 🧠 What I Learned

Through this project, I practiced:

* Building a React frontend
* Creating REST APIs with Express
* Connecting Node.js with MongoDB
* Using Mongoose models
* Creating controllers and routes
* Performing CRUD operations
* Sending API requests using Axios
* Connecting frontend and backend
* Managing project structure
* Using Git and GitHub for version control

## 🔮 Future Improvements

Some features that can be added later:

* 🔐 User authentication
* 🔎 Search books
* 📑 Pagination
* 🔃 Sorting and filtering
* 🖼️ Book cover/image upload
* 👤 User-specific books
* ☁️ Cloud deployment
* 📱 Improved responsive design
* ✅ Better form validation
* 🔔 Toast notifications


## 👨‍💻 Author

**Adil Ali**

GitHub: [Adil-ali-007](https://github.com/Adil-ali-007)

## ⭐ Support

If you found this project useful for learning MERN Stack development, consider giving the repository a ⭐ on GitHub.
