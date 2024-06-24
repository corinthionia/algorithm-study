import heapq
import sys
input = sys.stdin.readline

def solution(operations):
    heap = []

    for operation in operations:
        command, number = operation.split()

        if command == 'I':
            heapq.heappush(heap, int(number))
        elif command == 'D' and heap:
            if int(number) == -1:
                heapq.heappop(heap)
            elif int(number) == 1:
                reverse_heap = [-val for val in heap]

                heapq.heapify(reverse_heap)
                heapq.heappop(reverse_heap)

                heap = [-val for val in reverse_heap]
                heapq.heapify(heap)
    
    if heap:
        return [max(heap), min(heap)]
    else:
        return [0, 0]
