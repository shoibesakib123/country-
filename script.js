const input = document.getElementById("input-button");
const inputField = document.getElementById("input-field");

const inputCountry = () => {
    input.addEventListener("click", function () {
             const inputText = inputField.value;
             inputField.value = "";
  const url = ` https://restcountries.eu/rest/v2/name/${inputText} `

  fetch(url)
    .then(res => res.json())
    .then(data => (){
      if(data.status === 404){
        const 
      }
    })
    });
}
inputCountry();

const  loaddata = (countries) => {
    const showCountries = document.getElementById("show-countires");
   showCountries.innerHTML = "";
    countries.forEach(country => {
        
        const div = document.createElement("div");
       div.classList = "col";
        div.innerHTML = `
        <div >
    <div class="card">
      <img src="${country.flag}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Country Name : ${country.name}</h5>
        <h2>${country.alpha3Code}</h2>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
        
        `
      
        showCountries.appendChild(div);
       
});
  
};