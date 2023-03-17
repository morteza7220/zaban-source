<script setup>
import {ref,onMounted} from 'vue'
function go(event){
        event.target.parentNode.classList.toggle('flipped');
        }
const words=[
"avicenna",
"leopard",
"box",
"laptop",
"visitor",
"die out",
"cut",
"elephant",
"foot",
"human",
"will",
"trip",
"earth",
"duck",
"travel",
"life",
"mean",
"endangered",
"small",
"gazelle",
"hurt",
"person",
"alive",
"plain",
"tiger",
"instead",
"sky",
"information",
"increase",
"around",
"future",
"wild",
"dolphin",
"injured",
"learn",
"hear",
"hunter",
"today",
"pay attention!",
"destroy",
"among",
"protect",
"hunt",
"low",
"save",
"nowadays",
"jungle",
"for example",
"goat",
"road",
"world",
"nature",
"high",
"beautiful",
"zookeeper",
"natural",
"pain",
"go hunting",
"program",
"whale",
"forest",
"bear",
"bird",
"boring",
"wildlife",
"attention",
"recently",
"safe",
"lose",
"go out",
"giraffe",
"anymore",
"wolf",
"cheetah",
"danger",
"plant",
"cat",
"noun",
"hopefully",
"lion",
"zebra",
"a few",
"movies",
"panda",
"sea",
];
        
const defs=[
" ابن سینا",
" پلنگ",
" جعبه",
" لپ‌تاپ",
" ملاقات‌کننده",
" منقرض شدن",
" قطع کردن (درخت، خط و ...)",
" فیل",
" پا (از انگشت‌ها تا مچ)",
" انسان",
" [فعل کمکی زمان آینده]",
" سفر",
" زمین",
" اردک",
" سفر کردن",
" زندگی",
" به معنی (چیزی) بودن",
" در معرض انقراض",
" کوچک",
" غزال",
" زخمی کردن (فیزیکی)",
" فرد",
" زنده",
" جلگه",
" ببر",
" در عوض",
" آسمان",
" اطلاعات",
" افزایش یافتن",
" دور",
" آینده",
" وحشی",
" دلفین",
" آسیب‌دیده",
" یاد گرفتن",
" شنیدن",
" شکارچی",
" امروز",
" توجه کنید!",
" نابود کردن",
" (در) میان",
" محافظت کردن",
" شکار کردن",
" کم",
" نجات دادن",
" امروزه",
" جنگل",
" برای مثال",
" بز",
" جاده",
" جهان",
" طبیعت",
" بلند",
" زیبا",
" نگهبان باغ وحش",
" طبیعی",
" درد",
" به شکار رفتن",
" برنامه (زمانی، کامپیوتری، تلویزیونی و ...)",
" نهنگ",
" جنگل",
" خرس",
" پرنده",
" خسته‌کننده",
" حیات وحش",
" توجه",
" اخیرا",
" امن",
" گم کردن",
" بیرون رفتن",
" زرافه",
" دیگر",
" گرگ",
" یوزپلنگ",
" خطر",
" گیاه",
" گربه",
" اسم",
" انشاالله",
" شیر (حیوان)",
" گورخر",
" تعدادی",
" سینما",
" پاندا",
" دریا",
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
