import React, { useEffect, useState } from 'react';

function Tasks() {
  const [tasks, setTasks] = useState(null);

 useEffect(() => {
  fetch('http://localhost:8000/tasks.php')
    .then(res => res.json())
    .then(data => setTasks(data))
    .catch(err => console.error(err));
}, []);

  if (!tasks) return <div>Loading...</div>;

  return (
    <div>
      <h1>PHP Tasks</h1>
        <div className="tasks-container">
            {/* Task 1 */}
            <section>
                <h2>Task 1: PHP Basics</h2>
                <h3>Comparison == vs ===</h3>
                <p>{tasks.task1.comparison.explanation}</p>
                <p>$a == $b: {tasks.task1.comparison['$a == $b']}</p>
                <p>$c === $d: {tasks.task1.comparison['$c === $d']}</p>
                <p>Rationale: {tasks.task1.comparison.rationale}</p>

                <h3>Include vs Require</h3>
                <p>{tasks.task1.include_require.explanation}</p>
                <pre>{tasks.task1.include_require.example}</pre>

                <h3>Session vs Cookie</h3>
                <p>{tasks.task1.session_vs_cookie.explanation}</p>
            </section>

            {/* Task 2 */}
            <section>
                <h2>Task 2: Functions & Loan Calculation</h2>
                <p>Loan Repayment(5000) = {tasks.task2.loan1}</p>
                <p>Loan Repayment(5000, 15) = {tasks.task2.loan2}</p>
            </section>

            {/* Task 3 */}
            <section>
                <h2>Task 3: Arrays & Logic</h2>
                <p>Highest loan: {tasks.task3.highest}</p>
                <p>Lowest loan: {tasks.task3.lowest}</p>
                <p>Average loan: {tasks.task3.average}</p>
                <p>Loans above 2000: {tasks.task3.above_2000.join(', ')}</p>
            </section>

            {/* Task 4 */}
            <section>
                <h2>Task 4: Database & SQL</h2>
                <p>{tasks.task4.inner_vs_left_join}</p>
                <pre>{tasks.task4.first_loan_per_client_sql}</pre>
                <pre>{tasks.task4.gmail_users_sql}</pre>
            </section>

            {/* Task 5 */}
            <section>
                <h2>Task 5: Date & Applied Logic</h2>
                <p>Today's date: {tasks.task5.today}</p>
                <p>Tomorrow's date: {tasks.task5.tomorrow}</p>
                <h3>Repayment Checks:</h3>
                <ul>
                {Object.entries(tasks.task5.repayments).map(([date, msg]) => (
                    <li key={date}>{date}: {msg || 'No repayment tomorrow'}</li>
                ))}
                </ul>
                <p>{tasks.task5.explanation}</p>
            </section>
        </div>
    </div>
  );
}

export default Tasks;
