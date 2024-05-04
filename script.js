document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('data-form');
    const tableBody = document.getElementById('data-table-body');

    document.getElementById('submit-btn').addEventListener('click', function (event) {
        event.preventDefault();
        
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const address = document.getElementById('address').value;
        const ph.number = document.getElementById('ph.number').value;
        const pincode = document.getElementById('pincode').value;
        const gender = document.getElementById('gender').value;
        const foods = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;

        if (foods.length !== 2) {
            alert('Please select exactly 2 food choices.');
            return;
        }

        const newRow = document.createElement('tr');
        const firstNameCell = document.createElement('td');
        const lastNameCell = document.createElement('td');
        const addressCell = document.createElement('td');
        const ph.numberCell = document.createElement('td');
        const pincodeCell = document.createElement('td');
        const genderCell = document.createElement('td');
        const foodCell = document.createElement('td');
        const stateCell = document.createElement('td');
        const countryCell = document.createElement('td');

        firstNameCell.textContent = firstName;
        lastNameCell.textContent = lastName;
        addressCell.textContent = address;
        ph.numberCell.textContent = ph.number;
        pincodeCell.textContent = pincode;
        genderCell.textContent = gender;
        foodCell.textContent = foods.join(', ');
        stateCell.textContent = state;
        countryCell.textContent = country;

        newRow.appendChild(firstNameCell);
        newRow.appendChild(lastNameCell);
        newRow.appendChild(addressCell);
        newRow.appendChild(ph.numberCell);
        newRow.appendChild(pincodeCell);
        newRow.appendChild(genderCell);
        newRow.appendChild(foodCell);
        newRow.appendChild(stateCell);
        newRow.appendChild(countryCell);

        tableBody.appendChild(newRow);
        form.reset();
    });
});