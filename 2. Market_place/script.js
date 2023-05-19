const dropdownBtnCatalogue = document.querySelector('#dropdown-btn--catalogue');
const dropdownContent= document.querySelector('#dropdown-content');


dropdownBtnCatalogue.addEventListener('mouseover', () => {
    dropdownContent.style.display = 'block';
});
dropdownBtnCatalogue.addEventListener('mouseout', () => {
    dropdownContent.style.display = 'none';
});
dropdownContent.addEventListener('mouseover', () => {
    dropdownContent.style.display = 'block';
});

dropdownContent.addEventListener('mouseout', () => {
    dropdownContent.style.display = 'none';
});