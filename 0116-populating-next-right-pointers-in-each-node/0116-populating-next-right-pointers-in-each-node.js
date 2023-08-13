const connect = (n) => {
    if (n && n.left && n.right) {
        n.left.next = n.right;
        if (n.next) {
            n.right.next = n.next.left
        }
        connect(n.left);
        connect(n.right);
    }
    return n;
};