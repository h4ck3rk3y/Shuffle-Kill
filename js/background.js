// Borrowed to shuffle an array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

   	temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//mesage listener and sender
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
	if(message.message == 'killme') {
		chrome.tabs.remove(sender.tab.id);
		var sender_tab = sender.tab.id;
		chrome.tabs.query({},function(tabs){
			tabs = shuffle(tabs);
		    tabs.some(function(tab){
		      var url = new URL(tab.url);
		      if((url.host == 'www.youtube.com' || url.host == 'youtube.com') && url.pathname== '/watch' && tab.id!=sender_tab)
		      {
		      	chrome.tabs.query({active: true},function(tabArray){
			      	chrome.tabs.update(tab.id, {active: true});
			      	chrome.tabs.update(tabArray[0].id, {active:true});
			    });
			    return true;
		      }
		    });
	 	});

	}
});

