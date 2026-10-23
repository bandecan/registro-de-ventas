import type { DiccionarioPedido } from './datos';

interface FuncionProps {
  diccionario: DiccionarioPedido;
}

export function Funcion({ diccionario }: FuncionProps) {
  const registros = Object.entries(diccionario);

  if (registros.length === 0) {
    return <p>No hay pedidos registrados todavía.</p>;
  }

  return (
    <div id="adicion">
      <h2>Lista de Pedidos Registrados</h2>
      <table id="borde" border={1}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody >
          {registros.map(([nombre, pedido]) => (
            <tr key={nombre}>
              <td>{nombre}</td>
              <td>{pedido.producto}</td>
              <td>{pedido.cantidad}</td>
              <td>{pedido.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
