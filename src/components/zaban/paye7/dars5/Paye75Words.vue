
<script setup>
import {ref,onMounted} from 'vue'
import {useMori} from '@/stores/mori';

const store=useMori();
const {words_75} = store;     

function go(event){
        event.target.parentNode.classList.toggle('flipped');
}
</script>

<template>
<!-- <div class="overflow-scroll bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"> -->
<div class="overflow-scroll bg-gradient-to-tl from-sky-400 via-cyan-300 to-slate-100">

    <div class="cont w-[94vw]  pt-10 overflow-scroll flex flex-wrap flex-row-reverse justify-around h-[65vh]
   mx-auto gap-3">
  
    <div v-for="(value,key) in words_75" class="cards" @click="go($event)">
            <!-- front -->
          <div class="card front" style="color: red" v-if="key.length>7">{{key}}</div>
          <div class="card front" v-else>{{key}}</div>
            <!-- back -->
          <div class="card back">{{value}}</div>    
</div>

</div>
<RouterLink to="/paye70index">
      <img class="h-[5vh] w-[10vw] fixed bottom-30 right-1" src="@/assets/back-arrow.png" />
</RouterLink> <br>
</div>
</template>

<style scoped>
.cont {
  perspective: 1400px;
}
.cards {
  position: relative;
  width:40vw;
  height: 25vw;
  cursor: pointer;
  transform-style: preserve-3d;
  transform-origin: center center;
  transition: transform 1s;
}

.flipped {
  transform: rotateY(-180deg);
}

.card {
  background-color: black;
  background-image: url(@/assets/back1.jpg);
  background-size: 100%;
  background-position: center center;
  position: absolute;
  color: black;
  font-size: 13px;
  text-align: center;
  backface-visibility: hidden;
  box-shadow: 1px 1px 5px 1px black;
}

.front {
  font-family: BalsamiqSansb;
}

.back {
  font-family: iranb;
  transform: rotateY(180deg);
}

</style>
