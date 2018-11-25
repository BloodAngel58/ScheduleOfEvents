import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        events : []
    },
    getters:{
        events: state =>{
            axios.get('https://private-anon-d0457d3d1b-test17563.apiary-mock.com/events')
            .then (response => {
                state.events = response.data
            })
            return state.events
        }
    },
    actions:{
        
    }
})