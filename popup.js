'use strict';

$(function () {
	// The default color of Google Docs background
	var drive_default = 'rgb(238, 238, 238)';

	var set_color = function (color) {
		// Storage the color in localStorage
		localStorage.color = color;
		// Send it to the background page
		chrome.runtime.sendMessage({ color: color });
	};

	var get_color = function () {
		return localStorage.color || drive_default;
	};

	$('#color').spectrum({
		flat: true,
		showInput: true,
		color: get_color(),
		preferredFormat: "rgb",
		change: function (color) {
			set_color(color.toRgbString());
		},
		cancelText: 'reset'
	});

	// When the 'cancel' or 'reset' button is click, reset the color to Google Drives default
	$(".sp-cancel").click(function () {
		$('#color').spectrum('set', drive_default);
		set_color(drive_default);
		return false;
	});
});