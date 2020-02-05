# -*- coding: utf-8 -*-
"""
Created on Tue Feb  4 09:53:52 2020

@author: Kyra
"""
#create lists to track course data
grade_list = []
credit_list = []
name_list = []

x = 1
total_credits = 0
total_points = 0

print('Semester GPA calculator')

num_of_classes = 

while x <= num_of_classes:

    #get class name and add it to list
    name1 = input('')


    #loop until we get a valid number of credits
    credit = 0
    while True:
        credit = input('')
        if credit.isdigit():
            break
        else:
            print('Invalid, enter an integer')
    #cast to int and add to list

    while True: #loop until we get a valid grade
        grade1 = input('What grade did you get? (A,B,C,D,F): ')
        grade1 = grade1.upper()
        #get numerical grade, add it to list

        #repeat loop if invalid

    x += 1

for i in range(0, len(grade_list)): 
        #calculate values

# print(name_list)
# print(grade_list)
# print(credit_list)
# print('Total points: ', total_points)
# print('Total credit hours: ', total_credits)

final_gpa = 
print('Semester GPA: %0.2f'% (final_gpa))