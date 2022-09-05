const initialState = {
    count: 0,
    data: []
};

//State
export const state = () => ({
    ...initialState,
})

//Mutations / Setters
// State should be mutated in mutations
export const mutations = {
    setCount: (state, data) => (state.count += data), //setters -> set state
    setData: (state, data) => (state.data = data), //setters -> set state
}

//Actions
// API request should be in an action
export const actions = {
    counter({commit, state}, payload) {
        commit('setCount', 1)
    },
    async fetchUser({commit, state}, payload) {
        const res = await this.$axios.get('https://jsonplaceholder.typicode.com/users');
        commit('setData', res.data);
    }
};

//Getters
// Getters should be used to deliver the state
export const getters = {
    getCounter: (state) => state.count, //getters -> get state
    getUsers: (state) => state.data, //getters -> get state
};