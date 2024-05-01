# MyChatApp 📱💬

MyChatApp is a full-stack real-time communication application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It facilitates messaging and collaboration between users with a focus on simplicity and minimalis. 🚀

## Features 🌟

- **Real-time Messaging:** Engage in real-time conversations with other users who are online. Messages are delivered instantly, creating a seamless communication experience. 💬
- **User Authentication:** Secure user authentication system using JsonWebToken (JWT) for token generation and management. User passwords are securely hashed using bcrypt.js. 🔒
- **User-friendly Interface:** Minimalistic layouts and intuitive design enhance user focus and productivity during communication. 🎨
- **Chat History:** Chat history is stored in the database and automatically loaded for seamless conversation continuity. 🔄

## Technologies Used 💻

- **Frontend:** React + Vite JS Bundle, TailwindCSS
- **Backend:** Node.js with Express.js
- **Database:** MongoDB Atlas with Mongoose
- **Security:** bcrypt.js for password encryption, JsonWebToken (JWT) for user authentication
- **Other Libraries:** socket.io for real-time communication, dotenv for environment variable management

## Installation 🛠️

1. Clone the repository: `git clone https://github.com/trucdg/my-chat-app.git`
2. Navigate to the project directory: `cd my-chat-app`
3. Install dependencies:
   - Frontend: `cd frontend && npm install`
   - Backend: `cd backend && npm install`
4. Set up environment variables:
   - Create a `.env` file in the backend directory.
   - Define the following variables:
     ```
     PORT=<your port number>
     MONGO_DB_URI=<your MongoDB Atlas connection URI>
     JWT_SECRET=<your JWT secret key>
     ```
5. Start the backend server: `cd backend && npm run server`
6. Start the frontend server: `cd frontend && npm run dev`

## Usage 🚀

1. Register a new account or log in with existing credentials.
2. Start a conversation with other online users.
3. Enjoy real-time messaging and collaboration.

## Project Structure 📂

- **frontend:** Contains the React frontend codebase.
- **backend:** Contains the Node.js backend codebase.
- **models:** Defines Mongoose schemas for MongoDB collections.
- **routes:** Defines API endpoints for user authentication and message handling.
- **utils:** Contains utility functions for password hashing, token generation, etc.

## Contributors 👨‍💻

- **Truc Duong** - Project Lead & Developer - [trucdg@bu.edu](mailto:trucdg@bu.edu)

## Future Plans 🔮

- Support for group chat functionality.
- Multimedia content sharing (photos, videos).
- Private messaging feature.
- Custom profile picture uploads for users.
