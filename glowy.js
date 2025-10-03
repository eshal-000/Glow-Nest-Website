    const skinTone = document.getElementById('skinTone');
    const skinTypeSection = document.getElementById('skinTypeSection');
    const skinType = document.getElementById('skinType');
    const problemSection = document.getElementById('problemSection');
    const problem = document.getElementById('problem');
    const productsDiv = document.getElementById('products');

    const problemProducts = {
      acne: [
        {name: "GlowNest Acne Cream", desc: "Targets pimples & reduces redness.", price: 1200, img: "https://via.placeholder.com/250x150?text=Acne+Cream"},
        {name: "Hydrating Cleanser", desc: "Gentle cleanser for acne-prone skin.", price: 900, img: "https://via.placeholder.com/250x150?text=Cleanser"},
        {name: "Spot Treatment Gel", desc: "Fast relief for acne spots.", price: 1500, img: "https://via.placeholder.com/250x150?text=Spot+Gel"},
        {name: "Acne Face Wash", desc: "Removes excess oil & impurities.", price: 1000, img: "https://via.placeholder.com/250x150?text=Face+Wash"}
      ],
      antiaging: [
        {name: "Anti-Aging Serum", desc: "Reduces fine lines & wrinkles.", price: 2500, img: "https://via.placeholder.com/250x150?text=Serum"},
        {name: "Retinol Cream", desc: "Boosts collagen for smoother skin.", price: 2200, img: "https://via.placeholder.com/250x150?text=Retinol"},
        {name: "Eye Care Gel", desc: "Targets under-eye wrinkles.", price: 1800, img: "https://via.placeholder.com/250x150?text=Eye+Gel"},
        {name: "Firming Night Cream", desc: "Restores elasticity overnight.", price: 2700, img: "https://via.placeholder.com/250x150?text=Night+Cream"}
      ],
      brightening: [
        {name: "Brightening Cream", desc: "Fades dullness & evens tone.", price: 2000, img: "https://via.placeholder.com/250x150?text=Brightening"},
        {name: "Vitamin C Serum", desc: "Powerful antioxidant for glowing skin.", price: 2700, img: "https://via.placeholder.com/250x150?text=Vit+C"},
        {name: "Exfoliating Scrub", desc: "Removes dead skin cells.", price: 1200, img: "https://via.placeholder.com/250x150?text=Scrub"}
      ],
      pores: [
        {name: "Pore Minimizer Serum", desc: "Reduces enlarged pores.", price: 1900, img: "https://via.placeholder.com/250x150?text=Pore+Serum"},
        {name: "Clay Mask", desc: "Deep cleanses & tightens pores.", price: 1400, img: "https://via.placeholder.com/250x150?text=Clay+Mask"},
        {name: "Balancing Toner", desc: "Shrinks pores & balances skin.", price: 1100, img: "https://via.placeholder.com/250x150?text=Toner"}
      ],
      hydration: [
        {name: "Hydra Moist Cream", desc: "Deep hydration for dry skin.", price: 1500, img: "https://via.placeholder.com/250x150?text=Moist+Cream"},
        {name: "Aloe Vera Gel", desc: "Soothes & hydrates instantly.", price: 800, img: "https://via.placeholder.com/250x150?text=Aloe+Gel"},
        {name: "Nourishing Oil", desc: "Rich oils for extra moisture.", price: 1700, img: "https://via.placeholder.com/250x150?text=Oil"},
        {name: "Hydrating Mist", desc: "Refreshes & locks in moisture.", price: 1200, img: "https://via.placeholder.com/250x150?text=Mist"}
      ],
      hyperpigmentation: [
        {name: "Pigment Corrector Serum", desc: "Targets uneven pigmentation.", price: 2600, img: "https://via.placeholder.com/250x150?text=Pigment+Serum"},
        {name: "Niacinamide Cream", desc: "Lightens spots & smooths skin.", price: 2000, img: "https://via.placeholder.com/250x150?text=Niacinamide"},
        {name: "Peeling Solution", desc: "Exfoliates to reduce pigmentation.", price: 2300, img: "https://via.placeholder.com/250x150?text=Peeling"}
      ],
      darkcircles: [
        {name: "Under-Eye Cream", desc: "Reduces dark circles & puffiness.", price: 1800, img: "https://via.placeholder.com/250x150?text=Eye+Cream"},
        {name: "Cooling Eye Gel", desc: "Soothes & refreshes under eyes.", price: 1500, img: "https://via.placeholder.com/250x150?text=Cooling+Gel"},
        {name: "Caffeine Serum", desc: "Brightens under-eye area.", price: 2100, img: "https://via.placeholder.com/250x150?text=Caffeine+Serum"},
        {name: "Eye Repair Mask", desc: "Hydrating mask for tired eyes.", price: 1600, img: "https://via.placeholder.com/250x150?text=Eye+Mask"}
      ]
    };

    skinTone.addEventListener('change', () => {
      if (skinTone.value) {
        skinTypeSection.style.display = 'block';
        gsap.from(skinTypeSection, {opacity:0, y:30, duration:0.5});
      } else {
        skinTypeSection.style.display = 'none';
        problemSection.style.display = 'none';
        productsDiv.innerHTML = '';
      }
    });

    skinType.addEventListener('change', () => {
      if (skinType.value) {
        problemSection.style.display = 'block';
        gsap.from(problemSection, {opacity:0, y:30, duration:0.5});
      } else {
        problemSection.style.display = 'none';
        productsDiv.innerHTML = '';
      }
    });

    problem.addEventListener('change', () => {
      productsDiv.innerHTML = '';
      if (problem.value) {
        const selectedProducts = problemProducts[problem.value] || [];
        selectedProducts.forEach(prod => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `
            <img src="${prod.img}" alt="${prod.name}">
            <h3>${prod.name}</h3>
            <p>${prod.desc}</p>
            <p><strong>Price:</strong> Rs. ${prod.price}</p>
            <label>Qty:</label> 
            <input type="number" value="1" min="1" class="quantity">
            <button onclick="addToCart(this, '${prod.name}', ${prod.price})">Add to Cart</button>

            <div class="inside-cart-card">
              <h4>${prod.name}</h4>
              <p>Price: Rs. ${prod.price}</p>
              <p>This product has been added to your cart.</p>
              <button class="close-btn" onclick="closeCartCard(this)">Close</button>
            </div>
          `;
          productsDiv.appendChild(card);
          gsap.from(card, {opacity:0, scale:0.8, duration:0.6});
        });
      }
    });

    function addToCart(btn, name, price) {
      const insideCard = btn.parentElement.querySelector('.inside-cart-card');
      insideCard.style.display = 'block';
      gsap.fromTo(insideCard, {opacity:0, y:-20}, {opacity:1, y:0, duration:0.4});
    }

    function closeCartCard(btn) {
      const insideCard = btn.parentElement;
      gsap.to(insideCard, {
        opacity:0, y:-20, duration:0.3,
        onComplete: () => insideCard.style.display = 'none'
      });
    }
  const ctx = document.getElementById('appointmentChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [{
        label: 'Appointments',
        data: [5, 8, 6, 9, 7],
        backgroundColor: '#ff914d'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      }
    }
  });