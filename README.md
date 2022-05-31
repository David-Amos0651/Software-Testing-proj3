# csc404-assignment-3

CSC404 Software Engineering and Testing 
Project #3 MongoDB & Mongoose  
 
In this part, you will complete the development of the web application using a 
database to store all your test cases. 
 
Project Description 
 
We will develop a Node.js Web Application to compute the final grade of a course 
at West Chester University.  
 
The web application displays three tabs: Home, Test Results, Add Test. When a 
user clicks the “Test Results” tab, all test cases will be displayed. When the “Add 
Test” tab is clicks, a form will be displayed, and a user can enter test data for a 
test case. After the test case is entered, you can check the test results by clicking 
the “Test Results” tab to see all tests. 
 
Problem Description: 
 
Generate test cases using Boundary Value Testing method using the problem 
describe below: 
 
The final grade for CSC404 is determined based on the average of three 
homework assignments with the weight of 20%, and two exams with the weight 
of 40% each. You need to write a Node.js program to implement the calculation 
of your final letter grade based on the rubric of A(93 or higher), A-(90-92), 
B+(87-89), B(83-86), B-(80-82), C+, C, C-, D+, D, D-, and F(0-59). You need to 
compute the grade to the first digit after the decimal point, i.e., 90.5, or 89.4. 
Then, the numeric grade will be rounded up if it is at the border. For example, 
89.5 becomes 90. 
 
Each team needs to develop several modules callable from external files. For 
example, the average of three homework assignments can be computed in the 
function find_Average (hw1, hw2, hw3) and stored in a controller.js JavaScript 
file. 
 
In Phase III, you need to develop the main.js, testController.js (with helping 
functions and controller functions), front-end Views (index.ejs, addTest.ejs, 
displayTests.ejs), and database accessing controller in Node.js. 
 
Requirement: 
 
1. Developer: Write a Node.js program to implement the Grade Conversion 
Problem. You need to display nicely the “input data” and the “resulting 
numeric grade” and the letter grade as a list of test cases and final results. 

2. Tester: Develop a mocha testing file to test your function of storing the test 
cases. You don’t need to test the complete program; only the function of 
storing the test cases using a Mongoose database. You need to include your 
testing code, your testing execution screen shots. The database can be 
displayed with Robo 3T or MongoDB Compass screen shots. 
 
Submissions: 
 
(1) All team members will submit the same code to the Assignment folder as a 
compressed folder. (2) Each member also needs to submit a Word document 
which includes: 
1. A cover sheet – team leader, team members, date, course, project description 
2. My Contributions – itemize (list as items) about your responsibilities and 
contributions.  
3. My Outcomes – For Testers, described all bugs you discovered. For 
Developers, include the execution of some unit tests with test cases. You may 
take some screen shots and include them in your document. For a Leader, 
you need to show that who does what (as a table or a list), each person’s 
performance rating out of the range of 1-10 (10 is the best, 1 is the worst). 