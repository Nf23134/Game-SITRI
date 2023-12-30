function redirectTo(url) {
  window.location.href = url;
}

document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#typing", {
    strings: [""],
  }).go();
});

const toggleButton = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
const sections = document.querySelectorAll('.section');
const homeSection = document.getElementById('home');

// Menambahkan event listener pada setiap link navigasi untuk menampilkan bagian yang sesuai
const links = document.querySelectorAll('.menu a');
links.forEach(link => {
link.addEventListener('click', function(event) {
  event.preventDefault();
  const target = this.getAttribute('href').replace('#', '');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  if (target === 'home') {
    homeSection.style.display = 'block';
  } else {
    const selectedSection = document.getElementById(target);
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }
  }
});
});
});