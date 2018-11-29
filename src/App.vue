<template>
<div>
  <my-header></my-header>
  <form>
    <EventsAdd class="EA" v-show="visible"></EventsAdd>
    <label class="adPos" v-on:click="visible=!visible">Добавить позицию</label>
  <div class="container">    
    <EventsItem></EventsItem><DataItem ></DataItem>
  </div>
  </form>
</div>
</template>

<script>
import EventsAdd from './EventsAdd.vue'
import EventsItem from './EventsItem.vue'
import DataItem from './DataItem.vue'
import myHeader from './Header.vue'

export default {
  data(){
    return { visible: false   }
  },
  components: {
    myHeader,
    EventsAdd,
    EventsItem,
    DataItem
  }
}
</script>

<style>
  .container{
    display:flex;
    align-items:flex-start;
    margin-top: 200px;
  }
  .EA{
  float: right;
  }
  .adPos{
    border: 4px solid green;
        border-radius: 10px;
        margin: 10px;
    margin-left: 20px;
    margin-top: 20px;
    font-size: 20px;
    padding: 15px;
  }
</style>
