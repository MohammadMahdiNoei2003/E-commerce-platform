import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter} from 'react-router-dom'
import { Provider } from "@/components/ui/provider"
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
    {/* <Provider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </Provider> */}
    </ChakraProvider>
  </StrictMode>,
)
