const borderClick = document.querySelector("input");
borderClick.addEventListener("click",()=>{
borderClick.style.outlineColor = "white" ;
});
const buttonSearch=document.querySelector("button");
buttonSearch.style.height = "30px";
buttonSearch.style.width = "30px";
buttonSearch.style.border = "1px solid black";
buttonSearch.style.borderRadius = "70%";

document.getElementById("location").style.paddingTop = "10px";

const img = document.getElementById("img");
img.style.marginTop = "30px";
img.style.height = "60px";
img.style.width = "60px";
img.style.borderRadius = "70%";

document.getElementById("p-humidity-icon").innerText = " 48%";
document.getElementById("p-windspeed-icon").innerText = " 10.29 km/h";
document.getElementById("p-pressure-icon").innerText = " 1009.1mb";
document.getElementById("p-uvidx-icon").innerText = " 40°C";

//api functionality

const base_url="https://api.openweathermap.org/data/2.5/weather"; // url from where api is getting called

/*fetch(base_url)
    .then(response => response.json())
    
    .then(data => console.log(data.main.humidity,data.main.pressure,data.name,data.main.feels_like))
    .catch(error => console.error('Error:', error));
*/

// basic async await func to move fwd next tasks 

const func = async() => {
    
    //let venue = document.getElementById("input").value;
    //let response = await fetch(base_url +`q=${}` + `&appid=e115eada4abf347918155fb7813c918f`);
    let response = await fetch(`${base_url}?q=${document.getElementById("input").value}&appid=e115eada4abf347918155fb7813c918f&units=metric`);
    let data = await response.json();
    console.log(data);
   
   
    //document.getElementById("img").before(data.weather[0].icon);
    let description = document.createElement("p");
    //let icon =()=>{
        let iconCode = data.weather[0].icon;
        let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        document.getElementById("img").src = iconUrl;
        
       // document.getElementById("img").style.height = "100px";
       //document.getElementById("img").style.width = "100px";
        
       // description.innerText = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
       // document.getElementById("img").after (description);
        
       
    //};
    //icon();
    //if(description.innerText){
     //   description.remove();
    //}
    
    
    document.getElementById("temp").innerText = data.main.temp +'°C';
    document.getElementById("location").innerText = data.name;
    document.getElementById("p-humidity-icon").innerText = data.main.humidity + '%';
    document.getElementById("p-windspeed-icon").innerText = data.wind.speed + 'km/h';
    document.getElementById("p-pressure-icon").innerText = data.main.pressure + 'mb';
    document.getElementById("p-uvidx-icon").innerText = data.main.feels_like + '°C';
    
};
buttonSearch.addEventListener("click",func); 

