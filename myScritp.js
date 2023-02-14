const btn = document.querySelector("#btn")
var karakter = document.querySelector(".input1")

btn.addEventListener("click", function(){
    
    var val = karakter.value
    
    
    
    fetch("https://hp-api.onrender.com/api/characters")
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                console.log(data);
                if(val == element.name){
                    document.querySelector("#bildeSpan").innerHTML = `<a href="https://harrypotter.fandom.com/wiki/${element.name}" target="_blank"><img src=${element.image} alt=""></a>`
                    document.querySelector("#nameSpan").innerHTML = element.name
                    document.querySelector("#spiciesSpan").innerHTML = element.species
                    document.querySelector("#genderSpan").innerHTML = element.gender
                    document.querySelector("#birthSpan").innerHTML = element.yearOfBirth

                }
            });
            
        })  
})
