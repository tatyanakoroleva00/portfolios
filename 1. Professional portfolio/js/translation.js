/*MAIN PAGE*/
const select = document.querySelector('.change-lang');
const allLang = ['en', 'ru', 'fr'];

const langArr = {
    "title-name" : {
        "ru" : "ТК - Сайт-Портфолио",
        "en" : "TK - Portfolio Website",
        "fr" : "TK - Website Portfolio",
    },
    "home" : {
        "ru" : "ГЛАВНАЯ",
        "en" : "HOME",
        "fr" : "PAGE PRINCIPALE",
    },
    "about" : {
        "ru" : "ОБО МНЕ",
        "en" : "ABOUT",
        "fr" : "MOI",
    },
    "portfolio" : {
        "ru" : "ПОРТФОЛИО",
        "en" : "PORTFOLIO",
        "fr" : "PORTFOLIO",
    },
    "blog" : {
        "ru" : "БЛОГ",
        "en" : "BLOG",
        "fr" : "BLOG",
    },
    "alter-ego" : {
        "ru" : "АЛЬТЕР ЭГО",
        "en" : "ALTER EGO",
        "fr" : "ALTER EGO",
    },
    "home-page__title" : {
        "ru" : "ТАТЬЯНА КОРОЛЕВА",
        "en" : "TATIANA KOROLEVA",
        "fr" : "TATIANA KOROLEVA",
    },
    "home-page__subtitle" : {
        "ru" : "Младший Фулстек Разработчик",
        "en" : "Junior Fullstack Developer",
        "fr" : "Développeur Junior Full stack",
    },
    "home-page__text" : {
        "ru" : 'На данный момент я нахожусь в поиске работы на позицию "Младший Фулстек Разработчик"',
        "en" : "Currently, I am looking for the employment opportunities in the IT field as a Junior Fullstack Developer",
        "fr" : "Actuellement, je suis à la recherche d'opportunités d'emploi dans le domaine informatique en tant que développeur Junior Full Stack",
    },
    "hire-btn" : {
        "ru" : "СОБЕСЕДОВАНИЕ",
        "en" : "HIRE ME",
        "fr" : "EMBAUCHEZ-MOI",
    },
    "download-cv-btn" : {
        "ru" : "СКАЧАТЬ РЕЗЮМЕ",
        "en" : "DOWNLOAD CV",
        "fr" : "TÉLÉCHARGER LE CV",
     },
    "about__title" : {
        "ru" : ". ОБО МНЕ",
        "en" : ". ABOUT ME",
        "fr" : ". MOI",
    },
    "education" : {
        "ru" : "Образование",
        "en" : "Education",
        "fr" : "Education",
    },
    "work-experience" : {
        "ru" : "Опыт работы",
        "en" : "Work Experience",
        "fr" : "Expérience Professionnelle",
    },
    "languages" : {
        "ru" : "Языки",
        "en" : "Languages",
        "fr" : "Langues",
    },
    "computer-skills" : {
        "ru" : "Компьютерные навыки",
        "en" : "Computer Skills",
        "fr" : "Compétences informatiques",
    },
    "soft-skills" : {
        "ru" : "Мягкие навыки",
        "en" : "Soft Skills",
        "fr" : "Compétences Générales",
    },
    "certificates" : {
        "ru" : "Дипломы",
        "en" : "Certificates",
        "fr" : "Certificats",
    },
    "education1" : {
        "ru" : "2023, FULLSTACK курсы. (260 часов) Центр \"Профессионал",
        "en" : "2023, FULLSTACK courses. (260 hours) Center \"Professional\"",
        "fr" : "2023, FULLSTACK cours. (260 heures) Centre \"Professionnel\"",
    },
    "education2" : {
        "ru" : "",
        "en" : "2015, M2 (MBA) “Business, European Management, Languages”",
        "fr" : "x",
    },
    "education3" : {
        "ru" : "",
        "en" : "2011, Military Interpreter (lieutenant grade)",
        "fr" : "x",
    },
    "education4" : {
        "ru" : "",
        "en" : "2009, M2 “Diplomacy, International Relations”",
        "fr" : "x",
    },
    "education5" : {
        "ru" : "",
        "en" : "English Special School",
        "fr" : "x",
    },
    "education1-location" : {
        "ru" : "",
        "en" : "Moscow, Russia. ",
        "fr" : "x",
    },
    "education1-location2" : {
        "ru" : "",
        "en" : "University of Orleans, France.",
        "fr" : "x",
    },
    "education1-location3" : {
        "ru" : "",
        "en" : "Moscow State Linguistic University, Military department, Russia.",
        "fr" : "x",
    },
    "education1-location4" : {
        "ru" : "",
        "en" : "Moscow State Linguistic University, Russia.",
        "fr" : "x",
    },
    "education1-location5" : {
        "ru" : "",
        "en" : "Moscow, Russia",
        "fr" : "x",
    },


};


function changingLanguagesFunction() {
    select.addEventListener('change', changeURLLanguage);

    function changeURLLanguage() {
        let lang = select.value;
        location.href = window.location.pathname + '#' + lang;
        location.reload();
    }
    function changeLanguage() {
        let hash = window.location.hash;
        hash = hash.substr(1);
        // console.log(hash);
        if (!allLang.includes(hash)) {
            location.href = window.location.pathname + '#en';
            location.reload();
        }
        select.value = hash;

        for (let key in langArr){
            let elem = document.querySelector('.lng-' + key);
            if (elem) {
                elem.innerHTML = langArr[key][hash];
                if (hash === 'ru') {
                    elem.style.fontWeight = '400';
                    elem.style.fontFamily = 'Roboto';
                }

            }

        }
    }
    changeLanguage();
}

changingLanguagesFunction();






