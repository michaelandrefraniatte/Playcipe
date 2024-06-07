var cutting = false;
var wd = 2;
var wu = 2;

function startBlockAds(tabId, changeInfo, tab) {
    setInterval(() => {
        try {
            document.cookie = 'VISITOR_INFO1_LIVE = oKckVSqvaGw; path =/; domain =.youtube.com';
            var cookies = document.cookie.split('; ');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                var eqPos = cookie.indexOf('=');
                var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
            }
        }
        catch { }
        try {
            var els = document.getElementsByClassName('video-ads ytp-ad-module');
            for (var i = 0; i < els.length; i++) {
                els[i].click();
            }
        }
        catch { }
        try {
            var el = document.getElementsByClassName('ytp-ad-skip-button');
            for (var i = 0; i < el.length; i++) {
                el[i].click();
            }
        }
        catch { }
        try {
            var elements = document.getElementsByClassName('ytp-ad-overlay-close-button');
            for (var i = 0; i < elements.length; i++) {
                elements[i].click();
            }
        }
        catch { }
        try {
            var scripts = document.getElementsByTagName('script');
            for (let i = 0; i < scripts.length; i++) {
                var content = scripts[i].innerHTML;
                if (content.indexOf('ytp-ad') > -1) {
                    scripts[i].innerHTML = '';
                }
                var src = scripts[i].getAttribute('src');
                if (src.indexOf('ytp-ad') > -1) {
                    scripts[i].setAttribute('src', '');
                }
            }
        }
        catch { }
        try {
            var iframes = document.getElementsByTagName('iframe');
            for (let i = 0; i < iframes.length; i++) {
                var content = iframes[i].innerHTML;
                if (content.indexOf('ytp-ad') > -1) {
                    iframes[i].innerHTML = '';
                }
                var src = iframes[i].getAttribute('src');
                if (src.indexOf('ytp-ad') > -1) {
                    iframes[i].setAttribute('src', '');
                }
            }
        }
        catch { }
        try {
            var allelements = document.querySelectorAll('*');
            for (var i = 0; i < allelements.length; i++) {
                var classname = allelements[i].className;
                if (classname.indexOf('ytp-ad') > -1 | classname.indexOf('-ad-') > -1 | classname.indexOf('ad-') > -1 | classname.indexOf('ads-') > -1 | classname.indexOf('ad-showing') > -1 | classname.indexOf('ad-container') > -1 | classname.indexOf('ytp-ad-overlay-open') > -1 | classname.indexOf('video-ads') > -1) {
                    allelements[i].innerHTML = '';
                }
            }
        }
        catch { }
        try {
            var players = document.getElementById('movie_player');
            for (let i = 0; i < players.length; i++) {
                players.classList.remove('ad-interrupting');
                players.classList.remove('playing-mode');
                players.classList.remove('ytp-autohide');
                players.classList.add('ytp-hide-info-bar');
                players.classList.add('playing-mode');
                players.classList.add('ytp-autohide');
            }
        }
        catch { }
        try {
            var fabelements = document.querySelectorAll('yt-reaction-control-panel-button-view-model');
            for (var i = 0; i < fabelements.length; i++) {
                fabelements[i].innerHTML = '';
            }
        }
        catch { }
        try {
            var fabelement = document.querySelector('#fab-container');
            fabelement.innerHTML = '';
        }
        catch { }
        try {
            var contents = document.querySelectorAll('ytd-engagement-panel-section-list-renderer');
            contents.forEach(elem => elem.style.display = 'none');
        }
        catch { }
        try {
            var contents = document.querySelectorAll('ytd-player-legacy-desktop-watch-ads-renderer');
            contents.forEach(elem => elem.style.display = 'none');
        }
        catch { }
        try {
            var contents = document.querySelectorAll('yt-reaction-control-panel-button-view-model');
            contents.forEach(elem => elem.style.display = 'none');
        }
        catch { }
        try {
            var contents = document.querySelectorAll('tp-yt-paper-dialog');
            contents.forEach(elem => elem.style.display = 'none');
        }
        catch { }
        try {
            var contents = document.querySelectorAll('ytd-statement-banner-renderer');
            contents.forEach(elem => elem.style.display = 'none');
        }
        catch { }
        try {
            var contents = document.querySelectorAll('ytd-brand-video-singleton-renderer');
            contents.forEach(elem => elem.style.display = 'none');
        }
        catch { }
        try {
            var contents = document.querySelector('#reaction-control-panel').style.display = 'none';
        }
        catch { }
        try {
            var contents = document.querySelector('#emoji-fountain').style.display = 'none';
        }
        catch { }
        try {
            var contents = document.querySelector('#fab-container').style.display = 'none';
        }
        catch { }
        try {
            var closeButton = document.querySelector('.ytp-ad-overlay-close-button');
            if (closeButton) {
                closeButton.click();
            }
        }
        catch { }
        try {
            var playButton = document.querySelector('.ytp-large-play-button:visible');
            if (playButton) {
                playButton.click();
            }
        }
        catch { }
        try {
            var skipButton = document.querySelectorAll('.ytp-ad-skip-button');
            skipButton.forEach(elem => elem.click());
            skipButton.forEach(elem => elem.style.zIndex = '10');
        }
        catch { }
        try {
            var skipButton = document.querySelectorAll('.ytp-ad-skip-button-modern');
            skipButton.forEach(elem => elem.click());
            skipButton.forEach(elem => elem.style.zIndex = '10');
        }
        catch { }
        try {
            var skipButton = document.getElementsByClassName('ytp-ad-skip-button');
            skipButton.forEach(elem => elem.click());
            skipButton.forEach(elem => elem.style.zIndex = '10');
        }
        catch { }
        try {
            var skipButton = document.getElementsByClassName('ytp-ad-skip-button-modern');
            skipButton.forEach(elem => elem.click());
            skipButton.forEach(elem => elem.style.zIndex = '10');
        }
        catch { }
        try {
            var contents = document.querySelectorAll('.ad-showing');
            contents.forEach(elem => elem.style.display = 'none');
        }
        catch { }
        try {
            var contents = document.querySelectorAll('.ad-container');
            contents.forEach(elem => elem.style.display = 'none');
        }
        catch { }
        try {
            var contents = document.querySelectorAll('.ytp-ad-overlay-open');
            contents.forEach(elem => elem.style.display = 'none');
        }
        catch { }
        try {
            var contents = document.querySelectorAll('.video-ads');
            contents.forEach(elem => elem.style.display = 'none');
        }
        catch { }
        try {
            var contents = document.querySelectorAll('.ytp-ad-overlay-image');
            contents.forEach(elem => elem.style.display = 'none');
        }
        catch { }
        try {
            var contents = document.querySelectorAll('.ytp-ad-overlay-container');
            contents.forEach(elem => elem.style.display = 'none');
        }
        catch { }
        try {
            var contents = document.querySelectorAll('.ytd-carousel-ad-renderer');
            contents.forEach(elem => elem.style.display = 'none');
        }
        catch { }
        try {
            var contents = document.querySelectorAll('ytd-ad-slot-renderer');
            contents.forEach(elem => elem.style.display = 'none');
        }
        catch { }
        try {
            var contents = document.querySelectorAll('ytd-action-companion-ad-renderer');
            contents.forEach(elem => elem.style.display = 'none');
        }
        catch { }
        var mute = document.querySelectorAll('.ad-showing');
        if (mute.length > 0) {
            if (wd <= 1) {
                wd = wd + 1;
            }
            wu = 0;
        }
        else {
            if (wu <= 1) {
                wu = wu + 1;
            }
            wd = 0;
        }
        if (wd == 1) {
            cutAdd(tab.url);
        }
        if (wu == 1) {
            restorePlayer();
        }
    }, 4400);
}

function cutAdd(link) {
    try {
        link = link.split('&')[0];
        var id = link.split('?v=')[1];
        var player = document.getElementById('player');
        if (player) {
            player.style.backgroundImage = `url(\'` + 'https://i.ytimg.com/vi/' + id + '/hq720.jpg' + `\')`;
            player.style.backgroundSize = 'cover';
            player.style.backgroundRepeat = 'no-repeat';
            player.style.backgroundPosition = 'center';
            $('.ytp-mute-button').trigger('click');
        }
    }
    catch { }
    try {
        var button = document.querySelector('.ytp-ad-skip-button-modern');
        var video = document.querySelector('#player');
        video.after(button);
    }
    catch { }
    try {
        var button = document.querySelector('.ytp-ad-skip-button');
        var video = document.querySelector('#player');
        video.after(button);
    }
    catch { }
    try {
        var script = document.createElement('script');
        script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
        script.async = false;
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(script);
    }
    catch { }
    try {
        (function () {
            var adSkipButtonModern = setInterval(() => {
                try {
                    $('.ytp-ad-skip-button-modern').trigger('click');
                }
                catch { }
            }, 10000);
            setTimeout(() => {
                clearInterval(adSkipButtonModern);
            }, '120000');
        })();
    }
    catch { }
    try {
        (function () {
            var adSkipButton = setInterval(() => {
                try {
                    $('.ytp-ad-skip-button').trigger('click');
                }
                catch { }
            }, 10000);
            setTimeout(() => {
                clearInterval(adSkipButton);
            }, '120000');
        })();
    }
    catch { }
}

function restorePlayer() {
    var player = document.getElementById('player');
    if (player) {
        player.style.backgroundImage = 'none';
    }
    var video = document.querySelector('.html5-video-player');
    if (video) {
        video.style.display = 'block';
    }
    $('.ytp-mute-button').trigger('click');
}