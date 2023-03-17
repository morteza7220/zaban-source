<script setup>
import {ref,onMounted} from 'vue'
function go(event){
        event.target.parentNode.classList.toggle('flipped');
        }
const words=[
"drugstore",
"You should go home and rest.",
"health problem",
"You should rest.",
"Thanks for your help.",
"I’ll talk to your teacher.",
"stomachache",
"cough",
"What's the matter?",
"patient",
"advice",
"I have a sore throat.",
"Why don’t you see a doctor?",
"You have sore eyes, too.",
"Go to the dentist.",
"What is the problem?",
"have a fever",
"earache",
"What's wrong?",
"running nose",
"Let’s go to the office and call your parents first.",
"Why don't you get some rest?",
"cold",
"Is she all right?",
"sore throat",
"Are you OK?",
"I’ll be back in a minute.",
"You should see a doctor.",
"toothache",
"rest",
"I have a headache.",
"headache",
"measles",
"health",
"have a temperature",
"backache",
"We have one more class.",
"sore eyes",
"Czech",
"I have a toothache.",
"Is he OK?",
"I have a cold.",
"parent",
"hospital",
"don't worry.",
"quiet",
"sneeze",
"Be quiet!",
"flu",
"mumps",
"I have a running nose.",
];
        
const defs=[
" داروخانه",
" باید به خانه بروی و استراحت کنی.",
" مشکل سلامتی",
" باید استراحت کنی.",
" ممنون بابت کمک شما.",
" من با معلمت صحبت خواهم کرد.",
" دل‌درد",
" سرفه",
" چه شده است؟",
" مریض",
" نصیحت",
" من گلودرد دارم.",
" چرا نمی روی دکتر؟",
" چشم هایت هم که خون افتاده است.",
" به دندانپزشکی برو.",
" چه مشکلی پیش آمده است؟",
" تب داشتن",
" گوش‌درد",
" چه شده است؟",
" آبریزش بینی",
" بیا اول به دفتر برویم و به پدر و مادرت زنگ بزنیم.",
" چرا کمی استراحت نمی کنی؟",
" سرماخوردگی",
" آیا او حالش خوب است؟",
" گلودرد",
" خوبی؟",
" من یک دقیقه ای بر می گردم.",
" باید بروی دکتر.",
" دندان‌درد",
" استراحت کردن",
" سردرد دارم.",
" سردرد",
" سرخک",
" سلامت",
" تب داشتن",
" کمردرد",
" ما یک کلاس دیگر هم داریم.",
" چشم های خون افتاده",
" اهل جمهوری چک",
" دندان درد دارم.",
" آیا او حالش خوب است؟",
" سرما خورده ام.",
" والد",
" بیمارستان",
" نگران نباش.",
" ساکت",
" عطسه",
" ساکت باشید!",
" آنفلوآنزا",
" اوریون",
" آبریزش بینی دارم.",
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
