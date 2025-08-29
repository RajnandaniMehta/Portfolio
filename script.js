const sections = document.querySelectorAll("section"); 
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 70; // adjust for navbar height
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });


  const roles = [
  "Aspiring Software Developer",
  "Competitive Programmer",
  "Final Year Student"
];

let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;
const typingSpan = document.getElementById("typing");

function typeEffect() {
  currentRole = roles[roleIndex];

  if (!isDeleting) {
    // typing forward
    typingSpan.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      // full word typed → pause before deleting
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    // deleting
    typingSpan.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length; // next role
    }
  }

  const typingSpeed = isDeleting ? 50 : 120; // deleting faster
  setTimeout(typeEffect, typingSpeed);
}

typeEffect();



// Select the toggler button
const navbarToggler = document.querySelector('.navbar-toggler');

// Loop through each link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Check if navbar is open (Bootstrap adds 'show' class)
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // close the menu
    }
  });
});



document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1RB3CRSfNvaI_kUwUrblgmLOl6htIODmX/view?usp=drivesdk'; // path to your resume
    link.download = 'Rajnandani_Mehta_Resume.pdf'; // file name after download
    link.click();
  });