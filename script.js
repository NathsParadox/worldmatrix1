function scrollToSection(sectionId) {
    const section = document.getElement ById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
