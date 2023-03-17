<script setup>
import {ref,onMounted} from 'vue'
function go(event){
        event.target.parentNode.classList.toggle('flipped');
        }
const words=[
"mosque",
"actually",
"cinema",
"minaret",
"center",
"east",
"zoo",
"stadium",
"Isfahan’s an old city in the center of Iran.",
"many",
"boulevard",
"What’s it like?",
"old",
"Please say it again.",
"restaurant",
"location",
"palace",
"Where is it?",
"I should see the city soon.",
"many",
"bridge",
"city",
"shrine",
"building",
"west",
"Are there any museums?",
"What is it famous for?",
"We can have special food downtown.",
"church",
"capital",
"Tell me about Isfahan.",
"north",
"museum",
"tourist",
"downtown",
"special",
"metro",
"clean",
"It’s a big and clean city.",
"big",
"park",
"south",
"store",
"famous",
"Isfahan is very famous for its mosques and palaces.",
"train station",
"near",
"Any famous buildings?",
"bus station",
"airport",
"north-east",
"north-west",
"south-east",
"south-west",
];
        
const defs=[
" مسجد",
" درواقع",
" سینما",
" مناره",
" مرکز",
" شرق",
" باغ وحش",
" ورزشگاه",
" اصفهان شهری قدیمی در مرکز ایران است.",
" چندین",
" بلوار",
" چگونه است؟",
" قدیمی",
" لطفا دوباره بگو.",
" رستوران",
" موقعیت",
" کاخ",
" آن کجاست؟",
" من به زودی از شهر دیدن خواهم کرد.",
" چندین",
" پل",
" شهر",
" حرم",
" ساختمان",
" غرب",
" آیا موزه هم دارد؟",
" آن (شهر) برای چه چیزی معروف است؟",
" ما می توانیم در مرکز شهر غذای ویژه بخوریم.",
" کلیسا",
" پایتخت",
" راجع به اصفهان برایم بگو.",
" شمال",
" موزه",
" گردشگر",
" مرکز شهر",
" خاص",
" مترو",
" تمیز",
" (آن) شهری بزرگ و تمیز است.",
" بزرگ",
" پارک",
" جنوب",
" مغازه",
" مشهور",
" اصفهان بابت مساجد و کاخ هایش بسیار مشهور است.",
" ایستگاه راه‌آهن",
" نزدیک",
" ساختمان های معروفی دارد؟",
" ایستگاه اتوبوس",
" فرودگاه",
" شمال شرق",
" شمال غرب",
" جنوب شرقی",
" جنوب غربی",
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
