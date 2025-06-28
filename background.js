chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get("geminiApiKey", (result) => {
        if(!result.gemini_api_key){
            chrome.tabs.create({url: "options.html"})
        }
    })
})