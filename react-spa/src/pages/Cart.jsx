import { Link } from 'react-router-dom'
import { useCart } from '../context/cartContext.js'
import { formatPrice } from '../utils/formatPrice.js'

function Cart() {
  const { items, total, removeItem, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <section className="empty">
        <h1>Корзина пуста</h1>
        <p className="lead">Добавьте товары из каталога, чтобы оформить заказ.</p>
        <Link to="/" className="button">
          Перейти в каталог
        </Link>
      </section>
    )
  }

  return (
    <section>
      <div className="page-head">
        <div>
          <h1>Корзина</h1>
          <p className="lead">Проверьте состав заказа и удалите лишнее.</p>
        </div>
        <button type="button" className="button ghost" onClick={clearCart}>
          Очистить корзину
        </button>
      </div>

      <div className="cart">
        <div className="cart-head">
          <span>Товар</span>
          <span>Цена</span>
          <span />
        </div>

        {items.map((item) => (
          <div className="cart-row" key={item.key}>
            <div className="cart-info">
              <img className="cart-thumb" src={item.image} alt={item.name} />
              <div className="cart-text">
                <span className="cart-name">{item.name}</span>
                <span className="cart-category">{item.category}</span>
              </div>
            </div>
            <span className="price">{formatPrice(item.price)}</span>
            <button type="button" className="button danger" onClick={() => removeItem(item.key)}>
              Удалить
            </button>
          </div>
        ))}

        <div className="cart-total">
          <span>Итого</span>
          <span className="price large">{formatPrice(total)}</span>
        </div>
      </div>

      <div className="actions">
        <Link to="/" className="button ghost">
          Продолжить покупки
        </Link>
        <Link to="/dashboard" className="button">
          Перейти в кабинет
        </Link>
      </div>
    </section>
  )
}

export default Cart
