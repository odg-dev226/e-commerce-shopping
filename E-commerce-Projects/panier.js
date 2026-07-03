const panier= document.querySelector("#panier");

const panierElements= JSON.parse(localStorage.getItem("cart") || "[]");
let html= "";
let total= 0;
panierElements.forEach( element=>{
    const currentPrice= Number(element.price.replace(/\D/g,""));
    total+=currentPrice;
    html+= `<div class="all">
    <div class="img"><img src="${element.imgUrl}" alt="Produit ajouter au panier" width="100%"></div>
    <div class="info"><p>${element.name}</p><p>${element.price}</p></div>
    </div>`;
});
panier.innerHTML= html;
const totalPhrase= document.createElement("p");
totalPhrase.classList.add("display-total");
totalPhrase.textContent= `Total: ${total}`;
panier.appendChild(totalPhrase);

const commandeBtn = document.getElementById("commande");

commandeBtn.addEventListener("click", ()=>{
    localStorage.removeItem("cart");
    panier.innerHTML="";
    const confirmationPhrase= document.createElement("p");
    confirmationPhrase.textContent= "Votre commande a bien été prise en compte!";
    confirmationPhrase.classList.add('send-validater');
    panier.appendChild(confirmationPhrase);
});