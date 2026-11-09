import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Cart from './pages/Cart.jsx'
import Catalog from './pages/Catalog.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import NotFound from './pages/NotFound.jsx'
import ProductPage from './pages/ProductPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
