# 👥 Student Team Management App

A full-stack web application to manage student teams — built with **React**, **Node.js**, and **MongoDB**.

> Upload member profiles, assign roles, and manage your team efficiently with a clean UI.

---

## 🚀 Features

- 📄 Add team members with profile photo
- 📋 View all members in a dashboard-style UI
- 🛠️ Assign roles, edit details, or remove members
- 📁 File upload support (Multer)
- 🌐 RESTful API backend with Express
- 🗃️ MongoDB database for persistent storage

---

## 🧱 Tech Stack

| Frontend  | Backend  | Database | Others     |
|-----------|----------|----------|------------|
| React     | Node.js  | MongoDB  | Multer     |
| Axios     | Express  | Mongoose | Dotenv     |
| React Router |        |          | CORS       |

---

## 📂 Folder Structure

team-manager/ ├── client/ # React frontend ├── server/ # Node backend │ ├── models/ # Mongoose schema │ ├── routes/ # Express routes │ ├── uploads/ # Profile photo storage │ └── server.js # Main server file



---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/kumara1009/Project-Manager.git
cd Project-Manager
2. Backend Setup
bash
Copy
Edit
cd server
npm install
Create a .env file inside server/:

bash
Copy
Edit
MONGODB_URI=mongodb://localhost:27017/student-team-app
Create the uploads/ folder:

bash
Copy
Edit
mkdir uploads
Start the backend:

bash
Copy
Edit
npm start
3. Frontend Setup
bash
Copy
Edit
cd ../client
npm install
npm start
Open your browser at: http://localhost:3000


🙌 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.
