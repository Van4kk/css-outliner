let api = chrome || browser

try {
    // api.runtime.onInstalled.addListener(details => {
    //     api.tabs.create({
    //         url: "https://github.com/Van4kk/css-outliner/blob/main/THANKS.md"
    //     })
    //
    //     if (details.reason === api.runtime.OnInstalledReason.INSTALL) {
    //         api.runtime.setUninstallURL('https://github.com/Van4kk/css-outliner/blob/main/WHY.md');
    //     }
    // });

    api.action.onClicked.addListener(( tab ) => {
        api.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['js/css-outliner.js']
        });
    });
} catch(e) {
    console.log(e);
}
