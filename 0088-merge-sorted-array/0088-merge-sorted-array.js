/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    const buffer = [];
    for (let i = 0; i < m + n; i++) {
        if (i < m) {
            if (nums1[i] > nums2[0]) {
                if (nums2[0] > buffer[0]) {
                    buffer.push(nums1[i]);
                    nums1[i] = buffer.shift(); 
                } else {
                    buffer.push(nums1[i]);
                    nums1[i] = nums2.shift();   
                }
            } else if (nums1[i] > buffer[0]) {
                buffer.push(nums1[i]);
                nums1[i] = buffer.shift();  
            }
        } else {
            if (!nums2.length || buffer.length && nums2[0] > buffer[0]) {
                nums1[i] = buffer.shift();
            } else {
                nums1[i] = nums2.shift();
            }   
        }
    }
};