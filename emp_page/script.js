var employeeData = [
    {
        'empId': 1,
        'name': 'Arjun',
        'dob': '16-11-2000',
        'role': 'Software Engineer'
    },
    {
        'empId': 2,
        'name': 'Mahesh',
        'dob': '15-11-2000',
        'role': 'Web Developer'
    },
    {
        'empId': 3,
        'name': 'John',
        'dob': '16-12-1992',
        'role': 'Senior Software Engineer'
    },
]

generateEmployeeList(employeeData);

function generateEmployeeList(empData) {
    const boxElement = document.getElementById('box');
    boxElement.innerHTML = "";
    empData.forEach(x => {
        const element = document.createElement('div');
        element.setAttribute('class', 'card');
        element.innerHTML = `
        <div class="row gray-text mt-2"> 
            <div class="col-3">EMP ID</div> <div class="col-9 font-bold">: ${x.empId}</div>
        </div> 
        <div class="row gray-text mt-2">  
            <div class="col-3">Name</div> <div class="col-9 font-bold">: ${x.name}</div>
        </div> 
        <div class="row gray-text mt-2">  
            <div class="col-3">DOB</div> <div class="col-9 orange-text">: ${x.dob}</div>
        </div> 
        <div class="row gray-text mt-2"> 
            <div class="col-3">Role</div> <div class="col-9 green-text">: ${x.role}</div>
        </div>`;
        boxElement.appendChild(element);
    });
}

let home = document.getElementById('Home');
home.addEventListener('click', homePageNavigator);

function homePageNavigator() {
    window.location.href = "C:/Users/Brindha/Interviews/Greendzine_source_code/home_page/index.html";
}

// let Emp = document.getElementById('Emp');
// Emp.addEventListener('click', empPageNavigator);

// function empPageNavigator() {
//     window.location.href = 'C:/Users/Brindha/Interviews/Greendzine_source_code/emp_page/index.html';
// }

let searchInput = document.getElementById("search_bar");
searchInput.addEventListener("keyup", function()
{
    let entersearch = searchInput.value;
    let serachEmp = findEmpName(entersearch, employeeData);
    generateEmployeeList(serachEmp);
});


function findEmpName(val, emps)
{
    val = val.toUpperCase().trim();
    let filterEmp = [];

    for (let emp of emps)
    {
        let oName = emp.name.toUpperCase().trim();

        if (oName.includes(val))
        {
            filterEmp.push(emp);
        }
    }
    return filterEmp;
}