const lengthOfLongestSubstring = (s) => {
    if (!s.length) return '';
    const map = {};
    let c, max = 1, l = 0, r = 0;
    for (c of s) {
        if (c in map && map[c] >= l) {
            max = Math.max(max, r - l);
            l = map[c] + 1;
        }
        map[c] = r++;
    }
    return Math.max(max, r - l);
};