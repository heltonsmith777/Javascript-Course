// Ejercicio 1
    import "./aboutme.js";
    console.log("Ejercicio 1");

// Ejercicio 2
    //se ejecuta el contenido de aboutme.js primero que console.log()

// Ejercicio 3
    /*
    1) Inspección de elementos: 
    Permite ver y editar el código HTML y CSS de un sitio en tiempo real jmientras se navega.

    2) Depurador de Javascript: 
    Ayuda a encontrar y solucionar problemas en el código JavaScript de un sitio.

    3) Herramienta de red: 
    Muestra cómo se cargan y utilizan los recursos de un sitio como imágenes, documentos JavaScript y estilos CSS.
    */

// Ejercicio 4
    for (let i = 1; i <= 100; i++) {
        if (i % 7 == 0) {
            console.log(i);
        }
    }
    /* 
        Ciclo for para iterar los números del 1 al 100. 
        En el interior se utiliza un if para verificar si el número de la iteración es divisible por 7. 
        Si es divisible se imprime en la consola.
        Si no, se continua con la iteración. 
    */

// Ejercicio 5
    /*
        La diferencia entre un archivo JavaScript en formato <script> y uno ejecutado en formato <script type="module">,
        radica en cómo se cargan y ejecutan los documentos. 
        Los archivos en formato <script> se cargan y ejecutan de forma síncrona, 
        es decir que la carga y ejecución del archivo bloquea la carga y ejecución de la página,
        hasta que el archivo se haya cargado y ejecutado completamente. 

        Mientras que los documentos ejecutados en formato <script type="module"> se cargan y ejecutan de forma asíncrona, 
        lo que significa que la carga y ejecución del archivo no bloquea la carga y ejecución de la página web.
    */

// Ejercicio 6
    //objeto formatter con un atributo prefix y un método append
    let formatter = {
        prefix: "Hello ",
        append: function(parametro1) {
            console.log(this.prefix + parametro1);
        }
    };

    //método append del objeto formatter
    //imprime Hello World
    formatter.append("World"); 

    // Añadir atributo prototype al objeto formatter
    formatter.prototype = {};
    //se añade un método al objeto formatter a través del atributo prototype
    formatter.prototype.toLowerString = function(parametro2) {
        console.log(parametro2.toLowerCase());
    };

    //se utiliza el nuevo método del objeto formatter
    //imprime: i'm lucas
    formatter.prototype.toLowerString("I'm Lucas"); 

