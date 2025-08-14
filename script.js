function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Piccola animazione in entrata per le sezioni
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".content");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(40px)";
        section.style.transition = "all 0.6s ease-out";
        observer.observe(section);
    });
});