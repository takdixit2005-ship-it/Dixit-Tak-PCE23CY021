function HabitCard({ habit, onToggle, onEdit, onDelete }) {
  const today = new Date().toISOString().split("T")[0];
  const completed = (habit.completedDates || []).includes(today);

  return (
    <div className={`habit-card ${completed ? "completed" : ""}`}>
      <div>
        <h3>{habit.name}</h3>
        <p>{habit.description || "No description"}</p>
        <small>Frequency: {habit.frequency}</small>
      </div>

      <div className="actions">
        <button onClick={() => onToggle(habit.id)}>
          {completed ? "Completed ✓" : "Complete"}
        </button>
        <button onClick={() => onEdit(habit)}>Edit</button>
        <button onClick={() => onDelete(habit.id)}>Delete</button>
      </div>
    </div>
  );
}

export default HabitCard;
