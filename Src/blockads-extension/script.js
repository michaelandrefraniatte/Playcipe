
var script =
`<script>
    setInterval(() => {
        var adshowing = document.querySelector('.ad-showing');
        if (adshowing) {
            $('.ytp-skip-ad-button').trigger('click');
            $('.ytp-skip-ad-button').click();
            var video = document.querySelector('.video-ads');
            if (video) {
                video.style.display = 'none';
            }
            adshowing.style.display = 'none';
            var player = document.getElementById('player');
            if (player) {
                var link = window.location.href;
                if (link.includes('&')) {
                    link = link.split('&')[0];
                }
                var videoid = link.split('watch?v=')[1];
                if (player.style.backgroundImage != 'url("https://i.ytimg.com/vi/' + videoid + '/hq720.jpg")') {
                    player.style.backgroundImage = 'url("https://i.ytimg.com/vi/' + videoid + '/hq720.jpg")';
                    player.style.backgroundSize = 'cover';
                    player.style.backgroundRepeat = 'no-repeat';
                    player.style.backgroundPosition = 'center';
                }
            }
        }
        else {
            var player = document.getElementById('player');
            if (player) {
                player.style.backgroundImage = 'none';
            }
            var video = document.querySelector('.html5-video-player');
            if (video) {
                video.style.display = 'block';
            }
        }
    }, 2000);
</script>`;
var scriptnode = document.createRange().createContextualFragment(script);
document.body.appendChild(scriptnode);