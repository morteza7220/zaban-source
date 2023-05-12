<script setup>
import {ref,onMounted} from 'vue'
function go(event){
        event.target.parentNode.classList.toggle('flipped');
        }
const words=[
// "make lunch/dinner"
// "bake a cake"
// "set the table"
// "sing the national anthem"
// "hold a ceremony"
// "clear the table"
// "watch fireworks"
// "read poems of Hafez"
// "wear special clothes"
// "go out on Nature Day"
// "celebrate a religious holiday"
// "watch military parade"
// "commemorate NE martyrs"
// "Islamic-Iranian culture"
// "Islamic revolution anniversary"
"holiday",
"Do you and your cousins set the Haft Seen table?",
"celebrate a religious holiday",
"I just love New Year holidays!",
"Do you get New Year gifts too?",
"set the table",
"Commemorate NE martyrs",
"They say their Eid prayers before noon.",
"Do young children color the eggs?",
"clear the table",
"I really like Fajr Film Festival.",
"go out on Nature Day",
"watch fireworks",
"watch military parade",
"In all Muslim countries people hold the same ceremony.",
"gold fish",
"Does he recite the Holy Quran at the turn of the year?",
"Turkey",
"wear special clothes",
"Nature Day",
"Happy New Year!",
"national",
"dish",
"Islamic-Iranian culture",
"sing the national anthem",
"New Year",
"clothes",
"fun",
"normally",
"bake a cake",
"gift",
"Muslim",
"Do you buy new clothes for the New Year?",
"We usually get money.",
"meal",
"make lunch",
"On Fitr Eid, Muslims don’t fast.",
"international",
"hold a ceremony",
"fast",
"Does your grandmother cook the New Year meal?",
"We always go to my grandparents’ houses.",
"Fitr Eid is an important religious holiday.",
"Do Chinese people buy gold fish for the New Year?",
"grandparent",
"Islamic revolution anniversary",
"It’s fun!",
"make dinner",
"We normally visit our relatives in Norooz.",
"Wish you a great holiday!",
"eat nuts",
"ceremony",
"festival",
"read poems of Hafiz",
];
        
const defs=[
" روز تعطیل",
" آیا شما و خویشاوندان شما سفره هفت سین می چینند؟",
" تعطیلات مذهبی را جشن گرفتن",
" من واقعا تعطیلات سال نو را دوست دارم!",
" آیا هدیه ی سال نو هم می گیرید؟",
" چیدن میز غذا",
" گرامی داشت شهدای انرژی هسته ای",
" آنها نماز عید شان را قبل از ظهر می خوانند.",
" آیا بچه های کوچک تخم مرغ رنگ می کنند؟",
" میز غذا را جمع کردن",
" من واقعا جشنواره فیلم فجر را دوست دارم.",
" بیرون رفتن در روز طبیعت",
" آتش‌بازی تماشا کردن",
" تماشا کردن رژه نظامی",
" در تمام کشورهای اسلامی مسلمانان مراسم یکسانی برگزار می کنند.",
" ماهی قرمز",
" آیا او در آغاز سال (جدید) قرآن مجید قرائت می کند؟",
" ترکیه",
" لباس‌های مخصوص پوشیدن (برای مناسبت‌های خاص)",
" روز طبیعت",
" سال نو مبارک!",
" ملی",
" ظرف",
" فرهنگ اسلامی-ایرانی",
" خواندن سرود ملی",
" سال نو",
" لباس",
" سرگرمی",
" معمولاً",
" کیک پختن",
" کادو",
" مسلمان",
" آیا برای سال جدید لباس های نو می خرید؟",
" ما معمولا پول می گیریم.",
" وعده غذایی",
" ناهار درست کردن",
" در عید فطر، مسلمانان روزه نمی گیرند.",
" بین‌المللی",
" جشن برپا کردن",
" روزه گرفتن",
" آیا مادربزرگت غذای سال نو را درست می کند؟",
" ما همیشه به خانه ی پدر بزرگ و مادربزرگم می رویم.",
" عید فطر یک تعطیلات مذهبی مهم است.",
" آیا چینی ها برای سال نو ماهی قرمز می خرند؟",
" پدربزرگ یا مادربزرگ",
" سالگرد انقلاب اسلامی",
" خوش می گذرد!",
" شام درست کردن",
" ما معمولا در نوروز به دید و بازدید فامیل می رویم.",
" برای شما تعطیلات خوبی آرزو دارم!",
" آجیل خوردن",
" مراسم",
" جشنواره",
" خواندن اشعار حافظ",
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
