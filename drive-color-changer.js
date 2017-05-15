'use strict';

// Function will run whenever the color changes
function colorChange(message) {
	var color = message.color;
	// Change the color on the page
	document.querySelector('.kix-appview-editor').attributes['style'].value += 'background: '+color+';' 
};

// When the script first loads request the color from the background page
chrome.runtime.sendMessage({}, colorChange);
// Whenever the color changes (from the popup/color selector) change the color on the page
chrome.runtime.onMessage.addListener(colorChange);