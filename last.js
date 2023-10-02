// Function to populate dropdowns
function populateDropdown(dropdown, items, valueProperty, textProperty) {
    items.forEach(item => {
        const option = document.createElement('option');
        option.value = item[valueProperty];
        option.textContent = item[textProperty];

        dropdown.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Fetch currency data and populate currency dropdowns
    fetch('https://api-uct.mukuru.com/taurus/v1/products/price-check')
        .then(response => response.json())
        .then(data => {
            const currencies = data.items;
            const payInCountryDropdown = document.getElementById('payInCountry');
            const payOutCountryDropdown = document.getElementById('payOutCountry');
            const payInCurrencyDropdown = document.getElementById('payInCurrency');
            const payOutCurrencyDropdown = document.getElementById('payOutCurrency');

            populateDropdown(payInCountryDropdown, currencies, 'payInCountryCode', 'payInCountryCode');
            populateDropdown(payOutCountryDropdown, currencies, 'payOutCountryCode', 'payOutCountryCode');
            populateDropdown(payInCurrencyDropdown, currencies, 'payInCurrencyCode', 'payInCurrencyCode');
            populateDropdown(payOutCurrencyDropdown, currencies, 'payOutCurrencyCode', 'payOutCurrencyCode');
        })
        .catch(error => {
            console.error('Error fetching currency data:', error);
        });

    // Fetch product type data and populate product type dropdown
    fetch('https://api-uct.mukuru.com/taurus/v1/resources/product-types')
        .then(response => response.json())
        .then(data => {
            const productTypes = data.items;
            const productTypeDropdown = document.getElementById('productType');

            populateDropdown(productTypeDropdown, productTypes, 'code', 'name');
        })
        .catch(error => {
            console.error('Error fetching product type data:', error);
        });

    // Calculate remittance cost
    document.getElementById('calculateButton').addEventListener('click', () => {
        const payInCurrency = document.getElementById('payInCurrency').value;
        const payOutCurrency = document.getElementById('payOutCurrency').value;
        const remittanceAmount = parseFloat(document.getElementById('remittanceAmount').value);

        fetch('https://api-uct.mukuru.com/taurus/v1/products/price-check')
            .then(response => response.json())
            .then(data => {
                const productPrices = data.items;

                const relevantPrice = productPrices.find(price =>
                    price.payInCurrencyCode === payInCurrency &&
                    price.payOutCurrencyCode === payOutCurrency
                );

                if (relevantPrice) {
                    const exchangeRate = relevantPrice.rate.rate;
                    const calculatedAmount = remittanceAmount * exchangeRate;
                    const transactionFee = relevantPrice.fee.amount; // Fee for the selected currency code

                    const totalCost = remittanceAmount + transactionFee;

                    const resultElement = document.getElementById('result');
                    resultElement.textContent = `They Receive: ${calculatedAmount.toFixed(2)} ${payOutCurrency}`;
                    resultElement.textContent += `\nMukuru Charges: ${transactionFee.toFixed(2)} ${payInCurrency}`;
                    resultElement.textContent += `\nYou Pay ${totalCost.toFixed(2)} ${payInCurrency}`;
                } else {
                    console.error('No product price found for selected currencies.');
                }
            })
            .catch(error => {
                console.error('Error fetching product prices:', error);
            });
    });
});