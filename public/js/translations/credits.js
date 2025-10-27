
const translations = {
    en: {
        main: "Ipv4 Protocol Internet Calculator",
        language: "Language",
        calculadora: "Calculator IPV4",
        go: "Go",
        title: "Credits.",
        language: "Language",
        color: "Color",
        red: "Red",
        blue: "Blue",
        green: "Green",
        h1: "Author",
        p1: "Juan Pablo Ríos Rodríguez",
        h2: "Contact",
        p2: "pjrios2016@gmail.com"
    },
    es: {
        main: "Calculadora de Protocolo Ipv4",
        language: "Idioma",
        calculadora: "Calculadora IPV4",
        title: "Creditos.",
        description: "Calcula en línea.",
        color: "Color",
        red: "Rojo",
        blue: "Azul",
        green: "Verde",
        h1: "Autor",
        p1: "Juan Pablo Ríos Rodríguez",
        h2: "Contacto",
        p2: "pjrios2016@gmail.com"
    }

};

function changeLanguage(lang) {
    localStorage.setItem('language', lang);
    document.getElementById('main').textContent = translations[lang].main;
    document.getElementById('language').textContent = translations[lang].language;
    document.getElementById('calculadora').textContent = translations[lang].calculadora;
    document.getElementById('title').textContent = translations[lang].title;
    document.getElementById('color').textContent = translations[lang].color;
    document.getElementById('red').textContent = translations[lang].red;
    document.getElementById('green').textContent = translations[lang].green;
    document.getElementById('blue').textContent = translations[lang].blue;
    document.getElementById('h1').textContent = translations[lang].h1;
    document.getElementById('p1').textContent = translations[lang].p1;
    document.getElementById('h2').textContent = translations[lang].h2;
    document.getElementById('p2').textContent = translations[lang].p2;
    document.documentElement.lang = lang; 
}

window.onload = () => {
    const savedLang = localStorage.getItem('language') || 'es'; // Por defecto el español
    changeLanguage(savedLang);
};