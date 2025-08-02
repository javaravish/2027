// Theme Toggle
const themeToggle = document.getElementById("themeSwitcher");

if (themeToggle) {
  const logoSection = document.querySelector('.logo-section');
  const logoImg = document.querySelector('.center-img');
  const brandName = document.querySelector('.brand-name');

  // On Load: Apply stored theme & check toggle
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.checked = true;
  }

  // On Toggle: Switch theme and update storage
  themeToggle.addEventListener("change", () => {
    const isDark = themeToggle.checked;

    // Add animation class
    logoSection.classList.add('theme-change-animation');

    // Toggle theme after a slight delay for animation
    setTimeout(() => {
      document.body.classList.toggle("dark-theme", isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }, 50);

    // Remove animation class after animation completes
    setTimeout(() => {
      logoSection.classList.remove('theme-change-animation');
    }, 2000);
  });
}

// Enhanced Header Menu Toggle for Mobile
const headerBtn = document.getElementById("headerMenuToggle");
const headerMenu = document.getElementById("headerMenu");

headerBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  if (headerMenu.classList.contains("active")) {
    // Closing menu
    headerMenu.classList.remove("active");
    headerBtn.textContent = "☰";
    // Reset animations for when menu reopens
    setTimeout(() => {
      const menuItems = document.querySelectorAll('#headerMenu a');
      menuItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(20px)';
      });
    }, 400);
  } else {
    // Opening menu
    headerMenu.classList.add("active");
    headerBtn.textContent = "✖";

    // Force reflow to ensure animations trigger
    void headerMenu.offsetWidth;

    // Animate menu items sequentially
    const menuItems = document.querySelectorAll('#headerMenu a');
    menuItems.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.05}s`;
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
    });
  }
});

// Enhanced Sidebar Menu Toggle
const sidebarBtn = document.getElementById("sidebarMenuToggle");
const sidebarMenu = document.getElementById("sidebarMenu");

sidebarBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  sidebarMenu.classList.toggle("active");
  sidebarBtn.textContent = sidebarMenu.classList.contains("active") ? "✖" : "☰";
});

// Close Menus on Outside Click
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

// Close menu when scrolling on mobile
window.addEventListener('scroll', () => {
  if (window.innerWidth <= 768 && headerMenu.classList.contains("active")) {
    headerMenu.classList.remove("active");
    headerBtn.textContent = "☰";
  }
});

// Back to Top with animation
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.style.display = "flex";
    backToTop.style.opacity = "1";
    backToTop.style.transform = "translateY(0)";
    backToTop.style.animation = "fadeIn 0.3s ease-out";
  } else {
    backToTop.style.animation = "fadeOut 0.3s ease-out";
    backToTop.style.opacity = "0";
    backToTop.style.transform = "translateY(20px)";
    setTimeout(() => {
      backToTop.style.display = "none";
    }, 300);
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Delay content display until header animation completes
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const footer = document.getElementById('footer');

  // Initially hide content and footer
  container.style.opacity = '0';
  footer.style.opacity = '0';

  // Show them after header animation completes
  setTimeout(() => {
    container.style.transition = 'opacity 0.8s ease';
    footer.style.transition = 'opacity 0.8s ease';
    container.style.opacity = '1';
    footer.style.opacity = '1';
  }, 800);
});
// Add this to your existing JavaScript

// Scroll to Bottom Button
const scrollToBottomBtn = document.createElement('button');
scrollToBottomBtn.id = 'scrollToBottom';
scrollToBottomBtn.title = 'Go to bottom';
scrollToBottomBtn.innerHTML = '⮟';
document.body.appendChild(scrollToBottomBtn);

// Show/hide scroll buttons
window.addEventListener('scroll', () => {
  const backToTop = document.getElementById('backToTop');
  const scrollToBottom = document.getElementById('scrollToBottom');

  // Show back to top when scrolled down
  if (window.scrollY > 200) {
    backToTop.style.display = 'flex';
    backToTop.style.opacity = '1';
    backToTop.style.transform = 'translateY(0)';
  } else {
    backToTop.style.opacity = '0';
    backToTop.style.transform = 'translateY(20px)';
    setTimeout(() => {
      backToTop.style.display = 'none';
    }, 300);
  }

  // Show scroll to bottom when not at bottom
  if ((window.innerHeight + window.scrollY) < document.body.offsetHeight - 100) {
    scrollToBottom.style.display = 'flex';
    scrollToBottom.style.opacity = '1';
    scrollToBottom.style.transform = 'translateY(0)';
  } else {
    scrollToBottom.style.opacity = '0';
    scrollToBottom.style.transform = 'translateY(20px)';
    setTimeout(() => {
      scrollToBottom.style.display = 'none';
    }, 300);
  }
});

// Scroll to bottom functionality
document.getElementById('scrollToBottom').addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});

// Enhanced header item animations on desktop
if (window.innerWidth > 768) {
  const navItems = document.querySelectorAll('nav a');

  navItems.forEach((item, index) => {
    // Initial animation on load
    item.style.opacity = '0';
    item.style.transform = 'translateY(-20px)';
    item.style.transition = `all 0.5s ease ${index * 0.1}s`;

    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, 500);

    // Hover animation
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.1) translateY(-5px)';
    });

    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1) translateY(0)';
    });
  });
}

// Add bounce animation to logo on mobile
if (window.innerWidth <= 768) {
  const logo = document.querySelector('.logo-section');
  logo.classList.add('scroll-bounce');

  // Remove animation after 3 bounces
  setTimeout(() => {
    logo.classList.remove('scroll-bounce');
  }, 6000);
}