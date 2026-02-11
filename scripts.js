const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#topnavi ul li a');

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionId = section.getAttribute('id');

    // Check if the section's top reaches the bottom of the viewport
    if (sectionTop <= window.innerHeight && sectionTop + section.offsetHeight > window.innerHeight) {
      currentSection = sectionId;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(currentSection)) {
      link.classList.add('active');
    }
  });
});

