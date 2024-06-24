import heapq
import sys
input = sys.stdin.readline

heap = []

n = int(input())

for _ in range(n):
    num = int(input())

    if num > 0:
        heapq.heappush(heap, (-num, num))
    elif num == 0:
        if heap:
            print(heapq.heappop(heap)[1])
        else:
            print(0)
