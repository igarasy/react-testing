const faustoLines = [
  'Ta pegando fogo bichoww!',
  'O loko meo',
  'Tanto no pessoal quanto no profissional',
  'Esse fera aí meo',
]

export async function faustoSearch() {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
        resolve(faustoLines)
    }, 500)
  })
}