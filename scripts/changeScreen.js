function ChangeScreen(sectionName = "")
{
    // Seleciona todas as seções
    const sections = document.querySelectorAll('section');

    // Adiciona a classe "disabled" a todas as seções
    sections.forEach(section => {
        section.classList.add('disabled');
        section.classList.remove('active');
    });

    // Remove a classe "disabled" da seção com o ID especificado
    const activeSection = document.getElementById(sectionName);
    if (activeSection) {
        activeSection.classList.remove('disabled');
        activeSection.classList.remove('disabled');
    }
}