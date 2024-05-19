function changeImage(newSrc) {
    let identity = newSrc.split("/")[2];
    document.getElementById(identity).src = newSrc;
}

function changeImageWithDelay(newSrc, delay = 0.2 * 1000) {
    setTimeout(function () {
        changeImage(newSrc);
    }, delay);
}