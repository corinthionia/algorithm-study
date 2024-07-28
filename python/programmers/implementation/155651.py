def time_to_num(time):
    h, m = map(int, time.split(':'))
    return h * 60 + m

def solution(book_time):
    book_time.sort(key=lambda x: (x[0], x[1]))
    rooms = [[book_time[0][1]]]
    
    for start, end in book_time[1:]:
        flag = False
        curr = time_to_num(start)
        
        for i in range(len(rooms)):
            prev = time_to_num(rooms[i][-1]) + 10
            
            if prev <= curr:
                rooms[i].append(end)
                flag = True
                break
            else:
                continue
        
        if flag == False:
            rooms.append([end])
            
    return len(rooms)