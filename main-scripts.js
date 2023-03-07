const faqs = document.querySelectorAll(".faq");

faqs[0].classList.add("active");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        if (faq.classList.contains("active")) {
            faq.classList.remove("active");
        } else {
            faqs.forEach(faq => faq.classList.remove("active"));
            faq.classList.add("active");
        }
    });
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
