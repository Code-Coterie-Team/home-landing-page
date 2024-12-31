import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClientProvider ,QueryClient} from 'react-query'
import { BrowserRouter } from "react-router";
const queryClinet=new QueryClient({
  defaultOptions:{
    queries:{
      retry:4,
    },
  },
});
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <QueryClientProvider  client={queryClinet}>
        <App />
    </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
