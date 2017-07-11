var BasicCard = function(front,back){
	this.front = front;
	this.back = back;
}

// BasicCard.prototype.printInfo = function() {
//   console.log("Front: " + this.front + "\nBack: " + this.back);
//   console.log("---------------");
// };

var Apple = new BasicCard ("What year was Apple Inc. founded?","1976");

console.log(Apple.front);
console.log(Apple.back);

module.exports = BasicCard;

