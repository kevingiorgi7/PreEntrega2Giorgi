let precioDolarOficial = Number(230)

// Construcctor de objeto para crear productos comercializados //

function CrearAccesorio(nombre, codigo, vehiculos, precio, anioModelo, stock, disponibilidad) {
    this.nombreDelAccesorio = nombre;
    this.codigoAccesorio = codigo
    this.vehiculosCompatibles = vehiculos;
    this.precioAccesorioEnPesos = precio;
    this.precioAccesorioEnDolar = Math.round(this.precioAccesorioEnPesos / precioDolarOficial);
    this.anioLanzamiento = anioModelo;
    this.stockAccesorio = stock;
    this.disponibilidadAccesorio = disponibilidad;
    this.inventarioStock = function (stockActual) {
        this.stockAccesorio = stockActual
    }
    this.compraAccesorio = function (cantidadComprada) {
        this.stockAccesorio = this.stockAccesorio + cantidadComprada
    }
    this.actualizarPrecio = function (porcentajeActualizacion) {
        this.precioAccesorioEnPesos = this.precioAccesorioEnPesos * (1 + porcentajeActualizacion)
    }
    this.ventaAccesorio = function (cantidadVendida) {
        this.stockAccesorio = this.stockAccesorio - cantidadVendida
    }
}


// Creacion de productos comercializados //

const accesorio1 = new CrearAccesorio(
    "Sensor de estacionamiento",
    "A1",
    ["Hilux", "Corolla", "Yaris"],
    45000,
    2019,
    0,
    false,
)
const accesorio2 = new CrearAccesorio(
    "Barra porta equipaje",
    "A2",
    ["Hilux", "Corolla"],
    90000,
    2018,
    0,
    false,
)
const accesorio3 = new CrearAccesorio(
    "Barra cromada",
    "A3",
    ["Hilux"],
    170000,
    2020,
    0,
    false,
)


// Array de objetos con los productos comercializados creados //

const accesoriosComercializados = [
    accesorio1,
    accesorio2,
    accesorio3,
];

// Uso de la funcion forEach para mostrar por consola los productos comercializados creados
// con sus respectivos codigos.

console.log("Los accesorios comercializados son:")
accesoriosComercializados.forEach((accesorio) => {
    console.log(`Nombre del accesorio: ${accesorio.nombreDelAccesorio}`);
    console.log(`Código del accesorio: ${accesorio.codigoAccesorio}`);
});
console.log(accesoriosComercializados)


// Llamado de metodo de constructor de objetos para actualizar stock luego de inventario //
accesorio1.inventarioStock(20)
accesorio2.inventarioStock(7)
accesorio3.inventarioStock(0)

// Llamado de metodo de constructor de objetos para actualizar stock por compra //
accesorio1.compraAccesorio(6)
accesorio2.compraAccesorio(3)

// Llamado de metedo de constructor de objetos para actulizar precios segun porcentaje //
accesorio2.actualizarPrecio(0.2)


// Creacion de una FUNCION DE ORDEN SUPERIOR con un CICLO para recorrer el Array de Objetos "Accesorios Comercializados"
// y modificar el parametro "Disponibilidad" de cada Objeto/Accesorio en base a su stock 

const verificarDisponibilidad = (accesorios) => {
    for (let i = 0; i < accesorios.length; i++) {
        if (accesorios[i].stockAccesorio > 0) {
            accesorios[i].disponibilidadAccesorio = true;
        } else {
            accesorios[i].disponibilidadAccesorio = false;
        }
    }
}

verificarDisponibilidad(accesoriosComercializados)


// Creacion de array con los objetos que estan disponibles //

const accesoriosDisponibles = accesoriosComercializados.filter(
    (accesorioDisponible) => accesorioDisponible.disponibilidadAccesorio
    );
console.log(accesoriosDisponibles);


// Creacion de un objeto con los nombres de los accesorios disponibles // 
const nombresAccesoriosDisponibles = accesoriosDisponibles.map(
    (accesorio) => accesorio.nombreDelAccesorio
    );
console.log(`Los accesorios en stock son: ${nombresAccesoriosDisponibles.join(", ")}.`)



// Venta de Accesorios //

// Creacion de una variable para que el usuario ingrese su vehiculo. 
// Se le informan los vehiculos compatibles del array "Accesorios Disponibles" //
let vehiculoDelUsuario = prompt(`Ingrese el nombre de su vehiculo 
(Vendemos accesorios para ${accesoriosDisponibles[0].vehiculosCompatibles})`);

// Se filtran los accesorios que son compatibles con el Vehiculo del usuario, 
// creando un array de Accesorios para el vehiculo del Usuario //
let accesoriosParaUsuario = accesoriosDisponibles.filter(
    (accesorio) => accesorio.vehiculosCompatibles.includes(vehiculoDelUsuario)
    );


// Mediante un condicional verificamos si hay accesorios disponibles para el vehiculo del usuario. 
// Si es el array "Accesorios Para Usuario" es tiene una longitud igual a 0, es porque 
// no hay accesorios disponibles para su vehiculo.
// Si es distinto que 0, muestra a traves de un Alert, los codigos disponibles para el vehiculo ingresado,
// Se logra a traves de un "For..of" para iterar el array de "Accesorios Para Usuario" 
// mostrando los nombre y codigos de los mismos
// Luego de eso se le pide al usuario, mediante un prompt, que ingrese el codigo del accesorio solicitado
// Luego se le pide la cantidad solicitada mediante un prompt con formato numero
// Luego se verifica, mediante un "Find" si el codigo ingresado por el usuario se encuentra 
// dentro del Array "Accesorios Para Usuario"
// Despues, mediante un condicional, verificamos si el "Find" encontró el codigo ingresado por el usuario y si tenemos
// stock de la cantidad solicitada por el usuario. Si esto se cumple, se realiza la venta mediante 
// el metodo del constructor de objetos para actualizar el stock y mostrar un mensaje de confirmacion de compra.
// Si no el "Find" no encuentra el codigo ingresado o no hay stock, muestra un Alert informando lo sucedido //

if (accesoriosParaUsuario.length === 0) {
    alert("No tenemos accesorios para su vehiculo");
} else {
    alert("A continuacion le mostraremos los codigos disponibles");
    for (const accesorio of accesoriosParaUsuario) {
    alert(`${accesorio.nombreDelAccesorio} = Codigo: ${accesorio.codigoAccesorio}`);
    }

    let accesorioVendido = prompt("Ingrese el codigo del accesorio solicitado");
    let cantidadVendida = Number(prompt("Ingrese la cantidad solicitada"));
    let accesorioSeleccionado = accesoriosParaUsuario.find((accesorio) => accesorio.codigoAccesorio === accesorioVendido);

    if (accesorioSeleccionado && accesorioSeleccionado.stockAccesorio >= cantidadVendida) {
        accesorioSeleccionado.ventaAccesorio(cantidadVendida);

        alert(`Su compra se efectuó con éxito!
        Ha comprado ${cantidadVendida} unidades de ${accesorioSeleccionado.nombreDelAccesorio}
        el precio total es ${accesorioSeleccionado.precioAccesorioEnPesos * cantidadVendida} pesos.`);

        console.log(`El usuario compro ${cantidadVendida} unidades de ${accesorioSeleccionado.nombreDelAccesorio} 
        por un total de ${accesorioSeleccionado.precioAccesorioEnPesos * cantidadVendida} pesos.`)

    } else {
        alert("Codigo de accesorio invalido o no tenemos suficiente stock");
    }
}

// Repetimos la verificacion de disponibilidad luego de la venta //

verificarDisponibilidad(accesoriosComercializados)


// Creacion de array con los objetos que estan disponibles, luego de la venta realizada (post venta) //

const accesoriosDisponiblesPostVenta = accesoriosComercializados.filter((accesorioDisponible) => accesorioDisponible.disponibilidadAccesorio);
console.log(accesoriosDisponiblesPostVenta);


// Creacion de un objeto con los nombres de los accesorios disponibles, luego de la venta realizada (post venta) // 
const nombresAccesoriosDisponiblesPostVenta = accesoriosDisponiblesPostVenta.map((accesorio) => accesorio.nombreDelAccesorio);
console.log(`Los accesorios en stock son: ${nombresAccesoriosDisponiblesPostVenta.join(", ")}.`)