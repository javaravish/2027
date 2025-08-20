// components.js
const components = {
    header: `
        <!-- Header Section -->
        <header>
            <div class="logo-section logo-img-container">
                <a href="home.html">
                    <img class="logo-img" width="55" height="30" src="images/logo.png" alt="Home">
                </a>
                <a href="home.html" class="brand-name-link">
                    <span class="brand-name">Ravish</span>
                </a>
            </div>
            <div class="header-content">
                <div class="header-items" id="headerItems">
                      <a href="./home.html">Home</a>
                      <a href="./java/intro.html">Java</a>
                      <a href="./spring/intro.html">Spring</a>
                      <a href="./springboot/intro.html">SpringBoot</a>
                      <a href="./microservices/intro.html">Microservices</a>
                      <a href="./kafka.html">Kafka</a>
                      <a href="./java/java8/intro.html">Java 8 Features</a>
                      <a href="./dp/intro.html">Design Patterns</a>
                      <a href="./dsa/dsa.html">DSA</a>
                      <a href="./interview/iqa.html">Interview Questions</a>
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

    sidebar: `
        <!-- Sidebar Section -->
        <aside id="sidebar">
            <ul class="menu">
                <h4>Tutorials</h4>
                <li class="nav-item"><a class="nav-link" href="./java/intro.html">Java</a></li>
                <li class="nav-item"><a class="nav-link" href="./spring/intro.html">Spring</a></li>
                <li class="nav-item"><a class="nav-link" href="./springboot/intro.html">SpringBoot</a></li>
                <li class="nav-item"><a class="nav-link" href="./microservices/intro.html">Microservices</a></li>
                <li class="nav-item"><a class="nav-link" href="./kafka.html">Kafka</a></li>
                <li class="nav-item"><a class="nav-link" href="./java/java8/intro.html">Java
                    8 Features</a>
                </li><li class="nav-item"><a class="nav-link" href="./database.html">Database</a>
                </li><li class="nav-item"><a class="nav-link" href="./java/cheatsheets.html">Java Cheat Sheet</a>
                </li><li class="nav-item"><a class="nav-link" href="./dp/intro.html">Design Patterns</a>
                </li>
                <li class="nav-item"><a class="nav-link" href="./sorting/bubble.html">Java Sorting</a>
                </li><li class="nav-item"><a class="nav-link" href="./dsa/dsa.html">Data structures and Algorithms</a>
                </li>
                <li class="nav-item"><a class="nav-link" href="./interview/iqa.html">Interview
                    Questions</a></li>
            </ul>
        </aside>
    `,

    footer: `
        <!-- Footer Section -->
        <footer>
            <p>
                © <span id="currentYear"></span>, The content is copyrighted to Ravi Kalyan Kolloju.
            </p>
        </footer>

        <!-- Back to Top Button -->
        <button class="back-to-top" id="backToTop" aria-label="Back to top"></button>
    `
};

// Function to load components
function loadComponents() {
    // Insert header at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', components.header);

    // Insert sidebar after nav
    const nav = document.querySelector('nav');
    if (nav) {
        nav.insertAdjacentHTML('afterend', components.sidebar);
    }

    // Insert footer at the end of body
    document.body.insertAdjacentHTML('beforeend', components.footer);

    // Initialize all functionality
    initThemeToggle();
    initHeader();
    initSidebar();
    initFooter();
}

// Initialize theme toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    if (themeToggle) {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
            document.body.classList.add('dark-mode');
            themeToggle.checked = true;
        }

        themeToggle.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });

        themeToggle.addEventListener('change', function() {
            const logoImg = document.querySelector('.logo-img');
            if (logoImg) {
                logoImg.classList.add('theme-change-animation');
                setTimeout(() => {
                    logoImg.classList.remove('theme-change-animation');
                }, 2000);
            }
        });
    }
}

// Initialize header
function initHeader() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const headerItems = document.getElementById('headerItems');

    if (mobileMenuBtn && headerItems) {
        mobileMenuBtn.addEventListener('click', function() {
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
        link.addEventListener('click', function() {
            document.querySelectorAll('.header-items a').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
}

// Initialize sidebar
function initSidebar() {
    const mobileSidebarBtn = document.getElementById('mobileSidebarBtn');
    const sidebar = document.getElementById('sidebar');

    if (mobileSidebarBtn && sidebar) {
        mobileSidebarBtn.addEventListener('click', function() {
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

// Initialize footer
function initFooter() {
    // Set current year
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Back to top button functionality
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Close menus when clicking outside
document.addEventListener('click', function(event) {
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