import QueueSite from './QueueComponent.js'
import BinarySearchTree from './BinaryTree.js'




let queueSite = new QueueSite();
queueSite.eventListenerButton();
let binarySearchTree = new BinarySearchTree()
binarySearchTree.insert(10); //returns the entire list
binarySearchTree.insert(6); //returns the entire list
binarySearchTree.insert(2);
binarySearchTree.insert(20);
binarySearchTree.insert(34);
binarySearchTree.insert(69);
binarySearchTree.insert(4);
binarySearchTree.depthFirst(binarySearchTree.root)