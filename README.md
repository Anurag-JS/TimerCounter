# Counter Timer App

This is a simple **Counter Timer App** built with **React.js**, which increments the timer every second and displays the time in `HH:MM:SS` format. The user can pause, resume, and reset the timer. This app makes use of **React Hooks** such as `useState` and `useEffect` to manage state and handle side effects.

## Features

- Displays the time in `HH:MM:SS` format.
- Pause and resume functionality.
- Reset the timer to `00:00:00`.
- Responsive and centered layout.
- Customizable button styles with hover effects.

## Hooks Used

- **`useState`**: Used to manage the timer state (to track the seconds passed) and whether the timer is paused.
- **`useEffect`**: Used to handle the timer interval logic, where it runs the timer every second and cleans up the interval when the component is unmounted or the timer is paused.

## Installation and Run
To run this project locally, follow these steps:

Clone the Repository Download the project files to your local machine using Git or directly from the source.

Navigate to the Project Directory Open a terminal and use the cd command to navigate to the root directory of the project.

Install Dependencies Run npm install in the terminal to automatically install all required packages and dependencies.

Launch the Application Once the installation is complete, start the development server with the command npm start.

View in Browser Open your web browser and go to http://localhost:3000/ to interact with the application.
