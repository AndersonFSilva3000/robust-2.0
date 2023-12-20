type ApiEndPoint = 'differential' | 'plans'

export async function getData(endpoint: ApiEndPoint) {
  const baseUrl = `https://api-robust.vercel.app/${endpoint}`
  const res = await fetch(baseUrl, {
    next: { revalidate: 360000 }
  })

  if (!res.ok) {
    throw new Error('Falha na requisição da API.')
  }

  return res.json()
}
