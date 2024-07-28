from collections import defaultdict
from itertools import combinations

M, N = map(int, input().split())
universe = defaultdict(int)

for _ in range(M):
    planets = list(map(int, input().split()))
    sorted_planets = sorted(list(set(planets)))
    
    # { 행성의 크기: 순서 }
    rank = {sorted_planets[i]: i for i in range(len(sorted_planets))}

    # 같은 순서 조합을 가진 우주를 count
    key = ' '.join([str(rank[planet]) for planet in planets])
    universe[key] += 1
    
sum = 0
for cnt in universe.values():
    # nC2 - 같은 행성 크기 순서를 가진 (== 균등) 우주의 쌍(== 2)의 개수를 구해야 하기 때문
    sum += len(list(combinations(range(cnt), 2)))
    
print(sum)