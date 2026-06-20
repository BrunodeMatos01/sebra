const revealElements = document.querySelectorAll(".reveal");
const railDots = document.querySelectorAll(".scroll-rail i");
const interactiveCards = document.querySelectorAll(".problem-card, .feature-item, .data-card, .value-card, .comparison-panel, .contact-form, .command-center");
const typedWord = document.querySelector(".typed-word");
const timeline = document.querySelector("[data-timeline]");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.14 });

revealElements.forEach((element) => revealObserver.observe(element));

const updateScrollRail = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0;

    document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(2));

    railDots.forEach((dot) => {
        const step = Number.parseFloat(dot.style.getPropertyValue("--rail-step"));
        dot.classList.toggle("is-lit", progress >= step);
    });

    if (timeline) {
        const rect = timeline.getBoundingClientRect();
        const start = window.innerHeight * 0.72;
        const end = rect.height - window.innerHeight * 0.18;
        const timelineProgress = Math.min(100, Math.max(0, ((start - rect.top) / end) * 100));
        timeline.style.setProperty("--timeline-progress", timelineProgress.toFixed(2));
    }
};

interactiveCards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        card.style.setProperty("--glow-x", `${x}%`);
        card.style.setProperty("--glow-y", `${y}%`);
    });
});

if (typedWord) {
    const words = typedWord.dataset.words.split(",").map((word) => word.trim()).filter(Boolean);
    let wordIndex = 0;
    let letterIndex = typedWord.textContent.length;
    let deleting = false;

    const typeLoop = () => {
        const current = words[wordIndex];
        typedWord.textContent = current.slice(0, letterIndex);

        if (!deleting && letterIndex === current.length) {
            deleting = true;
            window.setTimeout(typeLoop, 1350);
            return;
        }

        if (deleting && letterIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        letterIndex += deleting ? -1 : 1;
        window.setTimeout(typeLoop, deleting ? 46 : 82);
    };

    window.setTimeout(typeLoop, 900);
}

document.querySelectorAll("[data-tabs]").forEach((tabsRoot) => {
    const buttons = tabsRoot.querySelectorAll("[data-tab]");
    const panels = tabsRoot.querySelectorAll("[data-panel]");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const target = button.dataset.tab;

            buttons.forEach((item) => item.classList.toggle("is-active", item === button));
            panels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.panel === target));
        });
    });
});

document.querySelectorAll("[data-accordion]").forEach((accordion) => {
    const buttons = accordion.querySelectorAll("[data-accordion-button]");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const panel = button.nextElementSibling;
            const isOpen = button.classList.contains("is-open");

            buttons.forEach((item) => {
                item.classList.remove("is-open");
                item.nextElementSibling?.classList.remove("is-open");
            });

            if (!isOpen) {
                button.classList.add("is-open");
                panel?.classList.add("is-open");
            }
        });
    });
});

document.querySelectorAll("[data-faq]").forEach((faq) => {
    const questions = faq.querySelectorAll(".faq-item");

    questions.forEach((question) => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            const isOpen = question.classList.contains("is-open");

            questions.forEach((item) => {
                item.classList.remove("is-open");
                item.nextElementSibling?.classList.remove("is-open");
            });

            if (!isOpen) {
                question.classList.add("is-open");
                answer?.classList.add("is-open");
            }
        });
    });
});

window.addEventListener("scroll", updateScrollRail, { passive: true });
window.addEventListener("resize", updateScrollRail);
updateScrollRail();
