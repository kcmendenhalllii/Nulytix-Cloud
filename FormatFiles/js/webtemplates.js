/**
 * 
 */
"use strict";

/*$("p").wrap("<div class=\"well\"></div>)");*/

function loadStaticContent()
{
	$("#top_header").load("./htmltemplates.html #top-header")
	
	$("#top_banner").load("./htmltemplates.html #top-banner");
	
	$("#bottom_banner").load("./htmltemplates.html #bottom-banner");
}

/* Not working yet, need to integrate custom definitions into the sidebar.
function setActivePage()
{
	$(document).ready(function() {
	// get current URL path and assign 'active' class
	var pathname = window.location.pathname;
	$('.nav > li > a[href=".'+pathname+'"]').parent().addClass('active');
})
}

function sideNavDefinition(){
	
}

function sidenavDefinition()
{
	
}
*/
