---
sidebar_label: 'Lesson 3: Dictionaries'
sidebar_position: 3
---
# Dictionaries

## Table of Contents
- [Create Dictionaries](#create-dictionaries)
- [Accessing a Dictionary](#accessing-a-dictionary)
- [Modifying Dictionary Data](#modifying-dictionary-data)
- [Deleting Dictionary Data](#deleting-dictionary-data)
- [Dictionary methods](#dictionary-methods)
- [Iterating through Dictionaries](#iterating-through-dictionaries)

---

## Create Dictionaries
### Description
A dictionary in Python is a collection of **key-value pairs** where each `key` is unique. It is an unordered, mutable, and indexed data structure that allows for fast retrieval, insertion, and deletion of elements. Keys are typically strings or numbers, and `values` can be of any data type

A dictionary structure allows us to map values using key-value pairs in an organized manner, creating a visually ordered database.

#### Example 1:
Store `values` (Pedro, 49, Male, Yes, No, 2, 25000€) in `keys` (Name, Age, Gender, Children, Married, Number of Children, Income) for a more organized and accessible manner.

```python
# Example of a dictionary
my_dict = {
    "Name": "Pedro",
    "Age": 49,
    "Gender": "Male",
    "Children": "Yes",
    "Married": "No",
    "Number of children": 2,
    "Income": "25000€"
}

# Accessing a value by its key
print(my_dict["Name"])
```
**Console:**
```console
Pedro
```

---

#### Example 2: 
#### Scenario:
Conducting a survey of 100 people, identifying each person by name, age, and gender as keys, and their responses as values: Patricia, 35, Female.

| Key | Value |
| --- | --- |
| Name | Patricia |
| Age | 35 |
| Gender | Female |

---

### Syntax of Dictionaries
To create a dictionary, use a similar approach as lists. Name the dictionary followed by `=` and group key-value pairs within braces `{}` **separated by commas**.

#### Example 1:
```python
people = {
    "Name": "Patricia",
    "Age": 35,
    "Gender": "Female"
}
```
#### Example 2:
```python
car = {
    "color": "red",
    "brand": "seat",
    "license_plate": "1234AAA"
}
```
---

## Accessing a Dictionary
In the previous case we only have 3 data, but let's imagine that there were thousands of data about a particular car and we must "dig" there to only get one. Know if it has passed the MOT, name of the owner, etc. Let's make a complete template of our car:

```python
car = {
    "color": "red",
    "brand": "seat",
    "model": "Ibiza 2022",
    "license_plate": "1234AAA",
    "owner": "Alfredo Martínez García",
    "extras": ["sunroof", "proximity sensors"],
    "ITV": "Valid"
}
```
### Accessing Data
As you can see, we have placed a list within the “extras” key, this is possible and also very useful to be able to store several values ​​in a key.

Now once we store the data in the dictionary we are going to access it, for that there are different ways, suppose we want to print only the car model, we do it using the `print()` function.

Below the code we place a print followed by the name that we gave to the dictionary in this case car and then in square brackets the key we want to access, which in this case as we said before will be the model.
```python
car = {
    "color": "red",
    "brand": "seat",
    "model": "Ibiza 2024",
    "license_plate": "1234AAA",
    "owner": "Alfredo Martínez García",
    "extras": ["sunroof", "proximity sensors"],
    "ITV": "Valid"
}

#To see the value of the model key
print(car["model"])
```
**Console:**
```console
Ibiza 2024
```
**Remember that all elements followed by the function are enclosed in parentheses.**

### Accessing Lists within Dictionaries
It is done in the same way that we used before to print the value of a key, but **adding the indexes of the list that we want to print**.

Example with the car extras that are stored in the extras `key`, and we gave it a list as a `value`:

#### Example:
```python
car = {
    "color": "red",
    "brand": "seat",
    "model": "Ibiza 2024",
    "license_plate": "1234AAA",
    "owner": "Alfredo Martínez García",
    "extras": ["sunroof", "proximity sensors"],
    "ITV": "Valid"
}

print(car["extras"][1])
```
**Console:**
```console
proximity sensors
```
This prints "proximity sensors". **Indicate the index of the list after the key that holds the list**.

---

## Modifying Dictionary Data
### Adding a Key-Value Pair
We are now going to add the `key` **"price"** and the `value` **14000** to this dictionary, remembering that the keys are unique, that is:
- **Since the price key does not exist, it will be added**.
- **If it already existed, only the value would be modified**. 

We add it using the following syntax:

```python
car = {
    "color": "red",
    "brand": "seat",
    "model": "Ibiza 2024",
    "license_plate": "1234AAA",
    "owner": "Alfredo Martínez García",
    "extras": ["sunroof", "proximity sensors"],
    "ITV": "Valid"
}

car["price"] = 14000
```
### Modifying a Value
To change the price `value` from **14000** to **17000**:

```python
car = {
    "color": "red",
    "brand": "seat",
    "model": "Ibiza 2024",
    "license_plate": "1234AAA",
    "owner": "Alfredo Martínez García",
    "extras": ["sunroof", "proximity sensors"],
    "ITV": "Valid",
    "price": 14000
}

car["price"] = 17000
```
### Replacing a Key
To change the `key` **"price"** to **"cost"**:
```python
car = {
    "color": "red",
    "brand": "seat",
    "model": "Ibiza 2024",
    "license_plate": "1234AAA",
    "owner": "Alfredo Martínez García",
    "extras": ["sunroof", "proximity sensors"],
    "ITV": "Valid",
    "price": 14000
}

car["cost"] = car.pop("price")
```
This adds the "cost" key and removes the "price" key, preserving the value.

---

## Deleting Dictionary Data
To delete a pair `key: value` we can use the `del()` function:
```python
car = {
    "color": "red",
    "brand": "seat",
    "model": "Ibiza 2024",
    "license_plate": "1234AAA",
    "owner": "Alfredo Martínez García",
    "extras": ["sunroof", "proximity sensors"],
    "ITV": "Valid",
    "price": 14000
}

del(car["color"])
print(car)
```
**Console:**
```console
{"brand": "seat", "model": "Ibiza 2024", "license_plate": "1234AAA", "owner": "Alfredo Martínez García", "extras": ["sunroof", "proximity sensors"], "ITV": "Valid", "price": 14000}
```

It is important to remember that `del()` is a function, so the **name of the dictionary and the key must be in parentheses**. `del()` is a predefined just like `print()`.

---

## Dictionary methods
### `get()`method
The `get()` method retrieves the value of a specified key, and can return a default value if the key does not exist.

#### Example 1
```python
car = {
    "color": "red",
    "brand": "seat",
    "model": "Ibiza 2024",
    "license_plate": "1234AAA",
    "owner": "Alfredo Martínez García",
    "extras": ["sunroof", "proximity sensors"],
    "ITV": "Valid",
    "price": 14000
}

#If the "owner" key exits, it returns the value
#If "owner" key does not exist, it returns "No owner"
print(car.get("owner", "No owner"))
```
**Console:**
```console
Alfredo Martínez García
```
If "owner" does not exist, it returns "No owner".
#### Example 2
```python
car = {
    "color": "red",
    "brand": "seat",
    "model": "Ibiza 2024",
    "license_plate": "1234AAA",
    "extras": ["sunroof", "proximity sensors"],
    "ITV": "Valid",
    "price": 14000
}

#If the "owner" key exits, it returns the value
#If "owner" key does not exist, it returns "No owner"
print(car.get("owner", "No owner"))
```
**Console:**
```console
No owner
```

### `keys()` method 
Prints only the **keys** of the dictionary.

#### Example
```python
car = {
    "color": "red",
    "brand": "seat",
    "model": "Ibiza 2024",
    "license_plate": "1234AAA",
    "owner": "Alfredo Martínez García",
    "extras": ["sunroof", "proximity sensors"],
    "ITV": "Valid",
    "price": 14000
}

print(car.keys())
```
**Console:**
```console
dict_keys(["color", "brand", "model", "license_plate", "owner", "extras", "ITV", "price"])
```

### `values()` method
Prints only the **values** of the dictionary.

#### Example
```python
car = {
    "color": "red",
    "brand": "seat",
    "model": "Ibiza 2024",
    "license_plate": "1234AAA",
    "owner": "Alfredo Martínez García",
    "extras": ["sunroof", "proximity sensors"],
    "ITV": "Valid",
    "price": 14000
}

print(car.values())
```
**Console:**
```console
dict_values(["red", "seat", "Ibiza 2024", "1234AAA", "Alfredo Martínez García", ["sunroof", "proximity sensors"], "Valid", 14000])
```
---

## Iterating through Dictionaries
The `for` loop allows iterating through dictionaries, operating with both keys and values.

Using the `items()` method, which returns a list of the dictionary's keys and values.

#### Example
```python
car = {
    "color": "red",
    "brand": "seat",
    "model": "Ibiza 2024",
    "license_plate": "1234AAA",
    "owner": "Alfredo Martínez García",
    "extras": ["sunroof", "proximity sensors"],
    "ITV": "Valid",
    "price": 14000
}

for key, value in car.items():
    print(key, value)
```
**Console:**
```console
color red
brand seat
model Ibiza 2024
license_plate 1234AAA
owner Alfredo Martínez García
extras ['sunroof', 'proximity sensors']
ITV Valid
price 14000
```