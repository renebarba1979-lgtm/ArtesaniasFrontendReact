import React from 'react';

// Constante API_URL (no se usa aquí, pero se mantiene por consistencia)
// Artefacto relacionado: Informe técnico de plan de trabajo
const API_URL = "http://localhost:9091/productos";

function DetalleProducto({ producto }) {
  // Si no hay producto seleccionado, mostramos un mensaje
  // Caso de uso: "Ver detalle de producto"
  if (!producto) {
    return <p>Selecciona un producto para ver detalles</p>;
  }

  // Formatear precio en pesos colombianos (COP)
  // Relacionado con el diagrama de clases: atributo precio
  const precioFormateado = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(producto.precio);

  // Renderizado del detalle según prototipo de interfaz
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
      <h2>Detalle del Producto</h2>
      {/* Mostrar atributos según el diagrama de clases */}
      <p><strong>ID:</strong> {producto.id}</p>
      <p><strong>Nombre:</strong> {producto.nombre}</p>
      <p><strong>Precio:</strong> {precioFormateado}</p>
    </div>
  );
}

export default DetalleProducto;


