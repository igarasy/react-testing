import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import mountComponent from './_testUtils/helpers'

describe('Testar o fala fausto', () => {
  it('Deve começar vazio', () => {
    const component = mountComponent()
    expect(component.button).toBeInTheDocument()
    expect(component.loading).toHaveTextContent('')
    expect(component.words).toHaveTextContent('')
  })
  it('Quando buscar deve indicar que está carregando com o texto "esperando pegar fogo bixo"', () => {
    const component = mountComponent()
    userEvent.click(component.button)
    expect(component.loading).toHaveTextContent(/esperando pegar fogo bixo/i)
  })

  it('Quando carregar, exibir as falas do faustao e desaparecer texto do loading', async () => {
    const component = mountComponent()
    userEvent.click(component.button)
    await screen.findByText('Ta pegando fogo bichoww!')
    await screen.findByText('O loko meo')
    await screen.findByText('Tanto no pessoal quanto no profissional')
    await screen.findByText('Esse fera aí meo')
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(4)
    expect(items[0]).toHaveTextContent('Ta pegando fogo bichoww!')
    await waitFor(() => {
      expect(component.loading).toHaveTextContent('')
    })
  })
})
