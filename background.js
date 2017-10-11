/*
Moves Kibana's typeahead box down by applying a new CSS rule.

This file was kindly provided by Maarten Cautreels. 
*/

var pageTitle = document.title;

if(pageTitle === 'Kibana 4') {

	var css = '.typeahead .typeahead-items { top: 32px; }',
		head = document.head || document.getElementsByTagName('head')[0],
		style = document.createElement('style');

	style.type = 'text/css';
	if (style.styleSheet){
	  style.styleSheet.cssText = css;
	} else {
	  style.appendChild(document.createTextNode(css));
	}

	head.appendChild(style);

}