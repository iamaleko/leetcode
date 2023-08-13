const mergeTrees = (a, b) => {
    if (a && b) {
        a.val += b.val;
        a.left = mergeTrees(a.left, b.left)
        a.right = mergeTrees(a.right, b.right)
        return a;
    } else if (a) {
        return a;
    } else if (b) {
        return b;
    } else {
        return null;
    }
};