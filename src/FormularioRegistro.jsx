import React, { useState } from 'react';

// Constante API_URL para llamadas al backend
// Artefacto relacionado: Informe técnico de plan de trabajo
const API_URL = "http://localhost:9091/productos";

function FormularioRegistro({ onProductoGuardado }) {
  // Estados locales para capturar datos del formulario
  // Relacionado con el diagrama de clases: atributos nombre y precio
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');

  // Función que maneja el envío del formulario
  // Caso de uso: "Registrar producto"
  const handleSubmit = (e) => {
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

    // Llamada al backend con método POST
    // Historia de usuario: "Como administrador quiero registrar un producto para mantener la lista actualizada"
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, precio })
    })
    .then(res => {
      if (!res.ok) throw new Error('Error en la petición');
      return res.json();
    })
    .then(() => {
      alert('Producto registrado correctamente');
      // Limpiar campos del formulario
      setNombre('');
      setPrecio('');
      // Refrescar lista de productos
      if (onProductoGuardado) onProductoGuardado();
    })
    .catch(err => console.error('Error al registrar producto:', err));
  };

  // Formulario de registro según prototipo de interfaz
  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Producto</h2>
      {/* Campo de texto para nombre del producto */}
      <input 
        type="text" 
        placeholder="Nombre del producto" 
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)} 
      />
      {/* Campo numérico para precio del producto */}
      <input 
        type="number" 
        placeholder="Precio" 
        value={precio} 
        onChange={(e) => setPrecio(e.target.value)} 
      />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default FormularioRegistro;
