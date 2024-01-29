const productos = [
  { nombre: "Esmalte Titanlux blanco 750ml", categoria: "pintura", subcategoria: "pintura4", precio: 47.95, descripcion: "Esmalte multi-superficies al agua de máxima calidad y uso universal. Decora y protege con una sola capa. Con conservante anti-moho" },
  { nombre: "Pintura blanca spray 400ml", categoria: "pintura", subcategoria: "pintura2", precio: 10.45, descripcion: "Spray de pintura acrílica de base disolvente. Debido a las caracteristicas del producto, su uso es eficiente sobre múltiples superficies: madera, metal, ace ro inoxidable, vidrio, yeso, cerámica, piedra, plástico duro, etc. " },
  { nombre: "CAJA HERRAMIENTAS TAYG Nº 31", categoria: "herramienta", subcategoria: "herramienta2", precio: 18.95, descripcion: "Medidas 445x235x230 mm. Contiene 1 bandeja + 1 estuche. Material PP. Color negro bandeja y estuche rojos. Soporta 120kgs." },
  { nombre: "Cemento VICAT PROMPT 25kg", categoria: "cemento", subcategoria: "cementoprompt", precio: 17.20, descripcion: "Cemento natural de fraguado rápido y altas prestaciones" },
  { nombre: "Cemento Le Prompt bolsa 1kg", categoria: "cemento", subcategoria: "cementoleprompt", precio: 6.96, descripcion: "Cemento natural de fraguado rápido y altas prestaciones" },
  { nombre: "Novaplast Cemento blanco 1kg", categoria: "cemento", subcategoria: "cemento1kg", precio: 1.90, descripcion: "Es un cemento especialmente indicado para reparaciones en baños, cocinas, sí como el colocado de solados y pavimentaicones de baja resitencia como plaquetas y terrazos." },
  { nombre: "Pintura piscina azul marino 4l", categoria: "pintura", subcategoria: "pintura3", precio: 34.95, descripcion: "Pintura 100% clorocaucho para el pintado de paredes y suelos de cemento y horm igón en piscinas. Resistente a la humedad y al agua en inmersión. Su acabado f acilita la limpieza de la piscina e impide la adherencia de algas y mohos. " },
  { nombre: "TIJERA 1MANO HOJA CURVA", categoria: "herramienta", subcategoria: "herramienta1", precio: 6.70, descripcion: "Tijera 1 mano 21 cm corte bypass. Mangos metálicos. Cabeza de corte de acero al carbono zincada. Muelle en espiral, cierre metálico." },
  { nombre: "CEMENTO BLANCO II/A-L 42.5R (SACO 25 KG)", categoria: "cemento", subcategoria: "cementosaco25kg", precio: 8.75, descripcion: "Cemento blanco de alta resistencia, cuyos principales campos de aplicación son: prefabricados estructurales; hormigón en masa y armado; hormigón proyectado; hormigones ornamentales y/o coloreados" },
  { nombre: "Pintura plastica blanco mate", categoria: "pintura", subcategoria: "pintura1", precio: 34.95, descripcion: "Pintura plastica de acabado mate. Ideal para: El pintado de paredes, techos muros al interior o al exterior cubiertos o protegidos, Utilizar como imprimación opacificante, previo a la aplicación de pinturas de más calidad" },
  { nombre: "TALADRO PERCUTOR COMPACTO MILWAUKEE", categoria: "herramienta", subcategoria: "herramienta4", precio: 47.95, descripcion: "Taladro percutor compacto M18™, 2 velocidades, par máximo 50Nm, portabrocas metálico 13mm. Se suministra con 2 baterías M18B2 y cargador M12-18C, en kitbox." },
  { nombre: "AMOLADORA ANGULAR 2100W-230MM", categoria: "herramienta", subcategoria: "herramienta3", precio: 125.95, descripcion: "Amoladora angular de 2400W Ø230mm. Giros en vacio: 6500min-1. m14. Modelo AGR 24-23 CAL." },
];


document.addEventListener("DOMContentLoaded", () => {
  inicializarListaProductos();

  const formBusqueda = document.getElementById("formBusqueda");
  formBusqueda.addEventListener("submit", realizarBusqueda);
});


function realizarBusqueda(event) {
  event.preventDefault(); // Asi evitamos que recargue la pagina al darle a buscar

  const inputBusqueda = document.getElementById("searchInput").value.toLowerCase();


  const productosFiltrados = productos.filter(producto => 
    producto.nombre.toLowerCase().includes(inputBusqueda)
  );

  mostrarResultadosBusqueda(productosFiltrados);
}



function mostrarResultadosBusqueda(productosFiltrados) {
  const contenedorProductos = document.getElementById("contenedorProductos");
  contenedorProductos.innerHTML = "";

  if (productosFiltrados.length === 0) {
    contenedorProductos.innerHTML = "<p>No se encontraron resultados</p>";
    return;
  }

  productosFiltrados.forEach(producto => {
    const tarjetaProducto = crearTarjetaProducto(producto);
    contenedorProductos.appendChild(tarjetaProducto);
  });
}



function inicializarListaProductos() {
  const contenedorProductos = document.getElementById("contenedorProductos");
  contenedorProductos.innerHTML = "";

  productos.forEach(producto => {
    const tarjetaProducto = crearTarjetaProducto(producto);
    contenedorProductos.appendChild(tarjetaProducto);
  });
}



function crearTarjetaProducto(producto) {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("col", "mb-4");
  tarjeta.innerHTML = `
      <div class="card h-100 d-flex flex-column" data-id="${producto.subcategoria}">
            <a href="producto1.html"> 
            <img src="images/${producto.subcategoria}.jpg" class="card-img-top" alt="Imagen del producto"> 
            </a>
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p> 
            </div>
            <ul class="list-group list-group-flush d-flex">
                <li class="list-group-item"><span class="badge texto">${producto.precio.toFixed(2)}€</span> Precio por unidad</li>
            </ul>
            <div class="card-body">
                <a href="#" class="btn btn-outline-secondary addcarrito">Agregar al carrito</a>
            </div>
        </div>
  `;

  return tarjeta;
}

$(document).on('click', function (e) {
  // Verificar si el clic fue dentro del menú o en otro lugar
  if (!$(e.target).closest('#carritoDropdownContainer').length) {
    // Si el clic fue fuera del menú, evitar que se cierre el menú
    $('#carritoDropdown').attr('aria-expanded', 'false').removeClass('show');
  }
});


function filtrarProductos() {
  let filtroCategoria = document.getElementById("filtroCategoria");
  let categoriaSeleccionada = filtroCategoria.value;
  let productosFiltrados;

  if (categoriaSeleccionada === "todos") {
    productosFiltrados = productos;
  } else {
    productosFiltrados = productos.filter(producto => producto.categoria === categoriaSeleccionada);
  }

  actualizarListaProductos(productosFiltrados);
}

function actualizarListaProductos(productosFiltrados) {
  let contenedorProductos = document.getElementById("contenedorProductos");
  contenedorProductos.innerHTML = "";

  productosFiltrados.forEach(producto => {
    let tarjetaProducto = crearTarjetaProducto(producto);
    contenedorProductos.appendChild(tarjetaProducto);
  });
}









$(document).ready(function () {
  var contadorCarrito = 0;
  var totalCarrito = 0;

  $(document).on("click", ".addcarrito", function () {
    var producto = $(this).closest(".card");
    var idProducto = producto.data("id");
    var nombreProducto = producto.find(".card-title").text();
    var precioProducto = parseFloat(producto.find(".badge").text());
    var rutaImagen = producto.find("img").attr("src");

    var elementoExistente = $("#listaCarritoDropdown").find(".dropdown-item").filter(function () {
      return $(this).data("id") === idProducto;
    });

    if (elementoExistente.length > 0) {
      var cantidadExistente = parseInt(elementoExistente.find(".cantidad-carrito").text());
      cantidadExistente++;
      elementoExistente.find(".cantidad-carrito").text(cantidadExistente);
    } else {
      var miniaturaImagen = $("<img>").attr("src", rutaImagen).addClass("miniatura-carrito");
      var cantidadCarrito = $("<span>").addClass("cantidad-carrito").text("1");

      var botonSumar = $("<button>").text("+").addClass("btn-sumar");
      var botonRestar = $("<button>").text("-").addClass("btn-restar");

      var botonEliminar = $("<button>").text("Eliminar").addClass("btn-eliminar");
      botonEliminar.click(function () {
        // Llama a la función eliminarProducto al hacer clic en el botón "Eliminar"
        eliminarProducto(idProducto, precioProducto);
      });

      var nuevoItem = $("<li>")
        .append(miniaturaImagen)
        .append(" " + nombreProducto + " - ")
        .append(cantidadCarrito)
        .append(" x " + precioProducto.toFixed(2) + "€")
        .append(botonSumar)
        .append(botonRestar)
        .append(botonEliminar)
        .addClass("dropdown-item")
        .data("id", idProducto);

      $("#listaCarritoDropdown").append(nuevoItem);
    }

    contadorCarrito++;
    $("#carritoBadge").text(contadorCarrito);

    totalCarrito += precioProducto;
    $("#totalCarrito").text(totalCarrito.toFixed(2) + "€");
  });

  function eliminarProducto(idProducto, precioProducto) {
    var elementoEliminado = $("#listaCarritoDropdown").find(".dropdown-item").filter(function () {
      return $(this).data("id") === idProducto;
    });

    var cantidadExistente = parseInt(elementoEliminado.find(".cantidad-carrito").text());
  
    totalCarrito -= cantidadExistente * precioProducto;

    contadorCarrito -= cantidadExistente;
    $("#carritoBadge").text(contadorCarrito);
    $("#totalCarrito").text(totalCarrito.toFixed(2) + "€");
  
    elementoEliminado.remove();
  }
});

  $(document).on("click", ".btn-sumar", function () {
      var listItem = $(this).closest(".dropdown-item");
      var precioProducto = parseFloat(listItem.text().match(/\d+\.\d+/)[0]);
      var cantidadExistente = parseInt(listItem.find(".cantidad-carrito").text());

      cantidadExistente++;
      listItem.find(".cantidad-carrito").text(cantidadExistente);

      totalCarrito += precioProducto;
      $("#totalCarrito").text(totalCarrito.toFixed(2) + "€");
  });

  $(document).on("click", ".btn-restar", function () {
      var listItem = $(this).closest(".dropdown-item");
      var precioProducto = parseFloat(listItem.text().match(/\d+\.\d+/)[0]);
      var cantidadExistente = parseInt(listItem.find(".cantidad-carrito").text());

      if (cantidadExistente > 1) {
          cantidadExistente--;
          listItem.find(".cantidad-carrito").text(cantidadExistente);

          totalCarrito -= precioProducto;
          $("#totalCarrito").text(totalCarrito.toFixed(2) + "€");
      }
  });







document.addEventListener("DOMContentLoaded", function () {
  var maxCaracteres = 50;
  document.querySelectorAll('.card-text').forEach(function (elemento) {
    var contenido = elemento.textContent.trim();

    if (contenido.length > maxCaracteres) {
      var textoLimitado = contenido.substring(0, maxCaracteres) + "...";
      elemento.textContent = textoLimitado;
    }
  });
});