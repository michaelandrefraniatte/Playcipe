
let videoidtemp1 = "";
let videoidtemp2 = "";

function blockAds(videoid) {
    videoidtemp1 = videoidtemp2;
    videoidtemp2 = videoid;
    if (videoidtemp1 != videoidtemp2) {
        var sj = document.createElement('script');
        sj.src = chrome.runtime.getURL('jquery-3.7.1.min.js');
        sj.onload = function () { this.remove(); };
        (document.head || document.documentElement).appendChild(sj);
        var s = document.createElement('script');
        s.src = chrome.runtime.getURL('script.js');
        s.onload = function () { this.remove(); };
        (document.head || document.documentElement).appendChild(s);
    }
}