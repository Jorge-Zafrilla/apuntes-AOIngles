---
sidebar_label: 'Lesson 6: Functions'
sidebar_position: 6
---
# Functions

## Table of Contents
- [What is a Function?](#what-is-a-function)
- [Predefined Functions in Python](#predefined-functions-in-python)
- [How to Create Our Own Functions](#how-to-create-our-own-functions)
- [Calling Our Functions](#calling-our-functions)
- [Return Value (return)](#return-value)
- [Using Libraries to Access Additional Functions](#using-libraries-to-access-additional-functions)

---

## What is a Function?

Functions in Python are a part of our program code responsible for fulfilling a specific objective defined by us or by the language. They receive certain "input data" (**Arguments**) in the so-called parameters to process them and provide "output data" or **return** data.

---

## Predefined Functions in Python

### String Functions

| Function  | Utility                                | Example                            | Result                |
|-----------|----------------------------------------|------------------------------------|-----------------------|
| `print()` | Prints the argument to the screen      | `print("Hello")`                   | Hello                 |
| `len()`   | Returns the length of a string in chars| `len("Hello world")`               | 10                    |
| `join()`  | Converts a list to a string using a separator | `list = ["mail", "Gmail.com"]`<br></br>`"@".join(list)` | mail@gmail.com        |
| `split()` | Converts a string with a separator into a list | `a = "now it will be a list"`<br></br>`list = a.split()` | ["now", "it", "will", "be", "a", "list"] |

### Additional String Functions

| Function  | Utility                                | Example                            | Result                |
|-----------|----------------------------------------|------------------------------------|-----------------------|
| `replace()` | Replaces a substring with another      | `text = "I failed the exam"`<br></br>`text.replace("failed", "passed")` | I passed the exam      |
| `upper()`   | Converts a string to uppercase         | `text = "password"`<br></br>`text.upper()`  | PASSWORD              |
| `lower()`   | Converts a string to lowercase         | `text = "PaSsWoRd"`<br></br>`text.lower()`  | password              |
| `isdigit()` | Checks if all characters in the string are digits | `"12345".isdigit()`  | True                  |
| `islower()` | Checks if all characters in the string are lowercase | `"hello".islower()` | True                  |
| `isupper()` | Checks if all characters in the string are uppercase | `"HELLO".isupper()` | True                  |

---


### Numeric Functions

| Function  | Utility                                | Example                            | Result                |
|-----------|----------------------------------------|------------------------------------|-----------------------|
| `range()` | Creates a range of numbers              | `x = range(5)`<br></br>`print(list(x))`    | [0, 1, 2, 3, 4]       |
| `str()`   | Converts a numeric value to a string    | `str(22)`                          | "22"                  |
| `int()`   | Converts a value to an integer          | `int("22")`                        | 22                    |
| `float()` | Converts a value to a floating-point number | `float("2.22")`                   | 2.22                  |

### Additional Numeric Functions

| Function  | Utility                                | Example                            | Result                |
|-----------|----------------------------------------|------------------------------------|-----------------------|
| `max()`   | Determines the maximum in a group of numbers | `x = [1, 2, 3]`<br></br>`print(max(x))`   | 3                     |
| `min()`   | Determines the minimum in a group of numbers | `x = [1, 2, 3]`<br></br>`print(min(x))`   | 1                     |
| `sum()`   | Sums up the total of a list of numbers  | `x = [1, 2, 3]`<br></br>`print(sum(x))`    | 6                     |

---

## How to Create Our Own Functions

In Python, to create a function, we use the `def` keyword followed by the name we want to give to the function, provided we use the correct syntax just as we do when creating a variable. We then follow with parentheses and conclude with a colon, like this:

```python
def function_name(parameters):
    # code block
```
#### Example:
```python
def greet(name):
    print(f"Hello, {name}!")
```
**Console:**
```console
```
In this example nothing is shown on the screen, the reason is that **IF WE DO NOT CALL A FUNCTION, IT WILL NEVER BE EXECUTED**.

---
## Calling Our Functions
To call our function, we need to use the **name** we have given to the function and pass the appropriate **arguments** inside the parenthesis. **EVEN IF THE FUNCTION HAS NO ARGUMENTS, YOU MUST ALWAYS PUT PARENTHESES!**.

This function must be **declared at the beginning of our code**, meaning we must call it below where we created it. **We can never call a function that was not previously created**.

#### Example 1
```python
def greet(name): #Declare the function
    print(f"Hello, {name}!")

greet("Alice")  #Call the function
```
**Console:**
```console
Hello, Alice!
```
Since we have now **called** the function and **given it the necessary argument** (if needed), **it has now been executed**.

#### Example 2
```python
def multiplication_table_5(): #Declare the function, in this case has not arguments
    for i in range(1,11,1):
        print(f"5 * {i} = {i*5}")

multiplication_table_5()  #Call the function, it has no arguments, but YOU MUST PUT THE PARENTHESIS
```
**Console:**
```console
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
```
--- 

## Return Value (`return`)
By including a `return` statement, we tell Python to immediately return the result of the function and use the following expression as a return value.

#### Example:
```python
def add(a, b):
    return a + b

result = add(2, 3)
print(result)

```
**Console:**
```console
5
```
---

## Using Libraries to Access Additional Functions
Python has many **libraries** that provide additional functions. The first thing to do is **import the library or module**, in order to use its functions, use the `import` keyword followed by **the name of the library or module**.

One common library is `math`, which offers various mathematical functions. For example, to generate random numbers, you can use the `random` module.

#### Example 1:
```python
import random #Import the random module

# Generate a random integer between 1 and 10
random_number = random.randint(1, 10)
print(random_number)

# Generate a random float between 0 and 1
random_float = random.random()
print(random_float)
```
**Console:**
*Since this program generates random numbers, each time it is run it will give a different result*
```console
3
0.3898661257433993
```

The `random` module allows for generating random numbers, which can be useful in various applications such as simulations and games.

To know what modules and functions are in each library, you **must consult the official documentation**. 

In the example below, the `sqrt()` function from the `math` library has been used, which is used to calculate the square root of a number.

#### Example 2:
```python
import math #Import the math library

# Calculate the square root of 16
result = math.sqrt(16)

print(result) 

```
**Console:**
```console
4.0
```