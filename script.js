const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&hourly=temperature_2m,rain,temperature_80m&current=temperature_2m,rain&timezone=Europe%2FBerlin"


document.addEventListener("DOMContentLoaded", () => {
    const hetiElorejelzes = document.getElementById("hetiElorejelzes")
    fetch(url)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        document.getElementById("currentWeather").innerHTML = 
        `Mai dátum: ${json.current.time.slice(0, 10)}<br>
        Jelenlegi idő: ${json.current.time.slice(11)}<br>
        Hőmérséklet: ${json.current.temperature_2m}
        ${json.current_units.temperature_2m}<br>
        Napkelte: ${json.daily.sunrise[0].slice(11)}<br>
        Napnyugta: ${json.daily.sunset[0].slice(11)}`

        
        for (let index = 0; index < 7; index++) {
            let div = document.createElement("div")
            div.classList.add("card")
            div.innerHTML += `
            <div class='card-header'>${json.daily.time[index]}</div>
            Napkelte: ${json.daily.sunrise[index].slice(11)}<br>
            Napnyugta: ${json.daily.sunset[index].slice(11)}<br>
            Minimum hőmérséklet: ${json.daily.temperature_2m_min[index]}${json.daily_units.temperature_2m_min}<br>
            Maximum hőmérséklet: ${json.daily.temperature_2m_max[index]}${json.daily_units.temperature_2m_max}<br>
            UV index (max): ${json.daily.uv_index_max[index]}
            `
            hetiElorejelzes.appendChild(div)
        }
    })
    }
)
