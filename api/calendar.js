export const calendar = (obj) => $nuxt.$axios.post('/api/calendar', obj)
export const fetchData = () => $nuxt.$axios.get('/api/fetchData')