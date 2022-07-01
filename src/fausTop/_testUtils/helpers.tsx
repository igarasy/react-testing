import { render, screen } from '@testing-library/react'
import FausTop from '..'

export default function mountComponent() {
  render(<FausTop />)
  const button = screen.getByRole('button', { name: /Fala Fausto!/i })
  const loading = screen.getByLabelText('loading')
  const words = screen.getByRole('list')

  return { button, loading, words }
}
