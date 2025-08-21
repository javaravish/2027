// ---------- Root path resolver ----------
function getSiteRootFromScript() {
  const s = document.currentScript || (function () {
    const scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })();
  const src = (s && s.src) || '';
  const idx = src.lastIndexOf('/js/');
  if (idx !== -1) return src.substring(0, idx + 1);
  const lastSlash = src.lastIndexOf('/');
  return lastSlash !== -1 ? src.substring(0, lastSlash + 1) : '';
}

const SITE_ROOT = getSiteRootFromScript();

function resolveRootPath(path) {
  if (!path) return '#';
  if (/^[a-z]+:\/\//i.test(path)) return path;
  return SITE_ROOT + path.replace(/^\//, '');
}

function rewriteRootLinks(scope = document) {
  scope.querySelectorAll('a[data-href]').forEach(a => {
    a.setAttribute('href', resolveRootPath(a.getAttribute('data-href')));
  });
  scope.querySelectorAll('img[data-src]').forEach(img => {
    img.setAttribute('src', resolveRootPath(img.getAttribute('data-src')));
  });
  scope.querySelectorAll('a[href^="/"]').forEach(a => {
    a.setAttribute('href', resolveRootPath(a.getAttribute('href')));
  });
  scope.querySelectorAll('img[src^="/"]').forEach(img => {
    img.setAttribute('src', resolveRootPath(img.getAttribute('src')));
  });
  scope.querySelectorAll('link[rel="stylesheet"][href^="/"]').forEach(l => {
    l.setAttribute('href', resolveRootPath(l.getAttribute('href')));
  });
  scope.querySelectorAll('script[src^="/"]').forEach(sc => {
    sc.setAttribute('src', resolveRootPath(sc.getAttribute('src')));
  });
}

// ---------- Components ----------
const components = {
  header: `
    <!-- Head Section -->
    <meta charset="UTF-8">
        <meta name="author" content="RaviKalyan">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="js/images/tab_logo.png">

    <!-- Header Section -->
    <header>
      <div class="logo-section logo-img-container">
        <a data-href="/home.html" href="#">
          <img class="logo-img" width="55" height="30" data-src="/js/images/logo.png" alt="Home">
        </a>
        <a class="brand-name-link" data-href="/home.html" href="#">
          <span class="brand-name">Ravish</span>
        </a>
      </div>
      <div class="header-content">
        <div class="header-items" id="headerItems">
          <a data-href="/home.html" href="#">Home</a>
          <a data-href="/java/intro.html" href="#">Java</a>
          <a data-href="/spring/intro.html" href="#">Spring</a>
          <a data-href="/springboot/intro.html" href="#">SpringBoot</a>
          <a data-href="/ms/intro.html" href="#">Microservices</a>
          <a data-href="/kafka.html" href="#">Kafka</a>
          <a data-href="/interview/iqa.html" href="#">Interview Questions</a>
        </div>
        <label class="theme-toggle">
          <input type="checkbox" id="themeToggle">
          <span class="slider"></span>
        </label>
        <button class="mobile-menu-btn" id="mobileMenuBtn">☰</button>
      </div>
    </header>
  `,

  footer: `
    <!-- Footer Section -->
    <footer>
      <p>© <span id="currentYear"></span>, The content is copyrighted
      to Ravi Kalyan Kolloju.</p>
    </footer>
    <button class="back-to-top" id="backToTop" aria-label="Back to top"></button>
  `
};

// ---------- Load + Init ----------
function loadComponents() {
  document.body.insertAdjacentHTML('afterbegin', components.header);

  const sidebarType = document.body.getAttribute('data-sidebar') || 'tutorials';
  const sidebarHTML = sidebars[sidebarType] || sidebars.tutorials;
  const nav = document.querySelector('nav');
  if (nav) nav.insertAdjacentHTML('afterend', sidebarHTML);
  else document.body.insertAdjacentHTML('afterbegin', sidebarHTML);

  document.body.insertAdjacentHTML('beforeend', components.footer);

  rewriteRootLinks(document);
  initThemeToggle();
  initHeader();
  initSidebar();
  initFooter();
  highlightCurrentPage();
}

// Theme toggle
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  if (themeToggle) {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
      document.body.classList.add('dark-mode');
      themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', function () {
      if (this.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
      const logoImg = document.querySelector('.logo-img');
      if (logoImg) {
        logoImg.classList.add('theme-change-animation');
        setTimeout(() => logoImg.classList.remove('theme-change-animation'), 2000);
      }
    });
  }
}

// Header
function initHeader() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const headerItems = document.getElementById('headerItems');

  if (mobileMenuBtn && headerItems) {
    mobileMenuBtn.addEventListener('click', function () {
      headerItems.classList.toggle('open');
      this.textContent = headerItems.classList.contains('open') ? '✕' : '☰';

      const sidebar = document.getElementById('sidebar');
      const mobileSidebarBtn = document.getElementById('mobileSidebarBtn');
      if (headerItems.classList.contains('open') && sidebar && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        if (mobileSidebarBtn) mobileSidebarBtn.textContent = '☰';
      }
    });
  }

  document.querySelectorAll('.header-items a').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('.header-items a').forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

// Sidebar
function initSidebar() {
  const mobileSidebarBtn = document.getElementById('mobileSidebarBtn');
  const sidebar = document.getElementById('sidebar');

  if (mobileSidebarBtn && sidebar) {
    mobileSidebarBtn.addEventListener('click', function () {
      sidebar.classList.toggle('open');
      this.textContent = sidebar.classList.contains('open') ? '✕' : '☰';

      const headerItems = document.getElementById('headerItems');
      const mobileMenuBtn = document.getElementById('mobileMenuBtn');
      if (sidebar.classList.contains('open') && headerItems && headerItems.classList.contains('open')) {
        headerItems.classList.remove('open');
        if (mobileMenuBtn) mobileMenuBtn.textContent = '☰';
      }
    });
  }
}

// Footer
function initFooter() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 300) backToTopBtn.classList.add('visible');
      else backToTopBtn.classList.remove('visible');
    });

    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Highlight current page in sidebar
function highlightCurrentPage() {
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('#sidebar .nav-link').forEach(link => {
    const linkUrl = (link.getAttribute('href') || '').split('/').pop();
    if (linkUrl === currentPage) link.classList.add('active');
  });
}

// Close menus when clicking outside
document.addEventListener('click', function (event) {
  const headerItems = document.getElementById('headerItems');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  if (headerItems && mobileMenuBtn) {
    if (!event.target.closest('#headerItems') && !event.target.closest('#mobileMenuBtn')) {
      headerItems.classList.remove('open');
      mobileMenuBtn.textContent = '☰';
    }
  }

  const sidebar = document.getElementById('sidebar');
  const mobileSidebarBtn = document.getElementById('mobileSidebarBtn');
  if (sidebar && mobileSidebarBtn) {
    if (!event.target.closest('#sidebar') && !event.target.closest('#mobileSidebarBtn')) {
      sidebar.classList.remove('open');
      mobileSidebarBtn.textContent = '☰';
    }
  }
});

function checkScroll() {
    // Only apply scroll detection on desktop
    if (window.innerWidth > 768) {
        const main = document.querySelector('main');
        if (main && main.scrollHeight - main.scrollTop <= main.clientHeight + 5) {
            document.body.classList.add('scrolled-to-bottom');
        } else {
            document.body.classList.remove('scrolled-to-bottom');
        }
    } else {
        // Always show footer on mobile
        document.body.classList.remove('scrolled-to-bottom');
    }
}

// Add resize listener to handle screen size changes
window.addEventListener('resize', checkScroll);

// Initialize scroll detection
document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('main');
    if (main) {
        main.addEventListener('scroll', checkScroll);
        // Check initial state
        checkScroll();
    }
});

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', loadComponents);
