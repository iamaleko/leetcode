// /**
//  * @param {number} n
//  * @return {number}
//  */
// const climbStairs = (n) => {
//     let v = 1, p = 0;
//     const f = n => { 
//         let s = n;
//         while(--n) s *= n;
//         return s;
//     }
//     while (n > 1) {
//         n = n - 2;
//         ++p;
//         v += n ? f(n + p) / (f(n) * f(p)) : 1
//     }
//     return v;
// };

climbStairs=d=>(m={},p=d=>m[d]||(m[d]=d<4?d:p(d-1)+p(d-2)))(d)