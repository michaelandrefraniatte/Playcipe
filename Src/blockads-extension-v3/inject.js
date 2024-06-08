
function blockAds(videoid) {
    var timerId = 0;
    clearInterval(timerId);
    timerId = setInterval(() => {
        var adshowing = document.querySelector('.ad-showing');
        if (adshowing) {
            try {
                var player = document.getElementById('player');
                if (player) {
                    if (player.style.backgroundImage != `url(\'` + 'https://i.ytimg.com/vi/' + videoid + '/hq720.jpg' + `\')`) {
                        player.style.backgroundImage = `url(\'` + 'https://i.ytimg.com/vi/' + videoid + '/hq720.jpg' + `\')`;
                        player.style.backgroundSize = 'cover';
                        player.style.backgroundRepeat = 'no-repeat';
                        player.style.backgroundPosition = 'center';
                    }
                }
                var skipmodernbutton = document.querySelector('.ytp-ad-skip-button-modern');
                if (skipmodernbutton) {
                    skipmodernbutton.click();
                }
                var skipbutton = document.querySelector('.ytp-ad-skip-button');
                if (skipbutton) {
                    skipbutton.click();
                }
            }
            catch { }
        }
        else {
            try {
                var player = document.getElementById('player');
                if (player) {
                    player.style.backgroundImage = 'none';
                }
                var video = document.querySelector('.html5-video-player');
                if (video) {
                    video.style.display = 'block';
                }
            }
            catch { }
        }
    }, 1000);
}