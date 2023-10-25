
const fetchButton = document.getElementById('fetchButton');
const departmentInput = document.getElementById('departmentInput');
const employeeList = document.getElementById('employeeList');

fetchButton.addEventListener('click', fetchEmployees);

async function fetchEmployees(){
    try {
        const response = await fetch('https://run.mocky.io/v3/d4cdeed7-4976-48c9-8033-bb1427570d95');
        if (response.ok) {
            const data = await response.json();
            displayEmployees(data);
        } else {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        console.error(error);
    }
}

function displayEmployees(data) {
    const departmentFilter = departmentInput.value.toLowerCase();
    employeeList.innerHTML = '';

    data.forEach(employee => {
        if (employee.department.toLowerCase().includes(departmentFilter)) {
            const li = document.createElement('li');
            li.textContent = `Name: ${employee.name}, Age: ${employee.age}, Department: ${employee.department}`;
            employeeList.appendChild(li);
        }
    });
}

fetchEmployees();
