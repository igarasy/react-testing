import { useFalaFausto } from './useFalaFausto'

const FausTop = () => {
  const falaFausto = useFalaFausto()

  return (
    <div className="wrapper">
      <button
        className="button"
        disabled={!!falaFausto.words}
        onClick={falaFausto.search}
      >
        Fala Fausto!
      </button>
      <p className="loading" aria-label="loading">
        {falaFausto.loading && 'Esperando pegar fogo bixo'}
      </p>
      <ul>
        {falaFausto.words?.map((word) => (
          <li key={Math.random()}>{word}</li>
        ))}
      </ul>
    </div>
  )
}

export default FausTop
