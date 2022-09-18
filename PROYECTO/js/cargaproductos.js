
function cargarDatos(){
    let producto = new Producto();

    producto.ProductoNombre = "Axe Apollo";
    producto.ProductoMarca = "Axe";
    producto.PrecioProducto = "120";

    generar_card(producto)

    producto.ProductoNombre = "Dove Exrteme";
    producto.ProductoMarca = "Dove";
    producto.PrecioProducto = "120";

    generar_card(producto)

    producto.ProductoNombre = "Dove Invisible";
    producto.ProductoMarca = "Dove";
    producto.PrecioProducto = "130";

    generar_card(producto)
}