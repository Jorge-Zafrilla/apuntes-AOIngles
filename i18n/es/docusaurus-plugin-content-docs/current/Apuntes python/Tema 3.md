---
sidebar_label: 'Tema 3: Diccionarios'
sidebar_position: 3
---
# Diccionarios

## Tabla de Contenidos
- [Crear Diccionarios](#crear-diccionarios)
- [Acceder a un Diccionario](#acceder-a-un-diccionario)
- [Modificar Datos de un Diccionario](#modificar-datos-de-un-diccionario)
- [Eliminar Datos de un Diccionario](#eliminar-datos-de-un-diccionario)
- [Métodos de Diccionario](#métodos-de-diccionario)
- [Iterar a través de Diccionarios](#iterar-a-través-de-diccionarios)

---

## Crear Diccionarios
### Descripción
Un diccionario en Python es una colección de **pares clave-valor** donde cada `key` (clave) es única. Es una estructura de datos no ordenada, mutable e indexada que permite una recuperación, inserción y eliminación de elementos rápida. Las claves suelen ser cadenas o números, y los `values` (valores) pueden ser de cualquier tipo de dato.

La estructura de un diccionario nos permite mapear valores usando pares clave-valor de una manera organizada, creando una base de datos visualmente ordenada.

#### Ejemplo 1:
Guarda los `values` (Pedro, 49, Male, Yes, No, 2, 25000€) en las `keys` (Name, Age, Gender, Children, Married, Number of Children, Income) de una forma más organizada y accesible.

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
**Consola:**
```console
Pedro
```

---

#### Ejemplo 2: 
#### Escenario:
Realizar una encuesta a 100 personas, identificando a cada una por su nombre, edad y género como claves, y sus respuestas como valores: Patricia, 35 años, mujer.

| Key | Value |
| --- | --- |
| Name | Patricia |
| Age | 35 |
| Gender | Female |

---

### Sintaxis de Diccionarios
Para crear un diccionario, se utiliza un enfoque similar al de las listas. Se nombra el diccionario seguido de `=` y se agrupan los pares clave-valor dentro de llaves `{}` **separados por comas**.

#### Ejemplo 1:
```python
people = {
    "Name": "Patricia",
    "Age": 35,
    "Gender": "Female"
}
```
#### Ejemplo 2:
```python
car = {
    "color": "red",
    "brand": "seat",
    "license_plate": "1234AAA"
}
```
---

## Acceder a un Diccionario
En el caso anterior solo tenemos 3 datos, pero imaginemos que hubiera miles de datos sobre un coche en particular y debemos indagar allí para obtener solo uno. Saber si ha pasado la ITV, nombre del propietario, etc. Hagamos una plantilla completa de nuestro coche:

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
### Acceder a los Datos
Como puedes ver, hemos colocado una lista dentro de la clave "extras", esto es posible y también muy útil para poder almacenar varios valores en una clave.

Ahora, una vez que almacenamos los datos en el diccionario, vamos a acceder a ellos, para ello hay diferentes formas, supongamos que queremos imprimir solo el modelo del coche, lo hacemos utilizando la función `print()`.

A continuación del código colocamos un print seguido del nombre que le dimos al diccionario, en este caso coche, y luego entre corchetes la clave a la que queremos acceder, que en este caso como dijimos antes será el modelo.
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
**Consola:**
```console
Ibiza 2024
```
**Recuerda que todos los elementos seguidos de la función están encerrados entre paréntesis.**

### Acceder a Listas dentro de Diccionarios
Se hace de la misma manera que usamos antes para imprimir el valor de una clave, pero **agregando los índices de la lista que queremos imprimir**.

Ejemplo con los extras del coche que se almacenan en la clave de extras y le damos una lista como valor:

#### Ejemplo:
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
**Consola:**
```console
proximity sensors
```
Esto imprime "proximity sensors". **Se indica el índice de la lista después de la clave que contiene la lista**.

---

## Modificar Datos de un Diccionario
### Agregar un Par Clave-Valor
Ahora vamos a añadir la clave **"precio"** y el valor **14000** a este diccionario, recordando que las claves son únicas, es decir:
- **Como la clave precio no existe, se añadirá**.
- **Si ya existiera, solo se modificaría el valor**.

Lo añadimos usando la siguiente sintaxis:

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
### Modificar un Valor
Para cambiar el valor del precio de **14000** a **17000**:

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
### Reemplazar una Clave
Para cambiar la clave **"price"** a **"cost"**:
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
Esto agrega la clave "cost" y elimina la clave "price", preservando el valor.

---

## Eliminar Datos de un Diccionario
Para eliminar un par `key: value` podemos usar la función `del()`:
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
**Consola:**
```console
{"brand": "seat", "model": "Ibiza 2024", "license_plate": "1234AAA", "owner": "Alfredo Martínez García", "extras": ["sunroof", "proximity sensors"], "ITV": "Valid", "price": 14000}
```

Es importante recordar que `del()` es una función, por lo que **el nombre del diccionario y la clave deben estar entre paréntesis**. `del()` es una función predefinida como `print()`.

---

## Métodos de Diccionario
### Método `get()`
El método `get()` recupera el valor de una clave especificada y puede devolver un valor predeterminado si la clave no existe.

#### Ejemplo 1
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
**Consola:**
```console
Alfredo Martínez García
```
Si "owner" no existe, devolverá "No owner".
#### Ejemplo 2
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
**Consola:**
```console
No owner
```

### Método `keys()`
Imprime solo las **claves** del diccionario.

#### Ejemplo
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
**Consola:**
```console
dict_keys(["color", "brand", "model", "license_plate", "owner", "extras", "ITV", "price"])
```

### Método `values()`
Imprime solo los **valores** del diccionario.

#### Ejemplo
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
**Consola:**
```console
dict_values(["red", "seat", "Ibiza 2024", "1234AAA", "Alfredo Martínez García", ["sunroof", "proximity sensors"], "Valid", 14000])
```
---

## Iterar a través de Diccionarios
El bucle `for` permite iterar a través de diccionarios, operando tanto con claves como con valores.

Usando el método `items()`, que devuelve una lista de las claves y valores del diccionario.

#### Ejemplo
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
**Consola:**
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