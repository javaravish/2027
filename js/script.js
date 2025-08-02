// DOM Elements
const themeToggle = document.getElementById("themeSwitcher");
const headerBtn = document.getElementById("headerMenuToggle");
const headerMenu = document.getElementById("headerMenu");
const sidebarBtn = document.getElementById("sidebarMenuToggle");
const sidebarMenu = document.getElementById("sidebarMenu");
const backToTop = document.getElementById("backToTop");
const scrollToBottomBtn = document.createElement('button');
scrollToBottomBtn.id = 'scrollToBottom';
scrollToBottomBtn.title = 'Go to bottom';
scrollToBottomBtn.innerHTML = '⮟';
document.body.appendChild(scrollToBottomBtn);

// Theme Toggle
if (themeToggle) {
  const logoSection = document.querySelector('.logo-section');
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.checked = true;
  }

  themeToggle.addEventListener("change", () => {
    logoSection.classList.add('theme-change-animation');
    setTimeout(() => {
      document.body.classList.toggle("dark-theme", themeToggle.checked);
      localStorage.setItem("theme", themeToggle.checked ? "dark" : "light");
      setTimeout(() => logoSection.classList.remove('theme-change-animation'), 1950);
    }, 50);
  });
}

// Menu Toggle Functions
const toggleMenu = (menu, btn, activeClass = 'active') => {
  const isActive = menu.classList.contains(activeClass);
  menu.classList.toggle(activeClass);
  btn.textContent = isActive ? "☰" : "✖";

  if (menu === headerMenu) {
    const menuItems = document.querySelectorAll('#headerMenu a');
    const transformValue = isActive ? 'translateY(-20px)' : 'translateY(0)';
    const opacityValue = isActive ? '0' : '1';

    setTimeout(() => {
      menuItems.forEach((item, index) => {
        if (!isActive) item.style.transitionDelay = `${index * 0.05}s`;
        item.style.opacity = opacityValue;
        item.style.transform = transformValue;
      });
    }, isActive ? 400 : 0);
  }
};

// Event Listeners
headerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu(headerMenu, headerBtn);
  void headerMenu.offsetWidth; // Force reflow
});

sidebarBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu(sidebarMenu, sidebarBtn);
});

document.addEventListener("click", (e) => {
  if (!headerMenu.contains(e.target) && e.target !== headerBtn) {
    headerMenu.classList.remove("active");
    headerBtn.textContent = "☰";
  }
  if (!sidebarMenu.contains(e.target) && e.target !== sidebarBtn) {
    sidebarMenu.classList.remove("active");
    sidebarBtn.textContent = "☰";
  }
});

// Scroll Handlers
const handleScrollButtons = () => {
  const show = window.scrollY > 200 ? ['flex', '1', 'translateY(0)'] : ['none', '0', 'translateY(20px)'];
  backToTop.style.display = show[0];
  backToTop.style.opacity = show[1];
  backToTop.style.transform = show[2];

  const showBottom = (window.innerHeight + window.scrollY) < document.body.offsetHeight - 100
    ? ['flex', '1', 'translateY(0)'] : ['none', '0', 'translateY(20px)'];
  scrollToBottomBtn.style.display = showBottom[0];
  scrollToBottomBtn.style.opacity = showBottom[1];
  scrollToBottomBtn.style.transform = showBottom[2];

  if (window.innerWidth <= 768 && headerMenu.classList.contains("active")) {
    headerMenu.classList.remove("active");
    headerBtn.textContent = "☰";
  }
};

window.addEventListener('scroll', handleScrollButtons);
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
scrollToBottomBtn.addEventListener('click', () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));

// Initial Animations
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const footer = document.getElementById('footer');
  container.style.opacity = footer.style.opacity = '0';

  setTimeout(() => {
    container.style.transition = footer.style.transition = 'opacity 0.8s ease';
    container.style.opacity = footer.style.opacity = '1';
  }, 800);

  if (window.innerWidth > 768) {
    document.querySelectorAll('nav a').forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(-20px)';
      item.style.transition = `all 0.5s ease ${index * 0.1}s`;

      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
        item.addEventListener('mouseenter', () => item.style.transform = 'scale(1.1) translateY(-5px)');
        item.addEventListener('mouseleave', () => item.style.transform = 'scale(1) translateY(0)');
      }, 500);
    });
  }

  if (window.innerWidth <= 768) {
    const logo = document.querySelector('.logo-section');
    logo.classList.add('scroll-bounce');
    setTimeout(() => logo.classList.remove('scroll-bounce'), 6000);
  }
});