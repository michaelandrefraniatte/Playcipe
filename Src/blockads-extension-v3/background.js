
chrome.webNavigation.onCompleted.addListener(function (details) {
    if (details.url.includes('watch?v=')) {
        var link = details.url;
        if (link.includes('&')) {
            link = link.split('&')[0];
        }
        var videoid = link.split('watch?v=')[1];
        chrome.scripting.executeScript({target: {tabId}, files: ['inject.js']}, () => {
        chrome.scripting.executeScript(
            {
                target: { tabId: details.tabId },
                args: [videoid],
                func: (...args) => blockAds(...args)
            }
        )
    })
}});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (tab.url.includes('watch?v=')) {
        var link = tab.url;
        if (link.includes('&')) {
            link = link.split('&')[0];
        }
        var videoid = link.split('watch?v=')[1];
        chrome.scripting.executeScript({target: {tabId}, files: ['inject.js']}, () => {
        chrome.scripting.executeScript(
            {
                target: { tabId: tabId },
                args: [videoid],
                func: (...args) => blockAds(...args)
            }
        )
    })
}});