# This is a sample Python script.
import datetime


# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.


def prostye_chisla(i):
    j=2
    while j<i:
        if (i % j == 0):
            return False
        j+=1
        continue
    return True

def poisk(num):
    if num < 2:
        print('введите число более 1')
    else:
        arr = list()
        i = 2
        while len(arr) < num:
            if prostye_chisla(i):
                arr.append(i)
            i += 1
    return arr


if __name__ == '__main__':
    #num = input('введите число: ')
    #num = int(num)
    t0 = datetime.datetime.now()
    t1 = datetime.datetime.now()
    print(poisk(int(input('введите число: '))))
    print((t1 - t0))

