// script.js

let balance = 0.0;

function submitTransaction() {
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    if (type === 'deposit') {
        balance += amount;
    } else {
        balance -= amount;
    }

    updateBalance();
    document.getElementById('transactionForm').reset();
}

function updateBalance() {
    document.getElementById('balance').textContent = `Balance: $${balance.toFixed(2)}`;
}
