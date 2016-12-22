chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    chrome.tabs.executeScript(null,{file:"js/content.js"});
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