<script setup>
import {ref,onMounted} from 'vue'
function go(event){
        event.target.parentNode.classList.toggle('flipped');
        }
const words=[
// "an angry kid","یک بچه عصبانی"
// "a brave soldier","یک سرباز شجاع"
// "a careless man","یک مرد بی احتیاط"
// "a cruel boy","یک پسر بی رحم"
// "a funny story ","یک داستان جالب"
// "a neat person","یک شخص مرتب"
// "a nervous boy ","یک پسر نگران"
// "a quiet place","یک مکان آرام"
// "a rude kid ","یک بچه بی ادب"
// "a selfish person","یک شخص خودخواه"
// "a hard-working worker","یک کارگر سخت کوش"
// "a lazy person ","یک شخص تنبل"
// "a shy girl","یک دختر خجالتی"
// "a generous girl","یک دختر بخشنده-سخاوتمند"
"poem",
"horse riding",
"reading",
"What do you like to do in your free time?",
"playing computer games",
"sometimes",
"What’s your hobby?",
"What sort of things do you read?",
"Do you have any hobbies?",
"watching movies",
"walking in the park",
"magazine",
"sports news",
"What do you do as a hobby?",
"usually",
"I watch movies as a hobby.",
"playing tennis",
"search",
"skiing",
"listening to the radio",
"fishing",
"Net",
"Do you like reading?",
"I don’t have any hobbies.",
"shopping",
"hobby",
"free time",
"going to the movies",
"I love reading.",
"working in the garden",
"enjoy",
"browsing the internet",
"I usually go to the gym in my free time.",
"What do you do in your free time?",
"fire service",
];
        
const defs=[
" شعر",
" اسب سواری",
" مطالعه",
" دوست دارید در اوقات فراغت خود چه کاری کنید؟",
" بازی کامپیوتری بازی کردن",
" گاهی",
" سرگرمی شما چیست؟",
" چه جور چیزهایی میخوانی؟",
" آیا هیچ سرگرمی ای داری؟",
" فیلم تماشا کردن",
" قدم زدن در پارک",
" مجله",
" خبر ورزشی",
" برای سرگرمی چه کاری انجام می دهی؟",
" معمولاً",
" من به عنوان سرگرمی تلویزیون تماشا می کنم.",
" تنیس بازی کردن",
" جستجو کردن",
" اسکی",
" گوش دادن به رادیو",
" ماهی گیری",
" اینترنت",
" مطالعه کردن را دوست داری؟",
" من هیچ سرگرمی ای ندارم.",
" خرید",
" سرگرمی",
" وقت آزاد",
" رفتن به سینما",
" من عاشق مطالعه هستم.",
" در باغ کار کردن",
" لذت بردن",
" در اینترنت گشت زدن",
" من معمولا در وقت آزادم به باشگاه می روم.",
" در اوقات فراغت خود چه می کنید؟",
" سازمان آتش‌نشانی",
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

          <!-- .back -->
        <div class="car.back text-black bg-blue-900 text-white pt-[2vh]" v-if="!arr_back.includes(index)">{{defs[index]}}</div>
        <div  class="car.back text-black pt-[2vh]" v-else>{{defs[index]}}</div>
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
