class LinkedList {
  constructor() {
    this.head = null; // the first node of the linked list
    this.length = 0;
  }

  insertAtHead(data) {
    /**
     * I pass this.head as second param because a Linked List works like
     * a last in first out - LIFO
     *
     * In this case, I'm adding a new value before the head value (this.head)
     * this new value will be the current this.head
     */
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;

    this.length++;
  }

  getByIndex(index) {
    if (index < 0 || index > this.length) return null;

    /**
     * in this case we need to start to loop through the linked list starting
     * with the first element (head) and then we loop until the index value - 1
     * because we can access the next element by the previous element
     */

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  insertAtIndex(index, value) {
    if (index === 0) return this.insertAtHead(value);
    /**
     * in this case I'm getting the previous node and changing the next element
     * I take the node on index - 1, changing the next element to a new instance
     * of LinkedListNode that will be the element that I'm adding right now.
     * The next element of my new instance will be next element of my previous node
     *
     * > Think of the ideia to separate a previous node to add a new node for the next position
     */

    const previousNode = this.getByIndex(index - 1);

    if (previousNode === null) return null;

    previousNode.next = new LinkedListNode(value, previousNode.next);

    this.length++;
  }

  removeHead() {
    /**
     * remove the head and changing the length to length - 1
     *
     * to remove the head element I'm appoint the head element to the next element
     */
    this.head = this.head.next;

    this.length--;
  }

  removeAtIndex(index) {
    if (index === 0) return this.removeHead();

    const previousNode = this.getByIndex(index - 1);

    if (previousNode === null) return null;

    // const currentNode = this.getByIndex(index + 1);
    // previousNode.next = currentNode.next;

    previousNode.next = previousNode.next.next;

    this.length--;
  }

  print() {
    let output = '';
    let current = this.head;

    while (current) {
      output = `${output}${current.value} -> `;
      current = current.next;
    }

    console.log(`${output}null`);
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

LinkedList.fromValues = (...values) => {
  const ll = new LinkedList();

  for (let index = values.length - 1; index >= 0; index--) {
    ll.insertAtHead(values[index]);
  }

  return ll;
};

module.exports = LinkedList;
