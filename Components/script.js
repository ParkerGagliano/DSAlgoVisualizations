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
        let temparr = [10,2,3,41,41,22,2,1,321]
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

const queueSite = new QueueSite();
queueSite.createQueue();
let addElementButton = document.getElementById('createq');
addElementButton.addEventListener('click', () => {
    queueSite.controlQueue('enqueue', 4);
});