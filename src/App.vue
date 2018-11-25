<template>
<div>
  <my-header></my-header>
  <form>
    <button type="submit">Добавить</button>
    <EventsAdd></EventsAdd>
  <div class="container">    
    <EventsItem></EventsItem>
  </div>
  </form>
</div>
</template>

<script>
import EventsAdd from './EventsAdd.vue'
import EventsItem from './EventsItem.vue'
import myHeader from './Header.vue'

export default {
  data(){
    return {
    }
  },
  components: {
    myHeader,
    EventsAdd,
    EventsItem
  }
}
</script>

<style>
  .container{
    display:flex;
    align-items:flex-start;
  }
</style>
