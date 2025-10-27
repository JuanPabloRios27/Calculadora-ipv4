
const translations = {
    en: {
        main: "Ipv4 Protocol Internet Calculator",
        language: "Language",
        creditos: "Credits",
        go: "Go",
        title: "Ipv4 Protocol Internet Calculator.",
        description: "Calculate online.",
        parrafo: "Calculate this ipv addresss for me.....",
        now: "now",
        description2: "Results",
        binarynumber: "Binary Representation: ",
        subnet: "Subnet mask:",
        ip_red: "Network address:",
        broadcast: "Broadcast:",
        gateway: "Gateway: ",
        classs: "Class: ",
        type: "Type: ",
        host: "Amount of hosts: ",
        listUtilIp: "Address list index: ",
        version: "version: 1.3",
        color: "Color",
        red: "Red",
        blue: "Blue",
        green: "Green"
    },
    es: {
        main: "Calculadora de Protocolo Ipv4",
        language: "Idioma",
        creditos: "Créditos",
        go: "Vamos",
        title: "Calculadora de Protocolo Ipv4.",
        description: "Calcula en línea.",
        parrafo: "Calcula esta dirección ip.....",
        now: "ahora",
        description2: "Resultados",
        binarynumber: "Representación Binaria: ",
        subnet: "Mascara de red: ",
        ip_red: "Dirección Ip de red: ",
        broadcast: "Dirección Ip de Broadcast: ",
        gateway: "Dirección Ip de gateway: ",
        classs: "Clase: ",
        type: "Tipo: ",
        host: "Cantidad de hosts: ",
        listUtilIp: "Rango de Ip's utiles: ",
        version: "versión: 1.3",
        color: "Color",
        red: "Rojo",
        blue: "Azul",
        green: "Verde"
    }

};

function changeLanguage(lang) {
    localStorage.setItem('language', lang);
    document.getElementById('main').textContent = translations[lang].main;
    document.getElementById('title').textContent = translations[lang].title;
    document.getElementById('language').textContent = translations[lang].language;
    document.getElementById('creditos').textContent = translations[lang].creditos;
    document.getElementById('go').textContent = translations[lang].go;
    document.getElementById('description').textContent = translations[lang].description;
    document.getElementById('parrafo').textContent = translations[lang].parrafo;
    document.getElementById('now').textContent = translations[lang].now;
    document.getElementById('description2').textContent = translations[lang].description2;
    document.getElementById('binarynumber').textContent = translations[lang].binarynumber;
    document.getElementById('subnet').textContent = translations[lang].subnet;
    document.getElementById('ip_red').textContent = translations[lang].ip_red;
    document.getElementById('broadcast').textContent = translations[lang].broadcast;
    document.getElementById('gateway').textContent = translations[lang].gateway;
    document.getElementById('classs').textContent = translations[lang].classs;
    document.getElementById('type').textContent = translations[lang].type;
    document.getElementById('hosts').textContent = translations[lang].host;
    document.getElementById('listUtilIp').textContent = translations[lang].listUtilIp;
    document.getElementById('version').textContent = translations[lang].version;
    document.getElementById('color').textContent = translations[lang].color;
    document.getElementById('red').textContent = translations[lang].red;
    document.getElementById('green').textContent = translations[lang].green;
    document.getElementById('blue').textContent = translations[lang].blue;
    document.documentElement.lang = lang; 
}

window.onload = () => {
    const savedLang = localStorage.getItem('language') || 'es'; // Por defecto el español
    changeLanguage(savedLang);
};
