'use strict';

function send_color_to_page(color) {
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, { color: color});
	});
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	// If the request comes from a page
  	if (sender.tab) {
  		// Send back the color from localStorage
  		sendResponse({ color: localStorage.color });
  	} 
  	// If the request comes from the popup (color selector)
  	else {
  		// Store it in localStorage
  		localStorage.color = request.color;
  		// And send it to the page
  		send_color_to_page(request.color);
  	}
});