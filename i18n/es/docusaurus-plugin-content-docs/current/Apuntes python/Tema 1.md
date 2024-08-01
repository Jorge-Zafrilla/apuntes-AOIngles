---
sidebar_label: 'Tema 1: Estructura y Tipos de Datos'
sidebar_position: 1
---
# Introducción a Python, `print()`, `input()`, Estructura y Tipos de Datos

## Tabla de Contenidos
- [Introducción a Python](#introducción-a-python)
- [Función `print()`](#función-print)
- [Función `input()`](#función-input)
- [Estructura y Tipos de Datos](#estructura-y-tipos-de-datos)

---

## Introducción a Python
- **Interpretado**: El intérprete traduce nuestro código según sea necesario.
- **Tipado Dinámico**: Permite la mutación (transformación) de variables.
- **Multiplataforma**: Se puede ejecutar en cualquier sistema operativo.

### ¿Qué es una función?
Una función es un conjunto de líneas de código que realizan una tarea específica y pueden tomar argumentos para modificar su comportamiento y salida de datos. Las funciones nos permiten implementar operaciones que se usan frecuentemente en un programa, reduciendo la cantidad de código.

### Tipos de Funciones
Hay dos tipos de funciones: aquellas que podemos crear y aquellas predefinidas por el lenguaje. Muchas funciones pueden ser "llamadas" y usadas sin ser declaradas explícitamente por nosotros.

## Función `print()`
Una de las primeras funciones que debemos aprender es la función `print()`. Esta función simplemente imprime en pantalla lo que especifiquemos como argumento.


```python
print("Hello World!")
```
**Consola:**
```console
Hello World!
```
### ¡Importante!
- El texto debe **siempre** estar entre comillas; de lo contrario, Python lo interpretará como un objeto inexistente, resultando en un error de sintaxis.
- Siempre respeta la sintaxis de las llamadas de funciones en Python colocando paréntesis después del nombre de la función, incluso si no se especifican argumentos. Por ejemplo: `print()`, que no imprimirá nada pero no causará un error.

### Variables como argumentos en la función `print()`
Hay **dos formas** de hacerlo:

#### Usando comas `,` para combinar texto y variables:
Para imprimir el contenido almacenado en una variable, debemos poner el nombre de la variable como argumento sin comillas. Para combinar texto con el contenido de una variable, separa los elementos con una coma (`,`).

```python
day = "Monday"
print("Today is", day)
```
**Consola:**
```console
Today is Monday 
```
#### Usando f-strings para incluir valores de variables en cadenas de texto:
En Python, la función `print()` se puede usar para mostrar texto en la consola. Para incluir valores de variables dentro de una cadena de texto, se pueden usar f-strings (literales de cadena formateados). Aquí está el procedimiento:

**1- Definir la Variable**: Asigna un valor a una variable.
```python
name = "Juan"
```
**2- Usar la f-string**: Coloca una `f` antes de la comilla de apertura de la cadena. Dentro de la cadena, incluye llaves `{}` donde quieras insertar el valor de la variable.

```python
name = "Juan"

print(f"Hello, {name}!")
```
**Consola:**
```console
Hello, Juan!
```
---

## Función `input()`
La función `input()` permite obtener texto ingresado a través del teclado. Al llegar a esta función, el programa se detiene esperando la entrada y que se presione la tecla Enter, como se muestra en el siguiente ejemplo:

```python
name = input("What's your name?: ")
print("Hello "+name+"!")
```
**Consola:**
```console
What's your name?: Juan 
Hello Juan!
```
En el ejemplo anterior, el usuario escribe su respuesta en una línea diferente porque Python agrega una nueva línea al final de cada `print()`.

**¡Debemos siempre almacenar el contenido de nuestro `input()` en una variable para usarlo después!**

```python
hours = input("How many hours do you work?: ")
```
**Consola:**
```console
How many hours do you work?: 8
```
### Conversión de Tipos
Por defecto, la función `input()` convierte la entrada en una cadena de texto, incluso si se ingresa un número. **Intentar realizar operaciones resultará en un error**.
```python
num1 = input("Enter a number: ")
num2 = input("Enter another number: ")
mult = num1*num2
print(num1,"*",num2,"=",mult)
```
**Consola:**
```console
Enter a number: 6
Enter another number: 15
Traceback (most recent call last):
  File main.py, line 3, in module
TypeError: can't multiply sequence by non-int of type 'str'
```
### Ejemplo de Conversión de Tipos
Para que Python interprete la entrada como un entero, utiliza la función `int()` de la siguiente manera:
```python
num1 = int(input("Enter a number: "))
num2 = int(input("Enter another number: "))
mult = num1*num2
print(num1,"*",num2,"=",mult)
```
**Consola:**
```console
Enter a number: 6
Enter another number: 15
6 * 15 = 90
```
---

## Estructura y Tipos de Datos
### Tipos de Datos Simples
Un tipo de dato simple permite que una variable lo almacene como un único valor de ese tipo.

Para variables simples en Python, existen cuatro tipos: `int` (Enteros), `bool` (Verdadero, falso), `float` (Decimales) y `string` (Texto).

Recuerda que en Python, el tipo de variable está determinado por el tipo de datos que almacena. Si el tipo de dato cambia, el tipo de variable cambiará automáticamente.

#### Ejemplo:
Si **a** almacena:
- **2** -> el dato es un entero (dato simple), por lo que la variable a será automáticamente de tipo `int`, simple.

```python
a = 2
print(type(a))
```
**Consola:**
```console
<class 'int'>
```

- **"two"** -> el dato es una cadena de texto (dato estructurado), por lo que la variable a será automáticamente de tipo `str`, estructurado.

```python
a = "two"
print(type(a))
```
**Consola:**
```console
<class 'str'>
```

### Tipos de Datos Estructurados
Los datos estructurados en Python permiten que una variable **almacene más de un valor, dato o tipo de dato**, como un conjunto de números, una cadena de caracteres, letras, listas, secuencias, etc.

Podemos encontrar diferentes tipos de datos estructurados, que se almacenarán en diferentes tipos de variables estructuradas o complejas. Estos pueden clasificarse como *dinámicos* (pueden modificarse en tiempo de ejecución) o *estáticos* (no pueden modificarse en tiempo de ejecución).

#### Ejemplo:
- **Lista** (dinámica): Puede almacenar múltiples valores y puede ser modificada.
```python
my_list = [1, 2, 3, "four"]
print(type(my_list)) 
```
**Consola:**
```console
<class 'list'>
```
- **Tupla** (estática): Puede almacenar múltiples valores pero no puede ser modificada.
```python
my_tuple = (1, 2, 3, "four")
print(type(my_tuple)) 
```
**Consola:**
```console
<class 'tuple'>
```
- **Diccionario** (dinámico): Puede almacenar pares clave-valor y puede ser modificado.
```python
my_dict = {"one": 1, "two": 2, "three": 3}
print(type(my_dict))
```
**Consola:**
```console
<class 'dict'>
```