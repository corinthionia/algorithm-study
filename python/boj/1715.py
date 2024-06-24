import sys
import heapq as hq
input = sys.stdin.readline

n = int(input())
heap = []

for _ in range(n):
    hq.heappush(heap, int(input()))

answer = 0

while len(heap) > 1:
    combined = hq.heappop(heap)
    combined += hq.heappop(heap)

    answer += combined
    hq.heappush(heap, combined)

print(answer)