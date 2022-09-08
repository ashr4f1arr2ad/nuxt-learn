export const addCard = (obj) => $nuxt.$axios.post('/api/tokens', obj)
export const getCard = () => $nuxt.$axios.get('/api/card')