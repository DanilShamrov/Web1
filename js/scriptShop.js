let itemsInCart = ""
let selectedButton = ""
function addItem(name, price, img, model){
    let item={
        name, price, img, model
    }
    sessionStorage.setItem(name+model, JSON.stringify(item))
}
function generateCards(){
    var cards=[["Ремонт двигателя", "100 000₽", "assets/engine.svg"],
               ["Коробка передач", "50 000₽", "assets/gearbox.svg"],
               ["Лобовое стекло", "25 000₽", "assets/windshield.svg"],
               ["Шины зимние", "10 000₽", "assets/tires.svg"], 
               ["Шины летние", "10 000₽", "assets/tires.svg"], 
               ["Тормозные колодки", "20 000₽", "assets/brakes.svg"], 
               ["Фары передние", "5 000₽", "assets/light.svg"], 
               ["Машинное масло", "1 000₽", "assets/oil.svg"]]
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    var a=document.querySelector("[js=list]")
    a.setHTMLUnsafe("");
    for(var i=0;i<cards.length;i++){
        createCard(cards[i][0], cards[i][1], cards[i][2])
    }
    
}
function createCard(name, price, src){
    var a=document.querySelector("[js=list]")
    var el=document.createElement("div")
    el.classList.add("card")
    var img = document.createElement("img")
    img.setAttribute("width", "150")
    img.setAttribute("height", "150")
    img.src=src;
    el.appendChild(img);
    var title = document.createElement("div")
    title.classList.add("cardTitle")
    title.textContent=name
    el.appendChild(title)
    var pr = document.createElement("div")
    pr.classList.add("cardTitle1")
    pr.textContent=price
    el.appendChild(pr)
    a.appendChild(el)
    var btn = document.createElement("button")
    btn.onclick=()=>{addItem(name, price, src, selectedButton)
                     btn.textContent="Добавлено";
                     btn.classList.add("green");
    }
    console.log(sessionStorage)
    console.log(name+selectedButton)
    console.log(sessionStorage.getItem(name+selectedButton))
    console.log(sessionStorage.key(0))
    console.log(sessionStorage.getItem(sessionStorage.key(0)))
    if(sessionStorage.getItem(name+selectedButton)!=null){
        btn.textContent="Добавлено";
        btn.classList.add("green");
    }
    else {
        btn.textContent="В корзину"
        
    }
    btn.classList.add("cardButton");
    el.appendChild(btn)
    a.appendChild(el)
}
function selectButton(num){
    for(var i=1;i<=12;i++){
        document.querySelector(`[js=btn${i}]`).classList.remove("yellow");
    }
    document.querySelector(`[js=btn${num}]`).classList.add("yellow")
    selectedButton = document.querySelector(`[js=btn${num}]`).textContent
}

document.addEventListener("DOMContentLoaded", ()=>{
    generateCards();
    selectButton("1")
    // document.addEventListener('click', (e) => {
    //     console.log(e.target)
    // })
})

