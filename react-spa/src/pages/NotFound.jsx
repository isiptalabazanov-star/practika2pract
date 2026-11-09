import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="empty">
      <h1>Страница не найдена</h1>
      <p className="lead">Проверьте адрес или вернитесь на главную страницу.</p>
      <Link to="/" className="button">
        На главную
      </Link>
    </section>
  )
}

export default NotFound
