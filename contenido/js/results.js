let search = document.querySelector(".search-results");
console.log(search);

let queryString = location.search
let objQueryString = new URLSearchParams(queryString)
let resultado = objQueryString.get("q")

console.log(resultado);

let escribio = document.querySelector(".texto_resultado")
let nohay = document.querySelector(".no_hay_resultado")
escribio.innerText += " " + resultado
nohay.innerText += " " + resultado

fetch(`https://dummyjson.com/products/search?q=${resultado}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    
    if (data.products.length > 0){
        
        let producto = ""

        for (let i = 0; i < data.products.length; i++) {
            
            
            producto = producto + `<article>
            <a href="product.html?" class="name_resultado">Name: ${data.products[i].title} </a>
            <div>
            <a href="./product.html?id=${data.products[i].id}" class="vermas_resultado">Ver más</a>
            </div>
            </article>`
        }

        search.innerHTML = producto
    } else {
        nohay.style.display = "block"
        escribio.style.display = "none"
    }

})
.catch(function(error){
    console.log("El error es:" + error);
})
