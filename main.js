const restartAnimations = ($el) => {
    $el.getAnimations().forEach((anim) => {
        anim.cancel();
        anim.play();
    });
};

let preview = document.querySelector('.preview');

let imagePaths = [
    'images/doomer.jpg',
    'images/girl.jpg',
    'images/handshake.jpg',
    'images/itachi.jpg',
    'images/billy.jpg'
]

function storyTelling() {
    let count = 1;
    let timerId = setInterval(() => {
        let images = document.querySelectorAll('.preview__image');
        images.forEach( image => {
            image.classList.remove('active')
        })
        images[count].classList.add('active');
        restartAnimations(document.querySelector(".story__svg-circle"));
        count++;
        if (count === imagePaths.length){
            count = 0;
        }
    }, 3000)
}

storyTelling()
