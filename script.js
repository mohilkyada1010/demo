// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Animated counters
const counters = document.querySelectorAll('.stat-num');
const cIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.target;
    const duration = 1400;
    const start = performance.now();
    function tick(now){
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    cIO.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(c => cIO.observe(c));

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Subtle parallax on hero card
const heroCard = document.querySelector('.hero-card');
if (heroCard && window.matchMedia('(hover:hover)').matches) {
  document.querySelector('.hero-visual').addEventListener('mousemove', (e) => {
    const r = heroCard.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width/2) / r.width;
    const y = (e.clientY - r.top - r.height/2) / r.height;
    heroCard.style.transform = `perspective(900px) rotateY(${x*4}deg) rotateX(${-y*4}deg)`;
  });
  document.querySelector('.hero-visual').addEventListener('mouseleave', () => {
    heroCard.style.transform = '';
  });
}


const faqs = document.querySelectorAll('.faq-list details');

faqs.forEach((faq) => {
  faq.addEventListener('toggle', () => {
    if (faq.open) {
      faqs.forEach((other) => {
        if (other !== faq) {
          other.open = false;
        }
      });
    }
  });
});


  (function(){
    var form = document.getElementById('ctaForm');
    var submitBtn = document.getElementById('ctaSubmit');
    var thanks = document.getElementById('thanks');

    form.addEventListener('submit', function(e){
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Show the thanks message right away.
      // If you're sending this to a real endpoint, swap this for your fetch/AJAX call
      // and only reveal `thanks` once the request succeeds.
      form.querySelectorAll('.field, button[type="submit"]').forEach(function(el){
        el.style.display = 'none';
      });
      thanks.hidden = false;
    });

    // Reveal-on-scroll
    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      revealEls.forEach(function(el){ io.observe(el); });
    } else {
      revealEls.forEach(function(el){ el.classList.add('is-visible'); });
    }
  })();




     