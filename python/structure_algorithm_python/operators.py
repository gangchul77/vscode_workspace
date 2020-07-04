def main():
    numTest1 = 10
    numTest2 = 3.0
    numPlus = numTest1 + numTest2
    numMines = numTest1 - numTest2
    numMultipley = numTest1 * numTest2
    numDivide = numTest1 / numTest2
    numModula = numTest1 % numTest2
    print '%d, %d, %d, %f, %d' %(numPlus, numMines, numMultipley, numDivide, numModula)

    numDivideInt = numTest1 / int(numTest2)
    print numDivide, numDivideInt

    numTest2, numTest1 = numTest1, numTest2
    print numTest1, numTest2

    print numTest1 == numTest2
    print numTest1 != numtest2
    print type(numTest1)

    numTest1 = str(numTest1)
    print type(numTest1), numTest1

    strFormula = '2011 / 7'
    print eval(strFormula)

main()