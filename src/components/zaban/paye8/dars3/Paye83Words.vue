<script setup>
import {ref,onMounted} from 'vue'
function go(event){
        event.target.parentNode.classList.toggle('flipped');
        }

const words=[
"play volleyball",
"Who can work with a computer?",
"Can you make a cake?",
"Can I see your photos?",
"Who can draw?",
"Are you good at drawing?",
"Are you good at searching the Web?",
"act in movies",
"drawing",
"Are they good at swimming?",
"photo",
"Is he good at playing football?",
"ride a horse",
"play basketball",
"Who is good at telling stories?",
"wow!",
"Why not?",
"recite the Holy Quran",
"do a puzzle",
"Excuse me, I have a question.",
"Who can play tennis?",
"tell a story",
"Can they play basketball?",
"play badminton",
"run",
"Can she search the Web?",
"good",
"swim",
"Are you good at riding a bicycle?",
"Can you ride a bicycle?",
"Is she good at cooking?",
"draw",
"Come to my house this afternoon.",
"take photos",
"Can he do a puzzle?",
"ability",
"I’m not good at drawing.",
"Can you draw?",
"Who is good at riding a bicycle?",
"work with a computer",
"Who can take photos?",
"Your drawing is very good.",
"draw a picture",
"play ping-pong",
"make tea",
"I can take good photos.",
"speak",
"I can’t make it today.",
"ride a bicycle",
"play tennis",
"play chess",
"type",
"read",
"puzzle",
"You can bring your drawing book, too.",
];
        
const defs=[
" والیبال بازی کردن",
" کی بلد است با کامپیوتر کار کند؟",
" می توانی کیک درست کنی؟",
" می توانم عکس هایت را ببینم؟",
" چه کسی می‌تواند نقاشی بکشد؟",
" آیا نقاشی ات خوب است؟",
" آیا شما در جستجو در فضای اینترنت خوب هستید؟",
" بازی کردن در فیلم‌های سینمایی",
" طراحی (هنر)",
" آیا شنا کردن آنها خوب است؟",
" عکس",
" آیا او خوب فوتبال بازی میکند؟",
" اسب سواری کردن",
" بسکتبال بازی کردن",
" کی خوب می تواند داستان بگوید؟",
" وای!",
" چرا که نه؟",
" قرائت کردن قرآن مجید",
" پازل درست کردن",
" ببخشید، من یک سوال دارم.",
" کی می تواند تنیس بازی کند؟",
" داستان گفتن",
" آیا آنها می توانند بسکتبال بازی کنند؟",
" بدمینتون بازی کردن",
" دویدن",
" آیا او می تواند در اینترنت جستجو کند؟",
" خوب",
" شنا کردن",
" آیا دوچرخه سواری ات خوب است؟",
" می توانید دوچرخه سواری کنید؟",
" آیا آشپزی او خوب است؟",
" نقاشی کشیدن",
" امروز بعد از ظهر به خانه ی من بیا.",
" عکس گرفتن",
" آیا او می تواند پازل را تکمیل کند؟",
" مهارت",
" من نقاشی ام خوب نیست.",
" می توانی نقاشی بکشی؟",
" چه کسی دوچرخه سواری اش خوب است؟",
" با کامپیوتر کار کردن",
" کی می تواند عکس بگیرد؟",
" نقاشی تو خیلی قشنگ است.",
" نقاشی کشیدن",
" پینگ پنگ بازی کردن",
" چای درست کردن",
" من می توانم خوب عکس بگیرم.",
" صحبت کردن",
" من امروز نمی توانم (بیایم).",
" دوچرخه سواری کردن",
" تنیس بازی کردن",
" شطرنج بازی کردن",
" تایپ کردن",
" خواندن",
" پازل",
" می توانی دفتر نقاشی ات را هم همراه خودت بیاوری.",
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
  line-height: 2vh;
}

.back {
  /*color: blue;*/
  transform: rotateY(180deg);
  font-family: iranb;
  line-height: 2vh;
  padding-top: 4vh;
}

</style>
