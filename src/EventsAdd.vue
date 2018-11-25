<template>
    <div class="events">
        <legend>Добавление нового пункта</legend>
          <form>
            <div class="form-group">
                <label for="localdate">Время</label>
                <input type="datetime-local" id="localdate" v-model="event.date"/>
            </div>
            <div class="form-group">
                <label for="title">Название</label>
                <input type="text" id="title" v-model="event.title"/>
            </div>
            <div class="form-group">
                <button type="submit" @click="eventsAdd">OK</button>
                <button type="">Cancel</button> 
            </div>
          </form> 
    </div>
</template>
<script>
import axios from 'axios'
export default {
    
    data(){
            return {
                event:{
                date:'',
                title:''
                        }
            }
        },
        methods:{
            eventsAdd(){
            axios.post('https://private-anon-ebd88f3745-test17563.apiary-mock.com/events', this.event)
            .then (response =>{ 
                this.event = response.data
            })
        }
        }
}
</script>

<style>
    div.events {
        width: 500px;
        height: 150px;
        border: 4px solid red;
        border-radius: 10px;
        margin: 10px;
        padding: 10px;
    }
</style>