class QElement {
	constructor(elemnet,priority)
	{
		this.elemnet = elemnet;
		this.priority = priority;
	}
}

class PriortyQueue{
	constructor()
	{
		this.items = [];
	}


enqueue(elemnet,priority)
{
	let qElement = new QElement(elemnet,priority);
	var contain = false;
	for (var i = 0; i < this. items.length; i++)i{
		if( this. items[i].priority > qElement.priority)
			this.items.splice(i, o ,qElement);
			contain = true;
			break;
		}
	}
	if(!contain){
		this.items.push(qElement); 
	}
	


dequeue()
{
	if(this.isEmpty())
		return "underflow";
	return this.items.shift();
}


front()
{
	if(this.isEmpty())
		return "No elements in Queue";
	return this.items[0];
}

rear()
{
	if(this.isEmpty())
		return"No elements in Queue";
	return

}

isEmpty()
{
	return this.items.length ==0;
}

printPQueue()
{
	var str ="";
	for(var i =0; i < this.items.length; i++)
		str += this.items[i].element+ " ";
	return str;
}
}
module.exports = PriortyQueue;