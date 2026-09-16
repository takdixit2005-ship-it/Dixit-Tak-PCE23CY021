function Dashboard({ habits }) {
  const today = new Date().toISOString().split("T")[0];

  const completed = habits.filter((habit) =>
    (habit.completedDates || []).includes(today)
  ).length;

  const total = habits.length;
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <section className="dashboard">
      <div className="stat">
        <h3>{total}</h3>
        <p>Total Habits</p>
      </div>
      <div className="stat">
        <h3>{completed}</h3>
        <p>Completed Today</p>
      </div>
      <div className="stat">
        <h3>{progress}%</h3>
        <p>Today's Progress</p>
      </div>
    </section>
  );
}

export default Dashboard;
