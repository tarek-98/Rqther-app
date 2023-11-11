//random background option
let backgroundOption = true;
//change background img
let landingPage = document.querySelector(".landing");
let imgArray = ["img01.jpg", "img02.jpg", "img03.jpg"];

let landText = document.querySelector(".landing .box h1");
let textArray = ["Mobile App Development", "Experienced Team", "Award-Winning Software"];

let landPar = document.querySelector(".landing .box p");
let parArray = ["Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate purposes of worldwide businesses."
,"We are a team of qualified software developers, aimed at creating unique and powerful tools for your business & everyday life."
, "The software solutions developed by our company have been numerously awarded for usability and innovative features."];

// function to randomize imgs
function randomizeImg()
{
    if(backgroundOption === true)
    {
        backgroundInterval = setInterval(()=>{
        //get random num
        let randNum = Math.floor(Math.random() * imgArray.length);
        //change background img
        landingPage.style.transition = "1s"
        landingPage.style.backgroundImage = `url(../img/` + imgArray[randNum] +`)`;

        //change text 
        landText.style.transition = "1s"
        landText.innerHTML = textArray[randNum];

        //change text 
        landPar.style.transition = "1s"
        landPar.innerHTML = parArray[randNum];

        },4000)
    }
}
randomizeImg();

/*Projects*/
let all = document.querySelector(".project .all")
let mobile = document.querySelector(".project .mobile-app")
let cuSoft = document.querySelector(".project .cu-soft")
let qaTest = document.querySelector(".project .qa-test")
let uxDesign = document.querySelector(".project .ux-design")
//type
let app = document.querySelectorAll(".project .app")
let soft = document.querySelectorAll(".project .soft")
let qa = document.querySelectorAll(".project .qa")
let ux = document.querySelector(".project .ux")
//fun
all.onclick = function()
{
    all.classList.add("active")
    app.forEach(span => {
        span.classList.remove("disabled")
    })
    soft.forEach(span => {
        span.classList.remove("disabled")
    })
    qa.forEach(span => {
        span.classList.remove("disabled")
    })
    ux.classList.remove("disabled")
    mobile.classList.remove("active");
    cuSoft.classList.remove("active");
    qaTest.classList.remove("active");
    uxDesign.classList.remove("active");
}
mobile.onclick = function()
{
    mobile.classList.add("active")
    app.forEach(span => {
        span.classList.remove("disabled")
    })
    soft.forEach(span => {
        span.classList.add("disabled")
    })
    qa.forEach(span => {
        span.classList.add("disabled")
    })
    ux.classList.add("disabled")
    all.classList.remove("active");
    cuSoft.classList.remove("active");
    qaTest.classList.remove("active");
    uxDesign.classList.remove("active");
}
cuSoft.onclick = function()
{
    cuSoft.classList.add("active")
    app.forEach(span => {
        span.classList.add("disabled")
    })
    soft.forEach(span => {
        span.classList.remove("disabled")
    })
    qa.forEach(span => {
        span.classList.add("disabled")
    })
    ux.classList.add("disabled")
    mobile.classList.remove("active");
    all.classList.remove("active");
    qaTest.classList.remove("active");
    uxDesign.classList.remove("active");
}
qaTest.onclick = function()
{
    qaTest.classList.add("active")
    app.forEach(span => {
        span.classList.add("disabled")
    })
    soft.forEach(span => {
        span.classList.add("disabled")
    })
    qa.forEach(span => {
        span.classList.remove("disabled")
    })
    ux.classList.add("disabled")
    mobile.classList.remove("active");
    cuSoft.classList.remove("active");
    all.classList.remove("active");
    uxDesign.classList.remove("active");
}
uxDesign.onclick = function()
{
    uxDesign.classList.add("active")
    app.forEach(span => {
        span.classList.add("disabled")
    })
    soft.forEach(span => {
        span.classList.add("disabled")
    })
    qa.forEach(span => {
        span.classList.add("disabled")
    })
    ux.classList.remove("disabled")
    mobile.classList.remove("active");
    cuSoft.classList.remove("active");
    qaTest.classList.remove("active");
    all.classList.remove("active");
}

/*count num */
let started = false;
let counter = document.querySelector(".experience");
let nums = document.querySelectorAll(".experience .num")
//up
let up = document.querySelector(".up")

window.onscroll = function (){
    if(window.scrollY >= counter.offsetTop - 300)
    {
        if(!started)
        {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
    //up
    if(this.scrollY >= 700)
  {
    up.classList.add("show")
  }
  else
  {
    up.classList.remove("show")
  }
}

function startCount(el)
{
    let goal = el.dataset.goal;
    let count = setInterval(()=>{
        el.textContent++;
        if(el.textContent == goal)
        {
            clearInterval(count)
        }
    },1000/goal)
}
up.onclick = function()
{
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

//discover
let tab = document.querySelectorAll(".discover .title span");
let tabArray = Array.from(tab);
let content = document.querySelectorAll(".discover .info div");
let contentArray = Array.from(content);

tabArray.forEach((ele) => {
  ele.addEventListener("click", function(e){
    
    tabArray.forEach((ele) => {
      ele.classList.remove("active")
      this.classList.add("active")
    });

    contentArray.forEach((cont) => {
      cont.style.display = "none";
    });

    document.querySelector(e.currentTarget.dataset.info).style.display = "block"
  })
})

// get slider items
let sliderTest = document.querySelector('.discover .box .seconed-image');

let prev = document.getElementById("prev")
let next = document.getElementById("next")

next.onclick = function()
{
  sliderTest.classList.add("active");
  next.classList.add("disabled")
  prev.classList.remove("disabled")
}
prev.onclick = function()
{
  sliderTest.classList.remove("active")
  prev.classList.add("disabled")
  next.classList.remove("disabled")
}