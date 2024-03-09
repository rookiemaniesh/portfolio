{
    let a=document.getElementById("aboutbtn");
let b=document.getElementById("about");
a.addEventListener("click",func);
function func(){
    console.log("clicked");
    b.scrollIntoView({behavior:"smooth"});
}
}
{
    let c=document.getElementById("skillsbtn");
    let d=document.getElementById("skills");
    c.addEventListener("click",func);
    function func(){
        console.log("clicked");
        d.scrollIntoView({behavior:"smooth"});
    }  
}
{
    let e=document.getElementById("educationbtn");
    let f=document.getElementById("education");
    e.addEventListener("click",func);
    function func(){
        console.log("clicked");
        f.scrollIntoView({behavior:"smooth"});
    }  
}
{
    let g=document.getElementById("contactusbtn");
    let h=document.getElementById("manish2");
    g.addEventListener("click",func);
    function func(){
        console.log("clicked");
        h.scrollIntoView({behavior:"smooth"});
    }  
}