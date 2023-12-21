var dashboardData = [
    {
        'name': 'Productivity on Monday',
        'percentage': 4,
    },
    {
        'name': 'Productivity on Tuesday',
        'percentage': 92,
    },
    {
        'name': 'Productivity on Wednesday',
        'percentage': 122,
    },
    {
        'name': 'Productivity on Thursday',
        'percentage': 93,
    },
    {
        'name': 'Productivity on Friday',
        'percentage': 89,
    },
    {
        'name': 'Productivity on Saturday',
        'percentage': 98,
    },
]

generateDashboard();

function generateDashboard() {
    const boxElement = document.getElementById('box');
    dashboardData.forEach(x => {
        const element = document.createElement('p');
        element.innerHTML = `<div class="row"> <div class="col-9"> ${x.name} </div>  <div class="col-3 percentage"> ${x.percentage}%  </div> </div>`;
        boxElement.appendChild(element);

        const barElement = document.createElement('p');
        barElement.innerHTML = `<div class="progress">
        <div class="progress-bar" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: ${x.percentage}%;"></div>
      </div>`;
        boxElement.appendChild(barElement);

    });
}

let Emp = document.getElementById('Emp');
Emp.addEventListener('click', empPageNavigator);

function empPageNavigator() {
    window.location.href = '../emp_page/index.html';
}