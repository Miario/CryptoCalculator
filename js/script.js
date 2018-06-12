const calcGrowth = (pastVal, currentVal) => (currentVal - pastVal) / pastVal * 100;

// DOM manipulation
const btn = document.querySelector('.investment_btn');

const calc = () => {
    // Select and read data from the UI
    const cryptoUsdBought = document.querySelector('.price_input-bought').value;
    const cryptoUsdNow = document.querySelector('.price_input-now').value;
    const crypto = document.querySelector('.investment_btc').value;

    // Calculate the profits
    const invested = crypto * cryptoUsdBought;
    const current = crypto * cryptoUsdNow;
    const profit = current - invested;
    const growth = calcGrowth(invested, current);

    // Write the result to the UI
    const p = document.querySelector('.result');
    let message = '';
    
    if (profit > 0) {
        message = `You made a profit of $${profit} (${growth}%).`;
        p.style.color = 'green';
    } else if (profit < 0) {
        message = `You are at a loss of $${profit} (${growth}%).`;
        p.style.color = 'red';
    } else {
        message = 'You broke even';
    }
    p.textContent = message;
}

btn.addEventListener('click', calc);
