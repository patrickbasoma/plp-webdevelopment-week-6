
// ===================================
// SPENDWISE - PERSONAL EXPENSE TRACKER
// ===================================

// STEP 1: Store expense records in an array

let expenses = [];

let monthlyBudget = 0;


// STEP 2: Select HTML elements using the DOM

const expenseForm = document.getElementById("expenseForm");

const expenseName = document.getElementById("expenseName");

const expenseAmount = document.getElementById("expenseAmount");

const expenseCategory = document.getElementById("expenseCategory");

const expenseDate = document.getElementById("expenseDate");

const expenseList = document.getElementById("expenseList");

const totalExpenses = document.getElementById("totalExpenses");

const expenseCount = document.getElementById("expenseCount");

const remainingBudget = document.getElementById("remainingBudget");

const budgetInput = document.getElementById("budgetInput");

const setBudgetBtn = document.getElementById("setBudgetBtn");

const budgetStatus = document.getElementById("budgetStatus");

const message = document.getElementById("message");


// STEP 3: Create a function to display currency

function formatCurrency(amount) {
    return "KSh " + amount.toFixed(2);
}


// STEP 4: Add an expense using the form

expenseForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get values entered by the user
    const name = expenseName.value.trim();

    const amount = Number(expenseAmount.value);

    const category = expenseCategory.value;

    const date = expenseDate.value;


    // STEP 5: Use conditionals to validate information

    if (name === "" || category === "" || date === "") {

        message.textContent = "Please complete all fields.";
        return;

    }

    if (!Number.isFinite(amount) || amount <= 0) {

        message.textContent = "Please enter a valid amount greater than zero.";
        return;

    }


    // STEP 6: Store the expense as an object in the array

    const newExpense = {
        name: name,
        amount: amount,
        category: category,
        date: date
    };

    expenses.push(newExpense);


    message.textContent = "Expense added successfully!";

    // Clear the form
    expenseForm.reset();


    // Update the dashboard
    updateDashboard();

});


// STEP 7: Create a function to update the dashboard

function updateDashboard() {

    let total = 0;

    // Use a loop to calculate all expenses
    for (let i = 0; i < expenses.length; i++) {

        total += expenses[i].amount;

    }

    // Update dashboard values
    totalExpenses.textContent = formatCurrency(total);

    expenseCount.textContent = expenses.length;

    remainingBudget.textContent =
        formatCurrency(monthlyBudget - total);


    // STEP 8: Use conditionals for budget feedback

    if (monthlyBudget <= 0) {

        budgetStatus.textContent = "Please set your monthly budget.";

    } else if (total > monthlyBudget) {

        budgetStatus.textContent =
            "Warning! You have exceeded your monthly budget.";

    } else if (total === monthlyBudget) {

        budgetStatus.textContent =
            "You have used your entire monthly budget.";

    } else if (total >= monthlyBudget * 0.8) {

        budgetStatus.textContent =
            "Warning! You have used 80% or more of your budget.";

    } else {

        budgetStatus.textContent =
            "Good job! You are within your budget.";

    }


    // STEP 9: Display expense records in the HTML table

    expenseList.innerHTML = "";

    // Loop through the array using forEach
    expenses.forEach(function(expense, index) {

        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = expense.name;

        const categoryCell = document.createElement("td");
        categoryCell.textContent = expense.category;

        const amountCell = document.createElement("td");
        amountCell.textContent = formatCurrency(expense.amount);

        const dateCell = document.createElement("td");
        dateCell.textContent = expense.date;

        const actionCell = document.createElement("td");

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.type = "button";
        deleteButton.className = "delete-btn";
        deleteButton.dataset.index = index;

        actionCell.appendChild(deleteButton);

        row.appendChild(nameCell);
        row.appendChild(categoryCell);
        row.appendChild(amountCell);
        row.appendChild(dateCell);
        row.appendChild(actionCell);

        expenseList.appendChild(row);

    });

}


// STEP 10: Set the monthly budget

setBudgetBtn.addEventListener("click", function() {

    const budget = Number(budgetInput.value);

    if (!Number.isFinite(budget) || budget <= 0) {

        budgetStatus.textContent =
            "Please enter a valid budget greater than zero.";

        return;

    }

    monthlyBudget = budget;

    budgetStatus.textContent = "Monthly budget updated successfully.";

    updateDashboard();

});


// STEP 11: Handle delete button clicks

expenseList.addEventListener("click", function(event) {

    if (event.target.classList.contains("delete-btn")) {

        const index = Number(event.target.dataset.index);

        expenses.splice(index, 1);

        message.textContent = "Expense deleted successfully!";

        updateDashboard();

    }

});


// STEP 12: Display the initial dashboard

updateDashboard();
if (total > monthlyBudget) {
    budgetStatus.textContent = "Budget exceeded!";
} else {
    budgetStatus.textContent = "You are within budget.";
}