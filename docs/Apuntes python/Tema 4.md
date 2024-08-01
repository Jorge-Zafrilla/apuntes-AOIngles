---
sidebar_label: 'Lesson 4: Operators and Conditionals'
sidebar_position: 4
---
# Operators and Conditionals

## Table of Contents
- [Operators in Python](#operators-in-python)
- [Learning to Use Conditionals `if`, `elif`, `else`](#learning-to-use-conditionals)
- [`if` Conditional](#if-conditional)
- [`if` and `else` Conditional](#if-else-conditional)
- [`if`, `elif`, and `else`Conditionals](#if-elif-else-conditional)

---

## Operators in Python

Operators are mathematical symbols that perform a specific operation between operands and have a specific function. Operators can receive variable operands.

#### Example:
For SUMMATION, the operator used is the “plus” symbol (+), and we can add numbers, letters, or variables. These numbers or variables are the operands. When we say they can be dynamic, we refer to variables that can change their value, but the operator will perform the same operation.

---

### Arithmetic Operators

Arithmetic operators are those used to perform simple mathematical operations.

#### List of Arithmetic Operators:
- Addition (`+`): Adds two operands.
```python
a = 5
b = 3
result = a + b  # result is 8
```
- Subtraction (`-`): Subtracts the second operand from the first.
 ```python
a = 5
b = 3
result = a - b  # result is 2
```
- Multiplication (`*`): Multiplies both operands.
 ```python
a = 5
b = 3
result = a * b  # result is 15
```
- Division (`/`): Divides the numerator by the denominator.
 ```python
a = 5
b = 3
result = a / b  # result is 1.666...
```
- Modulus (`%`): Returns the remainder of the division.
 ```python
a = 5
b = 3
result = a % b  # result is 2
```
- Exponentiation (`**`): Raises the first operand to the power of the second.
 ```python
a = 5
b = 3
result = a ** b  # result is 125
```
- Floor Division (`//`): Performs division and returns the largest integer less than or equal to the quotient.
 ```python
a = 5
b = 3
result = a // b  # result is 1
```

---

### Comparison Operators

Comparison operators are those used to compare values and will return `True` / `False` as the result of the condition.

#### List of Comparison Operators:
- Equal (`==`): Returns True if both operands are equal.
 ```python
a = 5
b = 3
result = (a == b)  # result is False
```
- Not equal (`!=`): Returns True if operands are not equal.
 ```python
a = 5
b = 3
result = (a != b)  # result is True
```
- Greater than (`>`): Returns True if the left operand is greater than the right.
 ```python
a = 5
b = 3
result = (a > b)  # result is True
```
- Less than (`<`): Returns True if the left operand is less than the right.
 ```python
a = 5
b = 3
result = (a < b)  # result is False
```
- Greater than or equal to (`>=`): Returns True if the left operand is greater than or equal to the right.
 ```python
a = 5
b = 3
result = (a >= b)  # result is True
```
- Less than or equal to (`<=`): Returns True if the left operand is less than or equal to the right.
 ```python
a = 5
b = 3
result = (a <= b)  # result is False
```

---

### Assignment Operators

Assignment operators are those we use to assign a value to a variable, list, tuple, set, etc.

#### List of Assignment Operators:
- Assign (`=`): Assigns the value on the right to the variable on the left.
 ```python
a = 5  # a is 5
```
- Add and assign (`+=`): Adds the right operand to the left operand and assigns the result to the left operand.
 ```python
a = 5
a += 3  # a is now 8
```
- Subtract and assign (`-=`): Subtracts the right operand from the left operand and assigns the result to the left operand.
 ```python
a = 5
a -= 3  # a is now 2
```
- Multiply and assign (`*=`): Multiplies the left operand by the right operand and assigns the result to the left operand.
 ```python
a = 5
a *= 3  # a is now 15
```
- Divide and assign (`/=`): Divides the left operand by the right operand and assigns the result to the left operand.
 ```python
a = 5
a /= 3  # a is now 1.666...
```
- Modulus and assign (`%=`): Performs modulus operation on the left operand by the right operand and assigns the result to the left operand.
 ```python
a = 5
a %= 3  # a is now 2
```
- Exponentiation and assign (`**=`): Raises the left operand to the power of the right operand and assigns the result to the left operand.
 ```python
a = 5
a **= 3  # a is now 125
```
- Floor division and assign (`//=`): Performs floor division on the left operand by the right operand and assigns the result to the left operand.
 ```python
a = 5
a //= 3  # a is now 1
```
---

### Logical Operators

Logical operators are `and` (y), `or` (o), `not` (no) and are used to check if two or more operands are true or false, returning True or False as a result. They are often used in conditionals to return a boolean by comparing multiple elements.

#### List of Logical Operators:
- `and`: Returns `True` if both operands are true.
 ```python
a = True
b = False
result = a and b  # result is False
```
- `or`: Returns `True` if at least one of the operands is true.
 ```python
a = True
b = False
result = a or b  # result is True
```
- `not`: Reverses the boolean value of the operand. If the operand is `True`, it returns `False`, and vice versa.
 ```python
a = True
result = not a  # result is False
```
---

### Special Operators

There are other special operators that we will commonly use in loops or to check if a variable is exactly equal to another, or to know if an element is within others, etc.

#### List of Special Operators:
- `is`: Evaluates if both sides have the same identity.
 ```python
a = [1, 2, 3]
b = a
result = (a is b)  # result is True
```
- `is not`: Evaluates if both sides have different identities.
 ```python
a = [1, 2, 3]
b = [1, 2, 3]
result = (a is not b)  # result is True
```
- `in`: Evaluates if a value is present in a sequence.
 ```python
a = [1, 2, 3]
result = (2 in a)  # result is True
```
- `not in`: Evaluates if a value is not present in a sequence.
 ```python
a = [1, 2, 3]
result = (4 not in a)  # result is True
```

---

## Learning to Use Conditionals `if`, `elif`, `else`

Conditionals `if`, `else`, `elif` in Python are used to execute an instruction if one or more conditions are met. A conditional is like the moment a decision must be made in our program. Depending on the decision, one thing will happen, another, or nothing.

### Example 1:
-**Seller:** The book costs 25€ (If the buyer has 25€ or more, sell. Otherwise, don’t sell.)

-**Buyer:** I only have 20€ (Buyer’s money = 20)

-**Seller:** Go get more money. (Cannot sell)

```python
money = 20

if money >= 25:
    print("Sell the book")
else:
    print("Do not sell the book")
```
**Console:**
```console
Do not sell the book
```
If the buyer's money is equal to or greater than 25€, the condition is true. The buyer has 20€, so the condition is false.

**When the buyer has 25€ or more then the book will be sold to them:** 
### Example 2:
-**Seller:** The book costs 25€ (If the buyer has 25€ or more, sell. Otherwise, don’t sell.)

-**Buyer:** I have 26€ (Buyer’s money = 26)

-**Seller:** Perfect, you have enough money. (Can sell)
```python
money = 26 #Now the buyer has more than 25€

if money >= 25:
    print("Sell the book")
else:
    print("Do not sell the book")
```
**Console:**
```console
Sell the book
```
### Translation:
- `if` translates to "if":

    - If the user enters the store, then offer products.
    - If the user has money, then sell.
    - If the user has their face covered, then call security.

- `else` translates to "otherwise":

    - If the user enters the store, then offer products; else, do nothing.
    - If the user has money, then sell; else, invite them to leave.
    - If the user has their face covered, then call security; else, offer products.


- `elif` translates to "else if":

    - If the user enters the store, then offer products; if they are a supplier, hide; else, do nothing.
    - If the user has money, then sell; if it’s in cents, offer cheap things; else, invite them to leave.
    - If the user has their face covered, then call security; if it's a child, do nothing; else, offer products.
---

## `if` Conditional
To use `if`, simply add it in the following order:

```python
note = 6
if note >= 5:
    print("You passed")
```
**Console:**
```console
You passed
```
This prints "You passed" because the condition of the `if` is met.

---
## `if` and `else` Conditional
After an `if` statement, we can add an `else` ("otherwise") to execute another code **if the condition is not met**:

```python
note = 3
if note >= 5:
    print("You passed")
else:
    print("You failed")
```
**Console:**
```console
You failed
```

This prints "You failed" because the condition of the `if` is not met, so the interpreter directly executes the `else`.

---
## `if`, `elif`, and `else` Conditionals

The structure is always `if`, then `elif`, and finally `else` (which executes if none of the previous `if`/`elif` conditions are met):

```python
note = 8
if note < 5: #Always if first
    print("Failed")
elif note >= 9: #Then as many elif as needed
    print("Excellent")
elif note >= 7:
    print("Very Good")
else: #The last one will always be else
    print("Passed")
```
**Console:**
```console
Very Good
```