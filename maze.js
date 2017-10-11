// JavaScript Document
var hitwall = true;

function checkbounds(bounds){
	"use strict";
	bounds.forEach(function(bound){
		bound.onmouseover = function(){
			bound.setAttribute("class","boundary youlose");
			hitwall = true;
		};
	});
	
	bounds.forEach(function(bound){
		bound.onmouseout = function(){
			bound.setAttribute("class","boundary");
		};
	});
	
	
}

function init(){
	"use strict";
	var boundary = document.querySelectorAll(".boundary");
	checkbounds(boundary);
	var start = document.getElementById("start");
	start.onclick = function(){hitwall=false;};
	var finish = document.getElementById("end");
	finish.onmouseover = function(){if(hitwall === false){alert("You Win");}};
	
}

window.addEventListener("load",init);