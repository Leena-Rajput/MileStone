// Customer object with name and balance
const customer = {
    name: "John Doe",
    balance: 1000,
};

// Function to handle deposit
const deposit = (amount) => {
    customer.balance += amount;
};

// Function to handle withdrawal
const withdrawal = (amount) => {
    if (amount <= customer.balance) {
        customer.balance -= amount;
    } else {
        console.log("Insufficient balance");
    }
};

// Function to update balance display
const updateBalance = () => {
    document.getElementById("balance").textContent = `Balance: $${customer.balance}`;
};

// Event listener for transaction form submission
document.getElementById("transaction-form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const amount = parseInt(document.getElementById("amount").value);
    const type = document.getElementById("type").value;
    
    if (type === "deposit") {
        deposit(amount);
    } else if (type === "withdrawal") {
        withdrawal(amount);
    }
    
    updateBalance();
    document.getElementById("transaction-form").reset();
});
