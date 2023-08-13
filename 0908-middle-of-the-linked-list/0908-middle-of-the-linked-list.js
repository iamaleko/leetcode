const middleNode = (head) => {
    let s = head, f = head;
    while (f.next) {
        s = s.next;
        f = f.next;
        if (f.next) f = f.next;
    }
    return s;
};