<script setup>
import {ref,onMounted} from 'vue'
function go(event){
        event.target.parentNode.classList.toggle('flipped');
        }
const words=[
"say prayers",
"land",
"Hope you enjoy your stay in Tehran.",
"check the timetable",
"around the World",
"hope",
"of course",
"check the passport",
"book a hotel",
"make a voyage",
"baggage reclaim",
"suitable",
"My wife and I are visiting Tehran for three days.",
"guess",
"key",
"novel",
"map",
"Germany",
"Arabic",
"leg",
"buy a ticket",
"talk to a receptionist",
"I have a reservation here.",
"Are you staying here for two nights?",
"car",
"pay toll",
"Are you working with the computer now?",
"letter",
"board the plane",
"German",
"take off",
"Here is her passport.",
"pray",
"take an express train",
"wheel",
"guide book",
"I need to check her passport.",
"pack for a trip",
"This is your key.",
"reservation",
"fill out the form",
"possible",
"tourist",
"check in",
"here",
"short story",
"Is it possible to book it online?",
"I’m searching for a hotel in …",
"weigh the baggage",
"check in",
"She’s standing over there, by the gift shop.",
"exchange money",
"I see!",
"gift shop",
"online",
"baggage reclaim",
];
        
const defs=[
" نماز خواندن",
" فرود آمدن",
" امیدوارم از اقامت تان در تهران لذت ببرید.",
" چک کردن برنامه حرکت (قطار، هواپیما و ...)",
" دور دنیا",
" امیدوار بودن",
" البته",
" گذرنامه چک کردن",
" هتل رزرو کردن",
" سفر دریایی رفتن",
" محل دریافت بار (فرودگاه)",
" مناسب",
" من و همسرم به مدت سه روز از تهران بازدید می کنیم.",
" حدس زدن",
" کلید",
" رمان",
" نقشه",
" آلمان",
" زبان عربی",
" پایه",
" بلیط خریدن",
" با متصدی پذیرش صحبت کردن",
" من اینجا (اتاق) رزرو کرده ام.",
" آیا به مدت دو شب اینجا می مانید؟",
" خودرو",
" عوارضی پرداخت کردن",
" آیا الان داری با کامپیوتر کار می کنی؟",
" نامه",
" سوار هواپیما شدن",
" آلمانی",
" از زمین بلند شدن (هواپیما)",
" بفرمایید، این هم پاسپورت او.",
" دعا کردن",
" قطار سریع السیر سوار شدن",
" چرخ",
" کتابچه راهنما",
" من باید گذرنامه شان را چک کنم.",
" برای سفر وسیله گرفتن",
" این کلید شماست.",
" رزرو",
" فرم پر کردن",
" امکان‌پذیر",
" گردشگر",
" پذیرش شدن (در هتل، فرودگاه و ...)",
" اینجا",
" داستان کوتاه",
" آیا ممکن است که آنلاین رزرو کنی؟",
" من دارم دنبال هتلی در ... می گردم.",
" بار وزن کردن",
" پذیرش شدن (در هتل، فرودگاه و ...)",
" او آنجا ایستاده است، کنار کادو سرا.",
" پول و ارز تبدیل کردن",
" متوجه ام!",
" کادوسرا",
" آنلاین",
" محل دریافت بار (فرودگاه)",
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


