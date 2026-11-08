/* =========================================================
   CANGRI CAPS
   SISTEMA PRINCIPAL
========================================================= */

let productosCangri = [];
let carritoCangri = [];


/* =========================================================
   💾 GUARDAR CARRITO
========================================================= */

function guardarCarrito() {

    localStorage.setItem(
        "cangriCarrito",
        JSON.stringify(carritoCangri)
    );

}


/* =========================================================
   💾 CARGAR CARRITO GUARDADO
========================================================= */

function cargarCarritoGuardado() {

    const carritoGuardado =
        localStorage.getItem("cangriCarrito");

    if (!carritoGuardado) {
        return;
    }

    try {

        carritoCangri =
            JSON.parse(carritoGuardado);

    } catch (error) {

        console.error(
            "No se pudo cargar el carrito guardado.",
            error
        );

        carritoCangri = [];

    }

}


/* =========================================================
   INICIAR SISTEMA
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /* =========================================
           INVENTARIO / DISPONIBILIDAD
        ========================================= */

        const disponibilidad = {

            1: true,
            2: true,
            3: true,
            4: true,
            5: true,
            6: true,
            7: true,
            8: true,
            9: true,
            10: true,

            11: true,
            12: true,
            13: true,
            14: true,
            15: true,
            16: true,
            17: true,
            18: true,
            19: true,
            20: true,

            21: true,
            22: true,
            23: true,
            24: true,
            25: true,
            26: true,
            27: true,
            28: true,
            29: true,
            30: true,

            31: true,
            32: true,
            33: true,
            34: true,
            35: true,
            36: true,
            37: true,
            38: true,
            39: true,
            40: true,

            41: true,
            42: true,
            43: true,
            44: true,
            45: true,
            46: true,
            47: true,
            48: true,
            49: true,
            50: true,

            51: true,
            52: true,
            53: true,
            54: true,
            55: true,
            56: true,
            57: true,
            58: true,
            59: true,
            60: true,

            61: true,
            62: true,
            63: true,
            64: true,
            65: true,
            66: true,
            67: true,
            68: true,
            69: true,
            70: true,

            71: true,
            72: true,
            73: true,
            74: true,
            75: true,
            76: true,
            77: true,
            78: true,
            79: true,
            80: true

        };


        /* =========================================
           CREAR LAS 80 GORRAS
        ========================================= */

        for (let i = 1; i <= 80; i++) {

            const numero =
                i.toString().padStart(2, "0");

            productosCangri.push({

                id: i,

                imagen:
                    `images/ecua-${numero}.jpg`,

                nombre:
                    `Modelo ${numero}`,

                descripcion:
                    "Cangri Caps Original",

                precio:
                    20.00,

                disponible:
                    disponibilidad[i]

            });

        }


        /* =========================================
           GUARDAR PARA EL MODAL
        ========================================= */

        window.productosCangri =
            productosCangri;


        /* =========================================
           CARGAR CARRITO GUARDADO
        ========================================= */

        cargarCarritoGuardado();


        /* =========================================
           CARGAR CATÁLOGO
        ========================================= */

        cargarCatalogo();


        /* =========================================
           CARGAR NUEVOS INGRESOS
        ========================================= */

        cargarNuevos();


        /* =========================================
           ACTUALIZAR CARRITO
        ========================================= */

        actualizarContadorCarrito();

        actualizarCarrito();


        console.log(
            "CANGRI CAPS: sistema iniciado correctamente."
        );

    }
);


/* =========================================================
   CATÁLOGO PRINCIPAL
========================================================= */

function cargarCatalogo() {

    const contenedor =
        document.getElementById(
            "catalogo-productos"
        );

    if (!contenedor) {
        return;
    }

    contenedor.innerHTML = "";


    productosCangri.forEach(producto => {

        const tarjeta =
            document.createElement("article");

        tarjeta.className =
            "producto";


        tarjeta.innerHTML = `

            <img
                src="${producto.imagen}"
                alt="${producto.nombre}"
                onclick="abrirProducto(${producto.id})"
                style="cursor:pointer;"
                onerror="this.src='images/cangricaps.jpg'"
            >

            <div class="producto-info">

                <h3>
                    ${producto.nombre}
                </h3>

                <p>
                    ${producto.descripcion}
                </p>

                <strong>
                    $${producto.precio.toFixed(2)} USD
                </strong>


                <div
                    class="estado-producto ${
                        producto.disponible
                            ? "disponible"
                            : "agotado"
                    }"
                >

                    <i class="fas ${
                        producto.disponible
                            ? "fa-check-circle"
                            : "fa-times-circle"
                    }"></i>

                    ${
                        producto.disponible
                            ? "Disponible"
                            : "Agotado"
                    }

                </div>


                <div class="producto-botones">

    <button
        class="btn-whatsapp"
        onclick="pedirWhatsApp(
            '${producto.nombre}',
            '$${producto.precio.toFixed(2)} USD'
        )"
    >

        <i class="fab fa-whatsapp"></i>

        WhatsApp

    </button>

</div>

                <button
                    class="btn-carrito ${
                        producto.disponible
                            ? ""
                            : "btn-agotado"
                    }"

                    ${
                        producto.disponible
                            ? `onclick="agregarAlCarrito(${producto.id})"`
                            : "disabled"
                    }
                >

                    <i class="fas ${
                        producto.disponible
                            ? "fa-cart-plus"
                            : "fa-ban"
                    }"></i>

                    ${
                        producto.disponible
                            ? "Agregar al carrito"
                            : "Agotado"
                    }

                </button>

            </div>

        `;


        contenedor.appendChild(
            tarjeta
        );

    });


    console.log(
        "CANGRI CAPS: 80 productos cargados."
    );

}


/* =========================================================
   NUEVOS INGRESOS
========================================================= */

function cargarNuevos() {

    const contenedor =
        document.getElementById(
            "nuevos-productos"
        );

    if (!contenedor) {
        return;
    }

    contenedor.innerHTML = "";


    // =====================================================
    // MODELOS NUEVOS: 73 AL 80
    // =====================================================

    const productosNuevos =
        productosCangri.slice(72, 80);


    productosNuevos.forEach(producto => {

        const tarjeta =
            document.createElement("article");


        tarjeta.className =
            "producto nuevo-producto";


        tarjeta.innerHTML = `

            <div class="nuevo-badge">
                NUEVO
            </div>


            <img
                src="${producto.imagen}"
                alt="${producto.nombre}"
                onclick="abrirProducto(${producto.id})"
                style="cursor:pointer;"
                onerror="this.src='images/cangricaps.jpg'"
            >


            <div class="producto-info">

                <h3>
                    ${producto.nombre}
                </h3>


                <p>
                    ${producto.descripcion}
                </p>


                <strong>
                    $${producto.precio.toFixed(2)} USD
                </strong>


                <div
                    class="estado-producto ${
                        producto.disponible
                            ? "disponible"
                            : "agotado"
                    }"
                >

                    <i class="fas ${
                        producto.disponible
                            ? "fa-check-circle"
                            : "fa-times-circle"
                    }"></i>

                    ${
                        producto.disponible
                            ? "Disponible"
                            : "Agotado"
                    }

                </div>


                <div class="producto-botones">

                    <button
                        class="btn-whatsapp"
                        onclick="pedirWhatsApp(
                            '${producto.nombre}',
                            '$${producto.precio.toFixed(2)} USD'
                        )"
                    >

                        <i class="fab fa-whatsapp"></i>

                        WhatsApp

                    </button>

                </div>


                <button
                    class="btn-carrito ${
                        producto.disponible
                            ? ""
                            : "btn-agotado"
                    }"

                    ${
                        producto.disponible
                            ? `onclick="agregarAlCarrito(${producto.id})"`
                            : "disabled"
                    }
                >

                    <i class="fas ${
                        producto.disponible
                            ? "fa-cart-plus"
                            : "fa-ban"
                    }"></i>

                    ${
                        producto.disponible
                            ? "Agregar al carrito"
                            : "Agotado"
                    }

                </button>

            </div>

        `;


        contenedor.appendChild(
            tarjeta
        );

    });

}

/* =========================================================
   🛒 AGREGAR AL CARRITO
========================================================= */

function agregarAlCarrito(id) {

    const producto =
        productosCangri.find(
            producto =>
                producto.id === id
        );


    if (!producto) {

        console.error(
            "Producto no encontrado."
        );

        return;
    }


    if (!producto.disponible) {

        alert(
            `${producto.nombre} no está disponible en este momento.`
        );

        return;
    }


    const productoExistente =
        carritoCangri.find(
            item =>
                item.id === id
        );


    if (productoExistente) {

        productoExistente.cantidad++;

    } else {

        carritoCangri.push({

            ...producto,

            cantidad: 1

        });

    }


    guardarCarrito();

    actualizarContadorCarrito();

    actualizarCarrito();


    console.log(
        "Producto agregado:",
        producto.nombre
    );

}


/* =========================================================
   🛒 AUMENTAR CANTIDAD
========================================================= */

function aumentarCantidad(id) {

    const producto =
        carritoCangri.find(
            item =>
                item.id === id
        );


    if (!producto) {
        return;
    }


    producto.cantidad++;


    guardarCarrito();

    actualizarContadorCarrito();

    actualizarCarrito();

}


/* =========================================================
   🛒 DISMINUIR CANTIDAD
========================================================= */

function disminuirCantidad(id) {

    const producto =
        carritoCangri.find(
            item =>
                item.id === id
        );


    if (!producto) {
        return;
    }


    if (producto.cantidad > 1) {

        producto.cantidad--;

    } else {

        carritoCangri =
            carritoCangri.filter(
                item =>
                    item.id !== id
            );

    }


    guardarCarrito();

    actualizarContadorCarrito();

    actualizarCarrito();

}


/* =========================================================
   🛒 CONTADOR DEL CARRITO
========================================================= */

function actualizarContadorCarrito() {

    const contador =
        document.getElementById(
            "contador-carrito"
        );


    if (!contador) {
        return;
    }


    const cantidadTotal =
        carritoCangri.reduce(
            (total, producto) =>
                total + producto.cantidad,
            0
        );


    contador.textContent =
        cantidadTotal;

}


/* =========================================================
   🛒 MOSTRAR CARRITO
========================================================= */

function actualizarCarrito() {

    const contenedor =
        document.getElementById(
            "carrito-productos"
        );


    const totalElemento =
        document.getElementById(
            "carrito-total"
        );


    const subtotalElemento =
        document.getElementById(
            "carrito-subtotal"
        );


    if (!contenedor || !totalElemento) {
        return;
    }


    /* =========================================
       CARRITO VACÍO
    ========================================= */

    if (carritoCangri.length === 0) {

        contenedor.innerHTML = `

            <div class="carrito-vacio">

                <i class="fas fa-shopping-bag"></i>

                <p>
                    Tu carrito está vacío
                </p>

                <span>
                    Agrega una gorra para comenzar.
                </span>

            </div>

        `;


        if (subtotalElemento) {

            subtotalElemento.textContent =
                "$0.00 USD";

        }


        totalElemento.textContent =
            "$0.00 USD";


        return;
    }


    /* =========================================
       CARRITO CON PRODUCTOS
    ========================================= */

    contenedor.innerHTML = "";


    let subtotalGeneral = 0;


    carritoCangri.forEach(producto => {

        const subtotalProducto =
            producto.precio *
            producto.cantidad;


        subtotalGeneral +=
            subtotalProducto;


        const elemento =
            document.createElement(
                "div"
            );


        elemento.className =
            "carrito-producto";


        elemento.innerHTML = `

            <img
                src="${producto.imagen}"
                alt="${producto.nombre}"
                onerror="this.src='images/cangricaps.jpg'"
            >


            <div class="carrito-producto-info">

                <h3>
                    ${producto.nombre}
                </h3>


                <p>
                    ${producto.descripcion}
                </p>


                <strong>
                    $${producto.precio.toFixed(2)} USD
                </strong>


                <div class="cantidad-control">

                    <button
                        class="cantidad-btn"
                        onclick="disminuirCantidad(${producto.id})"
                        aria-label="Disminuir cantidad"
                    >
                        -
                    </button>


                    <span class="cantidad-numero">
                        ${producto.cantidad}
                    </span>


                    <button
                        class="cantidad-btn"
                        onclick="aumentarCantidad(${producto.id})"
                        aria-label="Aumentar cantidad"
                    >
                        +
                    </button>

                </div>


                <small class="carrito-subtotal">

                    Subtotal:
                    $${subtotalProducto.toFixed(2)} USD

                </small>

            </div>


            <button
                class="carrito-eliminar"
                onclick="eliminarDelCarrito(${producto.id})"
                aria-label="Eliminar producto"
            >

                <i class="fas fa-trash"></i>

            </button>

        `;


        contenedor.appendChild(
            elemento
        );

    });


    /* =========================================
       SUBTOTAL
    ========================================= */

    if (subtotalElemento) {

        subtotalElemento.textContent =
            `$${subtotalGeneral.toFixed(2)} USD`;

    }


    /* =========================================
       TOTAL
    ========================================= */

    totalElemento.textContent =
        `$${subtotalGeneral.toFixed(2)} USD`;

}


/* =========================================================
   🛒 ELIMINAR PRODUCTO
========================================================= */

function eliminarDelCarrito(id) {

    carritoCangri =
        carritoCangri.filter(
            producto =>
                producto.id !== id
        );


    guardarCarrito();

    actualizarContadorCarrito();

    actualizarCarrito();

}


/* =========================================================
   🛒 VACIAR CARRITO
========================================================= */

function vaciarCarrito() {

    if (carritoCangri.length === 0) {

        return;

    }


    const confirmar =
        confirm(
            "¿Quieres vaciar todo el carrito?"
        );


    if (!confirmar) {

        return;

    }


    carritoCangri = [];


    guardarCarrito();

    actualizarContadorCarrito();

    actualizarCarrito();

}


/* =========================================================
   🛒 ABRIR CARRITO
========================================================= */

function abrirCarrito() {

    const carrito =
        document.getElementById(
            "carrito-modal"
        );


    if (!carrito) {
        return;
    }


    carrito.classList.add(
        "activo"
    );


    actualizarCarrito();

}


/* =========================================================
   🛒 CERRAR CARRITO
========================================================= */

function cerrarCarrito() {

    const carrito =
        document.getElementById(
            "carrito-modal"
        );


    if (carrito) {

        carrito.classList.remove(
            "activo"
        );

    }

}


/* =========================================================
   🛒 CERRAR CARRITO AL HACER CLIC AFUERA
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const carrito =
            document.getElementById(
                "carrito-modal"
            );


        if (
            carrito &&
            event.target === carrito
        ) {

            cerrarCarrito();

        }

    }
);


/* =========================================================
   📱 PEDIR TODO EL CARRITO POR WHATSAPP
========================================================= */

function enviarPedidoWhatsApp() {

    if (carritoCangri.length === 0) {

        alert(
            "Tu carrito está vacío."
        );

        return;
    }


    const numeroWhatsApp =
        "14753700236";


    let subtotalGeneral = 0;


    let mensaje =
        "Hola! 👋 Quiero realizar este pedido de CANGRI CAPS:\n\n";


    carritoCangri.forEach(producto => {

        const subtotalProducto =
            producto.precio *
            producto.cantidad;


        subtotalGeneral +=
            subtotalProducto;


        mensaje +=
            `🧢 ${producto.nombre} x${producto.cantidad} — $${subtotalProducto.toFixed(2)} USD\n`;

    });


    mensaje +=
        `\nSubtotal: $${subtotalGeneral.toFixed(2)} USD`;


    mensaje +=
        "\nEnvío: Por calcular";


    mensaje +=
        `\nTotal: $${subtotalGeneral.toFixed(2)} USD`;


    mensaje +=
        "\n\n¿Me ayudan con el stock y el envío?";


    const url =
        `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;


    window.open(
        url,
        "_blank"
    );

}
/* =========================================================
   👕 ABRIR FICHA DEL PRODUCTO
========================================================= */

function abrirProducto(id) {

    const producto =
        productosCangri.find(
            producto =>
                producto.id === id
        );


    if (!producto) {

        console.error(
            "Producto no encontrado."
        );

        return;
    }


    const imagen =
        document.getElementById(
            "modal-producto-imagen"
        );


    const nombre =
        document.getElementById(
            "modal-producto-nombre"
        );


    const descripcion =
        document.getElementById(
            "modal-producto-descripcion"
        );


    const precio =
        document.getElementById(
            "modal-producto-precio"
        );


    const disponibilidadModal =
        document.getElementById(
            "modal-disponibilidad"
        );


    const puntoDisponibilidad =
        document.getElementById(
            "modal-punto-disponible"
        );


    const textoDisponibilidad =
        document.getElementById(
            "modal-texto-disponibilidad"
        );


    const botonWhatsApp =
        document.getElementById(
            "modal-whatsapp"
        );


    const modal =
        document.getElementById(
            "producto-modal"
        );


    if (!modal) {

        console.error(
            "No se encontró el modal."
        );

        return;
    }


    /* =========================================
       INFORMACIÓN DEL PRODUCTO
    ========================================= */

    if (imagen) {

        imagen.src =
            producto.imagen;

        imagen.alt =
            producto.nombre;

    }


    if (nombre) {

        nombre.textContent =
            producto.nombre;

    }


    if (descripcion) {

        descripcion.textContent =
            producto.descripcion;

    }


    if (precio) {

        precio.textContent =
            `$${producto.precio.toFixed(2)} USD`;

    }


    /* =========================================
       DISPONIBILIDAD
    ========================================= */

    if (
        disponibilidadModal &&
        puntoDisponibilidad &&
        textoDisponibilidad
    ) {

        if (producto.disponible) {

            disponibilidadModal.classList.remove(
                "agotado"
            );


            puntoDisponibilidad.classList.remove(
                "punto-agotado"
            );


            textoDisponibilidad.textContent =
                "Disponible";

        } else {

            disponibilidadModal.classList.add(
                "agotado"
            );


            puntoDisponibilidad.classList.add(
                "punto-agotado"
            );


            textoDisponibilidad.textContent =
                "Agotado";

        }

    }

    /* =========================================
       MOSTRAR MODAL
    ========================================= */

    modal.classList.add(
        "activo"
    );

}


/* =========================================================
   CERRAR FICHA DEL PRODUCTO
========================================================= */

function cerrarProductoModal() {

    const modal =
        document.getElementById(
            "producto-modal"
        );


    if (modal) {

        modal.classList.remove(
            "activo"
        );

    }

}


/* =========================================================
   CERRAR FICHA AL HACER CLIC AFUERA
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const modal =
            document.getElementById(
                "producto-modal"
            );


        if (
            modal &&
            event.target === modal
        ) {

            cerrarProductoModal();

        }

    }
);


/* =========================================================
   📱 WHATSAPP INDIVIDUAL
========================================================= */

function pedirWhatsApp(nombre, precio) {

    const numeroWhatsApp = "14753700236";

    const mensaje =
        `🧢 *CANGRI CAPS*\n\n` +
        `Hola 👋 Estoy interesado en comprar la *${nombre}*.\n` +
        `💵 Precio: *${precio}*\n\n` +
        `¿Me pueden confirmar la disponibilidad y el costo de envío?\n` +
        `¡Gracias!`;

    const url =
        `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}

/* =========================================================
   🌎 CAMBIAR IDIOMA
========================================================= */

function cambiarIdioma(idioma) {

    const elementos =
        document.querySelectorAll(
            "[data-es]"
        );


    elementos.forEach(
        elemento => {

            if (idioma === "en") {

                elemento.innerText =
                    elemento.getAttribute(
                        "data-en"
                    );

            } else {

                elemento.innerText =
                    elemento.getAttribute(
                        "data-es"
                    );

            }

        }
    );

}


/* =========================================================
   💳 ABRIR CHECKOUT
========================================================= */

function abrirCheckout() {

    if (carritoCangri.length === 0) {

        alert(
            "Tu carrito está vacío."
        );

        return;
    }


    actualizarCheckout();


    const checkout =
        document.getElementById(
            "checkout-modal"
        );


    if (!checkout) {
        return;
    }


    checkout.classList.add(
        "activo"
    );


    const cuerpo =
        checkout.querySelector(
            ".checkout-cuerpo"
        );


    if (cuerpo) {

        cuerpo.scrollTop = 0;

    }

}


/* =========================================================
   💳 CERRAR CHECKOUT
========================================================= */

function cerrarCheckout() {

    const checkout =
        document.getElementById(
            "checkout-modal"
        );


    if (checkout) {

        checkout.classList.remove(
            "activo"
        );

    }

}


/* =========================================================
   💳 ACTUALIZAR RESUMEN DEL CHECKOUT
========================================================= */

function actualizarCheckout() {

    const contenedor =
        document.getElementById(
            "checkout-resumen"
        );


    const totalElemento =
        document.getElementById(
            "checkout-total"
        );


    if (!contenedor || !totalElemento) {

        return;

    }


    contenedor.innerHTML = "";


    let totalGeneral = 0;


    carritoCangri.forEach(
        producto => {

            const subtotal =
                producto.precio *
                producto.cantidad;


            totalGeneral +=
                subtotal;


            const elemento =
                document.createElement(
                    "div"
                );


            elemento.className =
                "checkout-producto";


            elemento.innerHTML = `

                <div class="checkout-producto-info">

                    <strong>
                        ${producto.nombre}
                    </strong>

                    <span>
                        ${producto.cantidad} ×
                        $${producto.precio.toFixed(2)} USD
                    </span>

                </div>

                <strong>
                    $${subtotal.toFixed(2)} USD
                </strong>

            `;


            contenedor.appendChild(
                elemento
            );

        }
    );


    totalElemento.textContent =
        `$${totalGeneral.toFixed(2)} USD`;

}


/* =========================================================
   📦 CONFIRMAR PEDIDO
   TARJETA / WHATSAPP / TRANSFERENCIA
========================================================= */

function continuarAlPago() {

    /* =========================================
       DATOS DEL CLIENTE
    ========================================= */

    const nombre =
        document.getElementById(
            "checkout-nombre"
        ).value.trim();


    const whatsapp =
        document.getElementById(
            "checkout-whatsapp"
        ).value.trim();


    const correo =
        document.getElementById(
            "checkout-correo"
        ).value.trim();


    const pais =
        document.getElementById(
            "checkout-pais"
        ).value;


    const ciudad =
        document.getElementById(
            "checkout-ciudad"
        ).value.trim();


    const direccion =
        document.getElementById(
            "checkout-direccion"
        ).value.trim();


    const observaciones =
        document.getElementById(
            "checkout-observaciones"
        ).value.trim();


    /* =========================================
       MÉTODO DE PAGO
    ========================================= */

    const metodoPago =
        document.querySelector(
            'input[name="metodo-pago"]:checked'
        );


    /* =========================================
       VALIDAR DATOS
    ========================================= */

    if (
        !nombre ||
        !whatsapp ||
        !correo ||
        !pais ||
        !ciudad ||
        !direccion
    ) {

        alert(
            "Por favor completa todos los campos obligatorios."
        );

        return;
    }


    /* =========================================
       VALIDAR MÉTODO
    ========================================= */

    if (!metodoPago) {

        alert(
            "Por favor selecciona un método de pago."
        );

        return;
    }


    /* =========================================
       CALCULAR TOTAL
    ========================================= */

    let subtotalGeneral = 0;


    carritoCangri.forEach(
        producto => {

            subtotalGeneral +=
                producto.precio *
                producto.cantidad;

        }
    );


    /* =========================================
       DEFINIR MÉTODO
    ========================================= */

    let textoMetodoPago = "";
    let tituloPago = "";
    let descripcionPago = "";
    let estadoPago = "";

    if (
    metodoPago.value ===
    "transferencia"
) {

    textoMetodoPago =
        "🏦 Transferencia bancaria";

    tituloPago =
        "🏦 TRANSFERENCIA BANCARIA";

    descripcionPago =
        "El cliente realizará la transferencia y enviará el comprobante por WhatsApp.";

    estadoPago =
        "📎 *Estado del pago: Pendiente de comprobante*";

}

else {

    textoMetodoPago =
        "📱 Confirmar por WhatsApp";

    tituloPago =
        "📱 CONFIRMACIÓN POR WHATSAPP";

    descripcionPago =
        "El cliente desea confirmar el pedido directamente por WhatsApp.";

    estadoPago =
        "💳 *Pago: Por confirmar*";

}

    /* =========================================
       CREAR MENSAJE
    ========================================= */

    let mensaje =
        "🧢 *NUEVO PEDIDO - CANGRI CAPS*\n\n";


    mensaje +=
        "👤 *DATOS DEL CLIENTE*\n\n";


    mensaje +=
        `Nombre: ${nombre}\n`;


    mensaje +=
        `WhatsApp: ${whatsapp}\n`;


    mensaje +=
        `Correo: ${correo}\n\n`;


    mensaje +=
        "📦 *DATOS DE ENTREGA*\n\n";


    mensaje +=
        `País: ${pais}\n`;


    mensaje +=
        `Ciudad: ${ciudad}\n`;


    mensaje +=
        `Dirección: ${direccion}\n`;


    if (observaciones) {

        mensaje +=
            `Observaciones: ${observaciones}\n`;

    }


    mensaje +=
        "\n💳 *MÉTODO DE PAGO*\n\n";


    mensaje +=
        `${textoMetodoPago}\n`;


    mensaje +=
        "\n🛒 *PRODUCTOS*\n\n";


    carritoCangri.forEach(
        producto => {

            const subtotalProducto =
                producto.precio *
                producto.cantidad;


            mensaje +=
                `🧢 ${producto.nombre} x${producto.cantidad} — $${subtotalProducto.toFixed(2)} USD\n`;

        }
    );


    mensaje +=
    `\n\u{1F4B0} *Subtotal: $${subtotalGeneral.toFixed(2)} USD*`;

mensaje +=
    "\n\u{1F69A} Envío: Por calcular";

mensaje +=
    `\n\u{1F4B5} *Total: $${subtotalGeneral.toFixed(2)} USD*`;


    /* =========================================
       INFORMACIÓN SEGÚN MÉTODO
    ========================================= */

    mensaje +=
        `\n\n${tituloPago}`;


    mensaje +=
        `\n${descripcionPago}`;


    mensaje +=
        `\n\n${estadoPago}`;


    mensaje +=
        "\n\nHola, quiero confirmar este pedido. ¿Me ayudan con el envío y el pago?";


    /* =========================================
       WHATSAPP
    ========================================= */

    const numeroWhatsApp =
        "14753700236";


    const url =
        `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;


    window.open(
        url,
        "_blank"
    );

}


/* =========================================================
   🏦 MÉTODO DE PAGO
========================================================= */

function actualizarMetodoPago() {

    const metodoSeleccionado =
        document.querySelector(
            'input[name="metodo-pago"]:checked'
        );


    const instrucciones =
        document.getElementById(
            "transferencia-instrucciones"
        );


    if (!instrucciones) {
        return;
    }


    if (
        metodoSeleccionado &&
        metodoSeleccionado.value === "transferencia"
    ) {

        instrucciones.classList.add(
            "activo"
        );

    } else {

        instrucciones.classList.remove(
            "activo"
        );

    }

}

/* =====================================================
   MOSTRAR / OCULTAR ENCABEZADO SEGÚN EL SCROLL
===================================================== */

(function () {

    let ultimaPosicion = window.scrollY;
    let desplazamientoAcumulado = 0;

    window.addEventListener("scroll", function () {

        const navbar = document.querySelector(".navbar");

        if (!navbar) return;

        const posicionActual = window.scrollY;
        const diferencia = posicionActual - ultimaPosicion;

        // Si estamos prácticamente arriba de la página,
        // siempre mostramos el encabezado.
        if (posicionActual <= 20) {
            navbar.classList.remove("navbar-oculto");
            desplazamientoAcumulado = 0;
            ultimaPosicion = posicionActual;
            return;
        }

        // BAJANDO
        if (diferencia > 0) {

            desplazamientoAcumulado += diferencia;

            // Esperamos unos píxeles para evitar
            // que desaparezca por pequeños movimientos.
            if (desplazamientoAcumulado > 30) {
                navbar.classList.add("navbar-oculto");
                desplazamientoAcumulado = 0;
            }
        }

        // SUBIENDO
        else if (diferencia < 0) {

            desplazamientoAcumulado += diferencia;

            if (desplazamientoAcumulado < -20) {
                navbar.classList.remove("navbar-oculto");
                desplazamientoAcumulado = 0;
            }
        }

        ultimaPosicion = posicionActual;

    }, { passive: true });

})();