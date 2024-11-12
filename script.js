document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('nav button');
    const sections = document.querySelectorAll('.content-section');

    function showSection(sectionId) {
        sections.forEach(section => {
            section.style.display = section.id === sectionId ? 'block' : 'none';
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // Show the "About" section by default on page load
    showSection('about');
});

