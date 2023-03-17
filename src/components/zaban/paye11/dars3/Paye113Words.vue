<script setup>
import {ref,onMounted} from 'vue'
function go(event){
        event.target.parentNode.classList.toggle('flipped');
        }
const words=[
"ashamed",
"surprised",
"practice art",
"attempt",
"artistic",
"weave",
"whenever",
"science",
"artwork",
"across",
"get along",
"jump",
"agree",
"mark",
"in fact",
"glad",
"skillful",
"rug",
"appreciate",
"wood",
"work",
"example",
"amused",
"calligraphic",
"including",
"creative",
"light",
"get back",
"fingerprint",
"decorative",
"shocked",
"worried",
"pleasure",
"artist",
"economy",
"humankind",
"sociable",
"silk",
"fortunate",
"sorry",
"catch",
"its",
"if",
"wall clock",
"proud",
"confused",
"diversity",
"charity",
"unique",
"their",
"at least",
"prize",
"vast",
"their",
"product",
"snow",
"tile",
"antonym",
"world war",
"carpet",
"pack",
"southwest",
"correctly",
"introduce",
"value",
"pottery",
"hopeful",
"frightened",
"amazed",
"earn",
"pass",
"custom",
"homeland",
"souvenir",
"choose",
"tilework",
"wellness",
"refer",
"item",
"usual",
"reference",
"depend",
"decide",
"imagination",
"handicraft",
"painting",
"income",
"want",
"quite",
"to tell the truth",
"area",
"workshop",
"bazaar",
"each other",
"conditional",
"part",
"calligraphy",
"local",
"metalwork",
"promise",
"give",
"collection",
"wait",
"identity",
"opposite",
"craftsman",
"cheerful",
"lucky",
"rich",
"bored",
"expect",
"etc.",
"well-known",
"satisfied",
"art",
"lovely",
"tired",
"touching",
"Persian carpet",
"craftswoman",
"exam",
"uncertain",
"phone",
"reflect",
"neighbor",
"activity",
"moral",
"discount",
];
        
const defs=[
" خجالت‌زده",
" متعجب",
" کار هنری کردن",
" سعی کردن",
" هنری",
" بافتن",
" هر وقت",
" علوم",
" اثر هنری",
" از عرض",
" کنار آمدن",
" پریدن",
" موافق بودن",
" نمره",
" در حقیقت",
" خوشحال",
" ماهر",
" قالیچه",
" قدر دانستن",
" چوب",
" شغل",
" نمونه",
" سرگرم",
" خطاطی",
" به انضمام",
" خلاق",
" چراغ",
" برگشتن",
" اثر انگشت",
" تزیینی",
" بهت‌زده",
" نگران",
" لذت",
" هنرمند",
" اقتصاد",
" انسان",
" اجتماعی",
" ابریشم",
" خوش‌شانس",
" متاسف",
" رسیدن به (وسایل نقلیه)",
" [صفت ملکی سوم شخص مفرد خنثی]",
" اگر",
" ساعت دیواری",
" مفتخر",
" گیج",
" تنوع",
" خیریه (موسسه و سازمان)",
" منحصربه‌فرد",
" [صفت ملکی سوم شخص جمع]",
" حداقل",
" جایزه",
" وسیع",
" [صفت ملکی سوم شخص جمع]",
" محصول",
" برف آمدن",
" کاشی",
" متضاد",
" جنگ جهانی",
" فرش",
" جمع کردن (وسایل)",
" جنوب غربی",
" به درستی",
" معرفی کردن",
" ارزش قائل بودن",
" سفالگری",
" امیدوار",
" ترسیده",
" متحیر",
" (پول) در آوردن",
" با موفقیت گذراندن",
" سنت",
" میهن",
" سوغاتی",
" انتخاب کردن",
" کاشی کاری",
" سلامتی",
" ارجاع دادن",
" کالا",
" همیشگی",
" منبع",
" بستگی داشتن",
" تصمیم گرفتن",
" قوه‌ تخیل",
" صنایع دستی",
" نقاشی (تصویر)",
" درآمد",
" خواستن",
" خیلی",
" راستش را بخواهی",
" منطقه",
" کارگاه",
" بازار",
" یکدیگر",
" شرطی",
" بخش",
" خوشنویسی",
" محلی",
" فلزکاری",
" قول دادن",
" دادن",
" مجموعه",
" صبر کردن",
" هویت",
" مخالف",
" هنرمند",
" شاد",
" خوش‌شانس",
" غنی",
" کسل",
" انتظار داشتن",
" و غیره",
" مشهور",
" راضی",
" هنر",
" زیبا",
" خسته",
" تاثیرگذار",
" قالی ایرانی",
" هنرمند",
" آزمون",
" نامطمئن",
" تماس گرفتن",
" بازتاب کردن",
" همسایه",
" فعالیت",
" اخلاقی",
" تخفیف",
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
