const maxAncestorDiff = (root) => {
    root.min = root.val;
    root.max = root.val;
    
    let diff = 0;
    
    const look = (node, parent) => {
        node.max = Math.max(node.val, parent.max);
        node.min = Math.min(node.val, parent.min);
        if (diff < Math.abs(node.min - node.max)) diff = Math.abs(node.min - node.max);
        if (node.left) look(node.left, node);
        if (node.right) look(node.right, node);
    }
    
    look(root, root);
    
    return diff;
};