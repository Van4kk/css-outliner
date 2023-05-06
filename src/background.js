try{
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        if(changeInfo.status === 'complete') {
            chrome.scripting.executeScript({
                files: ['/js/css-outliner.js'],
                target: {tabId: tab.id}
            });
        }
    });

    chrome.runtime.onInstalled.addListener(details => {
        chrome.tabs.create({
            url: "../public/on_installed.html"
        })

        if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
            chrome.runtime.setUninstallURL('https://github.com/Van4kk/css-outliner/blob/main/WHY.md');
        }
    })
}catch(e){
    console.log(e);
}