const amountOfTime = (root, val) => {
    if (!root.left && !root.right) return 0;
    
    let start, max = 0, queue = [];
    
    // link
    queue.push(root)
    while (queue.length) {
        const node = queue.pop();
        if (node.val === val) start = node;
        if (node.left) {
            node.left.parent = node;
            queue.push(node.left);
        }
        if (node.right) {
            node.right.parent = node;
            queue.push(node.right);
        }
    }
    
    // deep
    start.val = 0;
    queue.push(start)
    while (queue.length) {
        const node = queue.pop();
        const deep = node.val;

        if (deep > max) max = deep;
        if (node.left) {
            delete node.left.parent;
            node.left.val = deep + 1;
            queue.push(node.left);
        }
        if (node.right) {
            delete node.right.parent;
            node.right.val = deep + 1;
            queue.push(node.right);
        }
        if (node.parent) {
            if (node.parent.left === node) {
                delete node.parent.left;
            } else {
                delete node.parent.right;
            }
            node.parent.val = deep + 1;
            queue.push(node.parent);
        }
    }
    
    return max;
};