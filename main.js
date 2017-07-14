var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var Apple = new BasicCard ("What year was Apple Inc. founded?","1976.");
var AppleCloze = new ClozeCard("Apple Inc. was founded in 1976.", "Apple Inc.");
var brokenCloze = new ClozeCard("This doesn't work", "oops");


//What year was Apple Inc. founded?
console.log("Front: " + Apple.front);

//1976
console.log("Back: " + Apple.back);

//Apple Inc.
console.log("Cloze: " + AppleCloze.cloze);

//...was the founded in 1976.
console.log("Partial: " + AppleCloze.fullText.substring(11,31));

//Apple was founded in 1976.
console.log("Full Text: " + AppleCloze.fullText);


// ClozeCard.prototype.printInfo = function() {
//   console.log("Cloze deletion: " + this.cloze + "\nPartial: " + this.fullText.substring(11,31) + "\nFull Text: " + this.fullText);
//   console.log("---------------");
// };