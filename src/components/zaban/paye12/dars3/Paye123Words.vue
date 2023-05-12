<script setup>
import {ref,onMounted} from 'vue'
function go(event){
        event.target.parentNode.classList.toggle('flipped');
        }
const words=[
"oxygen",
"fan",
"God helps those who help themselves",
"fossil fuel",
"herd",
"necessary",
"LED light bulb",
"Jupiter",
"stable",
"form",
"joint",
"Nobel Prize",
"Saturn",
"reduce",
"Cut your coat according to your cloth",
"variety",
"kinetic energy",
"Uranus",
"pollute",
"require",
"Absence makes the heart grow fonder",
"mechanical",
"Neptune",
"radiation",
"nuclear",
"string light bulb",
"tide",
"cooling",
"engine",
"client",
"voluntary",
"thus",
"power",
"delivery",
"racehorse",
"material",
"replace",
"generate",
"proverb",
"battery",
"electrical",
"as well",
"global warming",
"Pluto",
"waste",
"environment",
"document",
"renewable",
"communication",
"Birds of a feather flock together",
"excellent",
"use up",
"plug in",
"garbage",
"Actions speak louder than words.",
"suitcase",
"BC",
"Money does not grow on trees",
"store",
"swimming pool",
"outlet",
"forever",
"picnic",
"apologize",
"flashlight",
"landfill",
"source",
"vacuum cleaner",
"nonrenewable",
"barbecue",
"There’s no place like home",
"format",
"Practice makes perfect",
"overcome",
"demand",
"burn",
"kite",
"Too many cooks spoil the broth.",
"consume",
"charge",
"Easy come easy go.",
"balcony",
"gasoline",
"wind turbine",
"convert",
"portable",
"give off",
"solar power",
"absorb",
"clean energy",
"digital camera",
"oil",
"sunshine",
"gadget",
"load",
"opposite",
"harm",
"solar system",
"practical",
"blow",
"Two heads are better than one",
"coal",
"videophone",
"huge",
"electricity",
"monitor",
"A burnt child dreads the fire.",
"remind",
"likelihood",
"revolve",
"Don't count your chickens before they're hatched.",
"Kill two birds with one stone.",
"Mars",
"daddy",
"natural gas",
"Out of sight out of mind.",
"The early bird catches the worm",
"air conditioner",
"hydropower",
"shiny",
"look a gift horse in the mouth",
"Mercury",
"atmosphere",
"Venus",
"panel",
"distance",
"times",
];
        
const defs=[
" اکسیژن",
" پنکه",
" از تو حرکت از خدا برکت",
" سوخت فسیلی",
" گله",
" لازم",
" لامپ ال‌ای‌دی",
" مشتری (سیاره)",
" اسطبل",
" شکل",
" مفصل",
" جایزه نوبل",
" زحل (سیاره)",
" کاهش دادن",
" پا را به اندازه گلیم خود دراز کن",
" تنوع",
" انرژی جنبشی",
" اورانوس (سیاره)",
" آلوده کردن",
" نیاز داشتن",
" دوری و دوستی",
" مکانیکی",
" نپتون",
" تشعشع",
" هسته‌ای",
" لامپ رشته‌ای",
" جزر و مد",
" خنک‌کننده",
" موتور",
" مشتری",
" داوطلبانه",
" بنابراین",
" انرژی تامین کردن",
" تحویل",
" اسب مسابقه",
" ماده",
" جایگزین کردن",
" تولید کردن",
" ضرب‌المثل",
" باتری",
" برقی",
" هم",
" گرمایش جهانی",
" پلوتون",
" پسماند",
" محیط‌زیست",
" سند",
" تجدیدپذیر",
" ارتباط",
" کبوتر با کبوتر باز با باز",
" عالی",
" تمام کردن",
" به پریز برق وصل کردن",
" زباله",
" دو صد گفته چون نیم کردار نیست.",
" چمدان",
" قبل از میلاد مسیح",
" پول که علف خرس نیست",
" ذخیره کردن",
" استخر شنا",
" پریز برق",
" برای همیشه",
" پیک‌نیک",
" عذرخواهی کردن",
" چراغ‌قوه",
" خاک‌چال",
" منبع",
" جاروبرقی",
" تجدیدنشدنی",
" کبابخوری",
" هیچ جا خانه آدم نمی‌شود",
" شکل",
" کار نیکو کردن از پر کردن است",
" غالب آمدن",
" تقاضا",
" سوزاندن",
" بادبادک",
" آشپز که چند تا شود غذا یا شور می‌شود یا بی‌نمک.",
" مصرف کردن",
" شارژ کردن (وسایل برقی و ...)",
" باد آورده را باد می برد.",
" بالکن",
" بنزین",
" توربین بادی",
" تبدیل کردن",
" قابل انتقال",
" منتشر کردن (بو)",
" انرژی خورشیدی",
" جذب کردن",
" انرژی پاک",
" دوربین دیجیتال",
" نفت",
" آفتاب",
" وسیله",
" بار",
" مخالف",
" آسیب",
" منظومه شمسی",
" به‌دردبخور",
" وزیدن",
" دو عقل بهتر از یک عقل است",
" زغال‌سنگ",
" تلفن تصویری",
" بسیار بزرگ",
" برق",
" نمایشگر",
" مارگزیده از ریسمان سیاه و سفید می‌ترسد",
" یادآوری کردن",
" احتمال",
" گردیدن",
" جوجه را آخر پاییز می‌شمارند",
" با یک تیر دو نشان زدن",
" مریخ",
" بابایی",
" گاز طبیعی",
" از دل برود هر آنکه از دیده برفت.",
" سحرخیز باش تا کامروا شوی",
" تهویه کننده هوا",
" انرژی آبی",
" درخشان",
" اسب پیشکش را دندان شمردن",
" عطارد",
" محیط",
" زهره (سیاره)",
" صفحه",
" مسافت",
" برابر (در مقایسه)",
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
