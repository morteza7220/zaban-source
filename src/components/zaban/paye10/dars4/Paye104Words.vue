<script setup>
import {ref,onMounted} from 'vue'
function go(event){
        event.target.parentNode.classList.toggle('flipped');
        }
const words=[
"may",
"Peru",
"four-season country",
"booklet",
"illness",
"possibility",
"entertainment",
"in",
"travel agent",
"Chile",
"May",
"site",
"prepare",
"host",
"honestly",
"piano",
"at",
"rudely",
"choice",
"vacation",
"image",
"abroad",
"quickly",
"own",
"probably",
"ski",
"domestic",
"most often",
"adverb",
"can",
"hospitable",
"on",
"spend",
"flight",
"attraction",
"vegetable",
"should",
"cannot",
"happily",
"possibly",
"sandwich",
"culture",
"carefully",
"pyramid",
"destination",
"suggestion",
"embassy",
"remember",
"desert touring",
"politely",
"historical",
"foreign",
"comfortable",
"junk food",
"behavior",
"billion",
"Great Wall",
"morning",
"familiar",
"afternoon",
"range",
"book",
"Italy",
"ancient",
"holy shrine",
"traveler",
"Beijing",
"neatly",
"actual",
"home-made",
"traditional",
"inside",
"safely",
"India",
"loud",
"nicely",
"leave",
"next to",
"paradise",
"hard",
"bravely",
"wind tower",
"Egypt",
"must",
"late",
"in front of",
"popular",
"attract",
"well",
"attractive",
"patiently",
"rule",
"visa",
"chip",
"obligation",
"desert",
"pilgrim",
"risk",
];
        
const defs=[
" ممکن بودن",
" پرو",
" کشور چهار فصل",
" کتابچه",
" بیماری",
" امکان",
" سرگرمی",
" در",
" کارمند آژانس مسافرتی",
" شیلی",
" مه",
" مکان",
" آماده کردن",
" میزبان",
" صادقانه",
" پیانو",
" در (زمان)",
" گستاخانه",
" انتخاب",
" مرخصی",
" وجهه",
" خارج",
" سریع",
" خود",
" احتمالاً",
" اسکی کردن",
" (مربوط به) خانه",
" اغلب",
" قید",
" توانستن",
" مهمان‌نواز",
" در (زمان)",
" صرف کردن",
" پرواز",
" جذابیت",
" سبزیجات",
" بایستن",
" can+not",
" با خوشحالی",
" احتمالا",
" ساندویچ",
" فرهنگ",
" بادقت",
" هرم",
" مقصد",
" پیشنهاد",
" سفارت",
" به یاد آوردن",
" کویر نوردی",
" مودبانه",
" تاریخی",
" خارجی",
" راحت",
" غذای ناسالم",
" رفتار",
" میلیارد",
" دیوار بزرگ چین",
" صبح",
" آشنا",
" بعدازظهر",
" گستره",
" رزرو کردن",
" ایتالیا",
" باستان",
" حرم مطهر",
" مسافر",
" پکن (پایتخت چین)",
" مرتب",
" واقعی",
" خانگی",
" سنتی",
" داخل",
" به سلامت",
" هندوستان",
" بلند",
" به خوبی",
" ترک کردن",
" کنار",
" بهشت",
" سخت",
" شجاعانه",
" بادگیر (معماری)",
" مصر (کشوری در قاره آفریقا)",
" باید",
" دیر",
" در مقابل",
" پرطرفدار",
" جذب کردن",
" به‌خوبی",
" جذاب",
" صبورانه",
" قانون",
" روادید",
" چیپس (سیب‌زمینی)",
" وظیفه",
" بیابان",
" زائر",
" خطر",
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
