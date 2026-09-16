# Reasoning

## Problem Understanding

The goal is to build a Habit Tracker that allows users to create habits, mark them as completed, and monitor their progress.

## Assumptions

- Single-user application
- Users can add, edit, delete, and complete habits
- Data should persist after refresh
- Authentication is not required

## Technology Choice

React and Vite were selected for fast development and component-based UI.

Local Storage was selected for simple data persistence without requiring backend infrastructure.

## Core Features

- Create habit
- View habits
- Edit/Delete habit
- Mark completion
- Track progress
- Persist data

## Edge Cases

- Empty habit name
- Empty habit list
- Duplicate completion
- Page refresh
- Invalid input

## Trade-off

Local Storage was chosen instead of a backend to keep the MVP simple and achievable within the assessment time.

## Future Scope

- Backend and database
- Authentication
- Notifications
- Calendar view
- Advanced analytics
- Cloud synchronization


## Morning Reminder

The application checks the user's habits for the current day and identifies habits that have not been completed.

When the user opens the app in the morning, a reminder is displayed for the remaining habits. Browser notifications can also be used when supported and permitted.

This approach keeps the feature simple and suitable for a frontend-based MVP.
