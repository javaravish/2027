    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Check for saved user preference or use system preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    // Toggle theme on button click
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    // Logo animation on theme change
    themeToggle.addEventListener('change', function() {
        const logoImg = document.querySelector('.logo-img');
        const logoSection = document.querySelector('.logo-section');

        // Add animation class to the logo image
        logoImg.classList.add('theme-change-animation');

        // Remove the animation class after it completes
        setTimeout(() => {
            logoImg.classList.remove('theme-change-animation');
        }, 2000);
    });

    // Back to top button functionality
    const backToTopBtn = document.getElementById('backToTop');
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

    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const headerItems = document.getElementById('headerItems');

    mobileMenuBtn.addEventListener('click', function() {
        headerItems.classList.toggle('open');
        this.textContent = headerItems.classList.contains('open') ? '✕' : '☰';

        // Close sidebar if open when opening menu
        if (headerItems.classList.contains('open') && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            mobileSidebarBtn.textContent = '☰';
        }
    });

    // Mobile sidebar functionality
    const mobileSidebarBtn = document.getElementById('mobileSidebarBtn');
    const sidebar = document.getElementById('sidebar');

    mobileSidebarBtn.addEventListener('click', function() {
        sidebar.classList.toggle('open');
        this.textContent = sidebar.classList.contains('open') ? '✕' : '☰';

        // Close menu if open when opening sidebar
        if (sidebar.classList.contains('open') && headerItems.classList.contains('open')) {
            headerItems.classList.remove('open');
            mobileMenuBtn.textContent = '☰';
        }
    });

    // Close menus when clicking outside
    document.addEventListener('click', function(event) {
        // Close mobile menu
        if (!event.target.closest('#headerItems') && !event.target.closest('#mobileMenuBtn')) {
            headerItems.classList.remove('open');
            mobileMenuBtn.textContent = '☰';
        }

        // Close sidebar
        if (!event.target.closest('#sidebar') && !event.target.closest('#mobileSidebarBtn')) {
            sidebar.classList.remove('open');
            mobileSidebarBtn.textContent = '☰';
        }
    });

    // Add active class to current nav item
    document.querySelectorAll('.header-items a').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelectorAll('.header-items a').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });