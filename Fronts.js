class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor(head) {
        this.head = head;
    }

    length() {

        let counter = 1;
        let currentNode = this.head;
        
        while (currentNode.next){
            counter++;
            currentNode = currentNode.next;
        }
        return counter;
    }
    adToFront(data){
        const newNode = new Node(data);

        newNode.next = this.head;
        this.head = newNode

    }
    removeFront(){
        this.head = this.head.next;

    }
    front(){
        return this.head.data;

    }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

const list1 = new SLL(node1);



console.log(list1.length(node1));

list1.adToFront(0);

console.log(list1.length(node1));

list1.removeFront();

console.log(list1.length(node1));

console.log(list1.front());
