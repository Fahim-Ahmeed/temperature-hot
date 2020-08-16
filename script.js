//function for search 
const apiCode=`8f8b9234446a06e0c61323364740cc49`;
function toSee(){
    const searchValue=document.getElementById('search-box').value;
    const locationDisplay=document.getElementById('location-display').innerText=searchValue;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationDisplay}&appid=${apiCode}`)
    .then(res=>res.json())
    .then(data=>{
    const tempInKelvin=data.main.temp;
    const tempInCel=Math.floor(tempInKelvin)-273;
    const main=data.weather[0].main;
    document.getElementById('temp').innerText=tempInCel;
    document.getElementById('situation').innerText=main;
    
})
}


