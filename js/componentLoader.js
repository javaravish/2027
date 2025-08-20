// components.js

// ---------- Root path resolver (works for file:// and http://) ----------
function getSiteRootFromScript() {
  // Find the currently executing script (this file)
  const s = document.currentScript || (function () {
    const scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })();

  const src = (s && s.src) || '';
  // Try to detect "/js/" folder – treat its parent as the site root.
  const idx = src.lastIndexOf('/js/');
  if (idx !== -1) {
    return src.substring(0, idx + 1); // includes trailing slash
  }
  // Fallback: parent folder of the script file
  const lastSlash = src.lastIndexOf('/');
  return lastSlash !== -1 ? src.substring(0, lastSlash + 1) : '';
}

const SITE_ROOT = getSiteRootFromScript();

function resolveRootPath(path) {
  if (!path) return '#';
  // If absolute URL (http://, https://, file://, data:, etc.) leave it
  if (/^[a-z]+:\/\//i.test(path)) return path;
  // Convert "/x/y" -> "<SITE_ROOT>x/y"
  return SITE_ROOT + path.replace(/^\//, '');
}

// Rewrite any root-relative URLs to fully-qualified local paths
function rewriteRootLinks(scope = document) {
  // Our custom data-* attributes (safe, no flicker)
  scope.querySelectorAll('a[data-href]').forEach(a => {
    a.setAttribute('href', resolveRootPath(a.getAttribute('data-href')));
  });
  scope.querySelectorAll('img[data-src]').forEach(img => {
    img.setAttribute('src', resolveRootPath(img.getAttribute('data-src')));
  });

  // Also patch any plain root-relative URLs if present
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
    <!-- Header Section -->
    <header>
      <div class="logo-section logo-img-container">
        <a data-href="/home.html" href="#">
          <img class="logo-img" width="55" height="30" data-src="/images/logo.png" alt="Home">
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

        <!-- Theme Toggle -->
        <label class="theme-toggle">
          <input type="checkbox" id="themeToggle">
          <span class="slider"></span>
        </label>

        <!-- Mobile Menu Button -->
        <button class="mobile-menu-btn" id="mobileMenuBtn">☰</button>
      </div>
    </header>
  `,

  sidebars: {
    tutorials: `
      <!-- Tutorials Sidebar -->
      <aside id="sidebar">
        <ul class="menu">
          <h4>Tutorials</h4>
          <li class="nav-item"><a class="nav-link" data-href="/java/intro.html" href="#">Java</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/spring/intro.html" href="#">Spring</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/springboot/intro.html" href="#">SpringBoot</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/ms/intro.html" href="#">Microservices</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/kafka.html" href="#">Kafka</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/java8/intro.html" href="#">Java 8 Features</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/cheatsheets.html" href="#">Java Cheat Sheet</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/database.html" href="#">Database</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/dp/intro.html" href="#">Design Patterns</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/sorting/bubble.html" href="#">Java Sorting</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/dsa/dsa.html" href="#">Data Structures and Algorithms</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/interview/iqa.html" href="#">Interview Questions</a></li>
        </ul>
      </aside>
    `,

    java: `
      <!-- Java Sidebar -->
      <aside id="sidebar">
        <ul class="menu">
          <h4>Java Basic</h4>
          <li class="nav-item"><a class="nav-link" data-href="/java/intro.html" href="#">Java Introduction</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/history.html" href="#">History of Java</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/features.html" href="#">Features of Java</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/jdk.html" href="#">JDK vs JRE vs JVM</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/jvm.html" href="#">JVM - Java Virtual Machine</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/gc.html" href="#">Garbage Collection</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/variables.html" href="#">Variables</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/datatypes.html" href="#">Data Types</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/operators.html" href="#">Operators</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/string.html" href="#">Java String</a></li>
          <h4>Java Flow Control</h4>
          <li class="nav-item"><a class="nav-link" data-href="/java/ifelse.html" href="#">Java If-else</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/switchcase.html" href="#">Java Switch-Case</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/forloop.html" href="#">Java For loop</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/whileloop.html" href="#">Java while loop</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/dowhile.html" href="#">Java do-while loop</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/continue.html" href="#">Continue statement</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/break.html" href="#">break statement</a></li>
          <h4>Java Arrays</h4>
          <li class="nav-item"><a class="nav-link" data-href="/java/arrays.html" href="#">Java Arrays</a></li>
          <h4>OOPs Concepts</h4>
          <li class="nav-item"><a class="nav-link" data-href="/java/oops.html" href="#">OOPs Concepts</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/absract.html" href="#">Abstraction</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/encapsulation.html" href="#">Encapsulation</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/inheritance.html" href="#">Inheritance</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/polymorphism.html" href="#">Polymorphism</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/aggregation.html" href="#">Aggregation</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/association.html" href="#">Association</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/composition.html" href="#">Composition</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/overloadingvsoverriding.html" href="#">Overloading vs Overriding</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/abstractvsinterface.html" href="#">Abstract class vs interface</a></li>
          <h4>Java Exception Handling</h4>
          <li class="nav-item"><a class="nav-link" data-href="/java/exception-handling.html" href="#">Exception handling</a></li>
          <h4>Java Multithreading</h4>
          <li class="nav-item"><a class="nav-link" data-href="/java/multithreading.html" href="#">Multithreading</a></li>
          <h4>Java Serialization</h4>
          <li class="nav-item"><a class="nav-link" data-href="/java/serialization.html" href="#">Serialization</a></li>
          <h4>Java Synchronization</h4>
          <li class="nav-item"><a class="nav-link" data-href="/java/synchronization.html" href="#">Synchronization</a></li>
          <h4>Java Sorting</h4>
          <li class="nav-item"><a class="nav-link" data-href="/java/comparable.html" href="#">Comparable interface</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/comparator.html" href="#">Comparator interface</a></li>
          <h4>Collections Framework</h4>
          <li class="nav-item"><a class="nav-link" data-href="/java/collections.html" href="#">Collections in Java</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/arraylist.html" href="#">Java ArrayList</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/linkedlist.html" href="#">Java LinkedList</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/vector.html" href="#">Java Vector</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/hashset.html" href="#">Java HashSet</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/linkedhashset.html" href="#">Java LinkedHashSet</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/treeset.html" href="#">Java TreeSet</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/hashmap.html" href="#">Java HashMap</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/hashmap-internal.html" href="#">Java HashMap Working</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/treemap.html" href="#">Java TreeMap</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/linkedhashmap.html" href="#">Java LinkedHashMap</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/syncronized_collection.html" href="#">Syncronized Collections</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/concurrent.html" href="#">Concurrent Collections</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/weak.html" href="#">Weak Collections</a></li>
          <h4>Interview Special</h4>
          <li class="nav-item"><a class="nav-link" data-href="/interview/java/java-interview-questions.html" href="#">Java Interview Questions</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/interview/java/java-collections.html" href="#">Collections interview questions</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/javaprograms.html" href="#">Java programs</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/java/random.html" href="#">Java Miscellaneous</a></li>
        </ul>
      </aside>
    `,

    spring: `
      <!-- Spring Sidebar -->
      <aside id="sidebar">
        <ul class="menu">
          <h4>Spring Framework</h4>
          <li class="nav-item"><a class="nav-link" data-href="/spring/intro.html" href="#">Spring Introduction</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/spring/core.html" href="#">Spring Core</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/spring/beans.html" href="#">Spring Beans</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/spring/di.html" href="#">Dependency Injection</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/spring/aop.html" href="#">Aspect Oriented Programming</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/spring/mvc.html" href="#">Spring MVC</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/spring/security.html" href="#">Spring Security</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/spring/data.html" href="#">Spring Data</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/spring/boot.html" href="#">Spring Boot</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/spring/cloud.html" href="#">Spring Cloud</a></li>
        </ul>
      </aside>
    `,

    interview: `
      <!-- Interview Sidebar -->
      <aside id="sidebar">
        <ul class="menu">
          <h4>Interview Preparation</h4>
          <li class="nav-item"><a class="nav-link" data-href="/interview/java/questions.html" href="#">Java Questions</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/interview/spring/questions.html" href="#">Spring Questions</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/interview/ms/questions.html" href="#">Microservices Questions</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/interview/database/questions.html" href="#">Database Questions</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/interview/system-design/questions.html" href="#">System Design Questions</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/interview/behavioral/questions.html" href="#">Behavioral Questions</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/interview/resume-tips.html" href="#">Resume Tips</a></li>
          <li class="nav-item"><a class="nav-link" data-href="/interview/coding-tips.html" href="#">Coding Tips</a></li>
        </ul>
      </aside>
    `
  },

  footer: `
    <!-- Footer Section -->
    <footer>
      <p>© <span id="currentYear"></span>, The content is copyrighted to Ravi Kalyan Kolloju.</p>
    </footer>
    <button class="back-to-top" id="backToTop" aria-label="Back to top"></button>
  `
};

// ---------- Load + init ----------
function loadComponents() {
  // Insert header, sidebar, footer
  document.body.insertAdjacentHTML('afterbegin', components.header);

  const sidebarType = document.body.getAttribute('data-sidebar') || 'tutorials';
  const sidebarHTML = components.sidebars[sidebarType] || components.sidebars.tutorials;
  const nav = document.querySelector('nav');
  if (nav) nav.insertAdjacentHTML('afterend', sidebarHTML);
  else document.body.insertAdjacentHTML('afterbegin', sidebarHTML);

  document.body.insertAdjacentHTML('beforeend', components.footer);

  // Rewrite root-relative URLs so they work under file:// and http(s)://
  rewriteRootLinks(document);

  // Initialize features
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

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', loadComponents);
