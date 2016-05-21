"use strict";

var scrollback = document.getElementById("scrollback");
var audioControl = document.getElementById("audiocontrol");
var input = document.getElementById("expression");

function addLine(text) {
  var div = document.createElement("div");
  div.className = "output";
  div.innerHTML = text || " ";
  scrollback.appendChild(div);
}

function showHelp() {
  addLine();
  addLine("TODO");
  addLine();
  addLine("See also:");
  addLine(" * <a target=\"_blank\" href=\"https://github.com/rm-hull\">https://github.com/rm-hull</a>");
  addLine(" * <a target=\"_blank\" href=\"https://www.linkedin.com/in/richard-hull-1609923\">https://www.linkedin.com/in/richard-hull-1609923</a>");
  addLine();
}

function showCommands() {
  addLine();
  addLine(" help     - show some basic help");
  addLine(" contacts - show contact details");
  addLine(" clear    - clear the screen");
  addLine(" commands - list all the commands available");
  addLine(" exit     - quit the system");
  addLine();
}

function showContactDetails() {
  addLine();
  addLine("Try:");
  addLine(" (phone) +44 7941 566171");
  addLine(" (email) richard@destructuring-bind.org");
  addLine(" (skype) destructuring.bind");
  addLine();
}


function clearScrollback() {
  var children = scrollback.childNodes;
  for (var i = 0, n = children.length; i < n; i++) {
    scrollback.removeChild(children[0]);
  }
}

document.onclick = function(evt) {
  document.execCommand('copy');
  input.focus();
};

input.focus();
input.onkeypress = function(evt) {

  if (evt.which === 13) {
    addLine("$ " + input.value);

    var cmd = input.value.toLowerCase().trim();
    switch (cmd) {
      case "commands":
        showCommands();
        break;

      case "help":
        showHelp();
        break;

      case "clear":
        clearScrollback();
        break;

      case "contacts":
        showContactDetails();
        break;

      case "exit":
        window.location.href = "https://google.com";
        break;

      case "":
        break;

      default:
        addLine("Unknown command");
        break;
    }

    input.value = "";
    input.scrollIntoView({behaviour: "instant", block: "end"});
  }
};

