var listaCarrito = []
function cargoProductos() {

   listaCarrito = Storage.getLocalStorage('carrito');
   console.log(listaCarrito);
}

window.onload = cargoProductos();