---
sidebar_label: 'Tema 6: Funciones'
sidebar_position: 6
---
# Funciones

## Tabla de Contenidos
- [¿Qué es una Función?](#qué-es-una-función)
- [Funciones Predefinidas en Python](#funciones-predefinidas-en-python)
- [Cómo Crear Nuestras Propias Funciones](#cómo-crear-nuestras-propias-funciones)
- [Llamando a Nuestras Funciones](#llamando-a-nuestras-funciones)
- [Valor de Retorno (`return`)](#valor-de-retorno-return)
- [Uso de Bibliotecas para Acceder a Funciones Adicionales](#uso-de-bibliotecas-para-acceder-a-funciones-adicionales)

---

## ¿Qué es una Función?

Las funciones en Python son una parte de nuestro código de programa que se encarga de cumplir un objetivo específico definido por nosotros o por el lenguaje. Reciben ciertos "datos de entrada" (**Argumentos**) en los llamados parámetros para procesarlos y proporcionar "datos de salida" o datos de **retorno**.

---

## Funciones Predefinidas en Python

### Funciones de Cadena

| Función   | Utilidad                                 | Ejemplo                             | Resultado             |
|-----------|------------------------------------------|-------------------------------------|-----------------------|
| `print()` | Imprime el argumento en la pantalla      | `print("Hola")`                     | Hola                  |
| `len()`   | Devuelve la longitud de una cadena en caracteres | `len("Hola mundo")`                | 10                    |
| `join()`  | Convierte una lista en una cadena usando un separador | `lista = ["correo", "Gmail.com"]`<br></br>`"@".join(lista)` | correo@gmail.com       |
| `split()` | Convierte una cadena con un separador en una lista | `a = "ahora será una lista"`<br></br>`lista = a.split()` | ["ahora", "será", "una", "lista"] |

### Funciones Adicionales de Cadena

| Función   | Utilidad                                 | Ejemplo                             | Resultado             |
|-----------|------------------------------------------|-------------------------------------|-----------------------|
| `replace()` | Reemplaza una subcadena con otra        | `texto = "Me equivoqué en el examen"`<br></br>`texto.replace("equivoqué", "aprobé")` | Aprobé el examen      |
| `upper()`   | Convierte una cadena a mayúsculas       | `texto = "contraseña"`<br></br>`texto.upper()`  | CONTRASEÑA            |
| `lower()`   | Convierte una cadena a minúsculas       | `texto = "CoNtRaSeÑa"`<br></br>`texto.lower()`  | contraseña            |
| `isdigit()` | Verifica si todos los caracteres de la cadena son dígitos | `"12345".isdigit()`  | True                  |
| `islower()` | Verifica si todos los caracteres de la cadena están en minúsculas | `"hola".islower()`   | True                  |
| `isupper()` | Verifica si todos los caracteres de la cadena están en mayúsculas | `"HOLA".isupper()`   | True                  |

---

### Funciones Numéricas

| Función   | Utilidad                                 | Ejemplo                             | Resultado             |
|-----------|------------------------------------------|-------------------------------------|-----------------------|
| `range()` | Crea un rango de números                 | `x = range(5)`<br></br>`print(list(x))` | [0, 1, 2, 3, 4]       |
| `str()`   | Convierte un valor numérico en una cadena | `str(22)`                           | "22"                  |
| `int()`   | Convierte un valor a un entero           | `int("22")`                         | 22                    |
| `float()` | Convierte un valor a un número flotante  | `float("2.22")`                     | 2.22                  |

### Funciones Adicionales Numéricas

| Función   | Utilidad                                 | Ejemplo                             | Resultado             |
|-----------|------------------------------------------|-------------------------------------|-----------------------|
| `max()`   | Determina el máximo en un grupo de números | `x = [1, 2, 3]`<br></br>`print(max(x))` | 3                     |
| `min()`   | Determina el mínimo en un grupo de números | `x = [1, 2, 3]`<br></br>`print(min(x))` | 1                     |
| `sum()`   | Suma el total de una lista de números     | `x = [1, 2, 3]`<br></br>`print(sum(x))`  | 6                     |

---

## Cómo Crear Nuestras Propias Funciones

En Python, para crear una función, usamos la palabra clave `def` seguida del nombre que queremos darle a la función, siempre y cuando usemos la sintaxis correcta, tal como lo hacemos al crear una variable. Luego seguimos con paréntesis y concluimos con dos puntos, así:

```python
def function_name(parameters):
    # code block
```
#### Ejemplo:
```python
def greet(name):
    print(f"Hello, {name}!")
```
**Consola:**
```console
```
En este ejemplo no se muestra nada en pantalla, la razón es que **SI NO LLAMAMOS A UNA FUNCIÓN, NUNCA SE EJECUTARÁ**.

---
## Llamando a Nuestras Funciones
Para llamar a nuestra función, necesitamos usar el **nombre** que le hemos dado a la función y pasar los **argumentos** adecuados dentro de los paréntesis. **INCLUSO SI LA FUNCIÓN NO TIENE ARGUMENTOS, ¡DEBES PONER SIEMPRE LOS PARÉNTESIS!**.

Esta función debe estar **declarada al principio de nuestro código**, es decir, debemos llamarla debajo de donde la creamos. **Nunca podemos llamar a una función que no fue previamente creada**.

#### Ejemplo 1
```python
def greet(name): #Declare the function
    print(f"Hello, {name}!")

greet("Alice")  #Call the function
```
**Consola:**
```console
Hello, Alice!
```
Dado que ahora hemos **llamado** a la función y le hemos **dado el argumento necesario** (si es necesario), **ahora se ha ejecutado**.

#### Ejemplo 2
```python
def multiplication_table_5(): #Declare the function, in this case has not arguments
    for i in range(1,11,1):
        print(f"5 * {i} = {i*5}")

multiplication_table_5()  #Call the function, it has no arguments, but YOU MUST PUT THE PARENTHESIS
```
**Consola:**
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

## Valor de Retorno (`return`)
Al incluir una declaración `return`, le decimos a Python que devuelva inmediatamente el resultado de la función y use la expresión siguiente como valor de retorno.

#### Ejemplo:
```python
def add(a, b):
    return a + b

result = add(2, 3)
print(result)

```
**Consola:**
```console
5
```
---

## Uso de Bibliotecas para Acceder a Funciones Adicionales
Python tiene muchas **bibliotecas** que proporcionan funciones adicionales. Lo primero que hay que hacer es **importar la biblioteca o módulo**, para poder usar sus funciones, usando la palabra clave `import` seguida de **el nombre de la biblioteca o módulo**.

Una biblioteca común es `math`, que ofrece varias funciones matemáticas. Por ejemplo, para generar números aleatorios, puedes usar el módulo `random`.

#### Ejemplo 1:
```python
import random #Import the random module

# Generate a random integer between 1 and 10
random_number = random.randint(1, 10)
print(random_number)

# Generate a random float between 0 and 1
random_float = random.random()
print(random_float)
```
**Consola:**
*Dado que este programa genera números aleatorios, cada vez que se ejecute dará un resultado diferente*
```console
3
0.3898661257433993
```
El módulo `random` permite generar números aleatorios, lo cual puede ser útil en varias aplicaciones como simulaciones y juegos.

Para saber qué módulos y funciones hay en cada biblioteca, **debes consultar la documentación oficial**.

En el ejemplo a continuación, se ha utilizado la función `sqrt()` de la biblioteca `math`, que se usa para calcular la raíz cuadrada de un número.

#### Ejemplo 2:
```python
import math #Import the math library

# Calculate the square root of 16
result = math.sqrt(16)

print(result) 

```
**Consola:**
```console
4.0
```