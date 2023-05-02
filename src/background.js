chrome.browserAction.onClicked.addListener(() => {
    chrome.windows.create({
        type: 'popup',
        url: 'popup.html',
        left: 100,
        top: 100,
        width: 400,
        height: 400,
    });
});

// browser.browserAction.onClicked.addListener(() => {
//     browser.tabs.executeScript({
//         file: './js/content-script.js',
//     });
// });
//
// browser.runtime.onMessage.addListener(async ({ type }) => {
//     if (type === 'screenshot') {
//         return await browser.tabs.captureVisibleTab({quality: 70});
//     }
// });