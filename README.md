

<img width="3000" height="3000" alt="dr" src="https://github.com/user-attachments/assets/f3d9946f-cb20-45d3-914a-2c89c004166b" />

# 🐉 Dragon News

## 📌 Project Description

**Dragon News** is a modern and feature-rich news portal website. Users can read the latest news by category, filter news by specific topics, and read the full details of each article on a dedicated dynamic page. Certain pages require users to create an account and log in, managed through a secure authentication system.

---

## 🛠️ Technologies Used

| Category | Technology |
|----------|------------|
| **Framework** | Next.js (App Router) |
| **UI Library** | HeroUI (NextUI) |
| **Authentication** | Better Auth |
| **Database** | MongoDB |
| **Language** | JavaScript
| **Styling** | Tailwind CSS |

---

## ✨ Features

### 📰 News Features
- **Category-based News on Homepage** — News listed and displayed according to different categories
- **Dynamic News Details Page** — Each article has its own dynamic route for reading full details
- **Category Filtering** — Filter and view all news under a specific category with a single click

### 🔐 Authentication & Security
- **Sign Up** — New user registration system
- **Log In** — Secure login system
- **Log Out** — Safe logout from the current session
- **Session Management** — Session handled securely via Better Auth
- **Protected Routes** — Certain pages are accessible only to logged-in users

### 🗄️ Data Management
- **MongoDB Integration** — Data storage and management on the server
- **User Data Storage** — User information stored securely in the database

---

## 📂 Project Structure (Overview)

```
dragon-news/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── (main)/
│   │   ├── page.jsx          # Homepage
│   │   ├── news/[id]/        # Dynamic News Details
│   │   └── category/[id]/    # Category Filter Page
│   └── layout.jsx
├── components/
│   ├── Navbar.jsx
│   ├── NewsCard.jsx
│   └── CategoryList.jsx
├── lib/
│   ├── auth.js               # Better Auth configuration
│   └── db.js                 # MongoDB connection
└── public/
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (Atlas)

### Installation

```bash
# Clone the repository
git clone https://github.com/mahmud-abdullah-262/dragon-news-with-backend.git

# Navigate to the project directory
cd dragon-news

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file and add the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_auth_secret
BETTER_AUTH_URL=http://localhost:3000
```

### Run the Project

```bash
npm run dev
```

The application will run at [http://localhost:3000](http://localhost:3000).

---

## 📝 Summary

**Dragon News** is a full-featured news portal built with **Next.js** App Router and **HeroUI**, delivering a modern and responsive user interface. The project integrates **Better Auth** to ensure secure user authentication, with fully functional Sign Up, Log In, Log Out, and Session Management. All user data is stored securely in a **MongoDB** database. Users can filter news by category and read the full details of any article on a dedicated dynamic page. Protected pages are accessible only to authenticated users, making Dragon News a professional and secure news platform.

---

## 👨‍💻 Author

**Abdullah Al Mahmud**
- GitHub: [@mahmud-abdullah-262](https://github.com/mahmud-abdullah-262)

---

> ⭐ If you find this project helpful, please give it a star!
