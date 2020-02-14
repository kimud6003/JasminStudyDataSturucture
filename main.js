var PriorityQueue = require("./P_Q");
var priorityQueue = new PriorityQueue(); 
console.log(priorityQueue.isEmpty());
console.log(priorityQueue.front()); 

priorityQueue.enqueue("Sumit", 2); 
priorityQueue.enqueue("Gourav", 1); 
priorityQueue.enqueue("Piyush", 1); 
priorityQueue.enqueue("Sunny", 2); 
priorityQueue.enqueue("Sheru", 3); 

console.log(priorityQueue.printPQueue()); 

console.log(priorityQueue.front().element); 

console.log(priorityQueue.rear().element); 

console.log(priorityQueue.dequeue().element); 

priorityQueue.enqueue("Sunil", 2); 
console.log(priorityQueue.printPQueue()); 
