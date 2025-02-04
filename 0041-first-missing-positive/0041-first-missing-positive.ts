function firstMissingPositive(nums: number[]): number {
  let n = nums.length,
    pointer = 0,
    proceed: number | null = null,
    swap = false,
    found: number | null = null;

  while (pointer <= n) {
    const val = nums[pointer] === null ? null : nums[pointer] - 1;

    if (swap) {
      // swap in progress
      if (
        val === null || // empty
        val === pointer || // same
        (val < 0 || val >= n) // outside range
      ) {
        nums[pointer] = pointer + 1;
        if (found === pointer) {
          // check next
          found = null;
          pointer++;
        } else {
          // proceed after swap ends
          pointer = proceed;
        }
        proceed = null;
        swap = false;
      } else {
        // inside range
        if (found === pointer) {
          proceed = found + 1;
          found = null;
        }
        nums[pointer] = pointer + 1;
        pointer = val;
      }
    } else {
      if (val === pointer) {
        // on it's place
        pointer++;
      } else if (
        val === null || // empty
        (val < 0 || val >= n) // outside range
      ) {
        if (found === null) found = pointer;
        nums[pointer] = null;
        pointer++;
      } else {
        // inside range
        if (found === null) found = pointer;
        nums[pointer] = null;
        proceed = pointer + 1;
        pointer = val;
        swap = true;
      }
    }
  }

  return found === null ? n : found + 1;
};