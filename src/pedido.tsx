import { useState } from 'react';
import './stiles.css';
import type { DiccionarioPedido } from './datos';
import { Funcion } from './funcion';

export function Pedido() {
  const [diccionario, setDiccionario] = useState<DiccionarioPedido>({});

  const guardar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const datos = new FormData(e.currentTarget);
    const nombre = (datos.get('nombre') || datos.get('Nombre')) as string;

    const nuevoPedido = {
      nombre,
      producto: (datos.get('producto') || datos.get('opcion')) as string,
      cantidad: (datos.get('cantidad') || datos.get('cantidaad')) as string,
      estado: (datos.get('estado') as string) || 'Pendiente',
    };

    setDiccionario(prev => ({
      ...prev,
      [nombre]: nuevoPedido,
    }));

    e.currentTarget.reset();
    alert('¡Pedido registrado correctamente!');
  };

  return (
    <div>
      <form onSubmit={guardar}>
        <h1 id="titulo">Registro de Pedido</h1>

        <input id="nombre" name="nombre" placeholder="Nombre" required />
        <br />

        <select id="opcion" name="producto">
          <option value="Impresora">Impresora</option>
          <option value="Escoba">Escoba</option>
          <option value="Trapero">Trapero</option>
          <option value="Papel bond">Papel bond</option>
        </select>
        <br />

        <input id="cantidad" name="cantidad" placeholder="Cantidad" required />
        <br />

        <select id="estado" name="estado">
          <option value="Pendiente">Pendiente</option>
          <option value="Entregado">Entregado</option>
        </select>
        <br />

        <button id="enviar" type="submit">Enviar</button>
        <br />
      </form>


      <Funcion diccionario={diccionario} />
    </div>
  );
}
