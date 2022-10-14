class Node {
    constructor(value) {
      this.value = value;
      this.right = null;
      this.left = null;
    }
  }
  
export default class BinarySearchTree {
    constructor() {
        this.root = null;
    }
//inserts a number into the tree. Returns the entire tree.
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
        this.root = newNode;
        return this;
        }
        let current = this.root;
        const rnLoop = true;
        while (rnLoop) {
        if (value === current.value) return undefined;
        if (value < current.value) {
            if (!current.left) {
            current.left = newNode;
            return this;
            }
            current = current.left;
        } else {
            if (!current.right) {
            current.right = newNode;
            return this;
            }
            current = current.right;
        }
        }
    }

    depthFirst(node) {
        if(node) {
            console.log(node.value);
            this.depthFirst(node.left);
            this.depthFirst(node.right)
        
        }
        
    }

}


