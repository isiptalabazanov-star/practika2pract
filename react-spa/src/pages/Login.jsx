import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!form.email.trim() || !form.password.trim()) {
      setError('Заполните электронную почту и пароль')
      return
    }

    setError('')
    const isAuth = true

    if (isAuth) {
      navigate('/dashboard')
    }
  }

  return (
    <section className="auth">
      <div className="auth-card">
        <h1>Вход</h1>
        <p className="lead">Введите любые данные, чтобы перейти в кабинет.</p>

        <form className="form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Электронная почта</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="user@example.com"
            />
          </label>

          <label className="field">
            <span>Пароль</span>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Введите пароль"
            />
          </label>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="button">
            Войти
          </button>
        </form>
      </div>
    </section>
  )
}

export default Login
