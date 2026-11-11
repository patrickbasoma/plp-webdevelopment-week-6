
# SpendWise - Personal Budget and Expense Tracker

## Project Description

SpendWise is a personal budgeting and expense tracking application developed using HTML, CSS, and JavaScript.

The application helps users manage their monthly budgets, record daily expenses, calculate total spending, and monitor their remaining budget.

## Improvements Made This Week

This week, SpendWise was improved by adding JavaScript functionality to make the application interactive.

Users can now:
- Set a monthly budget.
- Add new expenses.
- Select expense categories.
- View expense records in a table.
- Calculate total expenses automatically.
- View the number of recorded expenses.
- Check their remaining budget.
- Delete expense records.
- Receive budget warnings.

## JavaScript Concepts Implemented

### 1. Conditional Statements

I used if, else if, and else statements to check budget conditions and provide feedback to users when they exceed or approach their monthly budget.

### 2. Arrays

I used a JavaScript array called expenses to store multiple expense records as objects containing the expense name, amount, category, and date.

### 3. Loops

I used a for loop to calculate total expenses and forEach() to display all expense records in the HTML table.

### 4. DOM Manipulation

I used document.getElementById(), createElement(), and textContent to select and update HTML elements dynamically.

### 5. Event Listeners

I used addEventListener() to handle form submissions, budget button clicks, and expense deletion.

## How the Application Works

Users enter their monthly budget and add expense details through the form.

JavaScript processes the information, stores each expense in an array, calculates totals, and updates the dashboard automatically.

Conditional statements check spending against the monthly budget and display appropriate feedback.

## Challenges Encountered and Solutions

1. Connecting JavaScript to HTML: I resolved this by using matching element IDs.
2. Calculating total expenses: I used loops to process all expense records.
3. Preventing page refresh: I used preventDefault() when submitting the expense form.
4. Updating expense records: I used DOM manipulation to display and delete records dynamically.
5. Budget monitoring: I used conditional statements to provide budget warnings.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Visual Studio Code
- Git and GitHub

## Conclusion

This project helped me understand how JavaScript makes webpages interactive through arrays, loops, conditional statements, DOM manipulation, and event listeners.
