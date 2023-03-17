<script setup>
import {ref,onMounted} from 'vue'
function go(event){
        event.target.parentNode.classList.toggle('flipped');
        }
const words=[
"Iran is great!",
"South America",
"cousin",
"Asian",
"North American",
"He speaks French, English, and a little Persian.",
"I’m originally Iranian.",
"Spanish",
"Spain",
"South American",
"continent",
"Where is she from?",
"North America",
"African",
"African",
"Chinese",
"Australia",
"They’re from Spain.",
"European",
"relative",
"africa",
"Iranian",
"She’s from England.",
"How do you like it in Iran?",
"Persian Gulf",
"Brazil",
"France",
"Europe",
"Are you from Iran?",
"I live in France.",
"Iran",
"China",
"Brazilian",
"He’s from France.",
"Where are they from?",
"Chinese",
"Asia",
"British",
"guest",
"Brazilian",
"nationality",
"European",
"French",
"French",
"country",
"Caspian Sea",
"Where is he from?",
"England",
"I love it.",
"Australian",
"It’s a beautiful country.",
];
        
const defs=[
" ایران عالی است!",
" آمریکای جنوبی",
" پسر عمو/ دختر عمو/ پسر دایی/ دختر دایی/ پسر خاله/ دختر خاله/ پسر عمه/ دختر عمه",
" آسیایی",
" آمریکای شمالی",
" او به فرانسه، انگلیسی و کمی به فارسی صحبت می کند.",
" من اصالتا ایرانی هستم.",
" اسپانیایی‌ها",
" اسپانیا",
" اهل آمریکای جنوبی",
" قاره",
" او اهل کجاست؟",
" آمریکای شمالی",
" آفریقایی",
" آفریقایی",
" چینی",
" استرالیا",
" آنها اهل اسپانیا هستند.",
" اروپایی",
" خویشاوند",
" آفریقا",
" ایرانی",
" او اهل انگلستان است.",
" ایران را چطور دیدی؟",
" خلیج فارس",
" برزیل",
" فرانسه",
" اروپا",
" آیا اهل ایران هستید؟",
" من در فرانسه زندگی می کنم.",
" ایران",
" چین",
" برزیلی",
" او اهل فرانسه است.",
" آنها اهل کجا هستند؟",
" چینی",
" آسیا",
" بریتانیایی",
" مهمان",
" برزیلی",
" ملیت",
" اروپایی",
" فرانسوی",
" فرانسوی",
" کشور",
" دریای خزر",
" او اهل کجاست؟",
" انگلستان",
" من دوستش دارم.",
" استرالیایی",
" این یک کشور زیباست.",
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