let lista = document.getElementById("lista");

function cargoProductos() {

   fetch('./data/cargaproductos.json')
        .then((res) => res.json())
        .then((productos) => {
            console.log(productos);
            productos.Productos.forEach(producto => {
                generar_card(producto)
            });
        })
}

window.onload = cargoProductos();

function generar_card(producto) {

    let new_div = document.createElement("div");
    new_div.className = "card_producto col-xs-12 col-sm-12 col-md-2 col-lg-2";

    let div_container = document.createElement("div");
    let img_producto = document.createElement("img");

    img_producto.src = producto.imagen;

    new_div.appendChild(img_producto);

    let new_Nombre = document.createElement("h4");
    new_Nombre.textContent = producto.ProductoNombre;

    let new_Marca = document.createElement("p");
    new_Marca.textContent ="Marca: " + producto.ProductoMarca;

    let new_Precio = document.createElement("p");
    new_Precio.textContent = "Precio: $" + producto.PrecioProducto;

    div_container.appendChild(new_Nombre);
    div_container.appendChild(new_Marca);
    div_container.appendChild(new_Precio);
    new_div.appendChild(div_container);

    lista.appendChild(new_div);
 
}
