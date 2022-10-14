export default class DomControl {
    constructor() {
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

    clearHTML(elements) {
        for (let i = 0; i < elements.length; i++)
            elements[i].innerHTML = ''
    }
    flashColor(item, color) {
        item.classList.add(`bg-${color}`);
        setTimeout(() => {
            item.classList.remove(`bg-${color}`)
          }, 150)
    }
}