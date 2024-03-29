const amountOfTime = (root, val) => {
    if (!root.left && !root.right) return 0;
    
    let start, max = 0, queue = [];
    
    // link
    queue.push(root)
    while (queue.length) {
        const node = queue.pop();
        if (node.val === val) {
            start = node;
            node.val = 0;
        }
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
    queue.push(start)
    while (queue.length) {
        const node = queue.pop();
        if (node.val > max) max = node.val;
        if (node.left) {
            delete node.left.parent;
            node.left.val = node.val + 1;
            queue.push(node.left);
        }
        if (node.right) {
            delete node.right.parent;
            node.right.val = node.val + 1;
            queue.push(node.right);
        }
        if (node.parent) {
            if (node.parent.left === node) {
                delete node.parent.left;
            } else {
                delete node.parent.right;
            }
            node.parent.val = node.val + 1;
            queue.push(node.parent);
        }
    }
    
    return max;
};