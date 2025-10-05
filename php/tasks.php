<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$tasks = [];

// Task 1: PHP Basics
$a = 10;
$b = '10';
$c = 6;
$d = '6';

$tasks['task1']['comparison'] = [
    'explanation' => "== compares value only while === compares value and data type.",
    'scenario_1' => '$a = 10; $b = "10"; $a == $b: ' . (($a == $b) ? 'true' : 'false'),
    'scenario_2' => '$c = 6; $d = "6"; $c === $d: ' . (($c === $d) ? 'true' : 'false'),
    'rationale' => "The test case with == returns true because it only compares values. Since 10 and '10' are the same value even though one is an integer and the other is a string, the comparison returns true. On the other hand, === checks both value and data type. Since 6 (Integer) and '6' (String) have the same value but different types, it returns false."
];
// b) include vs require

$tasks['task1']['include_require'] = [
    'explanation' => "Include gives warning if a file or dependency is not found. The code keeps running whether the said file or dependency is added or not. Require gives fatal error if a file or dependency is not found. The code stops running if the said file or dependency is not added.",
    'example' => "include 'config.php';\nrequire 'config.php';"
];


// c) session vs cookie
$tasks['task1']['session_vs_cookie'] = [
    'explanation' => "Session: stored on server, e.g., logged-in user information so the server knows who is authenticate. Cookie: stored in browser, e.g., 'remember me' preference or storing user settings like language or theme.'"
];


// Task 2: Functions & Loan Calculation
$tasks['task2'] = [];

function loanRepayment($amount, $interestRate = 10) {
    $total = $amount + ($amount * $interestRate / 100);
    return $total;
}

$total1 = loanRepayment(5000);
$total2 = loanRepayment(5000, 15);

/// Store outputs with keys matching React code
$tasks['task2']['loan1'] = $total1; // 5500
$tasks['task2']['loan2'] = $total2; // 5750

// Task 3: Arrays & Logic
$tasks['task3'] = [];

// Explanation
$tasks['task3']['explanation'] = "This task demonstrates working with arrays and basic logic in PHP: finding highest, lowest, average, and filtering values above 2000.";

// Array of loans
$loans = [2000, 1500, 3000, 500, 4500];
$tasks['task3']['loans'] = $loans;

// a) Highest loan
$highest = max($loans);
$tasks['task3']['highest'] = $highest;

// b) Lowest loan
$lowest = min($loans);
$tasks['task3']['lowest'] = $lowest;

// c) Average loan
$average = array_sum($loans) / count($loans);
$tasks['task3']['average'] = $average;

// d) Loans above 2000
$above2000 = [];
foreach ($loans as $loan) {
    if ($loan > 2000) {
        $above2000[] = $loan;
    }
}
$tasks['task3']['above_2000'] = $above2000;

//Task 4: Database & SQL
$tasks['task4'] = [
    'inner_vs_left_join' => "INNER JOIN returns only rows with matching values in both tables. LEFT JOIN returns all rows from the left table and matched rows from the right table. NULL values appear if no match.",
    'first_loan_per_client_sql' => "SELECT DISTINCT ON (user_id) 
       user_id, id AS loan_id, amount, status, disbursed_at
FROM loan_requests
ORDER BY user_id, disbursed_at ASC;",
    'gmail_users_sql' => "SELECT first_name || ' ' || last_name AS full_name, email
FROM users
WHERE email LIKE '%@gmail.com';"
];

// Task 5: Date & Applied Logic
$tasks['task5'] = [];

// Explanation
$tasks['task5']['explanation'] = "This task demonstrates working with dates in PHP, including getting today's date, tomorrow's date, and checking repayment dates.";

// a) Today's date in YYYY-MM-DD
$today = date("Y-m-d");
$tasks['task5']['today'] = $today;

// b) Tomorrow's date
$tomorrow = date("Y-m-d", strtotime("+1 day"));
$tasks['task5']['tomorrow'] = $tomorrow;

// c) Check if repayment date is tomorrow
function checkRepaymentDate($repayment_date) {
    $tomorrow = date("Y-m-d", strtotime("+1 day"));
    if ($repayment_date === $tomorrow) {
        return "Repayment is tomorrow.";
    } 
    return ""; // prints nothing if not tomorrow
}

// Example repayment dates
$repayment_dates = ["2025-10-05", "2025-10-06", "2025-10-07"];
$tasks['task5']['repayments'] = [];
foreach ($repayment_dates as $date) {
    $tasks['task5']['repayments'][$date] = checkRepaymentDate($date);
}

// Output all tasks as JSON
echo json_encode($tasks, JSON_PRETTY_PRINT);

?>
