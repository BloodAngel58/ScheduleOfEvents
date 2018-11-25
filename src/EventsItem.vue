<template>
    <div class="card">
          <div v-for="event in events">
                <input type="checkbox">
                <span>{{event.date}}</span>
                <strong>{{event.title}}</strong>
                <button class="button">x</button>
          </div>
    </div>
</template>

<script>
    export default {
        computed:{
                events(){
                    //return this.$store.state.products
                    return this.$store.getters.events;
                }
        }
    }
</script>

<style>
    div.card {
        background-color:bisque;
        width: 500px;
        border: 4px solid red;
        border-radius: 10px;
        margin: 10px;
        padding: 10px;
    }
    div.button{
    float: right;
    }
</style>