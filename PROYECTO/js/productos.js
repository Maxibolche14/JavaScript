let Array_Producto = new Array();

let avisos = document.getElementById("avisos");
let lista = document.getElementById("lista");
let btn_agregar = document.getElementById("btn_agregar");



btn_agregar.addEventListener("click", () => {

    if (agregar_nuevo_producto()) {

        addProducto();
    }

});

function agregar_nuevo_producto() {

    avisos.innerHTML = "";

    let productonombre = document.getElementById("input_producto").value;
    let ProdMarca = document.getElementById("ProductoMarca").value;
    let ProdPrecio = document.getElementById("ProductoPrecio").value;

    let arreglo_mensajes = new Array();

    if (!productonombre) {
        arreglo_mensajes.push("Ingrese un nombre");
    }
    if (!ProdMarca) {
        arreglo_mensajes.push("Ingrese una Marca");
    }
    if (!ProdPrecio || ProdPrecio <= 0) {
        arreglo_mensajes.push("Ingrese un precio");
    }

    if (arreglo_mensajes.length > 0) {

        let listado = document.createElement("ul");
        listado.textContent = "No es posible cargar datos";

        arreglo_mensajes.forEach(mensaje => {
            listado.appendChild(crear_li(mensaje));
        });

        avisos.appendChild(listado);
        return false;

    } else {
        return true;
    }

}

function crear_li(mensaje) {
    let li = document.createElement("li");
    li.textContent = mensaje;
    return li;
}

function addProducto() {

    let productonombre = document.getElementById("input_producto").value;
    let ProdMarca = document.getElementById("ProductoMarca").value;
    let ProdPrecio = document.getElementById("ProductoPrecio").value;

    let Prod = new Producto(productonombre, ProdMarca, ProdPrecio);

    Array_Producto.push(Prod);

    generar_card(Prod);

    document.getElementById("input_producto").value = "";
    document.getElementById("ProductoMarca").value = "";
    document.getElementById("ProductoPrecio").value = "";
}

function generar_card(Prod) {

    let new_div = document.createElement("div");
    new_div.className = "card_producto col-xs-12 col-sm-12 col-md-2 col-lg-2";

    let div_container = document.createElement("div");
    let img_producto = document.createElement("img");

    img_producto.src = "/Distribuidora/Bootstrap/Imagenes/nodisponible.png";
    img_producto.className = "nodisponible"

    new_div.appendChild(img_producto);

    let new_Nombre = document.createElement("h2");
    new_Nombre.textContent = Prod.ProductoNombre;

    let new_Marca = document.createElement("p");
    new_Marca.textContent ="Marca: " + Prod.ProductoMarca;

    let new_Precio = document.createElement("p");
    new_Precio.textContent = "Precio: $" + Prod.PrecioProducto;

    div_container.appendChild(new_Nombre);
    div_container.appendChild(new_Marca);
    div_container.appendChild(new_Precio);
    new_div.appendChild(div_container);

    lista.appendChild(new_div);
 
}


deleteProductos.addEventListener("click", () => {

    lista.innerHTML = "";

});










