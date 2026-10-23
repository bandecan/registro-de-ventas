import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Pedido} from './pedido.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Pedido/>
  </StrictMode>,
)
