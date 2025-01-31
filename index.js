let homeScore = document.getElementById("home-score") // used to add to display the home point
let guestScore = document.getElementById("guest-score") // used to add to display the guest point

let homePoint = 0
let guestPoint = 0

function home1Point(){
    homePoint= homePoint + 1 
    console.log(homePoint)
  homeScore.textContent=homePoint  
}

function home2Point(){
    homePoint= homePoint + 2 
    console.log(homePoint)
  homeScore.textContent=homePoint 
}

function home3Point(){
    homePoint= homePoint + 3 
    console.log(homePoint)
  homeScore.textContent=homePoint 
}


function guest1Point(){
    guestPoint= guestPoint + 1 
    console.log(guestPoint)
   guestScore.textContent=guestPoint   
}

function guest2Point(){
    guestPoint= guestPoint + 2 
    console.log(guestPoint)
   guestScore.textContent=guestPoint   
}

function guest3Point(){
    guestPoint= guestPoint + 3 
    console.log(guestPoint)
   guestScore.textContent=guestPoint   
}