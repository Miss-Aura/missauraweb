window.addEventListener("DOMContentLoaded", () => {
  // === Slideshow ===
  const images = [
    "herbal beauty powdern with product name_MISS AURA_2.jpg",
    "ayurvedic herbal powder .Product name_MISS AURA_.jpg",
    "web3.jpg"
  ];

  const slideContainer = document.querySelector(".slideshow");
  if (slideContainer) {
    images.forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Slideshow Image";
      if (i === 0) img.classList.add("active");
      slideContainer.appendChild(img);
    });

    const slides = slideContainer.querySelectorAll("img");
    let index = 0;
    setInterval(() => {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    }, 3000);
  }

  // === Form ===
  const orderForm = document.querySelector(".order-form");
  if (orderForm) {
    orderForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value.trim();
      const address = document.getElementById("address").value.trim();
      const mobile = document.getElementById("mobile").value.trim();

      if (!name || !address || !mobile) {
        alert("❗Please fill in all fields.");
        return;
      }

      alert(`✅ Thank you, ${name}!\nYour order has been placed.\n📦 Delivery to:\n🏠 ${address}\n📞 ${mobile}`);
      orderForm.reset();
    });
  }
});
