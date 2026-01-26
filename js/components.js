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
            <!-- Contact CTA Section -->
            <div class="footer-contact-cta">
                <h2 class="footer-contact-title">Get in Touch</h2>
                <p class="footer-contact-subtitle">Have questions? We'd love to hear from you.</p>
                <div class="footer-contact-cards">
                    <a href="https://calendly.com/contact-leadbooster/30min" target="_blank" rel="noopener" class="footer-contact-card">
                        <div class="footer-contact-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                        <h3>Book an Intro Meeting</h3>
                        <p>Schedule a free demo call with our team</p>
                        <span class="footer-contact-arrow">Book Now →</span>
                    </a>
                    <a href="https://chat.whatsapp.com/CXh0lverrUYHMQwpTEWAda" target="_blank" rel="noopener" class="footer-contact-card">
                        <div class="footer-contact-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                        </div>
                        <h3>Join WhatsApp Community</h3>
                        <p>Connect with us and other users</p>
                        <span class="footer-contact-arrow">Join Group →</span>
                    </a>
                </div>
            </div>

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
                    <a href="https://chat.whatsapp.com/CXh0lverrUYHMQwpTEWAda" target="_blank" rel="noopener" aria-label="WhatsApp Group">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.011 3.265c-1.709-1.563-3.934-2.424-6.283-2.424-5.312 0-9.637 4.007-9.639 8.931 0 1.662.45 3.284 1.303 4.725L1.126 19l4.568-1.33c1.39.796 2.967 1.217 4.57 1.218h.004c5.311 0 9.637-4.008 9.639-8.931.001-2.488-.946-4.828-2.664-6.382zm-6.283 15.382h-.003c-1.454-.001-2.88-.403-4.125-1.163l-.295-.179-3.062.896.817-2.921-.192-.307c-.853-1.366-1.304-2.947-1.303-4.587.002-4.416 3.788-8.008 8.444-8.008 2.256.001 4.374.852 5.967 2.396 1.592 1.543 2.469 3.593 2.468 5.773-.002 4.416-3.788 8.008-8.444 8.008zm4.633-6.327c-.254-.127-1.503-.741-1.735-.826-.233-.084-.402-.127-.571.127-.169.254-.654.826-.802.996-.148.169-.296.19-.55.063-.254-.127-1.072-.395-2.041-1.259-.756-.675-1.267-1.508-1.415-1.762-.148-.254-.016-.392.111-.519.114-.114.254-.296.381-.444.127-.148.169-.254.254-.423.084-.169.042-.318-.021-.444-.063-.127-.571-1.376-.783-1.884-.206-.495-.415-.428-.571-.436-.148-.007-.318-.009-.487-.009-.169 0-.444.063-.675.318-.232.254-.883.862-.883 2.103 0 1.241.904 2.44 1.03 2.609.127.169 1.78 2.716 4.31 3.81.602.26 1.072.416 1.439.533.608.193 1.161.166 1.599.101.487-.073 1.503-.614 1.714-1.207.212-.592.212-1.099.148-1.207-.063-.106-.232-.169-.486-.295z"/>
                        </svg>
                    </a>
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
