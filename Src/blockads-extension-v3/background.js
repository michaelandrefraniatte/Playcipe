
// adds a listener to tab change
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // check for a URL in the changeInfo parameter
    if (changeInfo.url.startsWith('https://www.youtube.com/')) {
        // calls the inject function
        injectScript(tabId);
    }
    // check for a URL in the tab parameter
    if (tab.url.startsWith('https://www.youtube.com/')) {
        // calls the inject function
        injectScript(tabId);
    }
});

// function that injects code to a specific tab
function injectScript(tabId) {
    chrome.scripting.executeScript(
        {
            target: { tabId: tabId },
            files: ['inject.js'],
        },
        () => {
            chrome.scripting.executeScript({
                target: { tabId },
                args: [tabId, changeInfo, tab],
                func: (...args) => startBlockAds(...args),
            });
        })
};