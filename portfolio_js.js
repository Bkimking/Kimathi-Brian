function changeBg(bg) {
    const page = document.querySelector('.page');
    const content = document.querySelectorAll('.content');
    page.style.background = `url("${bg}")`; // Use backticks for template literals
    page.style.backgroundSize = 'cover';
    page.style.backgroundPosition = 'center';

    page.forEach((page) => {
        page.classList.remove('active');
        if (page.classList.contains(bg)) {
            page.classList.add('active');
        }
    });
}
