import { Link } from 'react-router-dom'
import { useCart } from '../context/cartContext.js'
import { formatPrice } from '../utils/formatPrice.js'

function Dashboard() {
  const { count, total } = useCart()

  return (
    <section>
      <div className="page-head">
        <div>
          <h1>Личный кабинет</h1>
          <p className="lead">Вы успешно вошли в личный кабинет.</p>
        </div>
      </div>

      <div className="stats">
        <div className="stat">
          <span className="stat-label">Товаров в корзине</span>
          <span className="stat-value">{count}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Сумма заказа</span>
          <span className="stat-value">{formatPrice(total)}</span>
        </div>
      </div>

      <div className="actions">
        <Link to="/cart" className="button">
          Открыть корзину
        </Link>
        <Link to="/" className="button ghost">
          Перейти в каталог
        </Link>
      </div>
    </section>
  )
}

export default Dashboard
