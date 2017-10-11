// JavaScript Document
function init(){
	"use strict";
	var x = document.getElementById("boundary1");
	x.onmouseover = function(){
		x.setAttribute("class","boundary youlose");
	};
	
}

window.addEventListener("load",init);