import Queue from './Queue.js';
import DomControl from './DomControl.js'
let container = document.getElementById('qcontainer');
let leftarrow = document.createElement('div')
let rightarrow = document.createElement('div')
let mainarrcontainer = document.getElementById('mainarr')
let randomIndex = []
let domControl = new DomControl()

export default class QueueSite{
    constructor(){  
        this.queue = new Queue();
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
        this.render();
        if (command === 'enqueue') {
            domControl.flashColor(rightarrow, 'primary');
            domControl.flashColor(insdel, 'danger')
        }
        else {
            domControl.flashColor(leftarrow, 'danger');
            domControl.flashColor(insdel, 'primary')
        }
    }

    render(){
        this.mainArrRender()
        domControl.clearHTML([container, leftarrow, rightarrow])
        leftarrow.classList.add('col-1')
        let del = domControl.createEL('h5', null, 'Del')
        leftarrow.appendChild(del)
        container.appendChild(leftarrow)
        rightarrow.classList.add('col-1')
        let insert = domControl.createEL('h5', null, 'Insert')
        rightarrow.appendChild(insert)
        let temparr = this.queue.fullArray;
        for (let i = 0; i < temparr.length; i++) {
            let color = 'secondary'
            let col = document.createElement('div');
            if (i%2===0){
                color = 'muted'
            }
            col.className = `col-1 border bg-${color}`;
            //col.className = `col-1 btn btn-primary`
            let value = domControl.createEL('h5', 'text-center', temparr[i])
            col.appendChild(value)
            container.appendChild(col);
          }
        container.appendChild(rightarrow)
    }


    mainArrRender() {
        mainarrcontainer.innerHTML = ''
        for (let i = 0; i < this.arr.length; i++) {
            let nums = domControl.createEL('h5', ['text-center'], this.arr[i])
            let ele = domControl.createEL('div', ['col-1', 'border', 'rounded'], null)
            ele.appendChild(nums)
            mainarrcontainer.appendChild(ele)
        }
        let insdel = domControl.createEL('div', ['col-1', 'border'], null)
        insdel.setAttribute('id', 'insdel')
        let insdeltext = domControl.createEL('h5', ['text-center'],'Ins/Del')
        insdel.appendChild(insdeltext)
        mainarrcontainer.appendChild(insdel)
    }

    eventListenerButton(){
        let addElementButton = document.getElementById('enq');
        let removeElementButton = document.getElementById('removeq')
        addElementButton.addEventListener('click', () => {
            if (this.queue.fullArray.length < 10) {
                let temp = this.arr.pop()
                //randomIndex.push(this.arr.splice(Math.floor(Math.random()*this.arr.length)))
                randomIndex.push(temp)
                this.controlQueue('enqueue', temp);
            }
            else {
                alert('Queue is full');
            }
        });
        removeElementButton.addEventListener('click', () => {
            if (this.queue.fullArray.length >=1) {
                this.arr.push(randomIndex.shift(randomIndex.length))
                this.controlQueue('dequeue');
            }
            else {
                alert('Queue is empty')
            }
        });
    }

    
}

