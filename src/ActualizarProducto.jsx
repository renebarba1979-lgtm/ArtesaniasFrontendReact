import React, { useState } from 'react';

// Constante API_URL para llamadas al backend
// Artefacto relacionado: Informe técnico de plan de trabajo
const API_URL = "http://localhost:9091/productos";

function ActualizarProducto({ producto, onProductoActualizado }) {
  // Estados locales inicializados con los valores del producto seleccionado
  // Relacionado con el diagrama de clases: atributos nombre y precio
  const [nombre, setNombre] = useState(producto.nombre);
  const [precio, setPrecio] = useState(producto.precio);

  // Función que maneja la actualización
  // Caso de uso: "Actualizar producto"
  const handleUpdate = (e) => {
    e.preventDefault();

    // Validaciones básicas según estándares de codificación
    if (!nombre) {
      alert('El nombre es obligatorio');
      return;
    }
    if (precio <= 0) {
      alert('El precio debe ser mayor a cero');
      return;
    }

    // Llamada al backend con método PUT
    // Historia de usuario: "Como administrador quiero actualizar un producto para mantener la información correcta"
    fetch(`${API_URL}/${producto.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, precio })
    })
    .then(res => {
      if (!res.ok) throw new Error('Error al actualizar producto');
      return res.json();
    })
    .then(() => {
      alert('Producto actualizado correctamente');
      if (onProductoActualizado) onProductoActualizado(); // refrescar lista
    })
    .catch(err => console.error('Error al actualizar producto:', err));
  };

  // Formulario de actualización según prototipo y caso de uso
  return (
    <form onSubmit={handleUpdate} style={{ marginTop: '10px' }}>
      <h2>Actualizar Producto</h2>
      {/* Campo de texto para nombre del producto */}
      <input 
        type="text" 
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)} 
      />
      {/* Campo numérico para precio del producto */}
      <input 
        type="number" 
        value={precio} 
        onChange={(e) => setPrecio(e.target.value)} 
      />
      <button type="submit">Actualizar</button>
    </form>
  );
}

export default ActualizarProducto;
