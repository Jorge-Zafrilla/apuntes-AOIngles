---
sidebar_label: 'Tema 4: Operadores y Condicionales'
sidebar_position: 4
---
# Operadores y Condicionales

## Tabla de Contenidos
- [Operadores en Python](#operadores-en-python)
- [Aprendiendo a Usar Condicionales `if`, `elif`, `else`](#aprendiendo-a-usar-condicionales-if-elif-else)
- [Condicional `if`](#condicional-if)
- [Condicionales `if` y `else`](#condicionales-if-y-else)
- [Condicionales `if`, `elif` y `else`](#condicionales-if-elif-y-else)

---

## Operadores en Python

Los operadores son símbolos matemáticos que realizan una operación específica entre operandos y tienen una función específica. Los operadores pueden recibir operandos variables.

#### Ejemplo:
Para la SUMA, el operador utilizado es el símbolo “más” (`+`), y podemos sumar números, letras o variables. Estos números o variables son los operandos. Cuando decimos que pueden ser dinámicos, nos referimos a variables que pueden cambiar su valor, pero el operador realizará la misma operación.

---

### Operadores Aritméticos

Los operadores aritméticos son aquellos que se utilizan para realizar operaciones matemáticas simples.

#### Lista de Operadores Aritméticos:
- Suma (`+`): Suma dos operandos.
```python
a = 5
b = 3
result = a + b  # result is 8
```
- Resta (`-`): Resta el segundo operando del primero.
 ```python
a = 5
b = 3
result = a - b  # result is 2
```
- Multiplicación (`*`): Multiplica ambos operandos.
 ```python
a = 5
b = 3
result = a * b  # result is 15
```
- División (`/`): Divide el numerador por el denominador.
 ```python
a = 5
b = 3
result = a / b  # result is 1.666...
```
- Resto (`%`): Devuelve el resto de la división.
 ```python
a = 5
b = 3
result = a % b  # result is 2
```
- Exponente (`**`): Eleva el primer operando a la potencia del segundo.
 ```python
a = 5
b = 3
result = a ** b  # result is 125
```
- División Entera (`//`): Realiza la división y devuelve el mayor número entero menor o igual al cociente.
 ```python
a = 5
b = 3
result = a // b  # result is 1
```

---

### Operadores de Comparación

Los operadores de comparación son aquellos que se utilizan para comparar valores y devolverán `True` / `False` como resultado de la condición.

#### Lista de Operadores de Comparación:
- Igual (`==`): Devuelve True si ambos operandos son iguales.
 ```python
a = 5
b = 3
result = (a == b)  # result is False
```
- No igual (`!=`): Devuelve True si los operandos no son iguales.
 ```python
a = 5
b = 3
result = (a != b)  # result is True
```
- Mayor que (`>`): Devuelve True si el operando izquierdo es mayor que el derecho.
 ```python
a = 5
b = 3
result = (a > b)  # result is True
```
- Menor que (`<`): Devuelve True si el operando izquierdo es menor que el derecho.
 ```python
a = 5
b = 3
result = (a < b)  # result is False
```
- Mayor o igual que (`>=`): Devuelve True si el operando izquierdo es mayor o igual que el derecho.
 ```python
a = 5
b = 3
result = (a >= b)  # result is True
```
- Menor o igual que (`<=`): Devuelve True si el operando izquierdo es menor o igual que el derecho.
 ```python
a = 5
b = 3
result = (a <= b)  # result is False
```

---

### Operadores de Asignación

Los operadores de asignación son aquellos que usamos para asignar un valor a una variable, lista, tupla, conjunto, etc.

#### Lista de Operadores de Asignación:
- Asignar (`=`): Asigna el valor de la derecha a la variable de la izquierda.
 ```python
a = 5  # a is 5
```
- Sumar y asignar (`+=`): Suma el operando derecho al operando izquierdo y asigna el resultado al operando izquierdo.
 ```python
a = 5
a += 3  # a is now 8
```
- Restar y asignar (`-=`): Resta el operando derecho del operando izquierdo y asigna el resultado al operando izquierdo.
 ```python
a = 5
a -= 3  # a is now 2
```
- Multiplicar y asignar (`*=`): Multiplica el operando izquierdo por el derecho y asigna el resultado al operando izquierdo.
 ```python
a = 5
a *= 3  # a is now 15
```
- Dividir y asignar (`/=`): Divide el operando izquierdo por el derecho y asigna el resultado al operando izquierdo.
 ```python
a = 5
a /= 3  # a is now 1.666...
```
- Resto y asignar (`%=`): Realiza la operación de resto del operando izquierdo entre el derecho y asigna el resultado al operando izquierdo.
 ```python
a = 5
a %= 3  # a is now 2
```
- Exponente y asignar (`**=`): Eleva el operando izquierdo a la potencia del derecho y asigna el resultado al operando izquierdo.
 ```python
a = 5
a **= 3  # a is now 125
```
 - División entera y asignar (`//=`): Realiza la división entera del operando izquierdo por el derecho y asigna el resultado al operando izquierdo.
 ```python
a = 5
a //= 3  # a is now 1
```
---

### Operadores Lógicos

Los operadores lógicos son `and` (y), `or` (o), `not` (no) y se utilizan para verificar si dos o más operandos son verdaderos o falsos, devolviendo True o False como resultado. Se usan a menudo en condicionales para devolver un booleano comparando múltiples elementos.

#### Lista de Operadores Lógicos:
- `and`: Devuelve `True` si ambos operandos son verdaderos.
 ```python
a = True
b = False
result = a and b  # result is False
```
- `or`: Devuelve `True` si al menos uno de los operandos es verdadero.
 ```python
a = True
b = False
result = a or b  # result is True
```
- `not`: Invierte el valor booleano del operando. Si el operando es `True`, devuelve `False` y viceversa.
 ```python
a = True
result = not a  # result is False
```
---

### Operadores Especiales

Existen otros operadores especiales que comúnmente utilizamos en bucles o para comprobar si una variable es exactamente igual a otra, o para saber si un elemento está dentro de otros, etc.

#### Lista de Operadores Especiales:
- `is`: Evalúa si ambos lados tienen la misma identidad.
 ```python
a = [1, 2, 3]
b = a
result = (a is b)  # result is True
```
- `is not`: Evalúa si ambos lados tienen identidades diferentes.
 ```python
a = [1, 2, 3]
b = [1, 2, 3]
result = (a is not b)  # result is True
```
- `in`: Evalúa si un valor está presente en una secuencia.
 ```python
a = [1, 2, 3]
result = (2 in a)  # result is True
```
- `not in`: Evalúa si un valor no está presente en una secuencia.
 ```python
a = [1, 2, 3]
result = (4 not in a)  # result is True
```

---

## Aprendiendo a Usar Condicionales `if`, `elif`, `else`

Los condicionales `if`, `else`, `elif` en Python se utilizan para ejecutar una instrucción si se cumplen una o más condiciones. Un condicional es como el momento en que debe tomarse una decisión en nuestro programa. Dependiendo de la decisión, ocurrirá una cosa, otra o nada.

### Ejemplo 1:
-**Vendedor:** El libro cuesta 25€ (Si el comprador tiene 25€ o más, vender. De lo contrario, no vender.)

-**Comprador:** Sólo tengo 20€ (Dinero del comprador = 20)

-**Vendedor:** Vaya a buscar más dinero. (No se puede vender)

```python
money = 20

if money >= 25:
    print("Sell the book")
else:
    print("Do not sell the book")
```
**Consola:**
```console
Do not sell the book
```
Si el dinero del comprador es igual o mayor a 25€, la condición es verdadera. El comprador tiene 20€, por lo que la condición es falsa.

**Cuando el comprador tenga 25€ o más entonces el libro se le venderá:**
### Ejemplo 2:
-**Vendedor:** El libro cuesta 25€ (Si el comprador tiene 25€ o más, vender. De lo contrario, no vender.)

-**Comprador:** Tengo 26€ (Dinero del comprador = 26)

-**Vendedor:** Perfecto, tienes suficiente dinero. (Se puede vender)
```python
money = 26 #Now the buyer has more than 25€

if money >= 25:
    print("Sell the book")
else:
    print("Do not sell the book")
```
**Consola:**
```console
Sell the book
```
### Traducción:
- `if` se traduce como "si":

    - Si el usuario entra en la tienda, entonces ofrece productos.
    - Si el usuario tiene dinero, entonces vende.
    - Si el usuario tiene la cara tapada, entonces llama a seguridad.

- `else` se traduce como "de lo contrario":

    - Si el usuario entra en la tienda, entonces ofrece productos; de lo contrario, no hagas nada.
    - Si el usuario tiene dinero, entonces vende; de lo contrario, invítale a salir.
    - Si el usuario tiene la cara tapada, entonces llama a seguridad; de lo contrario, ofrece productos.

- `elif` se traduce como "si no, si":

    - Si el usuario entra en la tienda, entonces ofrece productos; si es un proveedor, escóndete; de lo contrario, no hagas nada.
    - Si el usuario tiene dinero, entonces vende; si es en céntimos, ofrece cosas baratas; de lo contrario, invítale a salir.
    - Si el usuario tiene la cara tapada, entonces llama a seguridad; si es un niño, no hagas nada; de lo contrario, ofrece productos.

---

## Condicional `if`

Para usar `if`, simplemente añádelo en el siguiente orden:

```python
note = 6
if note >= 5:
    print("You passed")
```
**Consola:**
```console
You passed
```
Esto imprime "You passed" porque se cumple la condición del `if`.

---
## Condicionales `if` y `else`
Después de una declaración `if`, podemos añadir un `else` ("de lo contrario") para ejecutar otro código **si la condición no se cumple**:

```python
note = 3
if note >= 5:
    print("You passed")
else:
    print("You failed")
```
**Consola:**
```console
You failed
```

Esto imprime "You failed" porque no se cumple la condición del `if`, por lo que el intérprete ejecuta directamente el `else`.

---

## Condicionales `if`, `elif` y `else`
La estructura es siempre `if`, luego `elif` y finalmente `else` (que se ejecuta si ninguna de las condiciones anteriores `if` / `elif` se cumple):

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
**Consola:**
```console
Very Good
```