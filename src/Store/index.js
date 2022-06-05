import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            theme: null,
        }
    },
    mutations: {
    },
    actions: {
        init: ({commit}) => {
            console.log('init');
        },
    },
    getters: {
    },
    modules: {}
})


export default store