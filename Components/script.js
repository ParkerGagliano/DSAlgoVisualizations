import Queue from './Queue.js';
let container = document.getElementById('qcontainer');
let leftarrow = document.createElement('div')
let rightarrow = document.createElement('div')
let mainarrcontainer = document.getElementById('mainarr')
let randomIndex = []


class QueueSite{
    constructor(){  
        this.queue = null;
        //this.arr = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
        this.arr = [1,2,3,4,5,6,7,8,9,10]
        this.mainArrRender()
    }
    createQueue(){
        this.queue = new Queue();
    }

    controlQueue(command, value){
        if (value == null) {
            this.queue[command]();
        }
        else {
            this.queue[command](value);
        }
        queueSite.render();
        if (command === 'enqueue') {
            this.flashColor(rightarrow, 'primary');
        }
        else {
            this.flashColor(leftarrow, 'danger');
        }
    }

    createEL(name, attr, intext) {  // Element maker 
        let temp = document.createElement(name)
        if (attr) {
            for (let i = 0; i < attr.length; i++){
                temp.classList.add(attr[i])
            }
        }
        if (intext) {
            temp.innerText=intext
        }
        return temp
    }

    render(){
        this.mainArrRender()
        container.innerHTML = ''
        leftarrow.innerHTML = ''
        rightarrow.innerHTML = ''
        leftarrow.classList.add('col-1')
        let del = this.createEL('h5', null, 'Del')
        leftarrow.appendChild(del)
        container.appendChild(leftarrow)
        rightarrow.classList.add('col-1')
        let insert = this.createEL('h5', null, 'Insert')
        rightarrow.appendChild(insert)
        let temparr = this.queue.fullArray;
        for (let i = 0; i < temparr.length; i++) {
            let color = 'secondary'
            let col = document.createElement('div');
            if (i%2===0){
                color = 'muted'
            }
            col.className = `col-1 border bg-${color}`;
            let value = this.createEL('h5', 'text-center', temparr[i])
            col.appendChild(value)
            container.appendChild(col);
          }
        container.appendChild(rightarrow)
    }


    mainArrRender() {
        mainarrcontainer.innerHTML = ''
        for (let i = 0; i < this.arr.length; i++) {
            let nums = this.createEL('h5', ['text-center'], this.arr[i])
            let ele = this.createEL('div', ['col-1', 'border'], null)
            ele.appendChild(nums)
            mainarrcontainer.appendChild(ele)
        }
    }

    eventListenerButton(){
        let addElementButton = document.getElementById('enq');
        let removeElementButton = document.getElementById('removeq')
        addElementButton.addEventListener('click', () => {
            if (queueSite.queue.fullArray.length < 10) {
                let temp = this.arr.pop()
                //randomIndex.push(this.arr.splice(Math.floor(Math.random()*this.arr.length)))
                randomIndex.push(temp)
                queueSite.controlQueue('enqueue', temp);
            }
            else {
                alert('Queue is full');
            }
        });
        removeElementButton.addEventListener('click', () => {
            if (queueSite.queue.fullArray.length >=1) {
                this.arr.push(randomIndex.shift(randomIndex.length))
                queueSite.controlQueue('dequeue');
            }
            else {
                alert('Queue is empty')
            }
        });
    }

    flashColor(item, color) {
        item.classList.add(`bg-${color}`);
        setTimeout(() => {
            item.classList.remove(`bg-${color}`)
          }, 150)
    }
}

let queueSite = new QueueSite();
queueSite.createQueue();
queueSite.eventListenerButton();
