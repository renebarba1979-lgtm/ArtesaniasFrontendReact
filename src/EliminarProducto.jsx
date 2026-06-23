import React from 'react';

// Constante API_URL para llamadas al backend
// Artefacto relacionado: Informe técnico de plan de trabajo
const API_URL = "http://localhost:9091/productos";

function EliminarProducto({ productoId, onProductoEliminado }) {
  // Función que maneja la eliminación
  // Caso de uso: "Eliminar producto"
  const handleDelete = () => {
    if (!productoId) {
      alert("No hay producto seleccionado");
      return;
    }

    // Llamada al backend con método DELETE
    // Historia de usuario: "Como administrador quiero eliminar un producto para mantener la lista actualizada"
    fetch(`${API_URL}/${productoId}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (!res.ok) throw new Error("Error al eliminar producto");
      alert("Producto eliminado correctamente");
      if (onProductoEliminado) onProductoEliminado(); // refrescar lista
    })
    .catch(err => console.error("Error al eliminar producto:", err));
  };

  // Botón de eliminación según prototipo de interfaz
  return (
    <button 
      onClick={handleDelete} 
      style={{ marginTop: '10px', backgroundColor: 'red', color: 'white' }}
    >
      Eliminar Producto
    </button>
  );
}

export default EliminarProducto;
