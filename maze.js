// JavaScript Document

function checkbounds(bounds){
	"use strict";
	bounds.forEach(function(bound){
		bound.onmouseover = function(){
			bound.setAttribute("class","boundary youlose");
		};
	});
	
	
}

function init(){
	"use strict";
	var boundary = document.querySelectorAll(".boundary");
	checkbounds(boundary);
}

window.addEventListener("load",init);