<script setup>
import {ref,onMounted} from 'vue'
function go(event){
        event.target.parentNode.classList.toggle('flipped');
        }
const words=[
"see a war movie",
"We can watch it together.",
"event",
"update a blog",
"look at the newsstand",
"wonderful",
"watch a quiz show",
"interview somebody",
"attend",
"Change the TV channels",
"text a message",
"cartoon",
"busy",
"yesterday",
"install an antivirus program",
"I attended Fajr International Film Festival.",
"movie",
"amazing",
"receive an e-mail",
"It’s amazing!",
"There is a football match on TV tonight.",
"How fantastic!",
"That’s great!",
"Well done!",
"That’s great news!",
"use information technology",
"Download something from the Internet",
"Did you enjoy your weekend?",
"text",
"What a wonderful day!",
"excellent",
"comedy",
"install a computer dictionary",
"media",
"surf",
"fantastic",
"I am also interested in its events and movies.",
"Connect to the Internet",
"Please buy some fruits.",
"brilliant",
"participate in an online course",
"website",
"report",
"I get home at ...",
"Attend a TV program",
"Just a moment.",
"That’s really nice!",
"That’ll be all fun!",
"You can surf its website if you like.",
"IT",
"Could you please give me the website address?",
"Did you watch the reports on TV last night?",
];
        
const defs=[
" یک فیلم جنگی دیدن",
" می توانیم با همدیگر تماشا کنیم.",
" رویداد",
" به‌روز کردن یک وبلاگ",
" به دکه روزنامه‌فروشی نگاهی انداختن",
" شگفت‌انگیز",
" مسابقه تلویزیونی تماشا کردن",
" با شخصی مصاحبه کردن",
" حضور داشتن",
" شبکه تلویزیون را عوض کردن",
" پیامک فرستادن (از طریق موبایل)",
" کارتون",
" پرمشغله",
" دیروز",
" برنامه آنتی‌ویروس نصب کردن",
" من در جشنواره بین المللی فیلم فجر شرکت کردم.",
" فیلم",
" شگفت‌آور",
" ایمیل دریافت کردن",
" محشره!",
" امشب در تلویزیون مسابقه فوتبالی پخش می شود.",
" چقدر جالب!",
" عالیه!",
" آفرین!",
" عجب خبر خوبی!",
" استفاده کردن از فناوری اطلاعات",
" چیزی را از اینترنت دانلود کردن",
" آیا از آخر هفته لذت بردی؟",
" پیام دادن (از طریق موبایل)",
" چه روز قشنگی!",
" عالی",
" نمایش خنده‌دار",
" نصب کردن یک فرهنگ لغت کامپیوتری",
" رسانه",
" جست‌وجو کردن (در اینترنت)",
" خارق‌العاده",
" من همچنین علاقه مند به جشنواره ها (مراسم ها) و فیلم سینمایی هستم.",
" به اینترنت وصل شدن",
" لطفا مقداری میوه بخر.",
" عالی",
" شرکت کردن در یک دوره آموزشی آنلاین",
" تارنما",
" گزارش",
" من ساعت ... به خانه می رسم.",
" در یک برنامه تلویزیونی شرکت کردن",
" یک لحظه (صبر کنید).",
" واقعا عالیه!",
" خیلی خوش خواهد گذشت!",
" می توانی اگر دوست داشتی سری به وب سایت آنجا بزنی.",
" فناوری اطلاعات",
" می توانید لطفا آدرس وب سایت را به من بدهید؟",
" آیا دیشب گزارش های تلویزیونی را تماشا کردی؟",
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
