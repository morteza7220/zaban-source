<script setup>
import {ref,onMounted} from 'vue'
function go(event){
        event.target.parentNode.classList.toggle('flipped');
        }
const words=[
"emotion",
"comma",
"whereby",
"reply",
"loving",
"hard of hearing",
"strength",
"orally",
"cruel",
"reader",
"elderly",
"smart phone",
"meaningful",
"unconditionally",
"just",
"heritage",
"burst into tears",
"take temperature",
"spare no pains",
"handle",
"common",
"tool",
"teenager",
"repeatedly",
"bilingual",
"proud",
"technology",
"aloud",
"diploma",
"unreal",
"ethics",
"forgive",
"guidelines",
"dishwasher",
"grateful",
"pronunciation",
"medicine",
"ordinary",
"careful",
"worthy",
"collocation",
"calmly",
"grandchild",
"computer game",
"sofa",
"lovingly",
"on the other hand",
"diary",
"tablet",
"born",
"function",
"temperature",
"appreciate",
"countless",
"pigeon",
"sense of belonging",
"homeland",
"memory",
"inspiration",
"for instance",
"note",
"hug",
"feed",
"generous",
"importantly",
"kiss",
"hence",
"take care",
"lap",
"distinguished",
"shout",
"physician",
"accident",
"cure",
"sense of appreciation",
"care for",
"responsibility",
"poet",
"mistake",
"respect",
"scientist",
"pity",
"antonym",
"surprisingly",
"inventor",
"morals",
"regard",
"quite",
"donate",
"recommend",
"dedicated",
"found",
"A.D.",
"accidentally",
"suppose",
"textbook",
"microwave",
"medical",
"similar",
"lower",
"contrast",
"religious",
"professor",
"generation",
"kindness",
"failure",
"by heart",
"quietly",
"comprehension",
"boost",
"polite",
"bacteria",
"deserve",
"principle",
"result",
"poetry",
"strategy",
"by the way",
"for instance",
];
        
const defs=[
" احساس",
" ویرگول",
" که به وسیله آن",
" پاسخ دادن",
" مهربان",
" سنگین‌گوش",
" قدرت",
" به‌صورت شفاهی",
" بی‌رحم",
" خواننده (کتاب و ...)",
" سالمند",
" تلفن هوشمند",
" هدفمند",
" بی قید و شرط",
" به‌تازگی",
" میراث",
" زیر گریه زدن",
" درجه حرارت بدن کسی را اندازه گرفتن",
" از هیچ چیز مضایقه نکردن",
" رسیدگی کردن",
" متداول",
" ابزار",
" نوجوان",
" بارها",
" دو زبانه",
" مفتخر",
" فناوری",
" (با صدای) بلند",
" دیپلم",
" غیر واقعی",
" فلسفه اخلاق",
" بخشیدن",
" دستورالعمل‌ها",
" ماشین ظرفشویی",
" سپاسگزار",
" تلفظ",
" پزشکی",
" معمولی",
" مراقب",
" لایق",
" همایند",
" به آرامی",
" نوه",
" بازی رایانه‌ای",
" مبل راحتی",
" با عشق",
" از طرف دیگر",
" دفتر خاطرات",
" تبلت (نوعی رایانه تخت)",
" متولدشده",
" وظیفه",
" دما",
" قدر دانستن",
" بی شمار",
" کبوتر",
" حس تعلق",
" میهن",
" حافظه (انسان و رایانه)",
" الهام",
" برای مثال",
" ملاحظه کردن",
" بغل کردن",
" غذا دادن",
" بخشنده",
" به طور مهم",
" بوسیدن",
" بنابراین",
" مواظبت کردن",
" روی ران پا",
" سرشناس",
" داد زدن",
" پزشک",
" اتفاق",
" درمان کردن",
" حس قدردانی",
" دوست داشتن",
" مسئولیت",
" شاعر",
" اشتباه",
" احترام گذاشتن",
" دانشمند",
" حیف",
" متضاد",
" به طور شگفت‌آور",
" مخترع",
" اخلاق",
" در نظر گرفتن",
" کاملاً",
" اهدا کردن",
" پیشنهاد کردن",
" متعهد",
" بنا نهادن",
" پس از میلاد مسیح",
" تصادفا",
" فرض کردن",
" کتاب (درسی)",
" مایکروویو",
" پزشکی",
" مشابه",
" کاهش دادن",
" تضاد",
" مذهبی",
" استاد (دانشگاه)",
" نسل",
" مهربانی",
" شکست",
" از حفظ",
" آهسته",
" فهم",
" بالا بردن",
" مؤدب",
" باکتری‌ها (زیست‌شناسی)",
" سزاوار بودن",
" اصل اخلاقی",
" نتیجه",
" شعر",
" راهبرد",
" راستی",
" برای مثال",
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
