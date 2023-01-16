
////////////////////////////////////////////////////////
// Ejercicio 1
    interface Person {
        name: string;
        age: number;
        profession: string;
    }

    const devolverArrayPerson = (person: Person): (string | number)[] => {
        return [person.name, person.age, person.profession];
    }

    let person: Person = { 
        name: 'Lucas', 
        age: 28, 
        profession: 'Full Stack' 
    };

    console.log(devolverArrayPerson(person));  // ["Lucas", 28, "Full Stack"]

    /* 
    La interfaz Person define el tipo de objeto que espera la función devolverArrayPerson(). 
    La función recibe un objeto de tipo Person y devuelve un array de elementos de tipo string o number. 
    El tipado del parámetro de entrada y el tipado del valor de retorno están especificados en la firma de la función.
    */

////////////////////////////////////////////////////////
// Ejercicio 2
    function sumOrConcatenate(a: number | string, b: number | string): number | string {
        if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
        } else if (typeof a === 'string' && typeof b === 'string') {
        return a + '-' + b;
        } else {
        return a + '+' + b;
        }
    }
    
    console.log(sumOrConcatenate(4, 3)); // 7
    console.log(sumOrConcatenate(4, "hello")); // 4+hello
    console.log(sumOrConcatenate("hello", "world")); //hello-world
    /*
    La función sumOrConcatenate() acepta dos parámetros, que pueden ser de tipo number o string. 
    La función devuelve un valor de tipo number si ambos parámetros son números, 
    un valor de tipo string si ambos parámetros son strings o un valor de tipo string 
    si uno de los parámetros es un number y el otro es un string. 
    El tipado del parámetro y del valor de retorno está especificado en la firma de la función.
    */

////////////////////////////////////////////////////////
// Ejercicio 3
    interface Car {
        tires: number;
        turnOnEngine(): void;
        pressPedal(): void;
    }
    
    interface Motorcycle {
        tires: number;
        turnOnEngine(): void;
        openThrottle(): void;
    }

    function iniciarVehicle(vehicle: Car | Motorcycle) {
        vehicle.turnOnEngine();
        if (isCar(vehicle)) {
            vehicle.pressPedal();
        } 
        else {
            vehicle.openThrottle();
        }
    }
  
    function isCar(vehicle: any): vehicle is Car {
        return vehicle.turnOnEngine !== undefined && vehicle.pressPedal !== undefined;
    }
    
    function isMotorcycle(vehicle: any): vehicle is Motorcycle {
        return vehicle.turnOnEngine !== undefined && vehicle.openThrottle !== undefined;
    }

    let v: Car = {
        tires: 10,
        turnOnEngine: function() { console.log("Engine On!"); },
        pressPedal: function() { console.log("Pedal pressed!"); }
    };

    let m: Motorcycle = {
        tires: 20,
        turnOnEngine: function() { console.log("Engine On!"); },
        openThrottle: function() { console.log("Open Throttle!"); }
    };

    iniciarVehicle(v);
    iniciarVehicle(m);


////////////////////////////////////////////////////////
// Ejercicio 4
    function removeFirstEntry<T extends (string | number)>(arr: T[]): T[] {
        return arr.slice(1);
    }

    /*
    La función anterior es genérica y acepta un array de cualquier tipo que extienda de (string | number) (indicado por T) 
    y devuelve el mismo tipo de array sin el primer elemento. 
    Puede ser utilizada con arrays que contengan strings o números de la siguiente manera:
    */

    const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
    const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
    const mixedArray: Array<number|string> = ['Hello', 'I', 'have', 3, 'tasks'];
    const unsupportedArray = [{name: 'Lucas', surname: 'Fernandez'}, 'Hello', 22];

    const newStrArray = removeFirstEntry(strArray);
    const newNumArray = removeFirstEntry(numArray);
    const newMixedArray = removeFirstEntry(mixedArray);
    // const newUnsupportedArray = removeFirstEntry(unsupportedArray); --> will fail
    //En el caso de unsupportedArray, daría error ya que no se especifica que los elementos sean solo string o numbers.

    console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
    console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
    console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];

    


