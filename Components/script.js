import Queue from './Queue.js';
let container = document.getElementById('qcontainer');

console.log(container)
class QueueSite{
    constructor(){  
        this.queue = null;
    }
    createQueue(){
        this.queue = new Queue();
        console.log(this.queue);
    }

    controlQueue(command, value){
        if (value == null) {
            this.queue[command]();
        }
        else {
            this.queue[command](value);
        }
        queueSite.render();
    }
    render(){
        container.innerHTML = ''
        let temparr = this.queue.fullArray;
        for (let i = 0; i < temparr.length; i++) {
            let col = document.createElement('div');
            col.className = 'col border';
            let value = document.createElement('p');
            value.innerHTML=temparr[i]
            value.classList = 'text-center';
            col.appendChild(value)
            container.appendChild(col);
          }
    }
}

let queueSite = new QueueSite();

queueSite.createQueue();
let addElementButton = document.getElementById('enq');
let removeElementButton = document.getElementById('removeq');
addElementButton.addEventListener('click', () => {
    if (queueSite.queue.fullArray.length < 10) {
        queueSite.controlQueue('enqueue', Math.floor(Math.random() * 100));
    }
    else {
        alert('Queue is full');
    }
});
removeElementButton.addEventListener('click', () => {
    queueSite.controlQueue('dequeue');
});