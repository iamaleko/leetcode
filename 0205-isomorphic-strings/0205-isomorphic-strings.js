const isIsomorphic = (l, r) => {
    if (l.length !== r.length) return false;
    const lm = {}, rm = {};
    for (let i in l) {
        if (lm[l[i]]) {
            if (lm[l[i]] !== r[i]) return false;
        } else if (rm[r[i]]) {
            if (rm[r[i]] !== l[i]) return false;
        } else {
            lm[l[i]] = r[i];
            rm[r[i]] = l[i];
        }
    }
    return true;
};