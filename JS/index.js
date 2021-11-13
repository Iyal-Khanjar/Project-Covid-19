const countrySelect = document.querySelector('select'),
    btnCountry = document.querySelector('.byCountry'),
    btnRegion = document.querySelector('.byRegion')



let myChart;
let myChart2;
btnCountry.disabled = true
let byCountry = 'https://corona-api.com/countries';
let byRegion = 'https://api.allorigins.win/raw?url=https://restcountries.herokuapp.com/api/v1';
let arrCountry = []
let arrRagion = []
async function covid() {
    let info = (await (await fetch(byCountry)).json()).data;
    for (let i = 0; i <= info.length - 1; i++) {
        countrySelect.innerHTML += `<option value="${info[i].name}">${info[i].name}</option>`
        obj = {
            name: info[i].name,
            data: {
                deaths: info[i].latest_data.deaths,
                confirmed: info[i].latest_data.confirmed,
                recovered: info[i].latest_data.recovered,
                critical: info[i].latest_data.critical
            }
        }
        arrCountry.push(obj)
    }
}
covid()
function fillChart() {
    pos = arrCountry.map(function (e) { return e.name; }).indexOf(countrySelect.value);
    if (btnCountry.disabled = true) {
        const labels = [
            'Confirmed',
            'Death',
            'Recoverd',
            'Critical',
        ];
        const data = {
            labels: labels,
            datasets: [{
                label: `${countrySelect.value}`,
                barPercentage: 1,
                maxBarThickness: 50,
                hoverBackgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                minBarLength: 2,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 205, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                ],
                borderWidth: 2,
                data: [arrCountry[pos].data.confirmed, arrCountry[pos].data.deaths, arrCountry[pos].data.recovered, arrCountry[pos].data.critical,],
            }]
        };
        const config = {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
        };
        if (!myChart) {
            myChart = new Chart(
                document.querySelector('#myChart'),
                config
            );
        }
        else {
            myChart.destroy()
            myChart = new Chart(
                document.querySelector('#myChart'),
                config
            );
        }
    }
    else if (btnRegion.disabled = true) {

    }
}
countrySelect.addEventListener('change', fillChart)



