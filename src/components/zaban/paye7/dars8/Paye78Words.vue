<script setup>
import {ref,onMounted} from 'vue'
function go(event){
        event.target.parentNode.classList.toggle('flipped');
        }
const words=[
"What’s your favorite food?",
"jelly",
"rice",
"Look, it’s enough.",
"spaghetti",
"orange",
"Let’s take something to eat.",
"cheese",
"potato",
"Ok, let’s go to the kitchen.",
"Let’s have something to drink.",
"kebab",
"bread",
"date",
"egg",
"yogurt",
"fruit",
"I’d like some …",
"What’s your favorite drink?",
"like",
"Me too. Let’s have some cake and milk.",
"What do you like to drink?",
"I feel thirsty.",
"salad",
"How about some cake and milk?",
"orange juice",
"I feel hungry.",
"food",
"banana",
"quince",
"Let’s take something to drink.",
"cake",
"carrot",
"What do you like to eat?",
"Let’s have something to eat.",
"feel",
"chicken",
"thirsty",
"Sounds good.",
"coconut",
"honey",
"drink",
"milk",
"onion",
"That’s my favorite.",
"I am hungry.",
"hungry",
"apple",
"water",
"ice cream",
"pineapple",
"How do you say … in English?",
"zucchini",
"favorite",
"I’m hungry. How about you?",
"juice",
"enough",
"fish",
"I am thirsty.",
"tea",
"go shopping",
"I’d like some tea with my cake.",
"tomato",
];
        
const defs=[
" عذای مورد علاقه ی شما چیست؟",
" ژله",
" برنج",
" ببین، دیگر بس است.",
" اسپاگتی",
" پرتقال",
" بیا یک چیز بخوریم.",
" پنیر",
" سیب‌زمینی",
" باشه، بیا به آشپزخانه برویم.",
" بیا یک چیز بنوشیم.",
" کباب",
" نان",
" خرما",
" تخم مرغ",
" ماست",
" میوه",
" من کمی ... می خورم.",
" نوشیدنی مورد علاقه ی شما چیست؟",
" دوست داشتن",
" منم همینطور. بیا کمی شیر و کیک بخوریم.",
" چی میل دارید بنوشید؟",
" من احساس تشنگی می کنم.",
" سالاد",
" نظرت راجع به کمی کیک و شیر چیست؟",
" آب پرتقال",
" من احساس گرسنگی می کنم.",
" غذا",
" موز",
" به (میوه)",
" بیا یک چیز بنوشیم.",
" کیک",
" هویج",
" چی میل دارید بخورید؟",
" بیا یک چیز بخوریم.",
" احساس کردن",
" مرغ",
" تشنه",
" خوب به نظر می آید.",
" نارگیل",
" عسل",
" نوشیدنی",
" شیر",
" پیاز",
" آن (غذا) مورد علاقه ی من است.",
" من گرسنه هستم.",
" گرسنه",
" سیب",
" آب",
" بستنی",
" آناناس",
" ... به انگلیسی چه می شود؟",
" کدو سبز",
" مورد علاقه",
" من گرسنه هستم. تو چطور؟",
" آبمیوه",
" (به اندازه) کافی",
" (گوشت) ماهی",
" من تشنه هستم.",
" چای",
" به خرید رفتن",
" من دوست دارم کمی چای با کیکم بخوریم.",
" گوجه‌فرنگی",
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
