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
" پسر عمو- دختر عمو- پسر دایی- دختر دایی- پسر خاله- دختر خاله- پسر عمه- دختر عمه",
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
</script>
<template>
  <!-- <div class="h-[40vh] w-[100vw] bg-red-300 text-black pt-10">hello</div> -->
<!-- <div class="overflow-scroll bg-gradient-to-tl from-sky-400 via-cyan-300 to-slate-100"> -->
<div class="overflow-scroll">

    <div class="cont w-[94vw] h-[65vh] pt-10 flex flex-wrap flex-row-reverse justify-around 
   mx-auto gap-3 overflow-scroll">
  

      <div v-for="(item,index) in words" 
      class="cards w-[40vw] h-[14vh] text-xs" @click="go($event)">

          <!-- front -->
        <div class="card front leading-[14vh]" v-if="item.length<20">{{item}}</div>
<!-- <div class="card front text-green-800" v-else="item.length>40">****</div>     -->
        <div class="card front leading-[4vh] pt-2" v-else>{{item}}</div>    

          <!-- back -->
        <div class="card back leading-[14vh]" v-if="defs[index].length<20">{{defs[index]}}</div>
<!-- <div class="card front text-green-800" v-else="item.length>40">****</div>     -->
        <div class="card back leading-[4vh] pt-2" v-else>{{defs[index]}}</div>    



    </div>  <!-- end cards -->

</div>  <!-- end cont -->
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
  /*width:40vw;*/
  /*height: 25vw;*/
  cursor: pointer;
  transform-style: preserve-3d;
  transform-origin: center center;
  transition: transform 1s;
}

.flipped {
  transform: rotateY(-180deg);
}

.card {
/*  background-image: url(@/assets/back1.jpg);
  background-size: 100%;
  background-position: center center;
*/
  position: absolute;
  text-align: center;
  backface-visibility: hidden;
}

.front {
  /*color:yellow;*/
  font-family: BalsamiqSansb;
  /*padding-top: 4vh;*/
  /*line-height: 2vh;*/
}

.back {
  /*color: blue;*/
  transform: rotateY(180deg);
  font-family: iranb;
  /*line-height: 2vh;*/
  /*padding-top: 4vh;*/
}

</style>