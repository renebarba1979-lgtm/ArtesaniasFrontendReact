import React, { useState } from 'react';
import ListaProductos from './ListaProductos';
import FormularioRegistro from './FormularioRegistro';
import DetalleProducto from './DetalleProducto';
import ActualizarProducto from './ActualizarProducto';
import EliminarProducto from './EliminarProducto';

function App() {
  const [selectedProducto, setSelectedProducto] = useState(null);
  const [refresh, setRefresh] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Artesanías Web Spring</h1>
      
      {/* Lista de productos */}
      <ListaProductos key={refresh} onSelect={setSelectedProducto} />
      
      {/* Formulario de registro */}
      <FormularioRegistro onProductoGuardado={() => setRefresh(!refresh)} />
      
      {/* Sección de detalle, actualización y eliminación */}
      {selectedProducto && (
        <>
          <DetalleProducto producto={selectedProducto} />
          <ActualizarProducto 
            producto={selectedProducto} 
            onProductoActualizado={() => setRefresh(!refresh)} 
          />
          <EliminarProducto 
            productoId={selectedProducto.id} 
            onProductoEliminado={() => {
              setSelectedProducto(null);
              setRefresh(!refresh);
            }} 
          />
        </>
      )}
    </div>
  );
}

export default App;
