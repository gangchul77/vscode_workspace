'''
    Created on 2020. 07.05
    @Author: Steel lee

'''

class HelloWorld:
    def __init__(self): 
        print 'Hello Wolrd! Just one more time'
    def __del__(self):
        print 'Good Bye!'
    def performAverage(self, val1, val2):
        average = (val1 + val2) / 2.0
        print 'The average of the scores is : ', average
    
def main():
    world = HelloWorld()
    score1, score2 = input('Enter two scores seperated by a comma: ')
    world.performAverage(score1, score2)

main()