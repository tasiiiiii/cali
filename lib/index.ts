export function url(path = '') {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://cali-ochre.vercel.app'
      : 'http://localhost:3000'

  return new URL(path, baseUrl)
}
