import { Link, useNavigate, useParams } from 'react-router-dom'
import { useCart } from '../context/cartContext.js'
import { products } from '../data/products.js'
import { formatPrice } from '../utils/formatPrice.js'

function ProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const product = products.find((item) => item.id === id)

  if (!product) {
    return (
      <section className="empty">
        <h1>Товар не найден</h1>
        <p className="lead">Возможно, ссылка устарела или товар был удалён.</p>
        <Link to="/" className="button">
          Вернуться в каталог
        </Link>
      </section>
    )
  }

  const handleAdd = () => {
    addItem(product)
    navigate('/cart')
  }

  return (
    <section className="product">
      <div className="product-media">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <span className="card-category">{product.category}</span>
        <h1>{product.name}</h1>
        <p className="lead">{product.description}</p>

        <ul className="specs">
          {product.specs.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        </ul>

        <div className="product-bottom">
          <span className="price large">{formatPrice(product.price)}</span>
          <button type="button" className="button" onClick={handleAdd}>
            В корзину
          </button>
        </div>

        <Link to="/" className="back-link">
          Назад в каталог
        </Link>
      </div>
    </section>
  )
}

export default ProductPage
