# 🍽️ ProjectYummi – Food Ordering Platform

ProjectYummi is a **full-stack food ordering platform** built using **React.js** for the frontend and **Node.js with Express.js** for the backend.  
It provides a seamless online food ordering experience for users, restaurant owners, and administrators.

---

## 🚀 Tech Stack

### Frontend
- React.js
- JavaScript (ES6+)
- CSS
- REST API integration

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Redis (for caching / rate limiting)

---

## 📁 Project Structure

```
ProjectYummi/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── styles/
│       ├── App.js
│       └── index.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── tests/
│   ├── server.js
│   └── app.js
│
├── .gitignore
├── README.md
├── package.json
└── package-lock.json
```

---

## 🎯 Key Features

### 👤 User Features
- User authentication (Sign up / Login)
- Browse restaurants and menus
- Add items to cart
- Place and track orders
- View order history
- Rate and review restaurants

### 🛠️ Admin Features
- Admin authentication
- Manage restaurants and menu items
- View and manage orders
- Monitor user activity

### 🔐 Security
- JWT-based authentication
- Role-based access control
- Rate limiting middleware
- Centralized error handling

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v16+ recommended)
- npm
- MongoDB
- Redis (optional)

---

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Bhargav-1729/Yummi---Full-Stack-Web-App.git
cd Yummi---Full-Stack-Web-App
```

---

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
REDIS_URL=your_redis_url
```

Start the backend server:
```bash
npm start
```

---

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
npm start
```

---

## 🧪 Testing
```bash
cd backend
npm test
```

---

## 🤝 Contributing
Contributions are welcome!  
Fork the repo, create a branch, commit changes, and open a pull request.

---

## 📄 License
This project is licensed under the **MIT License**.
