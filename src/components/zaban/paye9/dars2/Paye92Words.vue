<script setup>
import {ref,onMounted} from 'vue'
function go(event){
        event.target.parentNode.classList.toggle('flipped');
        }

const words=[
"What days do you play sports?",
"What days do you go shopping?",
"When can you start?",
"day",
"midnight",
"What days do you go to school?",
"go to library",
"visit relatives",
"That’s fine.",
"when",
"why",
"I go to the gym on Sundays and Tuesdays.",
"sunrise",
"midday",
"I stay at home and relax.",
"night",
"climb a mountain",
"I’ll let her know.",
"relax",
"noon",
"stay",
"weekend",
"… is not very good at English.",
"Every weekday.",
"sir",
"go to the gym",
"play sports",
"go to school",
"gym",
"madam",
"What days do you study English?",
"well",
"watch TV",
"weekday",
"sunset",
"week",
"How about Friday mornings?",
"study lessons",
"That sounds great!",
"What days do you go to the library?",
"What do you do in the afternoons?",
];
        
const defs=[
" چه روزهایی ورزش می کنی؟",
" چه روزهایی خرید می روی؟",
" از کی می توانی شروع کنی؟",
" روز",
" نیمه‌شب",
" چه روزهایی به مدرسه می روی؟",
" به کتابخانه رفتن",
" سر زدن به فامیل",
" خوبه.",
" چه زمانی",
" چرا",
" من یکشنبه ها و سه شنبه ها به باشگاه می روم.",
" طلوع خورشید",
" ظهر",
" من خانه می مانم و استراحت می کنم.",
" شب",
" کوهنوردی کردن",
" به او می گویم.",
" آرامیدن",
" ظهر",
" ماندن",
" آخر هفته",
" ... زیاد انگلیسی اش خوب نیست.",
" هر روز هفته",
" آقا",
" رفتن به باشگاه",
" ورزش کردن",
" به مدرسه رفتن",
" باشگاه",
" خانم",
" چه روزهایی زبان (انگلیسی) می خوانی؟",
" خب",
" تلویزیون تماشا کردن",
" روز هفته",
" غروب خورشید",
" هفته",
" صبح های جمعه چطور؟",
" درس خواندن",
" عالی به نظر می رسد!",
" چه روزهایی به کتابخانه می روی؟",
" بعد از ظهرها چه کار می کنی؟",
];

console.log(defs,words);
// const arr_front=[0,1,2,5,6,11,17,22,23,28,29,33,34,46,50];
const arr_front=[0];
// const arr_back=[2,5,6,11,17,22,23,28,29,33,34,46,50];
const arr_back=[0];
</script>

<template>
<!-- <div class="overflow-scroll bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"> -->
<div class="overflow-scroll bg-gradient-to-tl from-sky-400 via-cyan-300 to-slate-100">

    <div class="cont w-[94vw]  pt-10 overflow-scroll flex flex-wrap flex-row-reverse justify-around h-[65vh]
   mx-auto gap-3">
  
    <div v-for="(item,index) in words"
         class="cards" 
         @click="go($event)">
          <!-- front -->
        <div class="card front text-black pt-[2vh] leading-8" v-if="!arr_front.includes(index)">{{item}}</div>    
        <div class="card front text-black pt-[2vh] leading-9" v-else>{{item}}</div>

          <!-- back -->
        <div class="card back text-black bg-blue-900 text-white pt-[2vh]" v-if="!arr_back.includes(index)">{{defs[index]}}</div>
        <div  class="card back text-black pt-[2vh]" v-else>{{defs[index]}}</div>
</div>

</div>
<!-- <div class="animm h-[30vh] w-[100vw]" style="z-index:2">i am anim</div> -->
<RouterLink to="/paye7index">
      <!-- <div class="h-[30vh] w-[100vw] text-center bg-yellow-300" >بازگشت</div> -->
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
  color: black;
  position: absolute;

  line-height: 30vw;
  color: black;
  font-size: 13px;
  text-align: center;
  backface-visibility: hidden;
  box-shadow: 1px 1px 5px 1px black;
}

.front {
  padding-top: 4vh;
  color: black;
  font-family: BalsamiqSansb;
  line-height: 5vh;
}

.back {
  /*color: blue;*/
  transform: rotateY(180deg);
  font-family: iranb;
  line-height: 8vh;
  padding-top: 4vh;
}

</style>

