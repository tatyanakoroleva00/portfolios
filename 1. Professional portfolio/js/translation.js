/*MAIN PAGE*/
const select = document.querySelector('.change-lang');
const allLang = ['en', 'ru'];

const langArr = {
    "title-name" : {
        "ru" : "ТК - Сайт-Портфолио",
        "en" : "TK - Portfolio Website",
    },
    "home" : {
        "ru" : "ГЛАВНАЯ",
        "en" : "HOME",
    },
    "about" : {
        "ru" : "ОБО МНЕ",
        "en" : "HOME",
    },
    "portfolio" : {
        "ru" : "ПОРТФОЛИО",
        "en" : "PORTFOLIO",
    },
    "blog" : {
        "ru" : "БЛОГ",
        "en" : "BLOG",
    },
    "alter-ego" : {
        "ru" : "АЛЬТЕР ЭГО",
        "en" : "ALTER_EGO",
    },
    "home-page__title" : {
        "ru" : "ТАТЬЯНА КОРОЛЕВА",
        "en" : "TATIANA KOROLEVA",
    },
    "home-page__subtitle" : {
        "ru" : "Младший Фуллстэк Разработчик",
        "en" : "Junior Fullstack Developer",
    },
    "home-page__text" : {
        "ru" : 'На данный момент я нахожусь в поиске работы на позицию "Младший Фуллстэк Разработчик"',
        "en" : "Currently, I am looking for the employment opportunities in the IT field as a Junior Fullstack Developer",
    },
    "hire-btn" : {
        "ru" : "НАПИСАТЬ",
        "en" : "HIRE ME",
    },
    "download-cv-btn" : {
        "ru" : "СКАЧАТЬ РЕЗЮМЕ",
        "en" : "DOWNLOAD CV",
    },
};


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
        }

        if (hash === 'ru') {
            elem.style.fontFamily = 'Arial';
        }
    }

}
changeLanguage();




/******************************************ABOUT ME************************************/
//
// $ABOUT_ME  = [
//     'ru' => 'ОБО МНЕ',
//     'en' => 'ABOUT ME',
// ];
//
// $Education  = [
//     'ru' => 'Образование',
//     'en' => 'Education',
// ];
// $Work_Experience  = [
//     'ru' => 'Опыт работы',
//     'en' => 'Work Experience',
// ];
// $Languages  = [
//     'ru' => 'Языки',
//     'en' => 'Languages',
// ];
// $Computer_Skills  = [
//     'ru' => 'Компьютерные навыки',
//     'en' => 'Computer Skills',
// ];
// $Soft_Skills  = [
//     'ru' => 'Личностные качества',
//     'en' => 'Soft Skills',
// ];
// $Certificates  = [
//     'ru' => 'Дипломы',
//     'en' => 'Certificates',
// ];
//
// $edu1  = [
//     'ru' => '2023, FULLSTACK курсы. (260часов) Центр "Профессионал"',
//     'en' => '2023, FULLSTACK courses. (260hours) Center "Professional"',
// ];
//





