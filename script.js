(function () {

  "use strict";

  var burger = document.getElementById("burger");
  var menu = document.getElementById("menu");

  // Mobile menu
  burger.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });

  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) {
      menu.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }
  });

  document.getElementById("year").textContent =
    new Date().getFullYear();

  // Fade-in on scroll
  var items = document.querySelectorAll(
    ".sec h2, .sec .label, .two p, .col, .row, .contact .lead, .contact .actions"
  );

  items.forEach(function (el) {
    el.classList.add("reveal");
  });

  if ("IntersectionObserver" in window) {

    var io = new IntersectionObserver(
      function (entries) {

        entries.forEach(function (e) {

          if (e.isIntersecting) {
            e.target.classList.add("show");
            io.unobserve(e.target);
          }

        });

      },
      {
        threshold: 0.12
      }
    );

    items.forEach(function (el) {
      io.observe(el);
    });

    // Highlight the current section in the menu
    var links = menu.querySelectorAll("a");

    var spy = new IntersectionObserver(
      function (entries) {

        entries.forEach(function (e) {

          if (e.isIntersecting) {

            links.forEach(function (l) {
              l.classList.toggle(
                "active",
                l.getAttribute("href") === "#" + e.target.id
              );
            });

          }

        });

      },
      {
        rootMargin: "-40% 0px -55% 0px"
      }
    );

    document
      .querySelectorAll("main section[id]")
      .forEach(function (s) {
        spy.observe(s);
      });

  } else {

    items.forEach(function (el) {
      el.classList.add("show");
    });

  }

})();