const btnAsia = document.querySelector('.asia'),
    btnEurope = document.querySelector('.europe'),
    btnAmericas = document.querySelector('.americas'),
    btnAfrica = document.querySelector('.africa'),
    btnOceania = document.querySelector('.oceania'),
    btnRegion = document.querySelector('.byRegion')

let byRegion = 'https://api.allorigins.win/raw?url=https://restcountries.herokuapp.com/api/v1';
let byCountry = 'https://corona-api.com/countries';

const regions = { arrCountry: [], arrAsia: [], arrEurope: [], arrAmericas: [], arrAfrica: [], arrOceania: [] };
const statistic = { arrConfirmed: [], arrCritical: [], arrDeaths: [], arrRecovered: [] };
btnRegion.disabled = true
btnAsia.disabled = true
btnEurope.disabled = false
btnAmericas.disabled = false
btnAfrica.disabled = false
btnOceania.disabled = false

let myChart;

async function hhh() {
    let info = (await (await fetch(byRegion)).json());
    let info2 = (await (await fetch(byCountry)).json()).data;

    for (let i = 0; i <= info.length - 1; i++) {
        regions.arrCountry.push(info[i].name.common)
        if (info[i].region == 'Asia') {
            regions.arrAsia.push(info[i].name.common)
        }
        else if (info[i].region == 'Europe') {
            regions.arrEurope.push(info[i].name.common)
        }
        else if (info[i].region == 'Americas') {
            regions.arrAmericas.push(info[i].name.common)
        }
        else if (info[i].region == 'Africa') {
            regions.arrAfrica.push(info[i].name.common)
        }
        else if (info[i].region == 'Oceania') {
            regions.arrOceania.push(info[i].name.common)
        }
    }
    for (let i = 0; i < info.length - 1; i++) {
        statistic.arrConfirmed.push(info2[i].latest_data.confirmed)
        statistic.arrCritical.push(info2[i].latest_data.critical)
        statistic.arrDeaths.push(info2[i].latest_data.deaths)
        statistic.arrRecovered.push(info2[i].latest_data.recovered)
    }
}
hhh()
btnEurope.addEventListener('click', async () => {
    btnAsia.disabled = false
    btnEurope.disabled = true
    btnAmericas.disabled = false
    btnAfrica.disabled = false
    btnOceania.disabled = false

    const data = {
        labels: regions.arrEurope,
        datasets:
            [
                {
                    label: 'Deaths',
                    borderColor: "rgb(255,188,128)",  //Orange
                    pointBackgroundColor: "rgb(255,188,128)",
                    pointBorderColor: "black",
                    data: statistic.arrDeaths.slice(0, 100),
                },
                {
                    label: 'confirmed',
                    borderColor: "rgb(152,255,178)", //Mint
                    pointBackgroundColor: "rgb(152,255,178)",
                    pointBorderColor: "black",
                    data: statistic.arrConfirmed.slice(0, 100),
                },
                {
                    label: 'recovered',
                    borderColor: "rgb(255,204,206)", //Pink
                    pointBackgroundColor: "rgb(255,204,206)",
                    pointBorderColor: "black",
                    data: statistic.arrRecovered.slice(0, 100),
                },
                {
                    label: 'critical',
                    borderColor: "rgb(228,204,255)", //Purple
                    pointBackgroundColor: "rgb(228,204,255)",
                    pointBorderColor: "black",
                    data: statistic.arrCritical.slice(0, 100),
                },
            ]
    };
    const config = {
        type: 'line',
        data: data,
        options: {}
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
})
btnAmericas.addEventListener('click', () => {
    myChart.destroy()
    btnAsia.disabled = false
    btnEurope.disabled = false
    btnAmericas.disabled = true
    btnAfrica.disabled = false
    btnOceania.disabled = false

    const data = {
        labels: regions.arrAmericas,
        datasets:
            [
                {
                    label: 'Deaths',
                    borderColor: "rgb(255,188,128)",  //Orange
                    pointBackgroundColor: "rgb(255,188,128)",
                    pointBorderColor: "black",
                    data: statistic.arrDeaths.slice(50, 150),
                },
                {
                    label: 'confirmed',
                    borderColor: "rgb(152,255,178)", //Mint
                    pointBackgroundColor: "rgb(152,255,178)",
                    pointBorderColor: "black",
                    data: statistic.arrConfirmed.slice(50, 150),
                },
                {
                    label: 'recovered',
                    borderColor: "rgb(255,204,206)", //Pink
                    pointBackgroundColor: "rgb(255,204,206)",
                    pointBorderColor: "black",
                    data: statistic.arrRecovered.slice(50, 150),
                },
                {
                    label: 'critical',
                    borderColor: "rgb(228,204,255)", //Purple
                    pointBackgroundColor: "rgb(228,204,255)",
                    pointBorderColor: "black",
                    data: statistic.arrCritical.slice(50, 150),
                },
            ]
    };
    const config = {
        type: 'line',
        data: data,
        options: {}
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
})
btnAfrica.addEventListener('click', () => {
    btnAsia.disabled = false
    btnEurope.disabled = false
    btnAmericas.disabled = false
    btnAfrica.disabled = true
    btnOceania.disabled = false

    const data = {
        labels: regions.arrAfrica,
        datasets:
            [
                {
                    label: 'Deaths',
                    borderColor: "rgb(255,188,128)",  //Orange
                    pointBackgroundColor: "rgb(255,188,128)",
                    pointBorderColor: "black",
                    data: statistic.arrDeaths.slice(100, 200),
                },
                {
                    label: 'confirmed',
                    borderColor: "rgb(152,255,178)", //Mint
                    pointBackgroundColor: "rgb(152,255,178)",
                    pointBorderColor: "black",
                    data: statistic.arrConfirmed.slice(100, 200),
                },
                {
                    label: 'recovered',
                    borderColor: "rgb(255,204,206)", //Pink
                    pointBackgroundColor: "rgb(255,204,206)",
                    pointBorderColor: "black",
                    data: statistic.arrRecovered.slice(100, 200),
                },
                {
                    label: 'critical',
                    borderColor: "rgb(228,204,255)", //Purple
                    pointBackgroundColor: "rgb(228,204,255)",
                    pointBorderColor: "black",
                    data: statistic.arrCritical.slice(100, 200),
                },
            ]
    };
    const config = {
        type: 'line',
        data: data,
        options: {}
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
})
btnOceania.addEventListener('click', () => {
    btnAsia.disabled = false
    btnEurope.disabled = false
    btnAmericas.disabled = false
    btnAfrica.disabled = false
    btnOceania.disabled = true

    const data = {
        labels: regions.arrOceania,
        datasets:
            [
                {
                    label: 'Deaths',
                    borderColor: "rgb(255,188,128)",  //Orange
                    pointBackgroundColor: "rgb(255,188,128)",
                    pointBorderColor: "black",
                    data: statistic.arrDeaths.slice(150, 200),
                },
                {
                    label: 'confirmed',
                    borderColor: "rgb(152,255,178)", //Mint
                    pointBackgroundColor: "rgb(152,255,178)",
                    pointBorderColor: "black",
                    data: statistic.arrConfirmed.slice(150, 200),
                },
                {
                    label: 'recovered',
                    borderColor: "rgb(255,204,206)", //Pink
                    pointBackgroundColor: "rgb(255,204,206)",
                    pointBorderColor: "black",
                    data: statistic.arrRecovered.slice(150, 200),
                },
                {
                    label: 'critical',
                    borderColor: "rgb(228,204,255)", //Purple
                    pointBackgroundColor: "rgb(228,204,255)",
                    pointBorderColor: "black",
                    data: statistic.arrCritical.slice(150, 200),
                },
            ]
    };
    const config = {
        type: 'line',
        data: data,
        options: {}
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
})
btnAsia.addEventListener('click', () => {
    btnAsia.disabled = true
    btnEurope.disabled = false
    btnAmericas.disabled = false
    btnAfrica.disabled = false
    btnOceania.disabled = false

    const data = {
        labels: regions.arrAsia,
        datasets:
            [
                {
                    label: 'Deaths',
                    borderColor: "rgb(255,188,128)",  //Orange
                    pointBackgroundColor: "rgb(255,188,128)",
                    pointBorderColor: "black",
                    data: statistic.arrDeaths.slice(180, 250),
                },
                {
                    label: 'confirmed',
                    borderColor: "rgb(152,255,178)", //Mint
                    pointBackgroundColor: "rgb(152,255,178)",
                    pointBorderColor: "black",
                    data: statistic.arrConfirmed.slice(180, 250),
                },
                {
                    label: 'recovered',
                    borderColor: "rgb(255,204,206)", //Pink
                    pointBackgroundColor: "rgb(255,204,206)",
                    pointBorderColor: "black",
                    data: statistic.arrRecovered.slice(180, 250),
                },
                {
                    label: 'critical',
                    borderColor: "rgb(228,204,255)", //Purple
                    pointBackgroundColor: "rgb(228,204,255)",
                    pointBorderColor: "black",
                    data: statistic.arrCritical.slice(180, 250),
                },
            ]
    };
    const config = {
        type: 'line',
        data: data,
        options: {}
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
})








