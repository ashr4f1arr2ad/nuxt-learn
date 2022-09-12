import { calendar, fetchData } from '@/api/calendar.js';

const initialState = {
    data: [],
    event: []
};

//State
export const state = () => ({
    ...initialState,
})

//Mutations / Setters
// State should be mutated in mutations
export const mutations = {
    setEventData: (state, data) => (state.data = data), //setters -> set state
    getEventData: (state, data) => (state.event = data), //setters -> set state
}

//Actions
// API request should be in an action
export const actions = {
    async setEvent({commit, state}, payload) {
        await calendar(payload).then((res) => {
            // this.getFetchData();
        })
    },
    async getFetchData({commit, state}, payload) {
        await fetchData().then((res) => {
            commit('setEventData', res.data);
        })
    },

    getEventData({commit, state}, payload) {
        commit('getEventData', payload);
    }
};

//Getters
// Getters should be used to deliver the state
export const getters = {
    getEvent: (state) => state.data, //getters -> get state
    getEventData: (state) => state.event, //getters -> get state
};