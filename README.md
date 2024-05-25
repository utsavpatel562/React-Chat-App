# 📱 React-Chat-App

A real-time chat application built with React and Firebase. This app features user authentication, real-time messaging, and media sharing, leveraging Firebase Authentication, Firestore, and Firebase Storage.

## ✨ Features

- 🔐 User Authentication (Sign Up, Log In, Log Out) with Firebase Auth
- 💬 Real-time messaging with Firestore
- 🖼️ Upload and display user avatars and chat images with Firebase Storage
- 📱 Responsive UI for seamless experience across devices

## 📸 Screenshots

(Add screenshots of your app here)

## 🌐 Demo

(If you have a live demo, add the link here)

## 🛠️ Technologies Used

- **React** - Frontend library for building user interfaces
- **Firebase Authentication** - For user login and registration
- **Firestore** - Realtime database for storing user details, chats, and messages
- **Firebase Storage** - For storing user avatars and chat images
- **CSS** - For styling

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js and npm installed on your machine
- Firebase project setup (see [Firebase Documentation](https://firebase.google.com/docs/web/setup))

### 📦 Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/utsavpatel562/react-chat-app.git
    cd react-chat-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up Firebase:
   - Go to the Firebase Console, create a new project, and add a web app to your project.
   - Copy your Firebase config and create a `.env` file in the root of your project:
    ```bash
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    ```

4. Start the development server:
    ```bash
    npm start
    ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

## 📚 Usage

1. Register a new account or log in with existing credentials.
2. Upload an avatar after logging in (optional).
3. Start a new chat or join an existing chat.
4. Send text messages and upload images within the chat.

## 🗂️ Folder Structure
react-chat-app/
│
├── public/
├── src/
│ ├── components/ # Reusable UI components
│ ├── contexts/ # Context providers for Firebase and user state
│ ├── hooks/ # Custom hooks
│ ├── pages/ # Page components (Login, Register, Chat)
│ ├── services/ # Firebase service functions
│ ├── utils/ # Utility functions
│ ├── App.js # Main app component
│ ├── index.js # Entry point
│ └── ... # Other files
│
├── .env # Environment variables
├── .gitignore # Files to ignore in git
├── package.json # Project dependencies and scripts
└── README.md # Project README file


## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Firebase](https://firebase.google.com/) for their excellent suite of tools
- [React](https://reactjs.org/) for their powerful library
- Everyone who contributed to this project
