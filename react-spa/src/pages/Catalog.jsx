import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { useCart } from '../context/cartContext.js'
import { products } from '../data/products.js'

function Catalog() {
  const { addItem } = useCart()
  const navigate = useNavigate()
  const [lastAdded, setLastAdded] = useState(null)

  const handleAdd = (product) => {
    addItem(product)
    setLastAdded(product)
  }

  return (
    <section>
      <div className="page-head">
        <div>
          <h1>Каталог товаров</h1>
          <p className="lead">Выберите товар и добавьте его в корзину.</p>
        </div>
      </div>

      {lastAdded && (
        <div className="notice">
          <span>«{lastAdded.name}» добавлен в корзину.</span>
          <button type="button" className="button" onClick={() => navigate('/cart')}>
            Перейти в корзину
          </button>
        </div>
      )}

      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={handleAdd} />
        ))}
      </div>
    </section>
  )
}

export default Catalog
