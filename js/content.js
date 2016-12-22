console.log("content.js loaded");

window.MutationObserver = window.MutationObserver;

var target = document.querySelector('.ytp-play-button');

observer = new MutationObserver(function(mutation){
	if($('.ytp-play-button').attr('aria-label') == undefined && $('.ytp-play-button').attr('title') == 'Replay')
	{
		chrome.runtime.sendMessage({message: 'killme'}, null);
	}
});

config = {
	attributes: true
}

observer.observe(target, config);

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
	console.log('asked to play music');
	if(message.message == 'play-music')
	{
		$('.ytp-play-button').trigger('click');
	}
});


//<button class="ytp-play-button ytp-button" aria-label="Pause">