
# list
lstTest = [1, 2, 3, 4]
print lstTest
print lstTest[0], lstTest[1], lstTest[2]
print lstTest[-1], lstTest[-2]
print lstTest[1:3]
print lstTest + lstTest
print lstTest * 3

lstTest = range[1, 20, 3]
print lstTest
print 4 in lstTest, 100 in lstTest
lstTest.append('hey')
print lstTest
print lstTest[0]

del lstTest[0]
print lstTest
lstTest.reverse()
print lstTest
lstTest.remove(4)
print lstTest
lstTest.sort()
print lstTest


# Tuple
# Tuple does not allow value changes

tplTest = (1, 2, 3)

tplTest[0] = 100 # error 


# Dictuonary

dicTest = {1: 'one', 2: 'two', 3: 'three'}
print dicTest[1]
dicTest[4] = 'four'
print dicTest
dicTest[1] = 'hana'
print dicTest
print dicTest.keys()
print dicTest.values()
print dicTest.items()


