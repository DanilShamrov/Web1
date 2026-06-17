var activeCards=0;
document.addEventListener("DOMContentLoaded", ()=>{
    console.log(sessionStorage)
    let values = Object.values(sessionStorage)
    values.forEach((el)=>{
        var item=JSON.parse(el)
        console.log(item)
        createCard(item.name, item.price, item.img, item.model)
        activeCards++;
    })
    if (activeCards==0){document.querySelector("[js=empty]").style.display="flex"}
    else {document.querySelector("[js=empty]").style.display="none"}
})

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        var part = event.target.parentElement.getElementsByClassName("cardTitle")[0].textContent
        var model = event.target.parentElement.getElementsByClassName("cardTitle")[1].textContent
        sessionStorage.removeItem(part+model)
        event.target.parentElement.remove();
        activeCards--;
    }
    if (activeCards==0){document.querySelector("[js=empty]").style.display="flex"}
    else {document.querySelector("[js=empty]").style.display="none"}
});

function createCard(name, price, src, model){
    var a=document.querySelector("[js=cart]")
    var el=document.createElement("div")
    el.classList.add("card")
    var img = document.createElement("img")
    img.setAttribute("width", "150")
    img.setAttribute("height", "150")
    img.src=src
    el.appendChild(img);
    var title = document.createElement("div")
    title.classList.add("cardTitle")
    title.textContent=name
    el.appendChild(title)
    var m = document.createElement("div")
    m.classList.add("cardTitle")
    m.textContent=model
    el.appendChild(m)
    a.appendChild(el)
    var pr = document.createElement("div")
    pr.classList.add("cardTitle")
    pr.textContent=price
    el.appendChild(pr)
    a.appendChild(el)
    var btn = document.createElement("button")
    btn.classList.add("delete")
    btn.textContent="Удалить"
    btn.classList.add("cardButton");
    el.appendChild(btn)
    a.appendChild(el)
}