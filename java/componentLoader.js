// components.js
const components = {
    header: `
        <!-- Header Section -->
        <header>
            <div class="logo-section logo-img-container">
                <a href="../home.html">
                    <img class="logo-img" width="55" height="30" src="../images/logo.png" alt="Home">
                </a>
                <a href="../home.html" class="brand-name-link">
                    <span class="brand-name">Ravish</span>
                </a>
            </div>
            <div class="header-content">
                <div class="header-items" id="headerItems">
                      <a href="../home.html">Home</a>
                      <a href="./intro.html">Java</a>
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
                <h4>Java Basic</h4>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/intro.html">Java Introduction</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/history.html">History
                	of Java</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/features.html">Features of Java</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/jdk.html">JDK vs JRE
                	vs JVM</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/jvm.html">JVM - Java
                	Virtual Machine</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/gc.html">Garbage
                	Collection</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/variables.html">Variables</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/datatypes.html">Data
                	Types</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/operators.html">Operators</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/string.html">Java
                	String</a></li>
                <h4>Java Flow Control</h4>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/ifelse.html">Java
                	If-else</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/switchcase.html">Java
                	Switch-Case</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/forloop.html">Java For
                	loop</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/whileloop.html">Java
                	while loop</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/dowhile.html">Java
                	do-while loop</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/continue.html">Continue statement</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/break.html">break
                	statement</a></li>
                <h4>Java Arrays</h4>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/arrays.html">Java
                	Arrays</a></li>
                <h4>OOPs Concepts</h4>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/oops.html">OOPs
                	Concepts</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/absract.html">Abstraction</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/encapsulation.html">Encapsulation</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/inheritance.html">Inheritance</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/polymorphism.html">Polymorphism</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/aggregation.html">Aggregation</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/association.html">Association</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/composition.html">Composition</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/overloadingvsoverriding.html">Overloading vs
                	Overriding</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/abstractvsinterface.html">Abstract class vs
                	interface</a></li>
                <h4>Java Exception Handling</h4>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/exception-handling.html">Exception handling</a></li>
                <h4>Java Multithreading</h4>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/multithreading.html">Multithreading</a></li>
                <h4>Java Serialization</h4>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/serialization.html">Serialization</a></li>
                <h4>Java Synchronization</h4>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/synchronization.html">Synchronization</a></li>
                <h4>Java Sorting</h4>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/comparable.html">Comparable interface</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/comparator.html">Comparator interface</a></li>
                <h4>Collections Framework</h4>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/collections.html">Collections in Java</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/arraylist.html">Java
                	ArrayList</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/linkedlist.html">Java
                	LinkedList</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/vector.html">Java
                	Vector</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/hashset.html">Java
                	HashSet</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/linkedhashset.html">Java LinkedHashSet</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/treeset.html">Java
                	TreeSet</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/hashmap.html">Java
                	HashMap</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/hashmap-internal.html">Java HashMap Working</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/treemap.html">Java
                	TreeMap</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/linkedhashmap.html">Java LinkedHashMap</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/syncronized_collection.html">Syncronized Collections
                </a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/concurrent.html">Concurrent Collections</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/weak.html">Weak Collections</a></li>
                <h4>Interview Special</h4>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../interview/java/java-interview-questions.html">Java Interview
                	Questions</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../interview/java/java-collections.html">Collections
                	interview questions</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/javaprograms.html">Java programs</a></li>
                <li class="nav-item" data-depth="1"><a class="nav-link" href="../java/random.html">Java
                	Miscellaneous</a></li>
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
    highlightCurrentPage(); // Add this to highlight current page
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

// NEW FUNCTION: Highlight current page in sidebar
        function highlightCurrentPage() {
            // Get current page URL
            const currentPageUrl = window.location.pathname.split('/').pop();

            // Find all sidebar links
            const sidebarLinks = document.querySelectorAll('#sidebar .nav-link');

            // Check each link to see if it matches the current page
            sidebarLinks.forEach(link => {
                const linkUrl = link.getAttribute('href').split('/').pop();

                // If the link URL matches the current page URL, add the active class
                if (linkUrl === currentPageUrl) {
                    link.classList.add('active');
                }
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