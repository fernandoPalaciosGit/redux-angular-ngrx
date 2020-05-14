#### Intalar ngrx
npm install @ngrx/store --save


#### Estructura en el proyecto de redux
- creamos la estructura de redux fuera de la app -> /src/redux
- cada DOMINIO del store tendra un apartado en el /redux formado por 2 archivos
    - src/redux/counter/counter.reducer
    - src/redux/counter/counter.actions
- las Acciones se definen como constantes y con un valor descriptivo (una frase que haga referencia a la accion sobre el cambio de estado que va a generar)


#### Action creator
- Se crean clases por cada accion que queramos definir. Esto per mite a los componentes construir la accion (y dejar de definir el objeto de cada acicon)
- Se define un Tipo que combine la declaracion de todos los constructores. Esto permite al reducer poder referenciar en el swith sin aclaracion de uno en concreto (porque cada aciton puede extende su declaracion de propiredades [a parte del {type}] y el switch del reducer tenerlo en cuenta)
