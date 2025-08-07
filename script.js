const form = document.getElementById('expense-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const expenseList = document.getElementById('expense-list');
const totalDisplay = document.getElementById('total');

let expenses = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const description = descriptionInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const category = categoryInput.value;

  if (!description || isNaN(amount) || amount <= 0) {
    alert('Please enter valid data');
    return;
  }

  const expense = { description, amount, category };
  expenses.push(expense);
  updateUI();

  // Clear inputs
  descriptionInput.value = '';
  amountInput.value = '';
  categoryInput.value = 'Food';
});

function updateUI() {
  expenseList.innerHTML = '';
  let total = 0;

  expenses.forEach((expense) => {
    const li = document.createElement('li');
    li.textContent = `${expense.description} - ${expense.amount} RSD [${expense.category}]`;
    expenseList.appendChild(li);
    total += expense.amount;
  });

  totalDisplay.textContent = total.toFixed(2);
}
