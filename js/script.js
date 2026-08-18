$(document).ready(function () {

            // Ouvrir le panel
            $(".open-panel").on("click", function () {
                const target = $(this).data("target");
                $(target).addClass("active");
                $("body").addClass("panel-open");
                $(target).find(".panel-body").scrollTop(0);
            });

            // Fermer le panel
            $(".btn-close-panel").on("click", function () {
                $(".fullscreen-panel").removeClass("active");
                $("body").removeClass("panel-open");
            });

            // Fermer avec la touche Échap
            $(document).on("keydown", function (e) {
                if (e.key === "Escape") {
                    $(".fullscreen-panel").removeClass("active");
                    $("body").removeClass("panel-open");
                }
            });

        });

        // Données des projets (tu pourras en ajouter autant que tu veux)
        const projects = {
            "ecommerce": {
                title: "Phase.com",
                category: "Web",
                year: "2024",
                description: "Plateforme e-commerce",
                techs: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap", "prestashop"],
                link: "#",
                images: [
                    "Image 1 - Homepage",
                    "Image 2 - Page produit",
                    "Image 3 - Panier",
                    "Image 4 - Dashboard"
                ]
            },
            "dashboard": {
                title: "Dashboard Admin",
                category: "Web",
                year: "2024",
                description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Tableau de bord complet avec graphiques et gestion d'utilisateurs.",
                techs: ["React", "Chart.js", "Node.js", "MongoDB"],
                link: "#",
                images: ["Dashboard Overview", "Graphiques", "Gestion users"]
            },
            "vitrine": {
                title: "Site Vitrine",
                category: "Web",
                year: "2023",
                description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Site vitrine élégant et ultra-rapide.",
                techs: ["HTML", "CSS", "JavaScript", "GSAP"],
                link: "#",
                images: ["Hero", "À propos", "Contact"]
            },
            "saas": {
                title: "Application SaaS",
                category: "Web",
                year: "2024",
                description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Application SaaS multi-tenant.",
                techs: ["Vue.js", "Laravel", "PostgreSQL", "Stripe"],
                link: "#",
                images: ["Interface principale", "Billing", "Settings"]
            },
            "portfolio": {
                title: "Portfolio Client",
                category: "Web",
                year: "2023",
                description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                techs: ["HTML", "CSS", "JavaScript"],
                link: "#",
                images: ["Home", "Gallery", "Contact"]
            },
            "landing": {
                title: "Landing Page",
                category: "Web",
                year: "2024",
                description: "Sunt in culpa qui officia deserunt mollit anim id est laborum. Landing page optimisée conversion.",
                techs: ["HTML", "Tailwind", "JavaScript"],
                link: "#",
                images: ["Hero Section", "Features", "CTA"]
            }
        };
        /*
        // Clic sur une carte projet
        $(document).on("click", ".placeholder-card", function () {
            const projectId = $(this).data("project");
            const project = projects[projectId];

            if (!project) return;

            // Remplir le modal
            $("#modal-title").text(project.title);
            $("#modal-category").text(project.category);
            $("#modal-year").text(project.year);
            $("#modal-description").text(project.description);
            $("#modal-link").attr("href", project.link);

            // Technologies
            const $techs = $("#modal-techs");
            $techs.empty();
            project.techs.forEach(tech => {
                $techs.append(`<span class="badge bg-secondary">${tech}</span>`);
            });

            // Carousel
            const $carousel = $("#carousel-inner");
            $carousel.empty();

            project.images.forEach((img, index) => {
                const active = index === 0 ? "active" : "";
                $carousel.append(`
        <div class="carousel-item ${active}">
          <div class="carousel-placeholder">
            ${img}
          </div>
        </div>
      `);
            });

            // Ouvrir le modal
            const modal = new bootstrap.Modal(document.getElementById("projectModal"));
            modal.show();
        });*/

        // Empêche l'envoi réel + petit feedback
        /*
        $("#contactForm").on("submit", function (e) {
            e.preventDefault();

            const btn = $(this).find(".cyber-btn");
            btn.html('<span class="btn-text">Message envoyé ✓</span>');
            btn.css({
                "background": "#dc3545",
                "border-color": "#dc3545",
                "pointer-events": "none"
            });

            // Reset après 3 secondes (optionnel)
            setTimeout(() => {
                btn.html('<span class="btn-text">Envoyer le message</span>');
                btn.css({
                    "background": "transparent",
                    "border-color": "#dc3545",
                    "pointer-events": "auto"
                });
                this.reset();
            }, 3000);
        });*/

        $(document).ready(function () {
            const texts = [
                "développeur web",
                "créateur d'interfaces",
                "passionné de tech",
                "gamer",
                "problem solver"
            ];

            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            const $typed = $("#typed-text");

            function typeEffect() {
                const current = texts[textIndex];

                if (isDeleting) {
                    $typed.text(current.substring(0, charIndex - 1));
                    charIndex--;
                } else {
                    $typed.text(current.substring(0, charIndex + 1));
                    charIndex++;
                }

                let speed = isDeleting ? 40 : 90;

                if (!isDeleting && charIndex === current.length) {
                    speed = 2000; // pause une fois le mot écrit
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    speed = 400;
                }

                setTimeout(typeEffect, speed);
            }

            // Démarrage après l'animation d'entrée
            setTimeout(typeEffect, 1400);
        });

        $(document).ready(function () {

  // ========== OUVRIR LES PANELS (Travaux Web / Mobile) ==========
  $(document).on("click", ".category-card", function () {
    const target = $(this).data("target"); // #panel-web ou #panel-mobile

    if (target) {
      $(target).addClass("active");
      $("body").addClass("panel-open");

      // Remet le scroll en haut
      $(target).find(".panel-body").scrollTop(0);
    }
  });

  // ========== FERMER LES PANELS ==========
  $(document).on("click", ".btn-close-panel", function () {
    $(".fullscreen-panel").removeClass("active");
    $("body").removeClass("panel-open");
  });

  // Fermer avec la touche Échap
  $(document).on("keydown", function (e) {
    if (e.key === "Escape") {
      $(".fullscreen-panel").removeClass("active");
      $("body").removeClass("panel-open");
    }
  });

});

// ========== TIMELINE PARCOURS PRO — apparition au scroll ==========
$(document).ready(function () {
    const timelineItems = document.querySelectorAll(".timeline-item");

    if (timelineItems.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.25,
            rootMargin: "0px 0px -60px 0px"
        });

        timelineItems.forEach((item) => observer.observe(item));
    }
});

// ========== STACK TECHNIQUE — apparition au scroll ==========
$(document).ready(function () {
    const stackCards = document.querySelectorAll(".stack-card");

    if (stackCards.length) {
        const stackObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    stackObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: "0px 0px -40px 0px"
        });

        stackCards.forEach((card) => stackObserver.observe(card));
    }
});
