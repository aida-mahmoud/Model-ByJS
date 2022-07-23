var mod=Array.from(document.querySelectorAll(".mod")) ;
var model=Array.from(document.querySelectorAll(".model")) ;
var close =Array.from(document.querySelectorAll(".close"));
var mm=document.getElementById("m");
var save=Array.from( document.querySelectorAll(".save"));
var openmodel=0;
mod.forEach((m)=>{
    m.addEventListener("click",()=>{
       mm.style.display="block";
       model[mod.indexOf(m)].style.display="block";
       openmodel=mod.indexOf(m);
       document.getElementsByTagName("div")[0].style.opacity=.2;
    }) 
   
   
})
close.forEach((c)=>{
    c.addEventListener("click",()=>{
        document.getElementsByTagName("div")[0].style.opacity=1;
        model[openmodel].style.display="none";
        mm.style.display="none";
    })
})
mm.addEventListener("click",()=>{  
    document.getElementsByTagName("div")[0].style.opacity=1;
    model[openmodel].style.display="none";  
    {mm.style.display="none";}
} ) 
save.forEach((s)=>{
    s.addEventListener("click",()=>{
        var p =document.getElementsByTagName("p")[save.indexOf(s)].textContent;
        console.log(p);
        var txt= document.getElementById("txt");
       txt.innerHTML="<h2>"+p+"</h2>";
       // document.createElement("h2").textContent=p;
        console.log( txt);
     //   document.innerHTML="<h2>"+p+"</h2>";
    })
})