import { useEffect, useState } from "react";

function HabitForm({ onAdd, onUpdate, editingHabit }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [frequency, setFrequency] = useState("Daily");

  useEffect(() => {
    if (editingHabit) {
      setName(editingHabit.name);
      setDescription(editingHabit.description);
      setFrequency(editingHabit.frequency);
    }
  }, [editingHabit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter a habit name.");
      return;
    }

    if (editingHabit) {
      onUpdate({
        ...editingHabit,
        name: name.trim(),
        description: description.trim(),
        frequency
      });
    } else {
      onAdd({
        id: Date.now(),
        name: name.trim(),
        description: description.trim(),
        frequency,
        createdAt: new Date().toISOString(),
        completedDates: []
      });
    }

    setName("");
    setDescription("");
    setFrequency("Daily");
  };

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <h2>{editingHabit ? "Edit Habit" : "Add New Habit"}</h2>

      <input
        type="text"
        placeholder="Habit name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
      </select>

      <button type="submit">
        {editingHabit ? "Update Habit" : "Add Habit"}
      </button>
    </form>
  );
}

export default HabitForm;
