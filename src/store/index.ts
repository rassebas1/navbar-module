import { createStore } from "vuex";

const store = createStore({
    state: {
        count: 0,
    },
    getters: {
        getCount:(state) =>{
            return state.count;
        },
    },
    mutations: {
        increment(state) {
            state.count++;
        }
    },
    actions: {
        increment({ commit }) {
            commit("increment");
        }   
    }
});
export default store;