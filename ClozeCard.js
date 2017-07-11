var ClozeCard = function (cloze,partial,fullText){
	this.cloze = cloze;
	this.partial = partial;
	this.fullText = fullText;
}

var AppleCloze = new ClozeCard ("Apple","...was founded in 1976", "Apple was founded in 1976.");
var brokenCloze = new ClozeCard("This doesn't work", "oops");

console.log(AppleCloze.cloze);
console.log(AppleCloze.partial);
console.log(AppleCloze.fullText);

module.exports = ClozeCard;

