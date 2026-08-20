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
            "phase": {
                title: "Phase.com",
                category: "Web",
                year: "2024",
                description: "Boutique en ligne dédiée au produit Phase, destinée aux DJs. Développée avec HTML, CSS, JavaScript et PrestaShop, front-end 100 % custom. Intégration d’un système de précommande.",
                techs: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap", "Prestashop"],
                link: "#",
                images: [
                    "<img src=\"ressources/img/web/phase3.png\">",
                    "<img src=\"ressources/img/web/phase6.png\">",
                    "<img src=\"ressources/img/web/phase5.png\">",
                    "<img src=\"ressources/img/web/phase4.png\">",
                    "<img src=\"ressources/img/web/phase1.png\">",
                    "<img src=\"ressources/img/web/phase2.png\">"
                ]
            },
            "mixfader": {
                title: "Mixfader.com",
                category: "Web",
                year: "2024",
                description: "Plateforme de vente en ligne conçue autour du produit Mixfader, spécialement pensée pour les DJs. Front-end 100 % sur mesure en HTML, CSS et JavaScript, intégré à PrestaShop. Système de précommande, design immersif, animations fluides et expérience mobile optimisée.",
                techs: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap", "Prestashop"],
                link: "#",
                images: [
                    "<img src=\"ressources/img/web/mixfader1.png\">", 
                    "<img src=\"ressources/img/web/mixfader2.png\">", 
                    "<img src=\"ressources/img/web/mixfader3.png\">",
                    "<img src=\"ressources/img/web/mixfader4.png\">", 
                    "<img src=\"ressources/img/web/mixfader5.png\">", 
                    "<img src=\"ressources/img/web/mixfader6.png\">"
                ]
            },
            "mwm": {
                title: "musicworldmedia.com",
                category: "Web",
                year: "2023",
                description: "Site vitrine réalisé pour musicworldmedia.com, présentant la société et mettant en avant ses différents produits. Design moderne avec animations fluides et dynamiques pour une expérience utilisateur immersive.",
                techs: ["HTML", "CSS", "JavaScript"],
                link: "#",
                images: [
                    "<img src=\"ressources/img/web/mwm1.png\">", 
                    "<img src=\"ressources/img/web/mwm2.png\">", 
                    "<img src=\"ressources/img/web/mwm3.png\">",
                    "<img src=\"ressources/img/web/mwm4.png\">", 
                    "<img src=\"ressources/img/web/mwm5.png\">",
                    "<img src=\"ressources/img/web/mwm6.png\">"
                ]
            },
            "edjing": {
                title: "edjing.com",
                category: "Web",
                year: "2024",
                description: "Site vitrine conçu pour edjing.com, présentant l’application de DJ mobile. Intégration d’un player permettant d’écouter les mix créés depuis l’application.",
                techs: ["HTML", "CSS", "JavaScript"],
                link: "#",
                images: [
                    "<img src=\"ressources/img/web/edjing1.png\">", 
                    "<img src=\"ressources/img/web/edjing2.png\">", 
                    "<img src=\"ressources/img/web/edjing5.png\">"
                ]
            },
            "aspen": {
                title: "aspen",
                category: "Web",
                year: "2023",
                description: "Integration de la maquette.",
                techs: ["HTML", "CSS", "JavaScript"],
                link: "#",
                images: ["<img src=\"ressources/img/web/aspen1.png\">"]
            },
            "dashboard": {
                title: "dashboard",
                category: "Web",
                year: "2024",
                description: "Developpement de dashboard qui permettent de gérer à distance tout le parc d'applications mobile. Gestion des AB tests inapp, traductions, pricing... (images d'illustration pour raison de confidentialité)",
                techs: ["Angular", "Vue.js"],
                link: "#",
                images: ["<img src=\"ressources/img/web/dashboard1.png\">", "<img src=\"ressources/img/web/dashboard2.png\">"]
            },
            "tuner": {
                title: "Tuner Pro: Guitar Tuner & Tab",
                category: "Web",
                year: "2024",
                description: "Application d'apprentissage de la guitare + accordeur",
                techs: ["Swift"],
                link: "#",
                images: [
                    "<img src=\"ressources/img/web/tuner1.png\">", 
                    "<img src=\"ressources/img/web/tuner2.png\">", 
                    "<img src=\"ressources/img/web/tuner3.png\">",
                    "<img src=\"ressources/img/web/tuner4.png\">", 
                    "<img src=\"ressources/img/web/tuner5.png\">"
                ]
            },
            "eq": {
                title: "Equalizer+ HD music player",
                category: "Web",
                year: "2024",
                description: "Application permettant d'ajuster l'audio de son device iOS",
                techs: ["Swift"],
                link: "#",
                images: [
                    "<img src=\"ressources/img/web/eq1.png\">", 
                    "<img src=\"ressources/img/web/eq2.png\">", 
                    "<img src=\"ressources/img/web/eq3.png\">",
                    "<img src=\"ressources/img/web/eq4.png\">", 
                    "<img src=\"ressources/img/web/eq5.png\">"
                ]
            },
            "ring": {
                title: "Ringtones HD",
                category: "Web",
                year: "2024",
                description: "Appliction de gestion de sonnerie personnalisée",
                techs: ["Swift"],
                link: "#",
                images: [
                    "<img src=\"ressources/img/web/ring1.png\">", 
                    "<img src=\"ressources/img/web/ring2.png\">", 
                    "<img src=\"ressources/img/web/ring3.png\">",
                    "<img src=\"ressources/img/web/ring4.png\">", 
                    "<img src=\"ressources/img/web/ring5.png\">"
                ]
            },
            "pop": {
                title: "Color Pop: AI Coloring Book",
                category: "Web",
                year: "2024",
                description: "Application de coloriage communautaire. Possibilité de partager ses coloriages",
                techs: ["Swift"],
                link: "#",
                images: [
                    "<img src=\"ressources/img/web/pop1.png\">", 
                    "<img src=\"ressources/img/web/pop2.png\">", 
                    "<img src=\"ressources/img/web/pop3.png\">",
                    "<img src=\"ressources/img/web/pop4.png\">", 
                    "<img src=\"ressources/img/web/pop5.png\">"
                ]
            },
            "pixel": {
                title: "Pixel Color",
                category: "Web",
                year: "2024",
                description: "Application de coloriage via zones associées à des numéros",
                techs: ["Swift"],
                link: "#",
                images: [
                    "<img src=\"ressources/img/web/pixel1.png\">", 
                    "<img src=\"ressources/img/web/pixel2.png\">", 
                    "<img src=\"ressources/img/web/pixel3.png\">",
                    "<img src=\"ressources/img/web/pixel4.png\">", 
                    "<img src=\"ressources/img/web/pixel5.png\">"
                ]
            },
            "metro": {
                title: "Metronome Pro - Beat & Tempo",
                category: "Web",
                year: "2024",
                description: "Application utilitaire de metronome + mini jeux de rythme",
                techs: ["Swift"],
                link: "#",
                images: [
                    "<img src=\"ressources/img/web/metro1.png\">", 
                    "<img src=\"ressources/img/web/metro2.png\">", 
                    "<img src=\"ressources/img/web/metro3.png\">",
                    "<img src=\"ressources/img/web/metro4.png\">", 
                    "<img src=\"ressources/img/web/metro5.png\">"
                ]
            }
        };
        
        // Clic sur une carte projet
        $(document).on("click", ".placeholder-card", function () {
            const projectId = $(this).data("project");
            const project = projects[projectId];
            const isMobile = $(this).hasClass("mobile")
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
            if (isMobile) {
                $carousel.addClass( "mobile" );
            } else {
                $carousel.removeClass( "mobile" );
            }
            
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
        });

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
