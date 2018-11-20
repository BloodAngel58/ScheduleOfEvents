import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)
const Url='https://private-anon-d0457d3d1b-test17563.apiary-mock.com/events'
export default new Vuex.Store({
    state: {
        events : []
    },
    getters:{
        getEvents: state => state.events
    },
    actions: {
        LoadEvent: async (context, payload) => {  //другой вариан реализации(но эт не точно)
            let {date} = await Axios.get(Url);
            context.commit('LoadEvent', date);
            /*LoadEvent(context, payload){
              Axios.get(Url,(payload)=>{context.commit('LoadEvent', date);})
          }*/
        }
    },
    mutations : {
        LoadEvent(state, payload){
            state.events = payload
        }
    }
})
