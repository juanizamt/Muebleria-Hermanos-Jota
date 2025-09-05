
import { productos } from './productos.js'; //se importa arreglo de productos


function cargarDetallesProducto() {
    // 1. Obtener el ID del producto de la URL
    const params = new URLSearchParams(window.location.search);
    const productoId = params.get('id');

    if (!productoId) {
        // Manejar el caso de que no haya un ID en la URL
        console.error('No se encontró un ID de producto en la URL.');
        return;
    }

    // 2. Encontrar el producto en el arreglo
    const productoSeleccionado = productos.find(p => p.id === productoId);

    if (!productoSeleccionado) {
        // Manejar el caso de que el ID no corresponda a un producto
        console.error('Producto no encontrado.');
        return;
    }

    // 3. Llenar la plantilla HTML con la información del producto
    document.getElementById('producto-img').src = productoSeleccionado.imagen;
    document.getElementById('producto-img').alt = productoSeleccionado.alt;
    document.getElementById('producto-nombre').textContent = productoSeleccionado.nombre;
    document.getElementById('producto-descripcion').textContent = productoSeleccionado.descripcion;
    document.getElementById('producto-precio').textContent = `$${productoSeleccionado.precio} USD`;
}

// Llama a la función al cargar la página de detalles
window.addEventListener('load', cargarDetallesProducto);