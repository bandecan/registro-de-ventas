export interface Pedido {
  nombre?: string;
  producto: string;
  cantidad: string;
  estado: string;
}

export type DiccionarioPedido = Record<string, Pedido>;
