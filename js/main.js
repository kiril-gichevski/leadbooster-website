// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 1px 0 rgba(255,255,255,0.06)';
    }

    lastScroll = currentScroll;
});


// Track CTA clicks (you can replace this with your analytics)
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Add your analytics tracking here
        console.log('CTA clicked:', e.target.textContent);

        // Example: Google Analytics tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                'event_category': 'CTA',
                'event_label': e.target.textContent.trim()
            });
        }
    });
});


// Mobile menu toggle
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

    if (mobileMenuBtn && mobileMenuOverlay) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            mobileMenuOverlay.classList.toggle('active');
            document.body.style.overflow = mobileMenuOverlay.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking a link
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu on resize to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                mobileMenuBtn.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Call mobile menu init when DOM is ready
document.addEventListener('DOMContentLoaded', initMobileMenu);

// Add copy-to-clipboard functionality for code snippets (if needed)
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Dynamic year in footer
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    footerYear.textContent = footerYear.textContent.replace('2026', currentYear);
}

// Lazy load images when they're in viewport
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add active state to nav links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// FAQ collapsible on mobile
function initFAQCollapsible() {
    const faqItems = document.querySelectorAll('.faq-item');

    function toggleFAQ() {
        // Only enable collapsible on mobile
        if (window.innerWidth <= 768) {
            faqItems.forEach(item => {
                item.classList.add('collapsible');

                // Close all by default on mobile
                if (!item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });

            // Add click handlers
            faqItems.forEach(item => {
                const heading = item.querySelector('h3');
                if (heading && !heading.dataset.listenerAdded) {
                    heading.addEventListener('click', () => {
                        item.classList.toggle('active');
                    });
                    heading.dataset.listenerAdded = 'true';
                }
            });
        } else {
            // Remove collapsible class on desktop
            faqItems.forEach(item => {
                item.classList.remove('collapsible');
                item.classList.add('active');
            });
        }
    }

    toggleFAQ();
    window.addEventListener('resize', toggleFAQ);
}

document.addEventListener('DOMContentLoaded', initFAQCollapsible);

function initExpandFeatures() {
    const btn = document.getElementById('expandFeaturesBtn');
    const grid = document.getElementById('moreFeaturesGrid');
    if (!btn || !grid) return;

    btn.addEventListener('click', function () {
        const isHidden = window.getComputedStyle(grid).display === 'none';
        grid.style.display = isHidden ? 'grid' : 'none';
        this.innerHTML = isHidden
            ? 'Show less <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 10L8 6L4 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
            : 'See all features <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    });
}
document.addEventListener('DOMContentLoaded', initExpandFeatures);

console.log('Lead Enricher website loaded successfully!');
