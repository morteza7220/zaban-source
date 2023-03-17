<script setup>
import {ref,onMounted} from 'vue'
function go(event){
        event.target.parentNode.classList.toggle('flipped');
        }
const words=[
"39 Kargar Street, Baharestan",
"live",
"I’m not sure.",
"go",
"Call me before you go.",
"Around 5 in the afternoon.",
"telephone",
"OK, bye.",
"What time are they leaving?",
"evening",
"What’s their address?",
"address",
"mobile",
"24 Laleh Street, Sa'dieh",
"5 Azadi Street",
"What’s your address?",
"Are you coming with me?",
"e-mail address",
"15 Shahid Hakim Street, Manzarieh",
"home",
"What time is he going?",
"What’s his mobile phone number?",
"67 Mahan Street",
"81 Farnam Street",
"What’s her address?",
"street",
"p.m.",
"What’s his address?",
"… is not well.",
"call",
"What time is she coming back?",
"I’m not sure I can, but I’ll try.",
"I’m going to visit him today.",
"number",
"I don’t understand.",
"time",
"What’s …’s home number?",
"Where do you live?",
"What time are you going?",
"a.m.",
"What’s their telephone number?",
"I don't know.",
"What’s your telephone number?",
"What time is it?",
"My phone number is ...",
"What’s her office phone number?",
"o'clock",
"a.m.",
"p.m.",
];
        
const defs=[
" بهارستان، خیابان کارگر، پلاک 39",
" زندگی کردن",
" مطمئن نیستم.",
" رفتن",
" قبل از اینکه بروی به من زنگ بزن.",
" حدودا ساعت 5 بعد از ظهر",
" تلفن",
" باشه، خداحافظ.",
" آنها چه ساعتی می روند؟",
" عصر",
" آدرس (منزل) آنها چیست؟",
" نشانی",
" تلفن همراه",
" سعدیه، خیابان لاله، پلاک 24",
" خیابان آزادی، پلاک پنجم",
" آدرس (منزل) شما چیست؟",
" آیا تو با من می آیی؟",
" آدرس ایمیل",
" منظریه، خیابان شهید حکیم، پلاک 15",
" خانه",
" ساعت چند قرار است برود؟",
" شماره موبایل او چند است؟",
" خیابان ماهان، پلاک 67",
" خیابان فرنام، پلاک 81",
" آدرس (منزل) او چیست؟",
" خیابان",
" بعد از ظهر",
" آدرس (منزل) او چیست؟",
" حال ... خوب نیست.",
" زنگ زدن",
" چه ساعتی بر می گردد؟",
" مطمئن نیستم بتوانم (بیایم)، اما سعی خواهم کرد.",
" من قرار است امروز به ملاقاتش بروم.",
" عدد",
" متوجه نمی شوم.",
" زمان",
" شماره تلفن منزل ... چند است؟",
" کجا زندگی می کنید؟",
" ساعت چند قرار است بروی؟",
" قبل از ظهر (ساعت)",
" شماره تلفن آنها چند است؟",
" نمی‌دانم.",
" شماره تلفن شما چند است؟",
" ساعت چند است؟",
" شماره تلفن من ... است.",
" شماره تلفن دفتر او چند است؟",
" ساعت",
" قبل از ظهر (ساعت)",
" بعد از ظهر",
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
