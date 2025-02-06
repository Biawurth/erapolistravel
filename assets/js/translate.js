// Função para definir o idioma
function setLanguage(lang) {
    localStorage.setItem('language', lang); // Salva o idioma no localStorage
    translatePage();
}

// Função para traduzir a página com base no idioma selecionado
function translatePage() {
    const lang = localStorage.getItem('language') || 'pt'; // Padrão: Português
    const translations = {
        en: {
            'destination-title': 'Europe',
            'description': 'Enchanting and Historic Itineraries',
        },
        pt: {
            'destination-title': 'Europa',
            'description': 'Roteiros de Encanto e de História',
        }
    };

    // Seleciona todos os elementos com IDs e traduz
    document.querySelectorAll('[id]').forEach(element => {
        const key = element.id;
        if (translations[lang] && translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });
}

// Traduz automaticamente ao carregar a página

document.addEventListener("DOMContentLoaded", function() {
    const userLanguage = getLanguage();
    translatePage(userLanguage);
});

