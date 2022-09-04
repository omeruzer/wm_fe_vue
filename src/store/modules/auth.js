import axios from 'axios';
const state = {
    user: null,
    loggedIn: false,
};

const getters = {

};

const mutations = {
    setUser(state, data) {
        state.user = data
        state.loggedIn = true
        localStorage.setItem("loggedIn", true)
        localStorage.setItem("user", JSON.stringify(state.user))
    }
};

const actions = {
    login(context, data) {
        axios.post("http://localhost:8000/api/login", data)
            .then((result) => {
                context.dispatch("user")
                localStorage.setItem("token", result.data.token)

            }).catch((err) => {

            });
    },
    user(context) {
        axios.get("http://localhost:8000/api/user")
            .then((result) => {
                context.commit("setUser", result.data)

            }).catch((err) => {

            });
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};