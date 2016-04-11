require("./style.css");
var coverage = require("./coverage")


document.getElementById("svg").addEventListener("load", function() {
  var doc = this.getSVGDocument();
  Object.keys(coverage).forEach(function(color){
    coverage[color].forEach(function(code){
      var element = doc.querySelector("[data-insee='" + code + "']")
      element.style = "fill: " + color
    })
  })
});
