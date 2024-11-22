# import math

# class Solution:
#   def minimizedMaximum(self, n: int, q: List[int]) -> int:
#     n -= len(q)
#     h = [(-x, x, 1) for x in q]
#     heapify(h)

#     while n:
#       (avg, total, distributed) = heappop(h)

#       _distributed = n + distributed
#       _avg = -math.ceil(total / _distributed)
#       if h and _avg > h[0][0]:
#         _distributed = math.ceil(total / (-h[0][0] - 1))
#         _avg = -math.ceil(total / _distributed)

#       heappush(h, (_avg, total, _distributed))
#       n -= _distributed - distributed

#     return -h[0][0]

class Solution:
    def minimizedMaximum(self, n, quantities):
        m = len(quantities)

        # Create a list of tuples (-ratio, quantity, stores_assigned)
        type_store_pairs = [(-q, q, 1) for q in quantities]

        # Use heapq.heapify() to convert the list into a heap in O(m) time
        heapq.heapify(type_store_pairs)

        # Iterate over the remaining n - m stores
        for _ in range(n - m):
            # Pop the element with the maximum ratio (due to negative sign it's min-heap)
            (
                neg_ratio,
                total_quantity_of_type,
                stores_assigned_to_type,
            ) = heapq.heappop(type_store_pairs)

            # Calculate the new ratio after assigning one more store
            new_stores_assigned_to_type = stores_assigned_to_type + 1
            new_ratio = total_quantity_of_type / new_stores_assigned_to_type

            # Push the updated pair back into the heap
            heapq.heappush(
                type_store_pairs,
                (
                    -new_ratio,
                    total_quantity_of_type,
                    new_stores_assigned_to_type,
                ),
            )

        # Pop the first element to get the final ratio
        _, total_quantity_of_type, stores_assigned_to_type = heapq.heappop(
            type_store_pairs
        )

        # Return the maximum minimum ratio
        return math.ceil(total_quantity_of_type / stores_assigned_to_type)
        