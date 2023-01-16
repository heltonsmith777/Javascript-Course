var devolverArrayPerson = function (person) {
    return [person.name, person.age, person.profession];
};
var person = {
    name: 'Lucas',
    age: 28,
    profession: 'Full Stack'
};
console.log(devolverArrayPerson(person)); // ["Lucas", 28, "Full Stack"]
/*
La interfaz Person define el tipo de objeto que espera la función devolverArrayPerson().
La función recibe un objeto de tipo Person y devuelve un array de elementos de tipo string o number.
El tipado del parámetro de entrada y el tipado del valor de retorno están especificados en la firma de la función.
*/
////////////////////////////////////////////////////////
// Ejercicio 2
function sumOrConcatenate(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + '-' + b;
    }
    else {
        return a + '+' + b;
    }
}
console.log(sumOrConcatenate(4, 3)); // 7
console.log(sumOrConcatenate(4, "hello")); // 4+hello
console.log(sumOrConcatenate("hello", "world")); //hello-world
function iniciarVehicle(vehicle) {
    vehicle.turnOnEngine();
    if (isCar(vehicle)) {
        vehicle.pressPedal();
    }
    else {
        vehicle.openThrottle();
    }
}
function isCar(vehicle) {
    return vehicle.turnOnEngine !== undefined && vehicle.pressPedal !== undefined;
}
function isMotorcycle(vehicle) {
    return vehicle.turnOnEngine !== undefined && vehicle.openThrottle !== undefined;
}
var v = {
    tires: 10,
    turnOnEngine: function () { console.log("Engine On!"); },
    pressPedal: function () { console.log("Pedal pressed!"); }
};
var m = {
    tires: 20,
    turnOnEngine: function () { console.log("Engine On!"); },
    openThrottle: function () { console.log("Open Throttle!"); }
};
iniciarVehicle(v);
iniciarVehicle(m);
////////////////////////////////////////////////////////
// Ejercicio 4
function removeFirstEntry(arr) {
    return arr.slice(1);
}
/*
La función anterior es genérica y acepta un array de cualquier tipo que extienda de (string | number) (indicado por T)
y devuelve el mismo tipo de array sin el primer elemento.
Puede ser utilizada con arrays que contengan strings o números de la siguiente manera:
*/
var strArray = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
var numArray = [1, 2, 3, 4, 5, 6, 7];
var mixedArray = ['Hello', 'I', 'have', 3, 'tasks'];
var unsupportedArray = [{ name: 'Lucas', surname: 'Fernandez' }, 'Hello', 22];
var newStrArray = removeFirstEntry(strArray);
var newNumArray = removeFirstEntry(numArray);
var newMixedArray = removeFirstEntry(mixedArray);
// const newUnsupportedArray = removeFirstEntry(unsupportedArray); --> will fail
//En el caso de unsupportedArray, daría error ya que no se especifica que los elementos sean solo string o numbers.
console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];
