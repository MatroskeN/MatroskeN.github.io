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
    let count = 0;
    let timerId = setInterval(() => {
        preview.style.background='url('+imagePaths[count]+') center center';
        preview.style.backgroundSize='cover';
        restartAnimations(document.querySelector(".progressbar__svg-circle"));
        count++;
        console.log(imagePaths[count])
        if (count === imagePaths.length){
            count = 0;
        }
    }, 3000)
}

storyTelling()
