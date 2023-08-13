const firstMissingPositive = (nums) => {
    let pointer = 0,
        proceed = null,
        swap = false,
        found = null;

    while (pointer <= nums.length) {
        const val = nums[pointer] === null ? null : nums[pointer] - 1;
        
        if (swap) { // swap in progress
            if (
                val === null || // empty
                val === pointer || // same
                (val < 0 || val >= nums.length) // outside range
            ) {
                nums[pointer] = pointer + 1;
                if (found === pointer) { // check next
                    found = null;
                    pointer++;
                } else { // proceed after swap ends
                    pointer = proceed;   
                }
                proceed = null;
                swap = false;
                continue;
            }
            
            // inside range
            if (found === pointer) {
                proceed = found + 1;
                found = null;
            }
            nums[pointer] = pointer + 1;
            pointer = val;
        } else {
            // on it's place
            if (val === pointer) {
                pointer++;   
                continue;
            }
            
            if (
                val === null || // empty
                (val < 0 || val >= nums.length) // outside range
            ) {
                if (found === null) found = pointer;
                nums[pointer] = null;
                pointer++;   
                continue;
            }
            
            // inside range
            if (found === null) found = pointer;
            nums[pointer] = null;

            proceed = pointer + 1;
            pointer = val;
            swap = true;
        }
    }

    return found === null ? nums.length : found + 1;
}