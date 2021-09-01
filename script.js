let new_cases = document.getElementById('new_cases');
let new_death = document.getElementById('new_death');
let total_death = document.getElementById('total_death');
let total_recovery = document.getElementById('total_recovery');
let total_cases = document.getElementById('total_cases');
let table = document.getElementById('county_state');

fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "1477673c50msh334bb7a7a428f06p1c45d0jsnc8eaa74be31c"
	}
})
.then(response => response.json().then(data => {
    console.log(data);
    total_cases.innerHTML = data.total_cases;
    new_cases.innerHTML = data.new_cases;
    new_death.innerHTML = data.new_deaths;
    total_death.innerHTML = data.total_deaths;
    total_recovery.innerHTML = data.total_recovered;
}))
.catch(err => {
	console.log(err);
});

// Fetching table by country
fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "1477673c50msh334bb7a7a428f06p1c45d0jsnc8eaa74be31c"
	}
})
.then(response => response.json().then(data => {
    console.log(data);
    let countries_stat = data.countries_stat;
    for(let i=0; i<countries_stat.length; i++) {
        console.log(countries_stat[i]);
        let row = table.insertRow(i + 1);
        if((i >= 24) && (i<=74)){
            let rank = row.insertCell(0);
            let country_name = row.insertCell(1);
            let cases = row.insertCell(2);
            let deaths = row.insertCell(3);
            let serious_critical = row.insertCell(4);
            let recovered_per_country = row.insertCell(5);
    
            rank.innerHTML = i+1 ;
            country_name.innerHTML = countries_stat[i].country_name;
            cases.innerHTML = countries_stat[i].cases;
            deaths.innerHTML = countries_stat[i].deaths;
            serious_critical.innerHTML = countries_stat[i].serious_critical;
            recovered_per_country.innerHTML = countries_stat[i].total_recovered;
        }
        else{
          
        }
    }
}))
.catch(err => {
	console.log(err);
});