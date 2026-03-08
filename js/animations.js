// animations.js — GSAP Premium 2026
document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap === 'undefined') return; // graceful fallback

    gsap.registerPlugin(ScrollTrigger);

    // ── Hero entrance timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.hero-badge-wrapper',  { opacity: 0, y: 24, duration: 0.7 })
      .from('.section-label',       { opacity: 0, y: 18, duration: 0.6 }, '-=0.4')
      .from('.hero h1',             { opacity: 0, y: 40, duration: 0.9, ease: 'power4.out' }, '-=0.45')
      .from('.hero-subtitle',       { opacity: 0, y: 24, duration: 0.7 }, '-=0.5')
      .from('.hero-metrics',        { opacity: 0, y: 20, scale: 0.96, duration: 0.6 }, '-=0.4')
      .from('.hero-cta',            { opacity: 0, y: 16, duration: 0.6 }, '-=0.4')
      .from('.hero-cta-subtext',    { opacity: 0, duration: 0.5 }, '-=0.3')
      .from('.hero-flow',           { opacity: 0, y: 32, scale: 0.95, duration: 0.9 }, '-=0.5');

    // ── ScrollTrigger scroll reveals (replaces IntersectionObserver)
    gsap.utils.toArray('[data-reveal]').forEach(el => {
        const delay = parseFloat(el.dataset.delay || 0) * 0.1;
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                once: true
            }
        });
    });

    // ── Counter animation for "20+" metric
    const metric20El = Array.from(document.querySelectorAll('.metric-value'))
        .find(el => el.textContent.includes('20'));
    if (metric20El) {
        ScrollTrigger.create({
            trigger: metric20El,
            start: 'top 80%',
            once: true,
            onEnter: () => {
                const obj = { n: 0 };
                gsap.to(obj, {
                    n: 20,
                    duration: 1.5,
                    ease: 'power2.out',
                    onUpdate() { metric20El.textContent = Math.round(obj.n) + '+'; }
                });
            }
        });
    }

    // ── Magnetic buttons
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const r = btn.getBoundingClientRect();
            const x = (e.clientX - r.left - r.width  / 2) * 0.3;
            const y = (e.clientY - r.top  - r.height / 2) * 0.3;
            gsap.to(btn, { x, y, duration: 0.3, ease: 'power2.out' });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
        });
    });
});
