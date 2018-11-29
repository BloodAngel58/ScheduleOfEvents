<template>     
        
    <div class="pr">
                <span class="add">Добавление нового пункта</span>
                <hr class="horizontal-line">
        <div class="tit">
                <label for="title">Название</label><br>
                <input type="text" class="add2" id="title" v-model="events.title"/>
        </div>
        <div class="tit">
                <label for="localdate">Время</label><br>
                <input type="datetime-local" class="add2" id="localdate" v-model="events.date"/>
        </div>
        <div class="">
                <button class="butt" type="submit" @click="eventADD()">OK</button>
                <button class="butt" type="">Cancel</button> 
        </div>
    </div>
        
</template>
<script>
export default {
    
    data(){
            return {
                events:[]
            }
        },
        methods:{
                eventADD(){
                    this.$store.dispatch('ADD_TODO');
                }
        }
}
</script>

<style>
    div.pr {
        width: 300px;
        height: 200px;
        border: 3px solid black;
        border-radius: 10px;

    }
    .tit{
    text-align: left;
    margin: 0px 30px 10px 30px;
    }
    .add{
        font-size: 20px;
        margin-left: 35px;

    }
    .add2{
        width: 220px;
        height: 16px;
        
    }
    .horizontal-line{
	width:300px;
	text-align:center; 
	float: left; 
	background: black;
	border:none!important;
	border-radius:5px;
	height:3px;
    }
    button.butt{
        width: 100px;
        height: 25px;
        text-align: center;
        margin: 5px 0px 0px 28px;
    }
</style>