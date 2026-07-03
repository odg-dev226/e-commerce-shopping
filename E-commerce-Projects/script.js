const main= document.querySelector("main");
const toutBtn= document.querySelector("#tout-btn");
const home= document.querySelector('#home');
const tShirtBtn= document.querySelector("#t-shirt-btn");
const chaussureBtn= document.querySelector("#chaussures-btn");
const pantalonsBtn = document.querySelector("#pantalons-btn");
const montresBtn= document.querySelector("#montres-btn");
const chapeauBtn= document.querySelector("#chapeaux-btn");
const currentHref= document.querySelectorAll('.current-href');
const navBarStyle= document.querySelector("#nav-bar-style");
const whatsapp= document.querySelector("#whatsapp");
const adds= document.querySelectorAll(".add");

chapeauBtn.addEventListener("click", (event)=> {
    displayImage(event, '/chapeaux.html');
    chapeauBtn.classList.add('current-page');
    toutBtn.classList.remove('tout-current-page');
    home.classList.remove('current-page');
    montresBtn.classList.remove("current-page");
    pantalonsBtn.classList.remove("current-page");
    chaussureBtn.classList.remove("current-page");
    tShirtBtn.classList.remove("current-page");
});
montresBtn.addEventListener("click", (event)=> {
    displayImage(event, '/montres.html');
    montresBtn.classList.add('current-page');
    toutBtn.classList.remove('tout-current-page');
    home.classList.remove('current-page');
    chapeauBtn.classList.remove("current-page");
    pantalonsBtn.classList.remove("current-page");
    chaussureBtn.classList.remove("current-page");
    tShirtBtn.classList.remove("current-page");
});
pantalonsBtn.addEventListener("click" , (event)=> {
    displayImage(event, "/pantalons.html");
    pantalonsBtn.classList.add('current-page');
    toutBtn.classList.remove('tout-current-page');
    home.classList.remove('current-page');
    montresBtn.classList.remove("current-page");
    chapeauBtn.classList.remove("current-page");
    chaussureBtn.classList.remove("current-page");
    tShirtBtn.classList.remove("current-page");
});
chaussureBtn.addEventListener("click", (event) =>{
    displayImage(event, "/chaussures.html");
    chaussureBtn.classList.add('current-page');
    toutBtn.classList.remove('tout-current-page');
    home.classList.remove('current-page');
    montresBtn.classList.remove("current-page");
    pantalonsBtn.classList.remove("current-page");
    chapeauBtn.classList.remove("current-page");
    tShirtBtn.classList.remove("current-page");
});
tShirtBtn.addEventListener("click",(event)=> {
    displayImage(event, "/t_shirt.html");
    tShirtBtn.classList.add('current-page');
    toutBtn.classList.remove('tout-current-page');
    home.classList.remove('current-page');
    montresBtn.classList.remove("current-page");
    pantalonsBtn.classList.remove("current-page");
    chaussureBtn.classList.remove("current-page");
    chapeauBtn.classList.remove("current-page");
});


/*-------------------Système de panier-----------------------------*/
adds.forEach(add=>{
    add.addEventListener("click", ()=>{
        const boite= JSON.parse(localStorage.getItem("cart")  || "[]");
        const all= add.closest(".all");
        const productName= all.querySelector(".product-name").textContent;
        const productImgSrc= all.querySelector(".product-image").src;
        const productPrice = all.querySelector(".product-price").textContent;
        boite.push({name: productName, price: productPrice, imgUrl: productImgSrc});
        localStorage.setItem("cart",JSON.stringify(boite));
    })
});

main.addEventListener('click', (event)=>{
    const panierAjout= event.target.closest(".add");
    if(panierAjout){
        const all= panierAjout.closest(".all");
        const boite= JSON.parse(localStorage.getItem("cart")  || "[]");
        const productName= all.querySelector(".product-name").textContent;
        const productImgSrc= all.querySelector(".product-image").src;
        const productPrice = all.querySelector(".product-price").textContent;
        boite.push({name: productName, price: productPrice, imgUrl: productImgSrc});
        localStorage.setItem("cart",JSON.stringify(boite));
    }
})

/*--------------------------------------------*/
currentHref.forEach(lien=> getHref(lien));
function getHref(currentPage){
    const currentHrefAttribute= window.location.href;
    if(currentPage.href===currentHrefAttribute){
        currentPage.classList.add('current-page');
    }
}

function displayImage(event, page){
    event.preventDefault();
    clean(main); 
    createPage(page);
} 

function createPage(page){
    const tShirtPageUrl= page;
    const tShirtSection= document.createElement("section");
    const tShirtPage= getPages(tShirtPageUrl);
    tShirtPage.then(text=>{
        tShirtSection.innerHTML= text;
    });
    main.appendChild(tShirtSection);
}

function clean(element){
    element.innerHTML= "";
}

async function getPages(page){
    try{
        const url = page;
        const reponse= await fetch(url);
        if(!reponse.ok){
            throw new Error (`Status de reponses: ${reponse.status}`);
        }
        return await reponse.text();
    }catch{
        console.error('blakslkjlkdjflks');
    }
} 