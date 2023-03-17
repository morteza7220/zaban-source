<script setup>
import {ref,onMounted} from 'vue'
function go(event){
        event.target.parentNode.classList.toggle('flipped');
        }
const words=[
"Nice to meet you.",
"man",
"yes",
"Here’s your card.",
"sure",
"Sorry, what’s your last name again?",
"OK",
"Nice to meet you, too.",
"I can’t spell …",
"girl",
"Can I help you?",
"woman",
"She’s my teacher Mrs. …",
"Can you help me, please?",
"Who is that boy?",
"She’s my classmate …",
"sure",
"Who is that man?",
"He’s my teacher Mr. …",
"friend",
"classmate",
"This is my friend …",
"Let’s talk to him.",
"Can I have my library card, please?",
"He is my friend …",
"Who is that woman?",
"Welcome to our school.",
"Who is that girl?",
"Sorry, what’s your first name again?",
"He’s our new classmate.",
"boy",
];
        
const defs=[
" از آشنایی با تو خوشوقتم.",
" مرد",
" بله",
" (بفرمایید) این هم کارت عضویت شما.",
" حتماً",
" ببخشید، فامیلی تان چه بود؟",
" باشه",
" من هم از آشنایی با شما خوش‌وقت هستم.",
" من نمی توانم ... را هجی کنم.",
" دختر",
" می‌توانم کمک‌تان کنم؟",
" زن",
" او معلم من خانم ... است.",
" می توانید لطفا به من کمک کنید؟",
" آن پسر کیست؟",
" او همکلاسی من ... است.",
" حتماً",
" آن مرد کیست؟",
" او معلم من آقای ... است.",
" دوست",
" هم‌کلاسی",
" این دوست من ... است.",
" بیا (برویم) با او حرف بزنیم.",
" می توانم کارت عضویت کتابخانه ام را داشته باشم، لطفا؟",
" او دوست من ... است.",
" آن خانم کیست؟",
" به مدرسه ی ما خوش آمدی.",
" آن دختر کیست؟",
" ببخشید، اسم تان چه بود؟",
" او هم کلاسی جدید ماست.",
" پسر",
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
        <div class="card front text-black pt-[2vh]" v-if="!arr_front.includes(index)">{{item}}</div>    
        <div class="card front text-black pt-[2vh]" v-else>{{item}}</div>

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
  line-height: 3vh;
}

.back {
  /*color: blue;*/
  transform: rotateY(180deg);
  font-family: iranb;
  line-height: 3vh;
  padding-top: 4vh;
}

</style>
