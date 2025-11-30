(function() {
  "use strict";

  // 🟢 Scroll class toggle
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader) return; // ✅ added
    if (
      !selectHeader.classList.contains('scroll-up-sticky') &&
      !selectHeader.classList.contains('sticky-top') &&
      !selectHeader.classList.contains('fixed-top')
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add('scrolled')
      : selectBody.classList.remove('scrolled');
  }
  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  // 🟢 Mobile nav toggle
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  // 🟢 Hide mobile nav
  const navLinks = document.querySelectorAll('#navmenu a');
  if (navLinks.length > 0) {
    navLinks.forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
    });
  }

  // 🟢 Mobile dropdowns
  const dropdowns = document.querySelectorAll('.navmenu .toggle-dropdown');
  if (dropdowns.length > 0) {
    dropdowns.forEach(navmenu => {
      navmenu.addEventListener('click', function(e) {
        e.preventDefault();
        if (this.parentNode && this.parentNode.nextElementSibling) {
          this.parentNode.classList.toggle('active');
          this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        }
        e.stopImmediatePropagation();
      });
    });
  }

  // 🟢 Scroll top button
  const scrollTop = document.querySelector('.scroll-top');
  function toggleScrollTop() {
    if (!scrollTop) return; // ✅ added
    window.scrollY > 100
      ? scrollTop.classList.add('active')
      : scrollTop.classList.remove('active');
  }
  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  // 🟢 AOS (animation)
  function aosInit() {
    if (window.AOS) {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }
  window.addEventListener('load', aosInit);

  // 🟢 GLightbox
  if (window.GLightbox) {
    GLightbox({ selector: '.glightbox' });
  }

  // 🟢 Pure Counter
  if (window.PureCounter) new PureCounter();

  // 🟢 FAQ toggle
  const faqItems = document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle');
  if (faqItems.length > 0) {
    faqItems.forEach(faqItem => {
      faqItem.addEventListener('click', () => {
        faqItem.parentNode.classList.toggle('faq-active');
      });
    });
  }

  // 🟢 Isotope filter (optional check)
  if (window.Isotope && window.imagesLoaded) {
    document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';
      let initIsotope;
      imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
        initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort
        });
      });

      const filters = isotopeItem.querySelectorAll('.isotope-filters li');
      if (filters.length > 0) {
        filters.forEach(f => {
          f.addEventListener('click', function() {
            const active = isotopeItem.querySelector('.isotope-filters .filter-active');
            if (active) active.classList.remove('filter-active');
            this.classList.add('filter-active');
            initIsotope.arrange({ filter: this.getAttribute('data-filter') });
            if (typeof aosInit === 'function') aosInit();
          });
        });
      }
    });
  }

  // 🟢 Swiper init
  function initSwiper() {
    if (window.Swiper) {
      document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
        let configEl = swiperElement.querySelector(".swiper-config");
        if (!configEl) return;
        let config = JSON.parse(configEl.innerHTML.trim());
        new Swiper(swiperElement, config);
      });
    }
  }
  window.addEventListener("load", initSwiper);

})();
