class Node {
  constructor(parent = null, index = 0) {
    this.index = index;
    this.parent = parent;
    this.data = [];
    this.children = [];
  }
}

const calculate = (s) => {
  const OPEN = '(', CLOSE = ')', PLUS = '+', MINUS = '-', SPACE = ' ';
  const head = new Node();
  let node = head;

  // tokenize
  for (let op of s) {
    switch (op) {
      case OPEN:
        node.data.push(new Node(node, node.data.length));
        node.children.push(node.data.at(-1));
        node = node.data.at(-1);
      break;
      case CLOSE:
        if (node.data.length === 0) node.data.push(0);
        node = node.parent;
      break;
      case PLUS:
      case MINUS:
        node.data.push(op);
      break;
      case SPACE:
      break;
      default:
        op = parseInt(op, 10);
        if (node.data.length === 1 && node.data[0] === MINUS) {
          node.data[0] = -op;
        } else
        if (typeof node.data.at(-1) === 'number') {
          node.data[node.data.length - 1] *= 10;
          node.data[node.data.length - 1] += node.data.at(-1) < 0 ? -op : op; 
        } else {
          node.data.push(op);
        }
    }
  }
  // console.log(head)
  // console.log(s, '===============')
  // solve
  node = head;
  while (true) {
    // console.log(node);
    if (node.children.length) { // approach level
      node = node.children.pop();
    } else if (node.data.length === 1) {
      if (node.parent) { // remove level
        if (node.index === 1 && node.parent.data[0] === MINUS) { // deal with minus
          node.parent.data.splice(0, 2, -node.data[0]);
        } else {
          node.parent.data[node.index] = node.data[0];
        }
        node = node.parent;
      } else { // return result from upper level
        return node.data[0];
      }
    } else if (typeof node.data[0] === 'number' && typeof node.data[2] === 'number') {
      if (node.data[1] === PLUS) {
        node.data.splice(0, 3, node.data[0] + node.data[2]);
      } else {
        node.data.splice(0, 3, node.data[0] - node.data[2]);
      }
    }
  }
};