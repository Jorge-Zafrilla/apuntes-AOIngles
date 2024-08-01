---
sidebar_label: 'Lesson 1: Structure, and Data Types'
sidebar_position: 1
---
# Introduction to Python, `print()`,`input()`, Structure, and Data Types

## Table of Contents
- [Introduction to Python](#introduction-to-python)
- [`print()` Function](#print-function)
- [`input()` Function](#input-function)
- [Structure and Data Types](#structure-and-data-types)

---
## Introduction to Python
- **Interpreted**: The interpreter translates our code as needed.
- **Dynamically Typed**: Allows mutation (transformation) of variables.
- **Cross-Platform**: Can be executed on any operating system.
---

### What is a function?
A function is a set of lines of code that perform a specific task and can take arguments to modify its behavior and output data. Functions allow us to implement operations frequently used in a program, reducing the amount of code.

### Types of Functions
There are two types of functions: those we can create and those pre-defined by the language. Many functions can be "called" and used without being explicitly declared by us.

## `print()` Function
One of the first functions we should learn is the `print()` function. This function simply prints on the screen whatever we specify as an argument.

```python
print("Hello World!")
```
**Console:**
```console
Hello World!
```
### Important!
- Text must **always** be in quotes, otherwise, Python will interpret it as an object that does not exist, resulting in a syntax error.
- Always respect the syntax of function calls in Python by placing parentheses after the function name, even if no arguments are specified. For example: `print()`, which will not print anything but will not cause an error.

### Variables as arguments in the `print()` function

There are **two ways** to do it:

#### Using commas `,` to combine text and variables:
To print the content stored in a variable, we must put the variable name as an argument without quotes.
To combine text with the content of a variable, separate the elements with a comma (`,`).

```python
day = "Monday"
print("Today is", day)
```
**Console:**
```console
Today is Monday 
```
#### Using f-strings to include variable values in strings:
In Python, the `print()` function can be used to output text to the console. To include variable values within a string, you can use f-strings (formatted string literals). Here's how it works:

**1- Define the Variable**: Assign a value to a variable.
```python
name = "Juan"
```
**2- Use the f-string**: Place an f before the opening quotation mark of the string. Inside the string, include curly braces `{}` where you want to insert the value of the variable.

```python
name = "Juan"

print(f"Hello, {name}!")
```
**Console:**
```console
Hello, Juan!
```
---

## `input()` Function
The `input()` function allows obtaining text entered via the keyboard. Upon reaching this function, the program stops waiting for input and the Enter key to be pressed, as shown in the following example:

```python
name = input("What's your name?: ")
print("Hello "+name+"!")
```
**Console:**
```console
What's your name?: Juan 
Hello Juan!
```
In the above example, the user types their response on a different line because Python adds a newline at the end of each `print()`.

**We should always store the content of our `input()` in a variable to use it later!**

```python
hours = input("How many hours do you work?: ")
```
**Console:**
```console
How many hours do you work?: 8
```
### Type Conversion
By default, the `input()`function converts the input to a string, even if a number is entered. **Attempting to perform operations will result in an error**.
```python
num1 = input("Enter a number: ")
num2 = input("Enter another number: ")
mult = num1*num2
print(num1,"*",num2,"=",mult)
```
**Console:**
```console
Enter a number: 6
Enter another number: 15
Traceback (most recent call last):
  File main.py, line 3, in module
TypeError: can't multiply sequence by non-int of type 'str'
```
### Type Conversion Example
To have Python interpret the input as an integer, use the `int()` function as follows:
```python
num1 = int(input("Enter a number: "))
num2 = int(input("Enter another number: "))
mult = num1*num2
print(num1,"*",num2,"=",mult)
```
**Console:**
```console
Enter a number: 6
Enter another number: 15
6 * 15 = 90
```
---

## Structure and Data Types
### Simple Data Types
A simple data type allows a variable to store it as a single value of that type.

For simple variables in Python, there are four types: `int` (Integers), `bool` (True, false), `float` (Decimals) and `string` (Text).

Remember that in Python, the type of variable is determined by the type of data it stores. If the data type changes, the variable type will automatically change.
#### Example:
If **a** stores:
- **2** -> the data is an integer (simple data), so the variable a will automatically be of type `int`, simple.

```python
a = 2
print(type(a))
```
**Console:**
```console
<class 'int'>
```

- **"two"** -> the data is a string (structured data), so the variable a will automatically be of type `str`, structured.

```python
a = "two"
print(type(a))
```
**Console:**
```console
<class 'str'>
```

### Structured Data Types
Structured data in Python allows a variable to **store more than one value, data, or type of data**, such as a set of numbers, a string of characters, letters, lists, sequences, etc.

We can find different types of structured data, which will be stored in different types of structured or complex variables. These can be classified as *dynamic* (can be modified at runtime) or *static* (cannot be modified at runtime).

#### Example:
- **List** (dynamic): Can store multiple values and can be modified.
```python
my_list = [1, 2, 3, "four"]
print(type(my_list)) 
```
**Console:**
```console
<class 'list'>
```
- **Tuple** (static): Can store multiple values but cannot be modified.
```python
my_tuple = (1, 2, 3, "four")
print(type(my_tuple)) 
```
**Console:**
```console
<class 'tuple'>
```
- **Dictionary** (dynamic): Can store key-value pairs and can be modified.
```python
my_dict = {"one": 1, "two": 2, "three": 3}
print(type(my_dict))
```
**Console:**
```console
<class 'dict'>
```