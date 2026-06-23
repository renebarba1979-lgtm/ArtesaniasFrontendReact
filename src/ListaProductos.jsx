import React, { useEffect, useState } from 'react';

// Constante global para la URL del backend
// Artefacto relacionado: Informe técnico de plan de trabajo
const API_URL = "http://localhost:9091/productos";

function ListaProductos({ onSelect }) {
  // Estado local para almacenar la lista de productos
  // Relacionado con el diagrama de clases: entidad Producto
  const [productos, setProductos] = useState([]);

  // useEffect: se ejecuta al montar el componente
  // Caso de uso: "Consultar productos"
  useEffect(() => {
    fetch(API_URL)
      .then(res => {
        if (!res.ok) throw new Error("Error al cargar productos");
        return res.json();
      })
      .then(data => setProductos(data))
      .catch(err => console.error("Error al listar productos:", err));
  }, []);

  // Renderizado de la tabla según prototipo de interfaz
  return (
    <div>
      <h2>Lista de Productos</h2>
      {/* Tabla que muestra los productos según el diagrama de clases */}
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>{p.precio}</td>
              {/* Botón que activa el caso de uso "Seleccionar producto" */}
              <td>
                <button onClick={() => onSelect(p)}>Seleccionar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaProductos;
