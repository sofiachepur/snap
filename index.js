document.querySelectorAll('.dropdown').forEach(dropdown => {
    const label = dropdown.querySelector('.dropdown-label');
    const list = dropdown.querySelector('.dropdown-list');
    const arrow = dropdown.querySelector('.arrow');

    label.addEventListener('click', (e) => {
        e.stopPropagation();

        const isShown = list.classList.toggle('show');

        if (isShown) {
            arrow.src = 'Media/icon-arrow-up.svg';
            arrow.classList.add('up');
        } else {
            arrow.src = 'Media/icon-arrow-down.svg';
            arrow.classList.remove('up');
        }
    });
});


document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const list = dropdown.querySelector('.dropdown-list');
        const arrow = dropdown.querySelector('.arrow');

        list.classList.remove('show');
        arrow.src = 'Media/icon-arrow-down.svg';
        arrow.classList.remove('up');
    });
});



function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('active');
        document.getElementById('overlay').classList.toggle('active');
}
