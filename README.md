# React Chat App 💬

Welcome to the React Chat App! This project is a real-time chat application built with React, Firebase, and Firestore. It uses Zustand for state management, Tailwind CSS for styling, and is deployed on a VPS.

## Features ✨

- **Authentication**: Users can sign up and log in using email and password.
- **Real-Time Data**: Fetches and displays real-time data from Firebase Firestore.
- **Search Users**: Search for users in the Firestore database.
- **Single Chat View**: Fetch a single chat and display its messages.
- **Responsive Design**: Built with Tailwind CSS for a responsive and modern UI.

## Demo 🎥

Check out the live demo [here](#) (replace with your live demo link).

## Installation 🔧

Follow these steps to get the project up and running on your local machine:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/utsavpatel562/React-Chat-App.git
    cd React-Chat-App
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up Firebase**:
    - Go to the [Firebase Console](https://console.firebase.google.com/).
    - Create a new project or use an existing one.
    - Add a web app to your Firebase project.
    - Copy your Firebase configuration and replace the placeholders in `src/firebaseConfig.js`:
        ```javascript
        const firebaseConfig = {
          apiKey: "YOUR_API_KEY",
          authDomain: "YOUR_AUTH_DOMAIN",
          projectId: "YOUR_PROJECT_ID",
          storageBucket: "YOUR_STORAGE_BUCKET",
          messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
          appId: "YOUR_APP_ID"
        };
        ```

4. **Run the application**:
    ```bash
    npm start
    ```

## Usage 📖

1. **Sign Up / Login**: Create an account or log in with your email and password.
2. **Search Users**: Use the search bar to find users by their name or email.
3. **Start a Chat**: Click on a user to start a chat and send messages in real-time.

## Technologies Used 🛠️

- **React**: A JavaScript library for building user interfaces.
- **Firebase**: A platform for building web and mobile applications.
    - **Firestore**: A NoSQL database for storing and syncing data in real-time.
    - **Authentication**: For user authentication.
- **Zustand**: A small, fast, and scalable state management tool.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **VPS**: Virtual Private Server for deployment.

## Contributing 🤝

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License 📄

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact 📬

Feel free to reach out if you have any questions or suggestions!

- **Email**: utsavpatel562@example.com (replace with your email)

---

Thank you for checking out the React Chat App! 😊
