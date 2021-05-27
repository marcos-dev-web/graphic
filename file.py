#!/bin/python3

# List to order
l = [1, 343, 4, 5, 3, 6, 8, 0, 7, 333, 332, 3]

# List backup
bl = l[::]

# List to put ordered values
lst = []

# Counter to iterator
c = 0

# Current index to append
cn = 0

# direction to order
direction = 'tomin' # tomax (min to max) | tomin (max to min)

# remove value by index
def pop(list_, index_):
    lx = []
    for k,v in enumerate(list_):
        if k != index_:
            lx.append(v)
    return lx



while True:
    c = 0
    while c < len(l):
        if direction == 'tomax':
            if l[c] < l[cn]:
                cn = c
                c = 0

        if direction == 'tomin':
            if l[c] > l[cn]:
                cn = c
                c = 0
        c += 1

    lst.append(l[cn])
    l = pop(l, cn)
    cn = 0

    if len(l) == 0:
        print('OLD LIST: ', bl)
        print('LIST SORTED: ', lst)
        break
