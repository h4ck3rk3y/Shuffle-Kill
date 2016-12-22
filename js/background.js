chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
	if(message.message == 'killme') {
		chrome.tabs.remove(sender.tab.id);
	}
});

chrome.tabs.query({},function(tabs){
    tabs.forEach(function(tab){
      var url = new URL(tab.url);
      if(url.host == 'www.youtube.com' || url.host == 'youtube.com')
      {
      	// Set listeners;
      }
    });
 });