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
