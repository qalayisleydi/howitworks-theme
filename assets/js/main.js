(function () {
  'use strict';

  /* ===========================================
     1. Reading Progress Bar
     =========================================== */
  var progressFill = document.querySelector('.progress-fill');
  if (progressFill) {
    var article = document.querySelector('.article-content') || document.querySelector('main');
    window.addEventListener('scroll', function () {
      var scrollTop = window.scrollY;
      var docHeight = article.offsetHeight + article.offsetTop - window.innerHeight;
      var progress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
      progressFill.style.width = progress + '%';
    });
  }

  /* ===========================================
     2. Scroll-spy TOC
     =========================================== */
  var tocNav = document.querySelector('.toc-nav');
  if (tocNav) {
    var headings = document.querySelectorAll('.article-content h2');
    if (headings.length > 0) {
      // Build TOC links
      headings.forEach(function (heading) {
        if (!heading.id) {
          heading.id = heading.textContent
            .trim()
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-');
        }
        var link = document.createElement('a');
        link.href = '#' + heading.id;
        link.className = 'toc-link';
        link.textContent = heading.textContent;
        tocNav.appendChild(link);
      });

      // Scroll-spy via IntersectionObserver
      var tocLinks = tocNav.querySelectorAll('.toc-link');
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              tocLinks.forEach(function (l) { l.classList.remove('active'); });
              var active = tocNav.querySelector('a[href="#' + entry.target.id + '"]');
              if (active) active.classList.add('active');
            }
          });
        },
        { rootMargin: '0px 0px -70% 0px', threshold: 0 }
      );

      headings.forEach(function (h) { observer.observe(h); });
    }
  }

  /* ===========================================
     3. TOC Toggle
     =========================================== */
  var tocToggle = document.querySelector('.toc-toggle');
  var tocHeader = document.querySelector('.toc-header');
  var tocSidebar = document.querySelector('.toc-sidebar');
  if (tocToggle && tocSidebar) {
    // Restore saved state
    if (localStorage.getItem('toc-collapsed') === 'true') {
      tocSidebar.classList.add('toc-collapsed');
    }

    // Click on toggle button or the whole header
    tocHeader.addEventListener('click', function () {
      tocSidebar.classList.toggle('toc-collapsed');
      localStorage.setItem('toc-collapsed', tocSidebar.classList.contains('toc-collapsed'));
    });
  }

  /* ===========================================
     4. Theme Toggle
     =========================================== */
  var toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var html = document.documentElement;
      if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme');
        localStorage.removeItem('theme');
      } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  }
})();
