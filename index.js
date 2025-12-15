const dropdown = document.getElementById('featuresDropdown');
const dropdownList = document.getElementById('featuresList');
const arrow = document.getElementById('featuresArrow');

dropdown.addEventListener('click', () => {
    const isShown = dropdownList.classList.toggle('show');
    if (isShown) {
        arrow.src = 'Media/icon-arrow-up.svg';
        arrow.classList.add('up');
    } else {
        arrow.src = 'Media/icon-arrow-down.svg';
        arrow.classList.remove('up');
    }
});

document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
        dropdownList.classList.remove('show');
        arrow.src = 'Media/icon-arrow-down.svg';
        arrow.classList.remove('up');
    }
});



const companyDropdown = document.getElementById('companyDropdown');
const companyList = document.getElementById('companyList');
const companyArrow = document.getElementById('companyArrow');

companyDropdown.addEventListener('click', () => {
    const isShown = companyList.classList.toggle('show');
    if (isShown) {
        companyArrow.src = 'Media/icon-arrow-up.svg';
        companyArrow.classList.add('up');
    } else {
        companyArrow.src = 'Media/icon-arrow-down.svg';
        companyArrow.classList.remove('up');
    }
});

document.addEventListener('click', (event) => {
    if (!companyDropdown.contains(event.target)) {
        companyList.classList.remove('show');
        companyArrow.src = 'Media/icon-arrow-down.svg';
        companyArrow.classList.remove('up');
    }
});