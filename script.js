document.addEventListener("DOMContentLoaded", () => {

    /* ================= MOBILE MENU ================= */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("show");

            const icon = menuBtn.querySelector("i");

            if (navLinks.classList.contains("show")) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        });

    }


    /* ================= CLOSE MENU ================= */

    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            const icon = menuBtn?.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        });

    });


    /* ================= ACTIVE NAV ================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navItems =
        document.querySelectorAll(".nav-link");

    function updateNav() {

        let current = "";

        sections.forEach(section => {

            const top =
                section.offsetTop - 160;

            const height =
                section.offsetHeight;

            if (
                window.scrollY >= top &&
                window.scrollY < top + height
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navItems.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", updateNav);

    updateNav();


    /* ================= HEADER ================= */

    const header =
        document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.style.background =
                "rgba(5,7,17,.94)";

            header.style.boxShadow =
                "0 15px 50px rgba(0,0,0,.2)";

        } else {

            header.style.background =
                "rgba(5,7,17,.72)";

            header.style.boxShadow =
                "none";

        }

    });


    /* ================= SCROLL REVEAL ================= */

    const revealElements =
        document.querySelectorAll(
            ".info-card, .skill-category, .project-card, .timeline-item, .focus-card, .github-card, .linkedin-card"
        );


    revealElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity .7s ease, transform .7s ease";

    });


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .12
            }
        );


    revealElements.forEach(element => {

        observer.observe(element);

    });


    /* =====================================================
       PROJECT DETAILS
    ===================================================== */

    const projectModal =
        document.getElementById("projectModal");

    const projectModalBody =
        document.getElementById("projectModalBody");

    const projectClose =
        document.getElementById("projectModalClose");


    const projectData = {

        destino: {

            label:
                "TRAVEL / TOURISM APPLICATION",

            title:
                "Destino",

            subtitle:
                "Discover places. Explore experiences.",

            description:
                "Destino is a tourism-focused digital platform designed to help users discover interesting destinations and explore travel experiences in a more engaging and useful way. The project is currently under development.",

            problem:
                "Travelers often have difficulty discovering interesting destinations, understanding places and finding useful travel information in one convenient experience.",

            solution:
                "Destino aims to bring destination discovery, useful information, maps and an engaging travel experience into a single digital platform.",

            features: [

                "Destination discovery",

                "Travel information",

                "Interactive exploration",

                "Maps integration",

                "AI-powered possibilities",

                "Modern mobile UI",

                "Engaging travel experience"

            ],

            technologies: [

                "Flutter",

                "AI",

                "Maps",

                "Modern UI / UX"

            ]

        },


        rentease: {

            label:
                "AI + RENTAL PLATFORM",

            title:
                "RentEase AI",

            subtitle:
                "Find Better. Choose Smarter. Live Better.",

            description:
                "RentEase AI is an AI-powered rental platform designed to help users discover suitable rental houses, apartments, PGs, hostels and rooms based on location, budget and preferences. The project is currently being developed.",

            problem:
                "Finding suitable rental accommodation can be difficult because users need to compare location, budget, property type and nearby services while making a decision.",

            solution:
                "RentEase AI aims to simplify rental discovery using intelligent recommendations, location-based search, property listings and nearby service discovery.",

            features: [

                "AI-powered recommendations",

                "Rental property discovery",

                "Budget-based search",

                "Location-based search",

                "Houses, apartments, PGs and hostels",

                "Nearby restaurants and services",

                "Google Maps integration",

                "Google Places integration",

                "Property listings",

                "Ratings and reviews",

                "Owner and user interaction",

                "Modern mobile UI"

            ],

            technologies: [

                "Flutter",

                "Artificial Intelligence",

                "Google Maps",

                "Google Places",

                "Cloud Firestore",

                "Material 3"

            ]

        }

    };


    function openProject(projectName) {

        const project =
            projectData[projectName];

        if (!project) return;


        projectModalBody.innerHTML = `

            <span class="modal-label">
                ${project.label}
            </span>

            <h2>
                ${project.title}
            </h2>

            <h3>
                ${project.subtitle}
            </h3>

            <p>
                ${project.description}
            </p>


            <span class="modal-status">
                🚧 Currently Building
            </span>


            <div class="modal-section">

                <h4>
                    Problem Statement
                </h4>

                <p>
                    ${project.problem}
                </p>

            </div>


            <div class="modal-section">

                <h4>
                    Proposed Solution
                </h4>

                <p>
                    ${project.solution}
                </p>

            </div>


            <div class="modal-section">

                <h4>
                    Key Features
                </h4>

                <ul>

                    ${project.features
                        .map(
                            feature =>
                                `<li>${feature}</li>`
                        )
                        .join("")
                    }

                </ul>

            </div>


            <div class="modal-section">

                <h4>
                    Technologies
                </h4>

                <div class="modal-tech">

                    ${project.technologies
                        .map(
                            tech =>
                                `<span>${tech}</span>`
                        )
                        .join("")
                    }

                </div>

            </div>

        `;


        projectModal.classList.add("show");

        document.body.style.overflow = "hidden";

    }


    document
        .querySelectorAll(".project-details-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    const card =
                        button.closest(
                            ".project-card"
                        );

                    const projectName =
                        card.dataset.project;

                    openProject(projectName);

                }
            );

        });


    /* ================= CLOSE PROJECT ================= */

    function closeProjectModal() {

        projectModal.classList.remove("show");

        document.body.style.overflow = "";

    }


    projectClose.addEventListener(
        "click",
        closeProjectModal
    );


    projectModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                projectModal
            ) {

                closeProjectModal();

            }

        }
    );


    /* =====================================================
       ACHIEVEMENT MODAL
    ===================================================== */

    const achievementCard =
        document.getElementById(
            "achievementCard"
        );

    const achievementModal =
        document.getElementById(
            "achievementModal"
        );

    const achievementClose =
        document.getElementById(
            "achievementModalClose"
        );


    achievementCard.addEventListener(
        "click",
        () => {

            achievementModal.classList.add(
                "show"
            );

            document.body.style.overflow =
                "hidden";

        }
    );


    achievementClose.addEventListener(
        "click",
        () => {

            achievementModal.classList.remove(
                "show"
            );

            document.body.style.overflow =
                "";

        }
    );


    achievementModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                achievementModal
            ) {

                achievementModal.classList.remove(
                    "show"
                );

                document.body.style.overflow =
                    "";

            }

        }
    );


    /* ================= ESC KEY ================= */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                projectModal.classList.remove(
                    "show"
                );

                achievementModal.classList.remove(
                    "show"
                );

                document.body.style.overflow =
                    "";

            }

        }
    );


    /* ================= SMOOTH LINKS ================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                event => {

                    const target =
                        document.querySelector(
                            anchor.getAttribute(
                                "href"
                            )
                        );

                    if (!target) return;

                    event.preventDefault();

                    const headerHeight =
                        header.offsetHeight;

                    window.scrollTo({

                        top:
                            target.offsetTop -
                            headerHeight,

                        behavior:
                            "smooth"

                    });

                }
            );

        });


    /* ================= CONTACT FORM ================= */

    const form =
        document.querySelector(
            ".contact-form"
        );


    if (form) {

        form.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const name =
                    form.querySelector(
                        '[name="name"]'
                    ).value.trim();


                const email =
                    form.querySelector(
                        '[name="email"]'
                    ).value.trim();


                const message =
                    form.querySelector(
                        '[name="message"]'
                    ).value.trim();


                if (
                    !name ||
                    !email ||
                    !message
                ) {

                    alert(
                        "Please fill in all fields."
                    );

                    return;

                }


                alert(
                    "Thank you! Your message form is ready to be connected to an email service."
                );


                form.reset();

            }
        );

    }


    /* ================= PROJECT TILT ================= */

    document
        .querySelectorAll(".project-card")
        .forEach(card => {

            card.addEventListener(
                "mousemove",
                event => {

                    if (
                        window.innerWidth < 900
                    ) return;


                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const rotateY =
                        ((x -
                            rect.width / 2) /
                            rect.width) *
                        3;


                    const rotateX =
                        ((y -
                            rect.height / 2) /
                            rect.height) *
                        -3;


                    card.style.transform =
                        `perspective(1000px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         translateY(-5px)`;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        });


});