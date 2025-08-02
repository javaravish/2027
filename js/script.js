// Theme Toggle
const themeToggle = document.getElementById("themeSwitcher");

if (themeToggle) {
  // ✅ On Load: Apply stored theme & check toggle
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.checked = true; // ✅ visually check the toggle
  }

  // ✅ On Toggle: Switch theme and update storage
  themeToggle.addEventListener("change", () => {
    const isDark = themeToggle.checked;
    document.body.classList.toggle("dark-theme", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}


// Header Menu Toggle
const headerBtn = document.getElementById("headerMenuToggle");
const headerMenu = document.getElementById("headerMenu");

headerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  headerMenu.classList.toggle("active");
  headerBtn.textContent = headerMenu.classList.contains("active") ? "✖" : "☰";
});

// Sidebar Menu Toggle
const sidebarBtn = document.getElementById("sidebarMenuToggle");
const sidebarMenu = document.getElementById("sidebarMenu");

sidebarBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  sidebarMenu.classList.toggle("active");
  sidebarBtn.textContent = sidebarMenu.classList.contains("active") ? "✖" : "☰";
});

// Close Menus on Outside Click
document.addEventListener("click", () => {
  if (headerMenu.classList.contains("active")) {
    headerMenu.classList.remove("active");
    headerBtn.textContent = "☰";
  }
  if (sidebarMenu.classList.contains("active")) {
    sidebarMenu.classList.remove("active");
    sidebarBtn.textContent = "☰";
  }
});

headerMenu.addEventListener("click", e => e.stopPropagation());
sidebarMenu.addEventListener("click", e => e.stopPropagation());

// Back to Top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
