var coln=document.querySelector("p")
var col=document.getElementById("color")
var back=document.querySelector("body")

col.addEventListener('click',()=>{
    n=random()
    back.style.backgroundColor=n
    coln.innerHTML=n

})

var random=()=>{
    var li=["RED","GREEN","BLUE","PINK","YELLOW","BROWN"]
    for(i=0; i<li.length;li++){
        col=li[Math.floor(Math.random()*li.length)]
    }
    return col
}









