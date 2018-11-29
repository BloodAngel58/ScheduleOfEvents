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
            axios.get('https://private-anon-072d7e001e-test17563.apiary-mock.com/events')
            .then (response => {
                state.events = response.data
            })
            return state.events
        }
    },
    actions:{
        ADD_TODO: async (context, events) => {
         axios.post('https://private-anon-7970744f05-test17563.apiary-mock.com/events', events)
                context.commit('ADD_TODO', events)//не работает
          },
          REMOVE_ITEM: async (state,events) => {
            axios.delete('https://private-anon-7a8e0cfd30-test17563.apiary-mock.com/events/1',state.events)
            //не работает
          }
    },
    mutations:{
        ADD_TODO: (state, payload) => {
          state.events.$push(payload);//не работает
        },
        REMOVE_ITEM (state, payload) {
            state.events.remove(payload)//не работает
          }
      }
})