import { useEffect, useState } from "react";
import HabitForm from "./components/HabitForm";
import HabitCard from "./components/HabitCard";
import Dashboard from "./components/Dashboard";
import "./styles.css";

function App() {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });

  const [editingHabit, setEditingHabit] = useState(null);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habit) => setHabits([...habits, habit]);

  const updateHabit = (updatedHabit) => {
    setHabits(habits.map((habit) =>
      habit.id === updatedHabit.id ? updatedHabit : habit
    ));
    setEditingHabit(null);
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  const toggleHabit = (id) => {
    const today = new Date().toISOString().split("T")[0];

    setHabits(habits.map((habit) => {
      if (habit.id !== id) return habit;

      const completedDates = habit.completedDates || [];
      const updatedDates = completedDates.includes(today)
        ? completedDates.filter((date) => date !== today)
        : [...completedDates, today];

      return { ...habit, completedDates: updatedDates };
    }));
  };

  return (
    <div className="app">
      <header>
        <h1>Habit Tracker</h1>
        <p>Build better habits, one day at a time.</p>
      </header>

      <Dashboard habits={habits} />

      <HabitForm
        onAdd={addHabit}
        onUpdate={updateHabit}
        editingHabit={editingHabit}
      />

      <main>
        <h2>My Habits</h2>

        {habits.length === 0 ? (
          <div className="empty">
            <p>No habits yet. Add your first habit!</p>
          </div>
        ) : (
          <div className="habit-list">
            {habits.map((habit) => (
              <HabitCard
                key={habit.id}
                habit={habit}
                onToggle={toggleHabit}
                onEdit={setEditingHabit}
                onDelete={deleteHabit}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
