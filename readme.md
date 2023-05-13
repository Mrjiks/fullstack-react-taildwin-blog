# React Blog

This is a React-based blog application that utilizes Tailwind CSS for styling, MongoDB and Firestore for data storage, and Vite as the build tool. It allows users to read, comment,like and share posts.

## Features

- User-friendly interface built with React
- Responsive design using Tailwind CSS
- Persistent data storage with MongoDB and Firestore
- Fast development and building with Vite

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (v14 or later)
- MongoDB
- Firestore project and credentials

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd react-blog
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the root directory of the project.
   - Add the following variables to the `.env` file:

     ```
     REACT_APP_FIREBASE_API_KEY=<your-firebase-api-key>
     REACT_APP_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
     REACT_APP_FIREBASE_PROJECT_ID=<your-firebase-project-id>
     REACT_APP_FIREBASE_COLLECTION=<your-firebase-collection>
     ```

   - Replace the `<your-firebase-*>` placeholders with your actual Firebase project details.

5. Start the development server:

   ```
   npm run dev
   ```

6. Open your browser and visit `http://localhost:3000` to see the blog application in action.

## Build

To build the application for production, run the following command:

```
npm run build
```

The optimized and minified files will be generated in the `dist` directory.

## Deployment

To deploy the application, follow the deployment instructions specific to your hosting provider. Make sure to set up the necessary environment variables as mentioned in the installation steps.

## Folder Structure

Here's an overview of the project's folder structure:

```
react-blog/
  |- public/              # Public assets and index.html
  |- src/                 # Application source code
      |- components/      # Reusable React components
      |- pages/           # Application pages and routes
      |- styles/          # Custom CSS styles
      |- utils/           # Utility functions
      |- App.js           # Main application component
      |- index.js         # Entry point
  |- .env                 # Environment variable configuration
  |- package.json         # Project dependencies and scripts
  |- tailwind.config.js   # Tailwind CSS configuration
  |- vite.config.js       # Vite configuration
```

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Tooling

- React
- Tailwind CSS
- MongoDB
- Firestore
- Vite

Enjoy blogging with React!
