export async function getData() {
  const res = await fetch('https://api-robust.vercel.app/differential')

  if (!res.ok) {
    throw new Error('Falha na requisição da API.')
  }

  return res.json()
}
