


gsap.from(".hero-content h1", {
  opacity: 0,
  y: -50,
  duration: 1
});

gsap.from(".hero-content p", {
  opacity: 0,
  y: 50,
  delay: 0.5,
  duration: 1
});

gsap.from(".hero-buttons ", {
   opacity: 0,
  y: 50,
  delay: 0.5,
  duration: 1
});


gsap.from(".hero-image img", {
  opacity: 0,
  x: 100,
  duration: 1.5,
  delay: 0.8
});
gsap.registerPlugin(ScrollTrigger);

gsap.from(".products-container", {
  opacity: 0,
  y: 100,
  duration: 1.2,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".product-card",
    start: "top 80%",  
    toggleActions: "play none none none"
  }
});
gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray(".hair-products .product-card").forEach((card) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power2.out"
  });
});
gsap.registerPlugin(ScrollTrigger);

gsap.from(".third-section h1,.third-section p", {
  opacity: 0,
  x: -100,
  duration: 1.2,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".third-section h1,.third-section p",
    start: "top 80%",  
    toggleActions: "play none none none"
  }
});
gsap.registerPlugin(ScrollTrigger);

  gsap.from(".third-section img", {
    scrollTrigger: {
      trigger: ".third-section img",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    scale: 0.7,
   
    duration: 1.5,
    ease: "power3.out"
  });
gsap.from(".forth-section .text", {
  opacity: 0,
  x: 100,
  duration: 1.2,
  stagger: 0.2,
 
  scrollTrigger: {
    trigger: ".forth-section .text",
    start: "top 80%",  
    toggleActions: "play none none none"
  }
});
gsap.registerPlugin(ScrollTrigger);

  gsap.from(".forth-section img", {
    scrollTrigger: {
      trigger: ".forth-section img",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    scale: 0.7,
   
    duration: 1.5,
    ease: "power3.out"
  });

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