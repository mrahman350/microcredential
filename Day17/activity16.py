"""
Mohammed Rahman
Day 17 - Intro to Python
Monday, Jan 30
"""

print ('Mohammed Rahman')
print('Example 1')
name = 'peter pan'
number = 2.5
print('My name is' , name, 'and my lucky number is')
print('Example 2')
lastName= input('Please enter last name')
num1= int (input('enter a number'))
print ('Last name =' ,lastName, 'The number entered is', num1, 'double of the num is', num1*2)

print('Example 3')
h=float (input('enter a height: '))
w= float (input('enter a weight: '))
hyp = (h**2 + w**2)**0.5
print (hyp)

print('Class Activity')
radius = float(input ('Enter a number for radius'))
height = float(input ('Enter a number for height'))
area = 3.146+ height

print ('area = ' , 3.1416+ (radius)**2)

print ('cycle = ' , 2*3.1416*radius)
print (area)


print ('Example 4')

number1 = 8
print ('number = ', number1)
number1 += 3
print ('self add =', number1)              
number1 -=5
print ('self subtract' , number1)   
number1 /=4
print ('self devide', number1)

print('the height = %s and width = %s. The calculation for the hypo %s' %(h,w,hyp))

print('Example 5')
# find a char in a string using index
msg = 'Queensborough'
# print the 3rd and 7th char
print ('the 3rd char is', msg[2])
print ('the 3rd char is', msg[6])
# slice in a string
print ('from the 5th to the 10th', msg[4:9])
lenMsg = len(msg)
print('the length is', lenMsg)
#upper () method
msgUpper = msg.upper()
print(msgUpper)
#replace() method
msgReplace = msg.replace('e', '$')
print(msgReplace)
# in operator
msgIn = 'm' in msg
print('is M in the message', msgIn)

print ('example 6')
# create list of animals
animals = ['cat', 'dog', 'bird', 'SNAKE']
print ('2nd animals', animals[1])
#delete 2nd animals
del animals[1]
print (animals)
# asks the user to input an animal. The new animals will be added to the existing list
a = input('enter an animal name')
animals.append(a)
print (animals)      

