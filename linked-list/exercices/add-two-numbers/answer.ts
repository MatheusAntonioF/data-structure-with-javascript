class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  firstList: ListNode, //
  secondList: ListNode // | null
): ListNode | null {
  /**
   * - first of all I need to loop through the list nodes and get the elements
   * - put the elements in the reverse order
   * - sum the two lists of elements
   * - create a new instance of ListNode and put each char of the sum in this instance
   */

  // loop through List Nodes and get the elements
  const firstListValues = [firstList.val];
  const secondListValues = [secondList.val];

  let current = firstList.next;

  while (current) {
    firstListValues.push(current.val);
    current = current.next;
  }

  current = secondList.next;

  while (current) {
    secondListValues.push(current.val);
    current = current.next;
  }

  // put the elements in the reverse order and sum
  const sumOfFirstList = firstListValues.reverse().join('');
  const sumOfSecondList = secondListValues.reverse().join('');

  const summation = BigInt(sumOfFirstList) + BigInt(sumOfSecondList); // 807 1e+30

  // create a new instance of ListNode and put the elements of sum
  const arraySummation = summation.toString().split(''); // [8, 0, 7]

  const result = new ListNode(); // [7, 0, 8]

  // think of the ideia to add a new element before other element

  for (let index = 0; index <= arraySummation.length - 1; index++) {
    const currentValue = Number(arraySummation[index]);

    const nextValue = arraySummation[index - 1];

    const isThereNextNode = nextValue;

    if (isNaN(Number(nextValue))) {
      console.log(nextValue, Number(nextValue));
    }

    const nextNode = isThereNextNode
      ? new ListNode(Number(nextValue), result.next)
      : null;

    result.val = currentValue;
    result.next = nextNode;
  }

  return result;
}
