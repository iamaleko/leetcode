function strangePrinter(s: string): number {
  // remove duplicates
  let _s = '';
  for (let i = 0; i < s.length; i++) if (!i || s[i - 1] !== s[i]) _s += s[i];
  s = _s;

  // dp
  const mem: Record<number, number> = {};
  function turns(i: number, j: number): number {
    if (i > j) return 0;
    const key = (i + j) / 2 * (i + j + 1) + j;
    if (mem.hasOwnProperty(key)) return mem[key];
    let min = 1 + turns(i + 1, j); // first letter is not repeating
    for (let k = i + 1; k <= j; k++) {
      if (s[i] === s[k]) { // check every single repeat one by one
        let sum = turns(i, k - 1) + turns(k + 1, j);
        if (sum < min) min = sum;
      }
    }
    return mem[key] = min;
  }

  return turns(0, s.length - 1);
}

// Heuristic, 98/200 test cases passed
// type Segment = {
//   size: number;
//   char: string;
//   parts: Set<number>[];
// }

// function strangePrinter(s: string): number {
//   // minimize string
//   let _s = '';
//   for (let i = 0; i < s.length; i++) {
//     if (!i || s[i - 1] !== s[i]) _s += s[i];
//   }
//   s = _s;
//   console.log(s);

//   const segments_ind: Segment[] = [],
//         segments_arr: Segment[] = [],
//         segments_map: Record<string, Segment> = {};

//   // find segments
//   for (let i = 0; i < s.length; i++) {
//     if (i && s[i - 1] === s[i]) { // extend segment part
//       segments_map[s[i]].size++;
//       segments_map[s[i]].parts.at(-1).add(i);
//     } else if (s[i] in segments_map) { // add segment part
//       segments_map[s[i]].size++;
//       segments_map[s[i]].parts.push(new Set([i]));
//     } else { // create segment
//       segments_map[s[i]] = {
//         char: s[i],
//         size: 1,
//         parts: [new Set([i])],
//       }
//       segments_arr.push(segments_map[s[i]]);
//     }
//     segments_ind[i] = segments_map[s[i]];
//   }

//   // sort segments
//   const sort = (): void => {
//     segments_arr.sort((a, b) => {
//       if (a.parts.length === 0 || b.parts.length === 0) return 0;
//       const a_min = Math.min(...a.parts[0]);
//       const a_max = Math.max(...a.parts.at(-1));
//       const b_min = Math.min(...b.parts[0]);
//       const b_max = Math.max(...b.parts.at(-1));
//       const a_len = a_max - a_min;
//       const b_len = b_max - b_min;
//       if (a_len !== b_len) return b_len - a_len;
//       return 0;
//     })
//   }

//   // print
//   let turns = 0;
//   sort();
//   while (segments_arr.length) {
//     let segment = segments_arr.shift();
//     if (segment.parts.length === 0) continue;
//     // console.log(turns, segment, segments_arr)
//     turns++;
//     // deal with overlapping segments
//     if (segment.parts.length > 1) {
//       let i = Math.min(...segment.parts[0]),
//           j = Math.max(...segment.parts.at(-1));
//       let segments_map: Record<string, Segment> = {};
//       for (; i <= j; i++) {
//         if (segments_ind[i] === segment) {
//           segments_map = {};
//           continue;
//         }
//         if (segments_ind[i].size === 0) continue;

//         // reduce old segment
//         segments_ind[i].size--;
//         for (let p = 0; p < segments_ind[i].parts.length; p++) {
//           if (segments_ind[i].parts[p].has(i)) {
//             segments_ind[i].parts[p].delete(i);
//             if (segments_ind[i].parts[p].size === 0) segments_ind[i].parts.splice(p, 1);
//             // console.log('reduce', segments_ind[i])
//             break;
//           }
//         }

//         if (i && s[i - 1] === s[i]) { // extend segment part
//           segments_map[s[i]].size++;
//           segments_map[s[i]].parts.at(-1).add(i);
//         } else if (s[i] in segments_map) { // add segment part
//           segments_map[s[i]].size++;
//           segments_map[s[i]].parts.push(new Set([i]));
//         } else { // create segment
//           segments_map[s[i]] = {
//             char: s[i],
//             size: 1,
//             parts: [new Set([i])],
//           }
//           segments_arr.push(segments_map[s[i]]);
//         }
//         segments_ind[i] = segments_map[s[i]];
//       }
//       sort()
//     }
//   }
//   return turns;
// };

