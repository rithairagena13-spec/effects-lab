# Effects Lab – React useEffect Practice

A small React application built with Vite to practice understanding and using the `useEffect` Hook to synchronize components with external systems.

## Project Overview

Effects Lab contains three independent interactive widgets. Each widget demonstrates a different use of React's `useEffect` Hook.

## Features

### 1. Title Mirror
- Provides a controlled input.
- Updates the browser tab title whenever the input changes.
- Demonstrates synchronizing React state with the browser document.

### 2. Saved Note
- Restores a previously saved note from `localStorage`.
- Automatically saves changes whenever the note is updated.
- Demonstrates synchronizing React state with browser storage.

### 3. Live Clock
- Displays the current time.
- Updates every second using `setInterval()`.
- Uses `clearInterval()` for cleanup when the component unmounts.
- Can be hidden and displayed again.

## Technologies Used

- React
- JavaScript
- Vite
- HTML
- CSS
- React Hooks (`useState` and `useEffect`)

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate into the project

```bash
cd use-effect
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## Key Learning Outcomes

- Understanding the purpose of `useEffect`.
- Identifying side effects in React applications.
- Understanding dependency arrays.
- Synchronizing React components with external browser systems.
- Using cleanup functions to prevent unnecessary background processes.
- Understanding the difference between pure calculations, event handlers, and Effects.

## Author

Ritha IRAGENA

## Project Purpose

This project was created as part of a React in-class activity to practice and understand the `useEffect` Hook through practical examples.
