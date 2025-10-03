

gsap.registerPlugin(ScrollTrigger);

  gsap.from(".main h1", {
    opacity: 0,
    y: -50,
    
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".main h1",
      start: "top 80%"
    }
  });

  gsap.from(".main p", {
   y: -50,
    duration: 1.5,
    
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".main h1",
      start: "top 80%"
    }
  });

  

  gsap.from(".main img", {
    opacity: 0,
    scale: 0.8,
    duration: 1.2,
    delay: 0.6,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".main img",
      start: "top 80%"
    }
  });

gsap.registerPlugin(ScrollTrigger); 

gsap.from(".product-grid", {
  y: -50,
  opacity: 0,
 
  duration: 1.5,
  
 stagger: 0.3,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".product-grid",
    start: "top 60%",

    toggleActions: "play none none none"
  }
});



// function show() {
//   const showcard = document.getElementById("show-card");
//   showcard.innerHTML = `
//     <h3>Knight Charcol Powder</h3>
//     <p>This product has been added to your cart</p>
//     <button class="btn" onclick="closeCard()">Close</button>
//   `;
//   showcard.style.display = "block";
// }

// function closeCard() {
//   document.getElementById("show-card").style.display = "none";
// }
gsap.registerPlugin(ScrollTrigger);

  gsap.from(".values-grid", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".core-values",
      start: "top 80%",
    }
  });
function cart(){
  const popup = document.getElementById("popup-card");
  popup.innerHTML = `
    <h3>Choco Body Waxing kit</h3>
    <p>This product has been added to your cart</p>
    <button class="btn" onclick="closeCard()">Close</button>
  `;
  popup.style.display = "block";
}

function closeCard(){
  document.getElementById("popup-card").style.display = "none";
}

function on(){
  const cardON = document.getElementById("card-on");
  cardON.innerHTML = `
    <h3>Charcol Powder</h3>
    <p>This product has been added to your cart</p>
    <button class="btn" onclick="offCard()">Close</button>
  `;
  cardON.style.display = "block";
}

function offCard(){
  document.getElementById("card-on").style.display = "none";
}

function mycard(){
  let third=document.getElementById("third-card");
  third.innerHTML=`
   <h3>Silk Hair Oil</h3>
    <p>This product has been added to your cart</p>
    <button class="btn" onclick="delet()">Close</button>
  `
  third.style.display="block";
}
function delet(){
  document.getElementById("third-card").style.display = "none";
}
function forth(){
  let forthcard=document.getElementById("forth-card")
  forthcard.innerHTML=`
  <h3>Glay Mask</h3>
    <p>This product has been added to your cart</p>
    <button class="btn" onclick="update()">Close</button>
  
  `
  forthcard.style.display="block";

}
function update(){
  document.getElementById("forth-card").style.display="none";
}


function forth(){
  let forthcard=document.getElementById("forth-card")
  forthcard.innerHTML=`
  <h3>Glay Mask</h3>
    <p>This product has been added to your cart</p>
    <button class="btn" onclick="update()">Close</button>
  
  `
  forthcard.style.display="block";

}
function update(){
  document.getElementById("forth-card").style.display="none";
}
const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      let query = searchInput.value.toLowerCase().trim();

      
      if (query.includes("sunblock")) {
        window.location.href = "sunblock.html";
      } else if (query.includes("serum")) {
        window.location.href = "serum.html";
      } else if (query.includes("toner")) {
        window.location.href = "toner.html";
      } else if (query.includes("facewash")) {
        window.location.href = "facewash.html";
      }
      else if (query.includes("deal")) {
        window.location.href = "deal.html";
      }
      else if (query.includes("bundles")) {
        window.location.href = "bundles.html";
      }
      else if (query.includes("home")) {
        window.location.href = "home.html";
      }
      else if (query.includes("about")) {
        window.location.href = "about.html";
      }
      else {
        alert("Product not found! 🙁");
      }
    }
  });