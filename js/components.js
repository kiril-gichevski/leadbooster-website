// Navbar Component
function createNavbar(relativePath = '') {
    return `
    <nav class="navbar">
        <div class="container">
            <div class="nav-wrapper">
                <div class="logo">
                    <a href="${relativePath}index.html" style="display: flex; align-items: center; gap: 12px; text-decoration: none; color: inherit;">
                        <img src="${relativePath}images/leadbooster-logo.png" alt="LeadBooster Logo" width="40" height="40">
                        <span>LeadBooster</span>
                    </a>
                </div>
                <ul class="nav-links">
                    <li><a href="${relativePath}index.html#features">Features</a></li>
                    <li><a href="${relativePath}index.html#pricing">Pricing</a></li>
                    <li><a href="${relativePath}index.html#demo">Demo</a></li>
                    <!-- <li><a href="${relativePath}academy.html">Academy</a></li> -->
                </ul>
                <div class="nav-cta">
                    <a href="https://workspace.google.com/marketplace/app/leadbooster/96942350094?flow_type=2" class="btn btn-primary">Start Free</a>
                </div>
                <button class="mobile-menu-btn" aria-label="Toggle menu">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </button>
            </div>
        </div>
        <!-- Mobile Menu Overlay -->
        <div class="mobile-menu-overlay">
            <ul class="mobile-nav-links">
                <li><a href="${relativePath}index.html#features">Features</a></li>
                <li><a href="${relativePath}index.html#pricing">Pricing</a></li>
                <li><a href="${relativePath}index.html#demo">Demo</a></li>
                <!-- <li><a href="${relativePath}academy.html">Academy</a></li> -->
                <li><a href="https://workspace.google.com/marketplace/app/leadbooster/96942350094?flow_type=2" class="btn btn-primary mobile-cta">Start Free</a></li>
            </ul>
        </div>
    </nav>
    `;
}

// Footer Component
function createFooter(relativePath = '') {
    return `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <div class="footer-logo">
                        <img src="${relativePath}images/leadbooster-logo.png" alt="LeadBooster Logo" width="40" height="40">
                        <span>LeadBooster</span>
                    </div>
                    <p>FREE lead enrichment for Google Sheets. Bring your own API keys, pay providers at cost, no extra fees.</p>
                    <p class="footer-tagline">💡 Built by developers who got tired of paying 3x for APIs.</p>
                </div>

                <div class="footer-col">
                    <h4>Product</h4>
                    <ul>
                        <li><a href="${relativePath}index.html#features">Features</a></li>
                        <li><a href="${relativePath}index.html#pricing">Pricing</a></li>
                        <li><a href="${relativePath}index.html#demo">Demo</a></li>
                        <!-- <li><a href="${relativePath}academy.html">Academy</a></li> -->
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="mailto:contact@leadbooster.dev">Contact</a></li>
                        <li><a href="https://calendly.com/leadbooster/demo" target="_blank" rel="noopener">Book a Demo</a></li>
                        <li><a href="${relativePath}privacy-policy.html">Privacy Policy</a></li>
                        <li><a href="${relativePath}terms-and-conditions.html">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            <!-- Security & Trust Badges -->
            <div class="security-badges">
                <div class="badge-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="5" y="11" width="14" height="10" rx="2" fill="#10b981" stroke="#059669" stroke-width="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#059669" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="12" cy="15.5" r="1.5" fill="white"/>
                        <rect x="11.5" y="15.5" width="1" height="3" fill="white"/>
                    </svg>
                    <span>256-bit SSL Encryption</span>
                </div>
                <div class="badge-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3z" fill="#003399" stroke="#002266" stroke-width="2"/>
                        <text x="12" y="14" font-family="Arial, sans-serif" font-size="6" font-weight="bold" fill="#FFCC00" text-anchor="middle">GDPR</text>
                    </svg>
                    <span>GDPR Compliant</span>
                </div>
                <div class="badge-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3z" fill="#6366f1" stroke="#4f46e5" stroke-width="2"/>
                        <path d="M9 12l2 2 4-4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>SOC 2 Type II Compliant</span>
                </div>
                <div class="badge-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#4285F4"/>
                        <path d="M12 7v5l3.5 2" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="19" cy="5" r="3" fill="#34A853"/>
                        <path d="M17.5 5L18.5 6L20.5 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Google Workspace Verified</span>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2026 LeadBooster. All rights reserved.</p>
                <div class="footer-social">
                    <a href="#" aria-label="LinkedIn">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H.329C.146 3 0 3.145 0 3.324v13.352C0 16.855.145 17 .329 17h19.34c.186 0 .331-.145.331-.324V3.324C20 3.145 19.855 3 19.67 3z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    `;
}

// Load components on page load
document.addEventListener('DOMContentLoaded', function() {
    // Determine relative path based on page location
    const relativePath = document.body.dataset.relativePath || '';

    // Inject navbar
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = createNavbar(relativePath);
    }

    // Inject footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = createFooter(relativePath);
    }
});
