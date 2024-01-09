const leafSimilar = (a, b) => {
    const stack = [];
    let leafs = 0;
    const ltr = (n) => {
        n.left && ltr(n.left);
        if (!n.left && !n.right) {
            stack.push(n.val);
            ++leafs;
        }
        n.right && ltr(n.right);
    };
    const rtl = (n) => {
        n.right && rtl(n.right);
        if (!n.left && !n.right) {
            if (stack[stack.length - 1] === n.val) stack.pop();
            --leafs;
        }
        n.left && rtl(n.left);
    };
    
    ltr(a);
    rtl(b);
    
    return !stack.length && !leafs;
};