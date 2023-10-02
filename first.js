document.addEventListener('DOMContentLoaded', () => {
    const exchangeRateElement = document.getElementById('exchange-rate');
    const estimatedCostElement = document.getElementById('estimated-cost');
    const method1CostElement = document.getElementById('method1-cost');
    const method2CostElement = document.getElementById('method2-cost');
    const calculatorForm = document.getElementById('calculator-form');
    const sendingCountryDropdown = document.getElementById('sendingCountry');
    const receivingCountryDropdown = document.getElementById('receivingCountry');

    async function populateCountryDropdowns() {
        try {
            const response = await fetch('http://localhost:8080/https://api-uct.mukuru.com/taurus/v1/countries');
            const countriesData = await response.json();

            countriesData.forEach(country => {
                const option = document.createElement('option');
                option.value = country.code; // Assuming the API returns country codes
                option.textContent = country.name; // Assuming the API returns country names
                sendingCountryDropdown.appendChild(option);
                receivingCountryDropdown.appendChild(option.cloneNode(true));
            });
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    }

    populateCountryDropdowns();

    calculatorForm.addEventListener('submit', async(event) => {
        event.preventDefault();

        const sendingCountry = sendingCountryDropdown.value;
        const receivingCountry = receivingCountryDropdown.value;
        const sourceAmount = parseFloat(document.getElementById('sourceAmount').value);
        const receiveMethod = document.getElementById('receiveMethod').value;

        try {
            const response = await fetch(`http://localhost:8080/https://api-uct.mukuru.com/taurus/v1/products/price-check`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: sourceAmount,
                    sending_country: sendingCountry,
                    receiving_country: receivingCountry,
                    receive_method: receiveMethod,
                }),
            });

            // ... rest of your code ...
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
});