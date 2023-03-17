<script setup>
import {ref,onMounted} from 'vue'
function go(event){
        event.target.parentNode.classList.toggle('flipped');
        }
const words=["Iran is great!",
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
"It’s a beautiful country."];
const defs=["ایران عالی است!",
"آمریکای جنوبی",
"پسر عمو/ دختر عمو/ پسر دایی/ دختر دایی/ پسر خاله/ دختر خاله/ پسر عمه/ دختر عمه",
"آسیایی",
"آمریکای شمالی",
"او به فرانسه، انگلیسی و کمی به فارسی صحبت می کند",
"من اصالتا ایرانی هستم",
"اسپانیایی‌ها",
"اسپانیا",
"اهل آمریکای جنوبی",
"قاره",
"او اهل کجاست؟",
"آمریکای شمالی",
"آفریقایی",
"آفریقایی",
"چینی",
"استرالیا",
"آنها اهل اسپانیا هستند",
"اروپایی",
"خویشاوند",
"آفریقا",
"ایرانی",
"او اهل انگلستان است",
"ایران را چطور دیدی؟",
"خلیج فارس",
"برزیل",
"فرانسه",
"اروپا",
"آیا اهل ایران هستید؟",
"من در فرانسه زندگی می کنم",
"ایران",
"چین",
"برزیلی",
"او اهل فرانسه است",
"آنها اهل کجا هستند؟",
"چینی",
"آسیا",
"بریتانیایی",
"مهمان",
"برزیلی",
"ملیت",
"اروپایی",
"فرانسوی",
"فرانسوی",
"کشور",
"دریای خزر",
"او اهل کجاست؟",
"انگلستان",
"من دوستش دارم",
"استرالیایی",
"این یک کشور زیباست"];
        

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
