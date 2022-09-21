/* Métodos generales que vamos a usar en todos lados */
class Storage {
    static getLocalStorage(key) {
        return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
    }

    static setLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static getProductoById(id) {
        return cargaproductos.Productos.find(producto => producto.id == id);
    }
}

/* Acá tendremos los datos del carrito */
class Carrito {
    constructor(productos = []) {
        this.productos = productos;
    }

    getCarrito() {
        return this.productos;
    }

    getProductoById(id) {
        return this.productos.find(item => item.producto.id == id);
    }

    addProducto(producto) {
        //Busco si el producto ya estaba
        const prod = this.buscarProducto(producto.id);
        if (prod) {
            //Si existía, le sumo 1 a la cantidad
            prod.cantidad++;
        } else {
            //Si no está, creo un objeto con el producto y la cantidad en 1
            this.productos.push({ cantidad: 1, producto: producto });
        }
    }

    deleteProducto(id) {
        this.productos = this.productos.filter(item => item.producto.id != id);
    }

    incProducto(id) {
        const prod = this.buscarProducto(id);
        prod.cantidad++;
    }

    decProducto(id) {
        //No quiero que se borre el producto si bajara de 1.
        const prod = this.buscarProducto(id);
        if (prod.cantidad > 1) {
            prod.cantidad--;
        }
    }
}



