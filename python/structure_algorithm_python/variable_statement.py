def main():
    numYearBase10 = 2011
    numYearBase8 = 03733
    numYearBase16 = 0x7DB

    print 'Year by bases 10 : %d, by base 8 : %d , by base 16: %d' % ( numYearBase10, numYearBase8, numYearBase16)

    numComplex1 = complex(3, 4)
    numComplex2 = 4 +3j

    print 'Comple value: ', numComplex1
    print 'Absolute value: ', abs(numComplex2)
    print 'Real value : ', numComplex2.real
    print 'image value : ', numYearBase10.imag

    strDeptName = 'Industrial & Systems Engineering'
    strUnivName = 'KAIST'
    print 'Department : ', strDeptName
    print 'Full Name of dept.  : ', (strDeptName + ', ' + strUnivName)