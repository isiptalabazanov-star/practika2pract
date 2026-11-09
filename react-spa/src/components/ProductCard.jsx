import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/formatPrice.js'

function ProductCard({ product, onAdd }) {
  return (
    <article className="card">
      <Link to={`/product/${product.id}`} className="card-media">
        <img src={product.image} alt={product.name} loading="lazy" />
      </Link>

      <span className="card-category">{product.category}</span>

      <h2 className="card-title">
        <Link to={`/product/${product.id}`}>{product.name}</Link>
      </h2>

      <p className="card-text">{product.description}</p>

      <div className="card-bottom">
        <span className="price">{formatPrice(product.price)}</span>
        <button type="button" className="button" onClick={() => onAdd(product)}>
          В корзину
        </button>
      </div>
    </article>
  )
}

export default ProductCard
