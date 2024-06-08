
chrome.webNavigation.onCompleted.addListener(function (details) {
    if (details.url.includes('watch?v=')) {
        var link = details.url;
        if (link.includes('&')) {
            link = link.split('&')[0];
        }
        var videoid = link.split('watch?v=')[1];
        chrome.scripting.executeScript(
            {
                target: { tabId: details.tabId },
                func: blockAds,
                args: [videoid]
            }
        )
    }
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (tab.url.includes('watch?v=')) {
        var link = tab.url;
        if (link.includes('&')) {
            link = link.split('&')[0];
        }
        var videoid = link.split('watch?v=')[1];
        chrome.scripting.executeScript(
            {
                target: { tabId: tabId },
                func: blockAds,
                args: [videoid]
            }
        )
    }
});

function blockAds(videoid) {
    setInterval(() => {
        var adshowing = document.querySelector('.ad-showing');
        if (adshowing) {
            try {
                var player = document.getElementById('player');
                if (player) {
                    if (player.style.backgroundImage != `url(\'` + 'https://i.ytimg.com/vi/' + id + '/hq720.jpg' + `\')`) {
                        player.style.backgroundImage = `url(\'` + 'https://i.ytimg.com/vi/' + id + '/hq720.jpg' + `\')`;
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