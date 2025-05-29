// Завантаження та відображення markdown контенту
document.addEventListener('DOMContentLoaded', function() {
    fetch('technical-specification.md')
        .then(response => response.text())
        .then(markdown => {
            const html = marked.parse(markdown);
            document.getElementById('markdown-content').innerHTML = html;
            
            // Підсвічування коду
            Prism.highlightAll();
            
            // Додавання плавної прокрутки для анкорів
            addSmoothScrolling();
        })
        .catch(error => {
            console.error('Помилка завантаження markdown файлу:', error);
            document.getElementById('markdown-content').innerHTML = 
                '<p>Помилка завантаження технічного завдання. Будь ласка, спробуйте пізніше.</p>';
        });
});

function addSmoothScrolling() {
    // Додавання плавної прокрутки для всіх посилань на анкори
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Додавання ідентифікаторів для заголовків
function addHeadingIds() {
    const headings = document.querySelectorAll('#markdown-content h1, #markdown-content h2, #markdown-content h3');
    headings.forEach(heading => {
        const id = heading.textContent
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
        heading.id = id;
    });
}

// Виклик функції після завантаження контенту
setTimeout(addHeadingIds, 100);