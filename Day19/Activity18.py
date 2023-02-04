"""
Mohammed Rahman
Activity 18
Feb 2, 2023
"""
# Example 1
print('...Example 1.....')
i=0
while i<6:
    print('i= ', i)
    i+=1

 # Example 2
print('.....Example 2......')
number = int(input('Enter a number 0-10'))   
while number<0 or number>10:
    number=int(input('You must enter a number a between 0-10'))
    print('Entered number', number)

#Example 3
print ('....Example 3.....') 
y=12
while y<30:
    if y%2 !=0:
        print('y=', y)   
    y+=1   

#Example 4
print('....Example 4......')    

m=10
while m>0:
    print('m= ', m) 
    m-=1

#Example 5
print('....Example 5.....')   
number1 = int(input('Enter a number')) 
number2 = int(input('Enter another number')) 
add=number1+number2
while add<30:
    number1 +=1
    number2 +=2
    add=number1+number2
    print('The number1 is=', number1, 'Number 2 is=', number2, ', sum=', add)

 #Example 6
print('....Example....')
import math
radius=int(input('Enter a radius'))
area=math.pow(radius, 2)*math.pi
area =round(area, 2)
print('The area with radius %s is %s' % (radius, area))

def example7():
    print('......Example 7......')
    print('Define a function')

def examples8(name):
    print('Welcome to function'+name)  
    examples8('peter')  

def examples9(num1, num2):
    total=num1+num2
    return total
n1=int(input('Enter num1 ='))   
n2=int(input('Enter num2 ='))   
ex9_result = examples9(n1, n2)
print('the sum of %s and %s is %s' %(n1,n2, ex9_result))

def is_divisable (x,y):
    print('......Example 10......')
    if x%y==0:
        return True
    else: 
        return False
print('is %s and %s divisable %s' % (n1, n2, is_divisable(n1,n2)))            

