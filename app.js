var r = document.querySelector(':root');
var darkButton = document.getElementById('dark-mode-button');
var lightButton = document.getElementById('light-mode-button');

function switchTheme(){
    var theme = getCookie("theme");

    if(theme === "light"){
        document.cookie = "theme=dark";
    } else {
        document.cookie = "theme=light";
    }

    setTheme();
}

function setTheme(){
    var theme = getCookie("theme");

    if(theme === "dark") {
        toggleDarkMode();
    }

    if(theme === "light") {
        toggleLightMode();
    }
}

function toggleLightMode(){
    r.style.setProperty('--bg-color', '#ffffff');
    r.style.setProperty('--navbar-color', '#eeeeee');
    r.style.setProperty('--icon-color', '#ff3b00');
    r.style.setProperty('--highlight-color','#0044ff');
    r.style.setProperty('--text-color', '#000000');
    r.style.setProperty('--inner-toggle-color', '#00aaff');
    r.style.setProperty('--bg-image', 'url("./assets/bg-light.png")');

    var modeIcon = document.getElementById("theme-icon");
    modeIcon.innerHTML = '<i class="bi bi-sun-fill light-theme-icon"></i>';
}

function toggleDarkMode(){
    r.style.setProperty('--bg-color', '#111111');
    r.style.setProperty('--navbar-color', '#050505');
    r.style.setProperty('--icon-color', '#00dd6b');
    r.style.setProperty('--highlight-color','#ffb300');
    r.style.setProperty('--text-color', '#ffffff');
    r.style.setProperty('--inner-toggle-color', '#000022');
    r.style.setProperty('--bg-image', 'url("./assets/bg-dark.png")');

    var modeIcon = document.getElementById("theme-icon");
    modeIcon.innerHTML = '<i class="bi bi-moon-fill dark-theme-icon"></i>';
}

function switchLanguage(){
    var language = getCookie("language");

    if(language === "english"){
        document.cookie = "language=spanish";
    }
    
    if(language === "spanish"){
        document.cookie = "language=english";
    }

    setLanguage();
}

function setLanguage(){
    var spanishApps = [
        "Una aplicación sencilla que utiliza la API del tiempo de openweathermap.org",
        "Generador de códigos QR con algunas opciones de personalización",
        "Devflix: un clon de Netflix creado en React",
        "* Próximamente *",
        "Una aplicación de escritorio en C# que gestiona archivos de texto de OBS enfocada a juegos de lucha"
    ];

    var englishApps = [
        "A simple application using openweathermap.org weather API",
        "QR generator with some customization options",
        "Devflix: a Netflix clone made with React",
        "* Coming soon *",
        "A C# desktop application that manages OBS text files focused on fighting videogames"
    ];

    var appsInfo = document.getElementsByClassName("picture-info");
    var appsInfoSs = document.getElementsByClassName("picture-info-ss");

    var language = getCookie("language");

    var aboutHeader = document.getElementById("about-text-header");
    var aboutHeader2 = document.getElementById("about-text-header-2");
    var aboutBody = document.getElementById("about-text-body");
    var aboutBody2 = document.getElementById("about-text-body-2");
    var workHeader = document.getElementById("work-header");
    var skillsHeader = document.getElementById("skills-header");
    var contactHeader = document.getElementById("contact-header");

    var languageFlag = document.getElementById("language-flag");
    
    var about = document.getElementById("about-text");

    if(language === "spanish") {
        aboutHeader.innerHTML = '¡Hola!';
        aboutBody.innerHTML = '<p>Soy José María, bienvenid@ a mi página personal. Más abajo tienes un poco de lo que puedo hacer y algunas cosas que sé. Me gusta el diseño sencillo y limpio.</p>' +
                              '<p>Si te agrada y te apetece contactar conmigo, te he dejado algunas opciones al final de la página. ¡Un saludo!</p>';
        aboutHeader2.innerHTML = '¡Hola!';
        aboutBody2.innerHTML = '<p>Soy José María, bienvenid@ a mi página personal. Más abajo tienes un poco de lo que puedo hacer y algunas cosas que sé. Me gusta el diseño sencillo y limpio.</p>' +
                              '<p>Si te agrada y te apetece contactar conmigo, te he dejado algunas opciones al final de la página. ¡Un saludo!</p>';
                              
        
        workHeader.innerHTML = 'Proyectos';
        skillsHeader.innerHTML = 'Aptitudes';
        contactHeader.innerHTML = 'Contacto';

        languageFlag.src = "./assets/spanish.png";
    
        for(let i=0; i < appsInfo.length; i++) {
            appsInfo[i].innerHTML = spanishApps[i];
            appsInfoSs[i].innerHTML = spanishApps[i];
        }
    }

    if(language === "english") {
        aboutHeader.innerHTML = 'Greetings!';
        aboutBody.innerHTML = "<p>I'm José María, welcome to my landing page. Right below you have a taste of some of my skills and knowledge.</p>" +
        "<p>If you liked it and you're into contacting me I left you some options at the end of this site. Farewell!</p>";
        aboutHeader2.innerHTML = 'Greetings!';
        aboutBody2.innerHTML = "<p>I'm José María, welcome to my landing page. Right below you have a taste of some of my skills and knowledge.</p>" +
        "<p>If you liked it and you're into contacting me I left you some options at the end of this site. Farewell!</p>";

        workHeader.innerHTML = 'Work';
        skillsHeader.innerHTML = 'Skills';
        contactHeader.innerHTML = 'Contact';

        languageFlag.src = "./assets/english.png";

        for(let i=0; i < appsInfo.length; i++) {
            appsInfo[i].innerHTML = englishApps[i];
            appsInfoSs[i].innerHTML = englishApps[i];
        }
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }