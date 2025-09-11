const produits = [
    {id : 0, productName : "iphone17 pro max", productDesc : "Lorem ipsum!", prix: "1500€"},
    {id : 1, productName : "iphone15 pro max", productDesc : "Lorem ipsum!", prix: "200€"},
    {id : 2, productName : "iphone12 pro max", productDesc : "Lorem ipsum!", prix: "350€"}
];

// console.log(produits);
let idPanier = 0 ; 
let mainDiv = document.querySelector('.container')
let panierNum = document.querySelector('span').textContent
panierNum = Number(panierNum)

let bskt = document.getElementById('bskt');
let panierShow = document.querySelector('.panierNone')

// afficher tous les produits sur la page accueil
for (const produit of produits) {
    
    let div = document.createElement("div")
    
    div.innerHTML = `
    <div class="content">
    <h2 class="title">${produit.productName}</h2>
    <p class="desc">${produit.productDesc}</p>
    <p class="price">${produit.prix}</p>
    <button id="${produit.id}" class="btn">ajouter au panier</button>
    </div>
    
    `
    mainDiv.appendChild(div) 
    
}

let btnAj = document.querySelectorAll('button');

//btn pour incrementer le nombre de panier 
for(let i = 0 ; i<produits.length ; ++i){
    btnAj[i].addEventListener('click', function (){
        panierNum+= 1;
        let panierNum2 = document.querySelector('span')
        panierNum2.innerText = panierNum
        
        // let pid = produits.find((e)=> {Number(btnAj[i].id) == e.id})
        let pid = produits.find((e)=>e.id == i)
        
        
       console.log(pid.prix);
       let div = document.createElement("div")

       div.id = idPanier++
       div.innerHTML = `
       
       <div class="content panierContent">
            <h2 class="title">${pid.productName}</h2>
        
            <p class="price">${pid.prix}</p>
            <button class="btn">supprimer </button>
        </div>
       `
        panierShow.appendChild(div)
        div.querySelector('button').addEventListener('click', ()=>{
            div.remove()
            panierNum -= 1;
            panierNum2.innerText = panierNum
        })
    })
}

// btn pour voir l'historique
bskt.addEventListener("click", ()=> {
    mainDiv.style.display = 'none';
    panierShow.style.display = 'block';
})

// une function qui nous permet de revenir a l'accueil
function revenir (){
    mainDiv.style.display = 'flex';
    panierShow.style.display = 'none';
}