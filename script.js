const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

// MOUSEMOVE 
function mousefun(xscale, yscale) {
    
    window.addEventListener("mousemove", (dets)=>{
        document.querySelector("#circle").style.left= dets.x + 20 +  "px"
        document.querySelector("#circle").style.top= dets.y + 20 + "px"
        document.querySelector("#circle").style.transform= `scale(${xscale} , ${yscale})`
    })
}
mousefun()

// MOUSE MOVE SKEW
var xscale = 1;
var yscale = 1;
var xpvalue = 0;
var ypvalue = 0;
window.addEventListener("mousemove", (dets)=>{
    // clearTimeout(timeout);
    xdeff = dets.clientX - xpvalue;
    ydeff = dets.clientY - ypvalue;
    xscale = gsap.utils.clamp(.8, 1.2, xdeff);
    yscale = gsap.utils.clamp(.8 , 1.2 , ydeff);
    xpvalue = dets.clientX
    ypvalue = dets.clientY
    mousefun(xscale , yscale);
//      var timeout = setTimeout(() => {
        
//         document.querySelector("#circle").style.transform= `scale(1,1)`
//         console.log("ammar")
//    }, 10000);
})



// IMAGE MOVE/

element = document.querySelectorAll(".elem")

var difrot = 0
var rotate = 0 
element.forEach(elem => {
    elem.addEventListener('mousemove',(details)=>{
        difrot = details.clientX - rotate;
        rotate= details.clientX;
         
        differ = details.clientY - elem.getBoundingClientRect().top;
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            y : differ ,
            ease: Power3,
            x: details.clientX + -180,
            rotate : gsap.utils.clamp(-28, 29, difrot),
        })
    })

    elem.addEventListener("mouseleave",(dets)=>{
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease: Power3,
        })
    })
});


// HAMBURGMENU

var btn = document.querySelector("#nav h4")
var menu = document.querySelector("#nav .div")
var nav = document.querySelector("#nav")
console.log(btn)
console.log(menu)

btn.addEventListener("click",()=>{
    gsap.to("#nav .div a",{
        y:100,
        stagger:0.1,
    })
})

nav.addEventListener("mouseleave",()=>{
    gsap.to("#nav .div a",{
        y:-103,
        stagger:0.1,
        duration:1.2,
    })
})

gsap.to("#heading h1 , #heading h5, #smallheading h5",{
    y :0,
    
})
gsap.from("#nav",{
    y :-30,
    opacity:0,
    duration:1,  
    ease:Expo,
})

gsap.from("#page1footer",{
    y :20,
    opacity:0,
    duration:1,  
    stagger:0.3,
    delay:2,
    ease:Expo,
})