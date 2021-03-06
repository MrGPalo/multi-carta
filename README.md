## Descripción
---
El plan es tener una carta por preferencias alimenticias básicas (vegano, vegetariano, etc) luego preguntará por afecciones particulares como intolerancia a la lactosa, celiaco, etc.
Como bonus me gustaría incorporar una sección dentro del perfil de usuario en la que almacene los restaurantes en dos listas, una de visitados donde podría dejar comentarios, y otra en la que pueda marcar los que le interesen para ir en un futuro.

##  Descripción de la aplicación
 ---
 Lo primero es una auntenticación de usuario, la primera vez que el usuario se registra, se le abren una serie de formularios. El primero es el de las preferencias alimenticias: si es omnívoro, vegetariano, vegano o dieta macrobiótica.
 Soy consciente de que hay muchas más preferencias alimenticias, pero en este proyecto trabajaremos con éstas como base.
 Después de pasar por el primer formulario, nos preguntará si tenemos alguna intolerancia o alergia, pero esto se dividirá en dos formularios, el primero para alergias y el segundo para intolerancias.
 Una vez hayamos configurado nuestras preferencias, lo siguiente es filtrar los resultados de la base de datos de restaurantes por distancia o ciudad, mediante el código postal que nos proporcione el usuario.
 En un futuro se podría abrir registros también para restaurantes, para dejar de utilizar una api externa, y asi nutrirnos de nuestros propios restaurantes. Los modelos para restaurantes ya están preparados para esta futura implementación.

## Modelos 
---
```yaml
-Customer
  - name: String
  - zip: Number
  - food-preferences: String
  - allergies: Array(String)
  - intolerance: Array(String)
```
```yaml
- Restaurante
 - name: String
 - email: String
 - adress: String
 - url: String
 - foodType: Array<String>
 - menu: iMenu['_id']
 - zip: Number
```
```yaml
- iMenu
 - diet_type: String
 - appetizer: Array<String>
 - main: Array<String>
 - dessert: Array<String>
 -drink: Object
```
## API
---
En desarrollo
