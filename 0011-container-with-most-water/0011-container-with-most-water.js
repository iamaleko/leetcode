// const maxArea = (height) => {
//     let max = 0, l, r, contain;
//     for (l = 0; l < height.length - 1; l++) {
//         for (r = l + 1; r < height.length; r++) {
//             contain = Math.min(height[l], height[r]) * (r - l);
//             if (contain > max) {
//                 max = contain;
//             }
//         }    
//     }
//     return max;
// };

// const maxArea = (height) => {
//     let max = 0, l = 0, r = height.length - 1, has;
//     while (l !== r) {
//         if (height[l] < height[r]) {
//             has = height[l] * (r - l);
//             if (has > max) max = has;
//             ++l;
//         } else {
//             has = height[r] * (r - l);
//             if (has > max) max = has;
//             --r;
//         }
//     }
//     return max;
// };

const maxArea = (height) => {
    let max = 0, has;
    while (height.length > 1) {
        if (height[0] < height[height.length - 1]) {
            has = height[0] * (height.length - 1);
            if (has > max) max = has;
            height.shift();
        } else {
            has = height[height.length - 1] * (height.length - 1);
            if (has > max) max = has;
            height.pop();
        }
    }
    return max;
};