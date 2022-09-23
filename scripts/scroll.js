let page = document.querySelector('.darkTheme');

window.addEventListener("wheel", function (event) {
    if (event.deltaY < 0)
    {
        page.style.background = '#0F1011';
        page.classList.remove('lightTheme');
        document.querySelector('.sectionFootNote').innerHTML = 'To The Moon - <span>UK\'s fastest</span> <br> national data speed network'
    }
    else if (event.deltaY > 0)
    {
        page.style.background = '#E7E7E8';
        page.classList.add('lightTheme');
        document.querySelector('.sectionFootNote').innerHTML = 'Choose one of our <br><span>flex bundles</span>'
    }
}, true)