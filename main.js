
// 3ER PRE ENTREGA //

// FUNCION CONSTRUCTORA DE ACCESORIOS: Construcctor de objetos para crear productos comercializados //
function CrearAccesorio(nombre, descripcion, codigo, vehiculos, precio, anioModelo, stock, disponibilidad, imagen) {
    this.nombreDelAccesorio = nombre;
    this.descripcionAccesorio = descripcion;
    this.codigoAccesorio = codigo;
    this.vehiculosCompatibles = vehiculos;
    this.precioAccesorioEnPesos = precio;
    this.anioLanzamiento = anioModelo;
    this.stockAccesorio = stock;
    this.disponibilidadAccesorio = disponibilidad;
    this.imagenAccesorio = imagen;
    this.inventarioStock = function (stockActual) {
        this.stockAccesorio = stockActual
    };
    this.compraAccesorio = function (cantidadComprada) {
        this.stockAccesorio = this.stockAccesorio + cantidadComprada
    };
    this.actualizarPrecio = function (porcentajeActualizacion) {
        this.precioAccesorioEnPesos = this.precioAccesorioEnPesos * (1 + porcentajeActualizacion)
    };
    this.ventaAccesorio = function (cantidadVendida) {
        this.stockAccesorio = this.stockAccesorio - cantidadVendida
    };
}

// CREACION DE ACCESORIOS: Creacion de productos comercializados //
const accesoriosComercializados = [
    new CrearAccesorio(
        "Sensor de estacionamiento trasero",
        "Embellecedor de manijas de apertura de puertas.",
        "A1",
        ["Hilux", "Corolla", "Yaris"],
        50000,
        2019,
        0,
        false,
        "./media/accesorio1.jpeg"
    ),
    new CrearAccesorio(
        "Barras porta equipaje",
        "Barras porta equipaje sobre techo",
        "A2",
        ["Hilux", "Corolla"],
        110000,
        2018,
        0,
        false,
        "./media/accesorio2.jpeg"
    ),
    new CrearAccesorio(
        "Barra De Lujo Cromada C",
        "Accesorio decorativo, que protege la cabina y asiste para la carga",
        "A3",
        ["Hilux"],
        170000,
        2020,
        0,
        false,
        "./media/accesorio3.jpeg"
    ),
    new CrearAccesorio(
        "Gancho De Arrastre 3500 Kg",
        "Enganche para arrastre de cargas.",
        "A4",
        ["Hilux"],
        130000,
        2015,
        0,
        false,
        "./media/accesorio4.jpeg"
    ),
    new CrearAccesorio(
        "Gancho De Arrastre 750 Kg",
        "Enganche para arrastre de cargas.",
        "A5",
        ["Hilux"],
        100000,
        2014,
        0,
        false,
        "./media/accesorio5.jpeg"
    ),
    new CrearAccesorio(
        "Embellecedor cromado de manija",
        "Embellecedor de manijas de apertura de puertas.",
        "A6",
        ["Hilux", "Corolla", "Yaris"],
        40000,
        2013,
        0,
        false,
        "./media/accesorio6.jpeg"
    ),
    new CrearAccesorio(
        "Tuercas De Seguridad",
        "Protección ante el robo de ruedas.",
        "A7",
        ["Hilux", "Corolla", "Yaris"],
        20000,
        2010,
        0,
        false,
        "./media/accesorio7.jpeg"
    ),
    new CrearAccesorio(
        "Cargador inalámbrico",
        "Cargador inalámbrico.",
        "A8",
        ["Corolla", "Yaris"],
        100000,
        2019,
        0,
        false,
        "./media/accesorio8.jpeg"
    ),
    new CrearAccesorio(
        `Llanta de aleación 18"`,
        `Llanta de aleación 18"`,
        "A9",
        ["Corolla"],
        80000,
        2019,
        0,
        false,
        "./media/accesorio9.jpeg"
    ),
    new CrearAccesorio(
        `Llanta de aleación deportiva 15"`,
        `Llanta de aleación deportiva 15"`,
        "A10",
        ["Yaris"],
        70000,
        2018,
        0,
        false,
        "./media/accesorio10.jpeg"
    ),
    new CrearAccesorio(
        `Barra deportiva`,
        `Nueva barra deportiva`,
        "A11",
        ["Hilux"],
        130000,
        2020,
        0,
        false,
        "./media/accesorio11.jpeg"
    ),
]
console.log(accesoriosComercializados)


// INVENTARIO: Llamado de metodo de constructor de objetos para actualizar 
//stock luego de inventario //

// Se crea un array con todos los codigos inventariados y su cantidad
const inventarioPorCodigo = {
    "A1": 20,
    "A2": 7,
    "A3": 5,
    "A4": 13,
    "A5": 9,
    "A6": 8,
    "A7": 15,
    "A8": 0,
    "A9": 3,
    "A10": 1,
    "A11": 10,
};
// Se recorre el array de accesorios comercializados, en el cual por cada objeto/accesorio
// del mismo, se actualizar el la cantidad de stock con el metodo "inventarioStock" de 
// acuerdo al codigo del accesorio
for (const accesorio of accesoriosComercializados) {
    const codigoAccesorio = accesorio.codigoAccesorio;
    const cantidadInventariada = inventarioPorCodigo[codigoAccesorio];
    accesorio.inventarioStock(cantidadInventariada);
}

// VERIFICAR DISPONIBILIDAD: Creacion de una FUNCION DE ORDEN SUPERIOR con un CICLO 
// para recorrer el Array de Objetos "Accesorios Comercializados"
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




// CREACION DE CARDS EN HTML Y CSS para mostrar los productos //

// Llamado al DIV contenedor que va a mostrar los accesorios
const contenedorAccesorios = document.querySelector("#catalogo")

// Creamos la variable Vehiculo filtrado
let vehiculoFiltrado = "";

// Cremos una funcion para modificar el HTML del DIV contenedor de accesorios
// De acuerdo al valor de VehiculoFiltrado se crea HTML
function filtrarHTML() {
    // Primero se vacia el contenedor
    contenedorAccesorios.innerHTML = '';
    // Luego se recorre el array vehiculo fitrado, realizando algunas acciones
    for (let i = 0; i < vehiculoFiltrado.length; i++) {
    // Se crea un div por accesorio/objeto //
    const divAccesorio = document.createElement("div");
    // A ese div creado, le agregamos HTML
    divAccesorio.innerHTML = `
    <div class="card-header"><strong>"${vehiculoFiltrado[i].nombreDelAccesorio}"</strong>
    </div>
    <div class="card-body">
        <img src="${vehiculoFiltrado[i].imagenAccesorio}" 
        alt='${vehiculoFiltrado[i].nombreDelAccesorio}' style="width:100%">
        <p class="card-text">${vehiculoFiltrado[i].descripcionAccesorio}</p>
        <h6><strong>Vehiculos Compatibles: </strong>
        ${vehiculoFiltrado[i].vehiculosCompatibles}</h6>
        <h6><strong>Precio: </strong>
        ${vehiculoFiltrado[i].precioAccesorioEnPesos}</h6>
    </div>
    <div class="card-footer">
        <button type="button" class="btn btn-dark botonCarrito m-0" 
        id="${vehiculoFiltrado[i].codigoAccesorio}">Agregar al carrito</button>
    </div>
    `;
    // Se agregan clases al DIV creado
    divAccesorio.classList.add("card", "border-dark", "mb-3");
    // se agrega el DIV creado al contenedor de accesorios
    contenedorAccesorios.appendChild(divAccesorio);
    }
    // Se traen todos los botones "agregar a carrito"
    const botonCarrito = document.querySelectorAll(".botonCarrito")
    // Se vuelve a recorrer el array vehiculo filtrado y se le cambia
    // el texto y la clase si disponibilidad es false (no hay stock)
    for (let i = 0; i < vehiculoFiltrado.length; i++) {
        if (vehiculoFiltrado[i].disponibilidadAccesorio === false) {
        botonCarrito[i].innerText = "Sin Stock";
        botonCarrito[i].classList.add("botonSinStock");
        }
    }
};


// Llamado a todos los botones con clase "filtro" //
const botonesFiltro = document.querySelectorAll(".filtro");

// Iterar todos los botones de filtro con un forEach, 
// luego ejecutamos un evento en cada boton
// Quitamos y agregamos CSS al boton que se le ejecuta el evento
// Filtramos los accesorios comercializados de acuerdo al boton 
// donde se ejecutó el evento creando un nuevo array con los
// Accesorios compatibles al vehiculo filtrado
botonesFiltro.forEach((filtro) => {
    // Por cada boton de filtro, se crea un evento click, que realiza varias funciones
    filtro.addEventListener("click", (e) => {
        // Al hacer clic, con un for Each le quitamos la clase "active" a todos los botones de filtro
        botonesFiltro.forEach((boton) => boton.classList.remove("active"));
        // Luego le agregamos la clave "active" a la etiqueta a la cual se le hizo clic
        e.currentTarget.classList.add("active");
        // Con un condicional, verificamos si se hizo clic en el boton con id "todos" o no 
        if (e.currentTarget.id === "todos") {
            // En este caso, no se filtra, se muestran todos, por lo que vehiculo filtrado
            // es igual a los accesorios comercializados
            vehiculoFiltrado = accesoriosComercializados;
        } else {
            // Si se clickeo un boton diferente a todos, se filtra los accesorios 
            // Muestran solo los objetos del array "accesoriosComercializado" que incluyan
            // el ID del boton que se cliqueo, dentro de la propiedad vehiculos compatibles
            vehiculoFiltrado = accesoriosComercializados.filter((accesorio) =>
                accesorio.vehiculosCompatibles.includes(e.currentTarget.id)
            );
        }
        filtrarHTML();
    });
});


// Dejar por defecto el boton del filtro "todos" //
// Traemos el boton "todos" a traves de su ID
const botonTodos = document.getElementById("todos");
// Ejecutamos el evento click al boton "todos" para que se ejecute
// por defecto al cargar la pagina
botonTodos.click();






// AGREGAR PRODUCTOS AL CARRITO //
let botonEliminar = document.querySelectorAll(".botonEliminar")
const botonVaciarCArrito = document.querySelector("#vaciar-Carrito")

// Se crea un array con los accesorios que contiene el carrito
// Se agrega al LOCAL STORAGE
let carritoActual = []
let carritoActualLS = localStorage.getItem("accesorios-agregados-carrito" );
if (carritoActualLS) {
    carritoActual = JSON.parse(carritoActualLS)
} else {
    carritoActual = [];
}
// Se trae el div del carrito
const contenedorCarrito = document.querySelector("#carrito")
// Se acutaliza el carrito para cuando se recarga la pagina y toma el LS del carrito
actualizarCarrito()


// Se crea el evento clic en todo el contenedor de accesorios, para que funcione tanto si
// no se filtro ningun accesorio como si se aplicaron filtros
contenedorAccesorios.addEventListener("click", (e) => {
    // Con un condicional se aplica un evento solo cuando se hace clic 
    // en una etiqueta con la clase "botonCarrito", que sería el boton "agregar carrito"
    if (e.target.classList.contains("botonCarrito")) {
    // Si se cliquea en "agregar carrito" , se crea una variable con el codigo del
    // accesorio cliqueado que sea igual a su ID
        const codigoAccesorioCliqueado = e.target.id;
    // Se crea una variable con el accesorio cliqueado, buscando el mismo a traves
    // del codigo del mismo, dentro de los accesorios comercializados
        const accesorioCliqueado = accesoriosComercializados.find(
        (accesorio) => accesorio.codigoAccesorio === codigoAccesorioCliqueado
        );
    // Se actualiza el carrito con el accesorio agregado
        carritoHTML(accesorioCliqueado, 1);
    }
});

// Se crea una funcion para crear HTML cuando se agregue un accesorio al carrito
function carritoHTML(accesorio, cantidad) {
    // Se acrea una variable, buscando el codigo del accesorio del parametro
    // que se le indica a la funcion
    const codigoAccesorioAgregado = accesorio.codigoAccesorio;
    // Se crea una variable para chequear si el accesorio que se está
    // agregan al carrito, ya existe en el mismo.
    // Con un find se busca en el carritoActual el codigo del accesorio
    let accesorioExistente = carritoActual.find(
        (item) => item.codigo === codigoAccesorioAgregado
    );
    // Si el find de accesorioExistente, encuentra al mismo
    // No se crea HTML, solo se edita la cantidad, el subtotal y
    // se actualiza el carrito
    if (accesorioExistente) {
        accesorioExistente.cantidad += cantidad;
        accesorioExistente.subtotal = 
        accesorioExistente.precio * accesorioExistente.cantidad;
    // Sino, si el mismo esta disponible (en stock), se crea un objeto
    // como valor de accesorioExistente, con la informacion del mismo
    } else {
        if (accesorio.disponibilidadAccesorio) { 
        accesorioExistente = {
            codigo: accesorio.codigoAccesorio,
            nombre: accesorio.nombreDelAccesorio,
            cantidad: cantidad,
            precio: accesorio.precioAccesorioEnPesos,
            subtotal: accesorio.precioAccesorioEnPesos * cantidad,
        };
        // y luego se agrega el mismo al CarritoActual
        carritoActual.push(accesorioExistente);
        // Se crea un div con HTML donde se va a mostrar el accesorio en el carrito
        const divAccesorioEnCarrito = document.createElement("div");
        divAccesorioEnCarrito.innerHTML = `
        <h4 class="card-title">${accesorio.nombreDelAccesorio}</h4>
        <p class="card-text">Cantidad: ${cantidad}</p>
        <p class="card-text">Precio: $ ${accesorio.precioAccesorioEnPesos}</p>
        <p class="card-text">Subtotal: $ ${accesorioExistente.subtotal}</p>
        <button type="button" id=${accesorio.codigo}
        class="botonEliminar btn btn-outline-primary"
        >Eliminar</button>
        `;
        // Se agrega una clase a ese carrito
        divAccesorioEnCarrito.classList.add("container-cart");
        // Se agrega cada div creado al div contenedor del carrito
        contenedorCarrito.appendChild(divAccesorioEnCarrito);
        }
    }
    actualizarCarrito()
    // Se suma lo agregado al total    
    sumarAtotal();
    // LOCAL STORAGE
    localStorage.setItem("accesorios-agregados-carrito" , JSON.stringify(carritoActual));

}


function actualizarCarrito() {
    // Se vacia el contenedor del carrito
    contenedorCarrito.innerHTML = `
    <h2>Tu Carrito</h2>
    <em>Tus productos seleccionados...</em>.
    `;
    // Se recorre el array del carritoAcutal
    carritoActual.forEach((accesorio) => {
        // Se crea un div con HTML donde se va a mostrar el accesorio en el carrito
        const divAccesorioEnCarrito = document.createElement("div");
        divAccesorioEnCarrito.innerHTML = `
        <h4 class="card-title">${accesorio.nombre}</h4>
        <p class="card-text">Cantidad: ${accesorio.cantidad}</p>
        <p class="card-text">Precio: $ ${accesorio.precio}</p>
        <p class="card-text">Subtotal: $ ${accesorio.subtotal}</p>
        <button type="button" id=${accesorio.codigo}
        class="botonEliminar btn btn-outline-primary">Eliminar</button>
        `;
        // Se agrega una clase a ese carrito
        divAccesorioEnCarrito.classList.add("container-cart");
        // Se agrega cada div creado al div contenedor del carrito
        contenedorCarrito.appendChild(divAccesorioEnCarrito);
        console.log(carritoActual)
        sumarAtotal()
        ClicEliminarAccesorio()
    });
}

// Funcion para actualizar el total
function sumarAtotal() {
    // Se crea una variable para mostrar el total
    let totalGeneral = 0;
    // Se recorre las cantidades por accesorio para calcular un subtotal y total
    for (const item of carritoActual) {
        // La variable subtotal surge del precio de cada accesorio por la cantidad
        // agregada al carrito
        const subtotal = 
        item.precio * 
        item.cantidad;
        // Se actualiza la variable del total, sumandole cada nuevo subtotal al total actual
        totalGeneral += subtotal;
    }
    // Actualizar el total general en el HTML
    const elementoTotal = document.querySelector("#totalGeneral");
    elementoTotal.textContent = totalGeneral;
}

// Eliminar accesorio del carrito

function ClicEliminarAccesorio() {
    botonEliminar = document.querySelectorAll(".botonEliminar")
    botonEliminar.forEach(boton => {
    boton.addEventListener("click", eliminarAccesorio)
    });
};
function eliminarAccesorio(e) {
    let idEliminado = e.currentTarget.id;
    console.log(idEliminado)
    const index = carritoActual.findIndex(producto => producto.codigo === idEliminado)
    carritoActual.splice(index, 1)
    actualizarCarrito()
    localStorage.setItem("accesorios-agregados-carrito" , JSON.stringify(carritoActual));
}


botonVaciarCArrito.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
    carritoActual.length = 0;
    const elementoTotal = document.querySelector("#totalGeneral");
    elementoTotal.textContent = 0;
    localStorage.setItem("accesorios-agregados-carrito" , JSON.stringify(carritoActual));
    actualizarCarrito()
}

