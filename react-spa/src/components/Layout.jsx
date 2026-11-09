import { NavLink, Outlet } from 'react-router-dom'
import { useCart } from '../context/cartContext.js'
import { useTheme } from '../context/themeContext.js'

const navItems = [
  { to: '/', label: 'Каталог', end: true },
  { to: '/cart', label: 'Корзина' },
  { to: '/login', label: 'Вход' },
  { to: '/dashboard', label: 'Кабинет' },
]

function Layout() {
  const { count } = useCart()
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <NavLink to="/" className="brand">
            TimaStore
          </NavLink>

          <nav className="nav">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {item.label}
                {item.to === '/cart' && count > 0 && <span className="badge">{count}</span>}
              </NavLink>
            ))}
          </nav>

          <button type="button" className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
          </button>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <span>TimaStore</span>

      </footer>
    </div>
  )
}

export default Layout
