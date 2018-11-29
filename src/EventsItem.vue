<template>
    <div class="card">
          <div class="li" v-for="(event,index) in events" :key="index">
                <input type="checkbox" class="col1"  v-model="event.index">
                <span class="col2">{{event.date | formatDate}}</span>
                <strong class="col3">{{event.title}}</strong>
                <button class="col4 button" @click="eventDEL(index)">x</button>
          </div>
    </div>
</template>

<script>
import moment from 'moment'
    export default {
        filters:{
            formatDate(value) { 
                if (value) {
            return moment(String(value)).subtract("hours", 3).format("HH:mm")
                }
            }
        },
        computed:{
                events(){
                    //return this.$store.state.products
                    return this.$store.getters.events;
                }
        },
        methods:{
            eventDEL(){
                    this.$store.dispatch('REMOVE_ITEM');
                }
        }
    }
    
</script>


<style>
    div.card {
        background-color:bisque;
        width: 550px;
        border: 4px solid red;
        border-radius: 10px;
        margin: 10px;
        padding: 10px;
    }
    div.button{
    float: right;
    }
    div.li{
        border-radius: 15px;
        background-color:blueviolet;
        margin: 10px;
        padding: 10px;
        font-style: normal;
    }
    .col1{
        width: 20px;
    }
    .col2{
        margin-left: 10px;
        margin-right:20px; 
        font-size: 22px;

    }
    .col3{
        width: 300px;
    }
    .col4{
        float: right;
        text-align:center;
        width: 30px;
        height: 30;
        background-color: Transparent;
        border: none;
        outline:none;
        font-size: 20px;
    }
</style>