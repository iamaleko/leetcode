class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dict = {}
        for k, v in enumerate(nums):
            rest = target - v
            if rest in dict:
                return [k, dict[rest]]
            else:
                dict[v] = k
        