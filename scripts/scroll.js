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

let lastY
let summ = 0;
let result = [];
window.addEventListener('touchmove', function (e){
    let currentY = e.touches[0].clientY;
    if (currentY > lastY){
        let diff = currentY - lastY;
        summ += diff;
        result.push(summ)
        let lastIndex = result.length-1;
        if (result[lastIndex]-result[0] > 200) {
            page.style.background = '#E7E7E8';
            page.classList.add('lightTheme');
            document.querySelector('.sectionFootNote').innerHTML = 'Choose one of our <br><span>flex bundles</span>'
            summ = 0;
            result = [];
        }
    } else if (currentY < lastY) {
        let diff = lastY - currentY;
        summ += diff;
        result.push(summ)
        let lastIndex = result.length-1;
        if (result[lastIndex]-result[0] > 200) {
            page.style.background = '#0F1011';
            page.classList.remove('lightTheme');
            document.querySelector('.sectionFootNote').innerHTML = 'To The Moon - <span>UK\'s fastest</span> <br> national data speed network'
        }
    }
    lastY = currentY;
})