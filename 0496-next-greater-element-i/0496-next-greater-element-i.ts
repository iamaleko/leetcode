function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map: Record<number, number> = {};
  for (const num of nums1) map[num] = -1;
  const st: number[] = [];
  for (const num of nums2) {
    while (st.length && num > st.at(-1)) {
      if (map.hasOwnProperty(st.at(-1))) map[st.at(-1)] = num;
      st.pop();
    }
    st.push(num)
  }
  return nums1.map((v) => map[v]);
};