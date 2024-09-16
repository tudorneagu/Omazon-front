# 🛒 Amazon Clone - Full-Stack Web Application

This project is a full-stack clone of Amazon, where users can browse products, manage their cart, place orders, and log in or create accounts. Additionally, users can manage their profiles, add new products to the site, and perform admin functionalities.

## 🚀 Features

- **User Authentication**: Users can sign up, log in, and manage their profiles.
- **Product Listings**: Users can browse and search for products.
- **Shopping Cart**: Add items to the cart, update quantities, and place orders.
- **Admin Functionality**: Admin users can add new products and manage existing ones.
- **Order Management**: Users can view order history and track their purchases.

## 🛠️ Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **React Router**: Handles routing within the application.
- **Axios**: Used for making API requests to the backend.
- **Tailwind CSS**: For styling the components.
- **TypeScript**: Strongly typed JavaScript for better code quality.

### Backend

- **Node.js**: Server-side runtime environment.
- **Express**: Web framework for Node.js to handle routes and API requests.
- **Prisma**: ORM for database management.
- **PostgreSQL**: Relational database used for storing data.
- **Session Management**: Cookies are used to manage user sessions, ensuring secure and persistent authentication without the use of JWT.

---

## 🛠️ Development Tools

- **Vite**: A fast frontend build tool for React.
- **TypeScript**: For type-safe JavaScript development.
- **Tailwind CSS**: For building responsive designs quickly.
- **PostCSS/Autoprefixer**: For processing CSS.

---


## 📦 Installation

Follow these steps to install and set up the project:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/omazon-clone.git
   cd omazon-clone
   ```

2. **Install dependencies** for both frontend and backend:
   ```bash
   # Frontend
   cd frontend
   npm install

   # Backend
   cd ../backend
   npm install
   ```

3. **Configure environment variables**:

   Create a `.env` file in the `backend` directory with the following variables:

   ```bash
   DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/amazon_clone"
   SESSION_SECRET="your_session_secret"
   ```

   - Replace `USER` and `PASSWORD` with your PostgreSQL username and password.

4. **Set up the database**:
   - Install PostgreSQL if you haven’t already. On most systems, you can do this with:
     ```bash
     sudo apt update
     sudo apt install postgresql postgresql-contrib
     ```

   - Create a PostgreSQL database:
     ```bash
     sudo -u postgres psql
     CREATE DATABASE amazon_clone;
     \q
     ```

5. **Run database migrations**:

   Use Prisma to create the necessary tables in your database.

   ```bash
   npx prisma migrate dev
   ```

6. **Start the application**:

   - **Backend**:
     ```bash
     cd backend
     npm run dev
     ```

   - **Frontend**:
     ```bash
     cd frontend
     npm run dev
     ```

7. **Creating a User**:
   Once the backend and database are set up, you can create a new user by signing up through the front-end interface. Navigate to the registration page and create your account.

8. **Access the application**:
   Open your browser and go to `http://localhost:3000` (or whatever port Vite is using) to interact with the app.
