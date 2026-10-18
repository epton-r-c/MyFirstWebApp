function LagerthaFact() {
    let answer1 = "Lagertha is named after a famous Viking sheild maiden.";
    let answer2 = "Her favourite snack is ostrich bones."; 
    let text = answer1 + "<br>" + answer2;
                    
    document.getElementById("Lagertha").innerHTML = text; 
    }

function HideLagerthaFact() {
    let text = ""
    document.getElementById("Lagertha").innerHTML = text;
    }

function RagnarFact() {
    let answer1 = "Ragnar is named after a famous Viking warrior.";
    let answer2 = "His favourite snack is deer hooves."; 
    let text = answer1 + "<br>" + answer2;
                    
    document.getElementById("Ragnar").innerHTML = text;               
    }

function HideRagnarFact() {
    let text = ""
    document.getElementById("Ragnar").innerHTML = text;
    }

    
    
const url = "https://api.open-meteo.com/v1/forecast?latitude=53.0977&longitude=-1.3838&current=temperature_2m,wind_speed_10m,rain&forecast_days=1";


fetch(url)
      .then(response => response.json())
      .then(data => {
        const temp = data.current.temperature_2m;
        const wind = data.current.wind_speed_10m;
        const rain = data.current.rain;
        const html = `<p><strong>Temperature:</strong> ${temp}&deg;C</p>
                      <p><strong>Wind Speed:</strong> ${wind} km/h</p>
                      <p><strong>Rain:</strong> ${rain} mm</p>`
                      ;
      document.getElementById("weather").innerHTML = html;
      })