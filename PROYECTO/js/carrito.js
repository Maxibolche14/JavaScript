var listaCarrito = []
let listadoCarrito = document.getElementById("listadoCarrito");
let total = document.getElementById("total");
let Subtotal = document.getElementById("Subtotal");


function cargoProductos() {

    listaCarrito = Storage.getLocalStorage('carrito');
    console.log(listaCarrito);
    generar_card(listaCarrito);
    calculoTotal(listaCarrito);
    console.log(total);

}

window.onload = cargoProductos();

//Recorro y Productos
function generar_card(listaCarrito) {

    listaCarrito.forEach(product => {
        let new_div = document.createElement("div");
        new_div.className = "card_producto col-xs-12 col-sm-12 col-md-2 col-lg-3";

        let div_container = document.createElement("div");
        let img_producto = document.createElement("img");

        img_producto.src = product.imagen;

        new_div.appendChild(img_producto);

        let new_Nombre = document.createElement("h4");
        new_Nombre.textContent = product.ProductoNombre;

        let new_Marca = document.createElement("p");
        new_Marca.textContent = "Marca: " + product.ProductoMarca;

        let new_Precio = document.createElement("p");
        new_Precio.textContent = "Precio: $" + product.PrecioProducto;


        div_container.appendChild(new_Nombre);
        div_container.appendChild(new_Marca);
        div_container.appendChild(new_Precio);
        new_div.appendChild(div_container);
        listadoCarrito.appendChild(new_div);

    });

}

function calculoTotal(listaCarrito) {
    let valortotal = 0;

    listaCarrito.forEach(product => {

        valortotal += parseInt(product.PrecioProducto);

    });

    let div_Total = document.createElement('div');
    div_Total.textContent = "$ " + valortotal + " Impuestos Inc.";
    total.appendChild(div_Total);

    calculoSubTotal(valortotal);
}


function calculoSubTotal(valortotal) {
    let Subtotal = 0;

    Subtotal = parseInt(valortotal) / 0.22;

}



