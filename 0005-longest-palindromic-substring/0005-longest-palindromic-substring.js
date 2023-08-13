var longestPalindrome = function(s) {
    let maxSub = '';
    
    const bubbleFromCenter = (left, right) => {
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left+1, right)
    }
    
    for(let i = 0; i < s.length; i++) {
        const sub1 = bubbleFromCenter(i, i);
        const sub2 = bubbleFromCenter(i, i+1);
        const sub = sub1.length > sub2.length ? sub1 : sub2
        if(sub.length > maxSub.length) {
            maxSub = sub
        }
    }
    return maxSub
};

// const longestPalindrome = (ss) => {
//     if (ss.length < 2) return ss;
//     const s = ss.split('');
//     const r = ss.split('').reverse();
    
//     const m = Array(ss.length).fill().map(() => []);
//     let p = ss[0];
//     for (let a in s) {
//         for (let b in r) {
//             if (s[a] === r[b]) {
//                 if (m[a-1] && m[a-1][b-1]) {
//                     m[a][b] = m[a-1][b-1] + 1;
//                     if (m[a][b] > p.length) {
//                         let sub = ss.substr(a - m[a][b] + 1, m[a][b])
//                         if (sub === sub.split('').reverse().join('')) { // shame on me
//                             p = sub;
//                         }
//                     }
//                 } else {
//                     m[a][b] = 1;    
//                 }
//             } else {
//                 m[a][b] = 0;
//             }
//         }
//     }
    
//     return p;
// };

// const longestPalindrome = (s) => {
//     if (s.length > 1) {
//         let offset = 0;
//         let window = s.length;
//         while(window > 0) {
//             const sub = s.substr(offset, window);
//             if (sub === sub.split('').reverse().join('')) {
//                 return sub;
//             } if (++offset + window > s.length) {
//                 offset = 0;
//                 window -= 1;
//             }
//         }
//     }
//     return s;
// };

// const longestPalindrome = (s) => {
//     const rev = s.split('').reverse().join('');
//     if (s.length > 1) {
//         let offset = 0;
//         let window = s.length;
//         while(window > 0) {
//             const sub = s.substr(offset, window);
//             if (rev.indexOf(sub) === s.length - offset - window) {
//                 return sub;
//             } if (++offset + window > s.length) {
//                 offset = 0;
//                 window -= 1;
//             }
//         }
//     }
//     return s;
// };