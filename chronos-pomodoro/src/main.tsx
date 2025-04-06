import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//Para importar o tsx 
//nesse modo de import é possível usar qualquer nome
import {App} from './App'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
