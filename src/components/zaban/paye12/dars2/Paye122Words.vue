<script setup>
import {ref,onMounted} from 'vue'
function go(event){
        event.target.parentNode.classList.toggle('flipped');
        }
const words=[
"generally",
"unknown",
"level",
"colony",
"antonym",
"section",
"pronunciation",
"expression",
"device",
"unsystematically",
"bilingual",
"monolingual",
"highlight",
"primarily",
"stand for",
"biography",
"allow",
"incomprehensible",
"whereas",
"term",
"jump into",
"technical",
"figure out",
"unexpectedly",
"treasure",
"intermediate",
"user",
"phrase",
"combination",
"pocket dictionary",
"telescope",
"invisible",
"immediate",
"international",
"spelling",
"IPA",
"advanced",
"astronaut",
"shark",
"access",
"database",
"definition",
"scavenger",
"inner ear",
"heavily",
"wherever",
"complicated",
"plus",
"issue",
"reproduce",
"abbreviation",
"hearing loss",
"painful",
"increasingly",
"origin",
"pattern",
"magnet",
"ocean",
"infection",
"communicative",
"element",
"contain",
"lake",
"anthill",
"planet",
"volume",
"arrangement",
"attack",
"aid",
"avoid",
"crop",
"alphabetical",
"superhuman",
"introduction",
"unchangeable",
"hardworking",
"World Wide Web",
"essential",
"convert",
"magnifying glass",
"learner's dictionary",
"app",
"endanger",
"resource",
"order",
"insect",
"superhuman",
"vibration",
"access",
"throughout",
"PC",
"provide",
"effectively",
"compile",
"unsuccessfully",
"transmit",
"commercial",
"confusing",
"smart phone",
"scale",
"directly",
"middle ear",
"according to",
"tip",
"guide",
"arrange",
"circle",
"average",
"surround",
"elementary",
"entry",
"part of speech",
"compare",
"stick",
"symbol",
"widely",
"suppose",
"snake",
"topic sentence",
"recommend",
"general",
];
        
const defs=[
" معمولاً",
" نامعلوم",
" سطح",
" کلونی",
" متضاد",
" بخش",
" تلفظ",
" اصطلاح",
" دستگاه",
" بدون قاعده مشخص",
" دو زبانه",
" تک‌زبانه",
" برجسته کردن",
" در درجه اول",
" مخفف چیزی بودن",
" زندگینامه",
" اجازه دادن",
" غیر قابل فهم",
" در حالی که",
" اصطلاح",
" ناگهان تصمیم به انجام کاری گرفتن",
" فنی",
" فهمیدن",
" به طور غیر منتظره‌ای",
" گنج",
" (سطح) متوسط",
" مصرف‌کننده",
" جمله‌واره",
" ترکیب",
" فرهنگ لغت جیبی",
" تلسکوپ",
" نامرئی",
" فوری",
" بین‌المللی",
" هجی",
" الفبای آوانگاری بین‌المللی",
" پیشرفته",
" فضانورد",
" کوسه (جانورشناسی)",
" دسترسی",
" پایگاه داده",
" معنی",
" لاشه‌خوار (جانورشناسی)",
" گوش داخلی",
" به‌شدت",
" هر جا",
" پیچیده",
" به علاوه",
" مسئله",
" تولیدمثل کردن",
" مخفف",
" ناشنوایی",
" دردناک",
" بیش از پیش",
" منشاء",
" طرح",
" آهن‌ربا",
" اقیانوس",
" عفونت",
" خوش برخورد",
" عنصر (شیمی)",
" حاوی بودن",
" دریاچه",
" تپه مورچگان",
" سیاره",
" جلد (کتاب)",
" آرایش",
" حمله کردن",
" ابزار",
" دوری کردن",
" محصول",
" بر طبق حروف الفبا",
" ابرانسان",
" مقدمه",
" تغییرناپذیر",
" سخت‌کوش",
" وب جهان گستر",
" لازم",
" تبدیل کردن",
" ذره‌بین",
" فرهنگ لغت آموزشی (مخصوص زبان آموزان مبتدی)",
" اپ (موبایل)",
" به خطر انداختن",
" منبع",
" ترتیب",
" حشره",
" فوق بشری",
" ارتعاش",
" دسترسی داشتن",
" سرتاسر",
" کامپیوتر شخصی",
" فراهم کردن",
" به طور موثر",
" جمع‌آوری کردن",
" بدون موفقیت",
" انتقال دادن (امواج رادیویی و ...)",
" بازرگانی",
" گیج‌کننده",
" تلفن هوشمند",
" مقیاس",
" مستقیم",
" گوش میانی",
" طبق",
" راهنمایی",
" راهنما",
" مرتب کردن",
" دایره کشیدن",
" میانگین",
" احاطه کردن",
" ابتدایی",
" مدخل",
" نقش واژه (دستور زبان)",
" مقایسه کردن",
" چسبیدن",
" نماد",
" به طور گسترده",
" فرض کردن",
" مار",
" جمله موضوعی",
" پیشنهاد کردن",
" عمومی",
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
