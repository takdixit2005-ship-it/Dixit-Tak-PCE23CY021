# Habit Tracker

A simple web application to create, manage, and track daily habits.

## Features

- Add, edit, and delete habits
- Mark habits as completed
- Track daily progress
- Data persistence using Local Storage
- Responsive UI

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Local Storage

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Debugging

If dependencies are missing, run `npm install`.
If old data causes issues, clear the browser's Local Storage and reload.

## Scope

This is a single-user MVP. Authentication, backend, notifications, and cloud synchronization are outside the current scope.

## Morning Reminder

The app checks for incomplete habits each morning and shows a reminder to the user.

Example:

"Good morning! You have 3 habits left to complete today."

Browser notifications can also be enabled when supported and permitted by the user.
