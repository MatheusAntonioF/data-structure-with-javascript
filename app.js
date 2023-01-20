const LinkedList = require('./LinkedList');

const ll = LinkedList.fromValues(10, 20, 30, 40);

ll.print();

ll.insertAtIndex(2, 60);

ll.print();
