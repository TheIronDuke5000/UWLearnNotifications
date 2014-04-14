// ==UserScript==
// @name        	Learn Better Notifications
// @description     Removes annoying alerts from UW Learn and uses notification bar instead
// @namespace   	http://willtwcullen.com
// @include     	https://learn.uwaterloo.ca/*
// @version     	1.0.7
// ==/UserScript==
{


/*===============================*\
|*        Notification Div       *|
\*===============================*/
var notificationParentDiv = document.createElement("div");
var notificationTextDiv = document.createElement("div");

notificationParentDiv.style.color = "white";
notificationParentDiv.style.textAlign = "center";
notificationParentDiv.style.padding = "5px 10px 0px";
notificationParentDiv.style.backgroundColor = "#000000";
notificationParentDiv.style.display = "none";
notificationParentDiv.id = "notificationParentDiv";

notificationTextDiv.style.backgroundColor = "#333333";
notificationTextDiv.style.borderRadius = "5px";
notificationTextDiv.style.display = "inline-block";
notificationTextDiv.style.padding = "1px 10px";
notificationTextDiv.style.maxWidth = "60%";
notificationTextDiv.id = "notificationTextDiv";

notificationParentDiv.appendChild(notificationTextDiv);

notificationTextDiv.textContent = "ab blab blab";

var insertIntoDiv = document.getElementById('d2l_minibar');

insertIntoDiv.insertBefore(notificationParentDiv, insertIntoDiv.firstChild);


/*===============================*\
|*       Override Alert Fn       *|
\*===============================*/
source = "var native_alert = alert; alert = function(msg) { document.getElementById('notificationTextDiv').textContent = msg; document.getElementById('notificationParentDiv').style.display = 'block'; console.log('alert: ' + msg); } ";

// Create a script node holding this  source code.
var script = document.createElement('script');
script.setAttribute("type", "application/javascript");
script.textContent = source;

document.body.appendChild(script);



/*===============================*\
|*           Test Alert          *|
\*===============================*/
// source = "alert('test hello world');"

// // Create a script node holding this  source code.
// var script = document.createElement('script');
// script.setAttribute("type", "application/javascript");
// script.textContent = source;

// document.body.appendChild(script);


console.log("installed");

}