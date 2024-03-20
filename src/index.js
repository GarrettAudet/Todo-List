function getHeaderHeight() {
    const headerHeightWithMargin = document.querySelector('.header').getBoundingClientRect().height + parseInt(window.getComputedStyle(document.querySelector('.header')).marginTop) + parseInt(window.getComputedStyle(document.querySelector('.header')).marginBottom);
    return headerHeightWithMargin;
}

document.querySelector('.theme').addEventListener('click', function() {
    this.classList.toggle('theme-on');
});