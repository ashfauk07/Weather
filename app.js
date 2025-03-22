const button=document.getElementById("button");
const country=document.getElementById("country");
let i=0;
button.onclick=()=>{
    axios
    .get('https://www.freetestapi.com/api/v1/weathers')
    .then(function(response){
        country.textContent="";
        country.textContent=response.data[i].city;
        i++;
    })
    .catch(function(error){
        console.log(error);
    })
}