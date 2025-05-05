function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}
document.addEventListener("DOMContentLoaded", function () {
  // ------------------ Job Application Form ------------------ //
  const form = document.getElementById("jobApplicationForm");
  const successMessage = document.getElementById("successMessage");
  
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const fullName = document.getElementById("fullName").value;
  
      // Show alert first
      alert("Your submission was successful, thanks for applying, " + fullName + "!");
  
      // Reset form
      form.reset();
  
      // Then show success message
      successMessage.classList.remove("hidden");
    });
  }

  // ------------------ Booking Date Input ------------------ //
  const dateInput = document.getElementById("date");
  if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const minDate = `${yyyy}-${mm}-${dd}`;
    dateInput.min = minDate;

    const maxDateObj = new Date();
    maxDateObj.setMonth(maxDateObj.getMonth() + 3);
    const maxYYYY = maxDateObj.getFullYear();
    const maxMM = String(maxDateObj.getMonth() + 1).padStart(2, '0');
    const maxDD = String(maxDateObj.getDate()).padStart(2, '0');
    const maxDate = `${maxYYYY}-${maxMM}-${maxDD}`;
    dateInput.max = maxDate;
  }

  const bookingForm = document.getElementById("bookingForm");
const bookingSuccess = document.getElementById("successmessagebooking");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    alert("Thanks for booking, " + name + "! Your appointment has been submitted, we will get back to you shortly!");
    bookingForm.reset();
    bookingSuccess.classList.remove("hidden");
  });
}

  // ------------------ Service Cards + Search ------------------ //
  const services = [
    {
      title: "Men's Haircut",
      price: "$25",
      description: "Professional haircut tailored to your style.",
      image: "haircutting5.png"
    },
    {
      title: "Kids",
      price: "$20",
      description: "Stylish cuts for kids.",
      image: "kidscutting.jpg"
    },
    {
      title: "Pensioner's",
      price: "$20",
      description: "Affordable cuts for pensioners.",
      image: "pensionerscut.jpg"
    },
    {
      title: "High School",
      price: "$23",
      description: "Trendy styles for high school students.",
      image: "highschoolcut.jpg"
    },
    {
      title: "Beard's",
      price: "From $20",
      description: "Neat shape and trim beard service.",
      image: "101shaving.png"
    },
    {
      title: "Head Shave",
      price: "$25",
      description: "Clean and smooth head shave.",
      image: "hairshave.png"
    },
    {
      title: "Colour",
      price: "$30",
      description: "Hair coloring with premium products.",
      image: "colouring101.png"
    },
    {
      title: "Skin Fade",
      price: "$30",
      description: "Sharp and clean skin fade haircut.",
      image: "skinfade.jpg"
    },
    {
      title: "Flat Top",
      price: "$30",
      description: "Classic flat top style.",
      image: "flattop.jpg"
    },
    {
      title: "Crew Cut",
      price: "$20",
      description: "Simple and neat crew cut.",
      image: "crewcut.png"
    },
    {
      title: "Wash & Shampoo",
      price: "$10",
      description: "Refreshing wash and shampoo service.",
      image: "hairwash.png"
    },
    {
      title: "Facial",
      price: "$40",
      description: "Deep cleansing facial to refresh skin.",
      image: "facial3.png"
    },
    {
      title: "Haircut + Beard",
      price: "$40",
      description: "Haircut and beard grooming package.",
      image: "hairandbeard.jpg"
    },
    {
      title: "Haircut + Design (Booking Only)",
      price: "$35",
      description: "Designs tailored to each clients needs.",
      image: "hairdesign.png"
    },
    {
      title: "Waxxing (Booking Only)",
      price: "From $15",
      description: "Custom waxxing for a smooth look.",
      image: "101waxing.jpg"
    }
  ];

  const searchBar = document.getElementById("searchBar2");
  const servicesGrid = document.getElementById("servicesGrid2");
  const suggestionBox = document.getElementById("suggestions");

  function renderServices2(serviceList) {
    servicesGrid.innerHTML = '';

    if (serviceList.length === 0) {
      servicesGrid.innerHTML = '<p class="no-results2">No services found.</p>';
      return;
    }

    serviceList.forEach(service => {
      const card = document.createElement('div');
      card.className = 'service-card2';
      card.innerHTML = `
        <img src="${service.image}" alt="${service.title}" class="service-image2">
        <div class="service-info2">
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <div class="service-price2">${service.price}</div>
        </div>
      `;
      servicesGrid.appendChild(card);
    });
  }

  // Initial render
  renderServices2(services);

  // Search + Auto-suggestions
  searchBar.addEventListener("input", () => {
    const searchTerm = searchBar.value.toLowerCase();
    const filtered = services.filter(service =>
      service.title.toLowerCase().includes(searchTerm)
    );

    // Show suggestions
    suggestionBox.innerHTML = "";
    if (searchTerm.trim() === "") {
      suggestionBox.classList.add("hidden");
      renderServices2(services);
      return;
    }

    filtered.forEach(service => {
      const option = document.createElement("div");
      option.textContent = service.title;
      option.addEventListener("click", () => {
        searchBar.value = service.title;
        suggestionBox.classList.add("hidden");
        renderServices2([service]);
      });
      suggestionBox.appendChild(option);
    });

    if (filtered.length > 0) {
      suggestionBox.classList.remove("hidden");
    } else {
      suggestionBox.classList.add("hidden");
    }

    renderServices2(filtered);
  });

  // Hide suggestions on blur
  searchBar.addEventListener("blur", () => {
    setTimeout(() => {
      suggestionBox.classList.add("hidden");
    }, 200);
  });
});

// ------------------ Testimones carosuel -------------------- //
document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("testimonialSlide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }

  window.plusSlides = plusSlides;
  window.currentSlide = currentSlide;
});

// Gallery
function filterImages(event, category) {
  event.preventDefault(); 

  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

let currentVideoIndex = 0; // Track the current video index
const videos = document.querySelectorAll('.video-slide'); // Get all video elements

// Function to change the displayed video
function changeVideo(direction) {
  // Hide the current video
  videos[currentVideoIndex].style.display = 'none';
  
  // Update the current video index
  currentVideoIndex += direction;
  
  // If the index goes out of bounds, loop back around
  if (currentVideoIndex < 0) {
    currentVideoIndex = videos.length - 1; // Go to last video
  } else if (currentVideoIndex >= videos.length) {
    currentVideoIndex = 0; // Go to first video
  }
  
  // Show the new current video
  videos[currentVideoIndex].style.display = 'block';
}

// Initialize the slideshow by showing the first video
changeVideo(0);