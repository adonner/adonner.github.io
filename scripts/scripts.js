/*
============================================
; Title: scripts.js
; Author: Adam Donner
; Date: 19 May 2019
; Description: Houses JavaScripts for Portfolio
; Website
;===========================================
*/



// This creates the typewrite effect
var index = 0;
var text = "I make cool stuff";  //Creates the string to display

//This does a check if text is displayed, if not start typewriter.
function typing() {
 if (index < text.length) {
   $("#text").html($("#text").html() + text.charAt(index));
   index++;
   setTimeout(typing,125)
 }
}
