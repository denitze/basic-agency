

function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }


let award1 = document.getElementById("award1")
let img1 = document.getElementById("award-pic1")
let award2 = document.getElementById("award2")
let img2 = document.getElementById("award-pic2")
let award3 = document.getElementById("award3")
let img3 = document.getElementById("award-pic3")
let award4 = document.getElementById("award4")
let img4 = document.getElementById("award-pic4")
let award5 = document.getElementById("award5")
let img5 = document.getElementById("award-pic5")
let award6 = document.getElementById("award6")
let img6 = document.getElementById("award-pic6")

function show1() {
    console.log("Working");
    img1.style.display = "block"
}

function hide1() {
    console.log("Working");
    img1.style.display = "none"
}
function show2() {
    console.log("Working");
    img2.style.display = "block"
}

function hide2() {
    console.log("Working");
    img2.style.display = "none"
}
function show3() {
    console.log("Working");
    img3.style.display = "block"
}

function hide3() {
    console.log("Working");
    img3.style.display = "none"
}
function show4() {
    console.log("Working");
    img4.style.display = "block"
}

function hide4() {
    console.log("Working");
    img4.style.display = "none"
}
function show5() {
    console.log("Working");
    img5.style.display = "block"
}

function hide5() {
    console.log("Working");
    img5.style.display = "none"
}
function show6() {
    console.log("Working");
    img6.style.display = "block"
}

function hide6() {
    console.log("Working");
    img6.style.display = "none"
}

award1.addEventListener("mouseover", show1)
award1.addEventListener("mouseout", hide1)
award2.addEventListener("mouseover", show2)
award2.addEventListener("mouseout", hide2)
award3.addEventListener("mouseover", show3)
award3.addEventListener("mouseout", hide3)
award4.addEventListener("mouseover", show4)
award4.addEventListener("mouseout", hide4)
award5.addEventListener("mouseover", show5)
award5.addEventListener("mouseout", hide5)
award6.addEventListener("mouseover", show6)
award6.addEventListener("mouseout", hide6)
