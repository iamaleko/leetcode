const solution = (isBadVersion) => {
    return function(r) {
        let l = 0, f = r;
        while (l <= r) {
            const c = l + Math.ceil((r - l) / 2)
            if (isBadVersion(c)) {
                if (c < f) f = c;
                r = c - 1;
            } else {
                l = c + 1;
            }
        }
        return f;
    };
};
