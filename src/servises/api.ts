export async function getData() {
  const res = await fetch(
    'https://api-robust-andersonfsilva3000.vercel.app/differential'
  )

  if (!res.ok) {
    throw new Error('Falha na requisição da API.')
  }

  return res.json()
}
