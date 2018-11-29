<template>
    <div class="cldate">
          <div class="" v-for="dataTim in dataTime">
              <div class="c2" v-for="(dat,i) of dataTim">
                  <span v-for="(da,index) in dat" class="d" :key="index">{{da | formatDate}}</span>
              </div>
          </div>
    </div>
</template>

<script>
import moment from 'moment'
    export default {
        data(){
      return    { dataTime: [{
                    items: ["2018-10-05T10:00:00Z", "2018-10-05T10:15:00Z", "2018-10-05T10:30:00Z" ]
                },
                {
                    items: ["2018-10-05T10:45:00Z", "2018-10-05T11:00:00Z", "2018-10-05T11:15:00Z"]
                },
                {
                    items: ["2018-10-05T11:30:00Z", "2018-10-05T11:45:00Z", "2018-10-05T12:00:00Z", ]
                },
                {
                    items: ["2018-10-05T12:15:00Z", "2018-10-05T12:30:00Z", "2018-10-05T12:45:00Z", ]
                },
                {
                    items: ["2018-10-05T13:00:00Z", "2018-10-05T13:15:00Z", "2018-10-05T13:30:00Z", ]
                }
                ]
      }
        },
        filters:{
            formatDate(value) { 
            if (value) {
        return moment(String(value)).subtract("hours", 3).format("HH:mm")
            }
        }
        }
    }
    
</script>


<style>
    div.cldate {
        background-color:bisque;
        width: 250px;
        border: 4px solid green;
        border-radius: 10px;
        margin: 10px;
        padding: 15px;
    }

    .d{
        border-radius: 10px;
        background-color:blueviolet;
        font-size: 28px;
        margin: 10px;
    }
    .c2{
        margin-bottom: 10px;
    }
</style>