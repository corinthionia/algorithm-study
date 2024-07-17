p, m = map(int, input().split())

rooms = []
players = [input().split() for _ in range(p)]

for player in players:
    is_included = False
    
    # level: 기준이 되는 레벨 (방에 첫 번째로 들어온 사람의 레벨)
    # room: 해당 방에 들어가 있는 참여자 리스트
    for room in rooms:
        level = int(room[0][0])
        
        if len(room) == m:
            continue
        
        if level - 10 <= int(player[0]) <= level + 10:
            room.append(player)
            is_included = True
            break
            
    # 들어갈 수 있는 방이 없다면 새로운 방 생성
    if not is_included:
        rooms.append([player])


for room in rooms:
    print('Started!' if len(room) == m else 'Waiting!')
    
    temp = sorted(room, key=lambda x: x[1]) # 닉네임 사전순 정렬
    for j in range(len(temp)):
        print(*temp[j])