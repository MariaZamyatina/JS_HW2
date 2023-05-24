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


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    num = input('введите число: ')
    num = int(num)
    if num < 2:
        print('введите число более 1')
    else:
        t0 = datetime.datetime.now()
        arr = list()
        i = 2
        while i <= num:
            if prostye_chisla(i):
                arr.append(i)
            i += 1

        t1 = datetime.datetime.now()

        print(arr)
        print((t1 - t0))

