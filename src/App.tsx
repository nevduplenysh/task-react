import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import ProductInfo from './pages/ProductInfo'
import CreatePage from './pages/CreatePage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="/products" replace />} />
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<ProductInfo/>}/>
      <Route path='/create-product' element={<CreatePage/>}/>
    </Routes>
  )
}

export default App
