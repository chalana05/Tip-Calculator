document.addEventListener('DOMContentLoaded', () => {
    const billAmountInput = document.getElementById('billAmount');
    const tipPercentageInput = document.getElementById('tipPercentage');
    const calculateBtn = document.getElementById('calculateBtn');
    const tipAmountDisplay = document.getElementById('tipAmount');
    const totalAmountDisplay = document.getElementById('totalAmount');

    calculateBtn.addEventListener('click', () => {
        const billAmount = parseFloat(billAmountInput.value);
        const tipPercentage = parseFloat(tipPercentageInput.value);

        if (isNaN(billAmount) || isNaN(tipPercentage)) {
            alert('Please enter valid numbers for both bill amount and tip percentage.');
            return;
        }

        const tipAmount = (billAmount * tipPercentage) / 100;
        const totalAmount = billAmount + tipAmount;

        tipAmountDisplay.textContent = tipAmount.toFixed(2);
        totalAmountDisplay.textContent = totalAmount.toFixed(2);
    });
});
