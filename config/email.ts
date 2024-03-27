export const emailConfig = {
  from: 'hi@cali-ochre.vercel.app',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://cali-ochre.vercel.app`
      : 'http://localhost:3000',
}
