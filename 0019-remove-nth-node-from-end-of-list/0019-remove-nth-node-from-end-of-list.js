const removeNthFromEnd = (head, n) => {
    let f = head, s = null;
    
    while (f.next) {
        if (n === 1) {
            s = s === null ? head : s.next;
        } else {
            --n;
        }
        f = f.next;
    }
    
    if (s === null) {
        return head.next;
    } else {
        s.next = s.next.next;
        return head;
    }
};