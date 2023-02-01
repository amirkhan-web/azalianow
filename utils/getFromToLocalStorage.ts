export const getFromToLocalStorage = () => {
  const data = typeof window !== 'undefined' && localStorage.getItem('favourite')
  return data ? JSON.parse(data) : []
}