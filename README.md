#### Intalar ngrx
npm install @ngrx/store --save

- creamos la estructura de redux fuera de la app -> /src/redux
- cada DOMINIO del store tendra un apartado en el /redux formado por 2 archivos
    - src/redux/counter/counter.reducer
    - src/redux/counter/counter.actions
- las Acciones se definen como constantes y con un valor descriptivo (una frase que haga referencia a la accion sobre el cambio de estado que va a generar)
