let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    if (menu.classList.contains('fa-bars')) {
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-xmark');
    } else {
        menu.classList.remove('fa-xmark');
        menu.classList.add('fa-bars');
    }

    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.add('fa-bars');
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
const typed = new Typed('.multiple-text',  {
    strings: ['Frontend Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
 });

  const slider = document.getElementById('cardSlider');
  const scrollAmount = 320; // width + gap

  // Scroll on button click
  function scrollSlider(direction) {
    slider.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }

  // Auto scroll every 3 seconds
  let autoScroll = setInterval(() => {
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
      // If at end, scroll back to start
      slider.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }, 2000);

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent default form submit

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully!");
          form.reset(); // ✅ clear the form fields
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch((error) => {
        alert("There was a problem sending the message.");
        console.error(error);
      });
  });