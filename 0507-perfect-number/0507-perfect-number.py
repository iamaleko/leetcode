# class Solution:
#   def checkPerfectNumber(self, num: int) -> bool:
#     ans = 1
#     for i in range(2, num // 2 + 1):
#       if num % i == 0:
#         ans += i
#     return ans == num

class Solution:
    def checkPerfectNumber(self, num: int) -> bool:
        # Check if num is less than 2 (no even perfect number exists)
        if num < 2:
            return False
        
        # Initialize the limit and the sum of divisors
        limit = int(num ** 0.5) + 1
        divisors_sum = 1
        
        # Iterate through the prime numbers up to the limit and calculate the sum of divisors
        for i in range(2, limit):
            if num % i == 0:
                divisors_sum += i
                if i != num // i:
                    divisors_sum += num // i
        
        # Check if num is equal to the sum of divisors
        if divisors_sum == num:
            return True
        else:
            return False