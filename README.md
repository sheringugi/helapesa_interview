```markdown
# Hela Capitals Software Engineer Assessment

This repository contains the full solutions for the Hela Capitals Software Engineer internship technical assessment, including **PHP backend** tasks and **React frontend** tasks.

---

## Project Structure

```

hela-capitals-assessment/
│
├── php/                  # PHP backend
│   ├── tasks.php         # All PHP tasks (Task 1–5)
│
├── react/                # React frontend
│   ├── src/
│   │   ├── CounterButton.jsx      # Task 1: Counter Button
│   │   ├── Greeting.jsx #         # Task 2: Conditional Rendering
│   │   ├── FruitList.jsx          # Task 3: Rendering Lists
│   │   ├── FormInput.jsx          # Task 4: Handling Input
│   │   ├── HeaderDisplay.jsx      # Task 5: Props
│   │   └── App.jsx                # Main app combining tasks
│   ├── package.json
│
└── README.md

````

---

## Requirements

- **PHP** 7.x or 8.x  
- **Node.js** 18.x or later  
- **npm** or **yarn**  
- **React** 18.x or later  

---

## PHP Backend Setup

1. Navigate to the `php` folder:

```bash
cd php
````

2. Start the PHP server:

```bash
php -S localhost:8000
```

3. Access the tasks via browser or API client:

```
http://localhost:8000/tasks.php
```

This endpoint returns all PHP tasks as a JSON object.

---

### PHP Tasks Overview

**Task 1: PHP Basics**

* `== vs ===` comparison
* `include vs require`
* `session vs cookie`

**Task 2: Functions & Loan Calculation**

* `loanRepayment($amount, $interestRate)` function
* Default interest rate: 10%
* Examples:

  * `loanRepayment(5000)`
  * `loanRepayment(5000, 15)`

**Task 3: Arrays & Logic**

* Find highest loan
* Find lowest loan
* Calculate average loan
* Loop to filter loans above 2000

**Task 4: Database & SQL (PostgreSQL)**

* Difference between INNER JOIN and LEFT JOIN
* SQL to get first loan per client:

```sql
SELECT DISTINCT ON (user_id) 
       user_id, id AS loan_id, amount, status, disbursed_at
FROM loan_requests
ORDER BY user_id, disbursed_at ASC;
```

* SQL to get Gmail users:

```sql
SELECT first_name || ' ' || last_name AS full_name, email
FROM users
WHERE email LIKE '%@gmail.com';
```

**Task 5: Date & Applied Logic**

* Get today's date: `date("Y-m-d")`
* Get tomorrow's date: `date("Y-m-d", strtotime("+1 day"))`
* Check if `$repayment_date` is tomorrow:

```php
if ($repayment_date === date("Y-m-d", strtotime("+1 day"))) {
    echo "Repayment is tomorrow.";
}
```

---

## React Frontend Setup

1. Navigate to the `react` folder:

```bash
cd react
```

2. Install dependencies:

```bash
npm install
```

or

```bash
yarn
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser at:

```
http://localhost:5173
```

---

### React Tasks Overview

**Task 1: Counter Button**

* Functional component displaying a count starting at 0
* Increment count by 1 on button click

**Task 2: Conditional Rendering**

* Display "Hello, Guest!" if not logged in
* Display "Welcome, [username]!" if logged in

**Task 3: Rendering Lists**

* Given array: `["Apple", "Banana", "Mango", "Orange"]`
* Render each item as an `<li>` inside a `<ul>`

**Task 4: Handling Input (Forms)**

* Input field to type a name
* Button displays greeting: "Hello, [name]!"

**Task 5: Props (Passing Data)**

* Parent component passes `title` prop
* Header component displays the title in an `<h1>` tag

**Tasks**
* Fetches PHP backend tasks and displays them in the React app

---

## Submission

Compress the entire folder (`hela-capitals-assessment/`) into a ZIP file and submit to:

**Email:** [hr@helacapitals.com](mailto:hr@helacapitals.com)

---

## Contact

For any questions regarding this project, email: **[sheri.ngugi17@gmail.com](mailto:sheri.ngugi17@gmail.com)**

---

## Notes

* Ensure CORS is enabled in PHP backend:

```php
header('Access-Control-Allow-Origin: *');
```

* React frontend expects the backend API at: `http://localhost:8000/tasks.php`


```

---
