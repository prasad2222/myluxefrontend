import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FavoritesProvider } from './context/FavoritesContext';
import { CartProvider } from './context/FavoritesContext';
import { AddressProvider } from './context/FavoritesContext';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <CartProvider>
          <AddressProvider>
            <App />
          </AddressProvider>
        </CartProvider>
      </FavoritesProvider>
    </BrowserRouter>
  </StrictMode>,
)

