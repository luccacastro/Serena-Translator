chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    const item = msg.item;
    if(msg.content == 'screenshot'){
        chrome.tabs.captureVisibleTab(null,null, function(dataUrl){
            sendResponse({complete: dataUrl})
        })
        
    }
    return true;
});


// chrome.tabs.captureVisibleTab(null,null, function(dataUrl){
//     chrome.tabs.sendMessage(sender.tab.id, dataUrl)
//  })