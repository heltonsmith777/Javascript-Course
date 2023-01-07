////////////////////////////////////////////////////////////////////
// Ejercicio 1
  function listarPropiedades(obj) {
    return Object.keys(obj);
  }

  var person = {
    name: "Lucas",
    age: 27,
    profession: "Developer"
  };

  console.log(listarPropiedades(person)); // [name, age, profession]


////////////////////////////////////////////////////////////////////
// Ejercicio 2
  //El valor de this puede variar según el contexto en el que se utilice.

  //1) Contexto global: cuando this se usa fuera de una función, su valor es el objeto global. 
  //Ejemplo:
  console.log(this); // window (en el navegador) o global (en Node.js)

  //2) Objeto específico: cuando this se utiliza dentro de un método de un objeto, su valor es el objeto al que pertenece el método.
  //Ejemplo:
  const obj2 = {
    prop: 'valor',
    getThis: function() {
      console.log(this); // obj2
    }
  };

  obj2.getThis();

  //3) Valor específico en función: cuando this se usa dentro de una función, 
  //su valor puede ser cambiado mediante la función bind(), call() o apply().
  //Ejemplo:
  function getThis() {
    console.log(this);
  }

  const obj3 = { prop: 'valor' };

  getThis.bind(obj3)(); // obj3 / bind
  getThis.call(obj3); // obj3 / call
  getThis.apply(obj3); // obj3 / apply

  //4) null o undefined: en el modo estricto de JavaScript (que se activa con la directiva 'use strict';), 
  //cuando this se usa dentro de una función anónima que se pasa como parámetro, su valor es null o undefined 
  //(dependiendo del contexto en el que se ejecute).
  //Ejemplo:
  'use strict';

  const obj4 = {
    prop: 'valor',
    getThis: function() {
      setTimeout(function() {
        console.log(this); // null o undefined
      }, 0);
    }
  };

  obj4.getThis();

  //5) arrow function
  //Ejemplo:
  var name = "Ana";
  let obj5 = {
    name: "Pedro",
    greeting:() => {
      console.log(`Hello, my name is ${this.name}`); //pasa a ser del contexto global de name
    }
  }
  
  //pasa a ser del contexto global de name
  obj5.greeting(); //Lucas Fernandez

  //5) en un evento
  //Ejemplo:
  function actionButtonReceiver(){
    console.log("Button pressed with ->");
    console.log(this);
  }
  actionButtonReceiver();

////////////////////////////////////////////////////////////////////
// Ejercicio 3 
  class InvertirCadena {
    constructor() {
      this.cadenaInvertir = '';
    }

    ////////////////arrow function
    invertir = () => { 
      if (this.cadenaInvertir === '') {
        throw new Error('La cadena está vacía');
      }
      console.log(this.cadenaInvertir.split('').reverse().join(''));
    }
  }

  const invertirCadena = new InvertirCadena();

  //¿Cómo podemos hacer para que nuestro código no rompa al ejecutarse?
  //control de excepciones try catch
  try {
    invertirCadena.invertir();
  } catch (error) {
    console.log(error.message); // La cadena está vacía
  }

  invertirCadena.cadenaInvertir = 'Hola mundo';
  invertirCadena.invertir(); // odnum aloH

  //invertirCadena.nuevoMetodo(); // Uncaught TypeError: invertirCadena.nuevoMetodo is not a function

  //Para evitar el error de la invocación a nuevoMetodo(), podemos añadir el operador optional chaining
  invertirCadena.nuevoMetodo?.();

  //o también podemos añadir el método nuevoMetodo a la clase InvertirCadena:
  InvertirCadena.prototype.nuevoMetodo = function() {
    console.log('Este es un nuevo método');
  };
  invertirCadena.nuevoMetodo(); // Este es un nuevo método

////////////////////////////////////////////////////////////////////
// Ejercicio 4
  class Login {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }

    login() {
      if (this.username === 'admin' && this.password === 'passwd') {
        alert('User logged in');
      } else {
        alert('User or passwd incorrect');
      }
    }
  }

  let login = new Login('admin', 'passwd'); // alert -> User logged in
  login.login();

  let logbad = new Login('pepe', 'bad'); // alert -> User or passwd incorrect
  logbad.login();

////////////////////////////////////////////////////////////////////
// Ejercicio 5
  const loginSuccess = document.getElementById('loginSuccess');
  const loginFailure = document.getElementById('loginFailure');

  class Login2 {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }

    login() {
      if (this.username === 'admin' && this.password === 'passwd') {
        alert('User logged in');
      } else {
        alert('User or passwd incorrect');
      }
    }
  }

  loginSuccess.addEventListener('click', function() {
    const login = new Login2('admin', 'passwd');
    login.login();
  });

  loginFailure.addEventListener('click', function() {
    const login = new Login2('pepe', 'bad');
    login.login();
  });


////////////////////////////////////////////////////////////////////
// Ejercicio 6
  const loginSuccessAsync = document.getElementById('loginSuccessAsync');
  const loginFailureAsync = document.getElementById('loginFailureAsync');

  function loginWithUsername(username, password) {
    return new Promise((resolve, reject) => {
      if (username === 'admin' && password === 'passwd') {
        resolve('User logged in');
      } else {
        reject('User or passwd incorrect');
      }
    });
  }

  loginSuccessAsync.addEventListener('click', async function() {
    try {
      const result = await loginWithUsername('admin', 'passwd');
      alert(result);
    } catch (error) {
      console.error(error);
    }
  });

  loginFailureAsync.addEventListener('click', async function() {
    try {
      const result = await loginWithUsername('pepe', 'bad');
      alert(result);
    } catch (error) {
      console.error(error);
    }
  });

/*
let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};
*/
