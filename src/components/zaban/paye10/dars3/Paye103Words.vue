<script setup>
import {ref,onMounted} from 'vue'
function go(event){
        event.target.parentNode.classList.toggle('flipped');
        }
const words=[
"sadly",
"love",
"researcher",
"prophet",
"skill",
"express",
"airplane",
"success",
"fortunately",
"yourselves",
"action",
"smoking",
"translator",
"scientist",
"verb",
"kitty",
"hearing",
"write",
"themselves",
"antibiotic",
"kill",
"drink",
"seek",
"invention",
"laboratory",
"invent",
"No pain no gain.",
"short",
"cradle",
"at first",
"successful",
"poor",
"PBUH",
"state",
"same",
"grave",
"penicillin",
"medicine",
"end",
"thinker",
"emotion",
"uranium",
"get around",
"yourself",
"thought",
"solve",
"rain",
"idea",
"herself",
"outside",
"easily",
"sense",
"develop",
"hall",
"himself",
"emphasis",
"rapidly",
"fast",
"soon",
"build",
"belief",
"camera",
"strongly",
"suddenly",
"great",
"publish",
"itself",
"quit",
"weak",
"light bulb",
"writer",
"translate",
"energetic",
"such",
"holy",
"noise",
"value",
"ourselves",
"Believe me!",
"translation",
"grow up",
"experiment",
"try",
"yard",
"story",
"believe in",
"cool",
"give up",
"pass away",
"hard",
"knowledge",
"at first",
"such",
];
        
const defs=[
" با ناراحتی",
" عاشق بودن",
" محقق",
" پیامبر",
" مهارت",
" بیان کردن",
" هواپیما",
" موفقیت",
" خوشبختانه",
" [ضمیر انعکاسی دوم شخص جمع]",
" عمل",
" سیگار کشیدن",
" مترجم",
" دانشمند",
" فعل",
" گربه",
" شنوایی",
" نوشتن",
" [ضمیر انعکاسی سوم شخص جمع]",
" آنتی‌بیوتیک",
" کشتن",
" نوشیدن",
" به‌دنبال گشتن",
" اختراع",
" آزمایشگاه",
" اختراع کردن",
" نابرده رنج گنج میسر نمی شود.",
" کوتاه",
" گهواره",
" در ابتدا",
" موفق",
" فقیر",
" صلی الله و علیه و آله",
" حالت",
" همان",
" قبر",
" پنی‌سیلین",
" دارو",
" پایان",
" اندیشمند",
" احساس",
" اورانیوم",
" رفت‌و‌آمد کردن",
" [ضمیر انعکاسی دوم شخص]",
" فکر",
" حل کردن",
" باران آمدن",
" ایده",
" [ضمیر انعکاسی سوم شخص مونث]",
" بیرون",
" به راحتی",
" حس",
" توسعه دادن",
" سالن",
" [ضمیر انعکاسی سوم شخص مذکر]",
" تاکید",
" سریعا",
" سریع",
" به زودی",
" ساختن",
" باور",
" دوربین",
" قویا",
" ناگهان",
" بزرگ",
" منتشر کردن",
" [ضمیر انعکاسی سوم شخص خنثی]",
" دست کشیدن",
" سست",
" لامپ",
" نویسنده",
" ترجمه کردن",
" پرانرژی",
" چنین",
" مقدس",
" صدا",
" ارزش",
" [ضمیر انعکاسی اول شخص جمع]",
" باور کن!",
" ترجمه",
" بزرگ شدن",
" آزمایش",
" سعی کردن",
" حیاط",
" داستان",
" اعتقاد داشتن",
" باشه!",
" ترک کردن",
" فوت کردن",
" سخت",
" دانش",
" در ابتدا",
" چنین",
];

console.log(defs,words);
const arr_front=[5,6,11,17,22,23,28,29,33,34,46,50];
const arr_back=[2,5,6,11,17,22,23,28,29,33,34,46,50];
</script>

<template>
<div class="overflow-scroll" style="font-family: iranb;font-weight: 900">

    <div class="cont w-[94vw] mx-3 pt-10 overflow-scroll flex flex-wrap flex-row-reverse justify-around gap-[2vw]
         pl-[2vw] h-[65vh] ">
  
    <div v-for="(item,index) in words"
         class="cards h-[15vh] w-[41vw]" 
         @click="go($event)">
          <!-- front -->
        <div class="card front py-[7vh]" style="line-height: 0px"  
            v-if="!arr_front.includes(index)">{{item}}</div>    
        <div class="card front py-[5vh] bg-green-900 text-xs leading-[3vh]" 
            v-else>{{item}}</div>

          <!-- back -->
        <div class="card back py-[7vh]" style="line-height: 0px"  
            v-if="!arr_back.includes(index)">{{defs[index]}}</div>    
        <div class="card back py-[5vh] bg-green-900 text-xs leading-[3vh]" 
            v-else>{{defs[index]}}</div>
</div>

</div>
<!-- <div class="animm h-[30vh] w-[100vw]" style="z-index:2">i am anim</div> -->

<RouterLink to="/paye7">
      <div class="h-[30vh] w-[100vw] text-center bg-yellow-300" >بازگشت</div>
</RouterLink> <br>
</div>
</template>


<style>
.cont {
  /*border: 3px solid #CCC;*/
  perspective: 1400px;
}
.cards {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transform-style: preserve-3d;
  transform-origin: center center;
  transition: transform 1s;
}

.flipped {
  transform: rotateY(-180deg);
}
.animm{
  animation-name: yellow_to_blue_keyframe;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  /*animation-play-state: end;*/
  animation-fill-mode: end;  
  /*animation-delay: 0s;*/
  /*animation-timing-function: linear;*/
}
@keyframes yellow_to_blue_keyframe{
  0%{
    background-color: red;
    color:red;
  }
  100%{
    background-color: blue;
    color:blue;
  }
}

.card {
  /*font-size: 10px;*/
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 30vw;
  color: white;
  text-align: center;
  font-weight: bold;
  /*font-size: 40px;*/
  backface-visibility: hidden;
  box-shadow: 1px 1px 5px 1px black;
}

.front {
  background: purple;
  /*background: url('@/anim1.svg');*/
  /*background-size: 100%;*/
  /*background-repeat: none;*/
  /*transform: rotateY(10deg);*/
}

.back {
  background: purple;
  transform: rotateY(180deg);
}

</style>
