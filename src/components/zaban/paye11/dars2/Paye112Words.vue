<script setup>
import {ref,onMounted} from 'vue'
function go(event){
        event.target.parentNode.classList.toggle('flipped');
        }
const words=[
"normal",
"cure",
"go skiing",
"key",
"unimportant",
"kid",
"properly",
"regular",
"prefer",
"harmful",
"replay",
"forget",
"asleep",
"oil",
"Thanks for calling.",
"go swimming",
"rarely",
"disease",
"seem",
"plan",
"condition",
"past",
"with",
"call back",
"incorrect",
"again",
"habit",
"heartbeat",
"fight",
"relationship",
"I am home most of the time.",
"couch potato",
"forbidden",
"addiction",
"dislike",
"unsafe",
"skim",
"homeless",
"get away",
"Would you like to leave a message?",
"lifestyle",
"effective",
"interrogative",
"technological",
"stop",
"rethink",
"jog",
"technology",
"no",
"go skating",
"behave",
"reality",
"suffix",
"get up",
"since",
"invitation",
"social",
"title",
"take part",
"come on",
"retire",
"meat",
"hang out",
"let",
"stage",
"function",
"create",
"hurry up",
"ever",
"keep on",
"manner",
"social event",
"line",
"blood pressure",
"rush",
"happiness",
"go jogging",
"come back",
"going out",
"decrease",
"late",
"balanced",
"however",
"however",
"paragraph",
"unhealthy",
"incomplete",
"watch out",
"jogging",
"physically",
"climb",
"go sailing",
"fat",
"turn around",
"death",
"look back",
"influence",
"snack",
"certain",
"cause",
"go fishing",
"secret",
"playing football",
"change",
"higher education",
"details",
"Internet",
"gain weight",
"taste",
"check",
"move",
"go running",
"for",
"affirmative",
"name",
"measure",
"disorder",
"slowly",
"born",
"depressed",
"dangerous",
"exciting",
"especially",
"look after",
"go skiing",
"somewhere",
"business",
"yet",
"volleyball",
"above all",
"homemade dishes",
"nope",
"green vegetable",
"heart attack",
"general health",
"everywhere",
"prefix",
"hiking",
"go swimming",
"You won!",
"anti-cancer drugs",
"recent",
"gerund",
"improve",
"by",
"go skiing",
"sportsperson",
"reason",
"turn off",
"go away",
"go fishing",
"praying",
"rewrite",
"scanner",
"climbing",
"emotional",
"born",
"take care",
"mount",
"mission",
"join",
"even",
"washing machine",
"disagree",
"stress",
"How is it going?",
"prevent",
"cycling",
"go fishing",
"diet",
"walking",
"against",
"serving",
"midterm",
"negative",
"protein",
"laughter",
];
        
const defs=[
" معمول",
" درمان کردن",
" به اسکی رفتن",
" مهم",
" بی اهمیت",
" بچه",
" مناسب",
" مرتب",
" ترجیح دادن",
" مضر",
" بازپخش کردن",
" فراموش کردن",
" خوابیده",
" روغن",
" ممنون که زنگ زدی.",
" شنا کردن",
" به ندرت",
" بیماری",
" به نظر رسیدن",
" برنامه",
" بیماری",
" گذشته",
" با",
" (در جواب تماس ازدست‌رفته کسی) با کسی تماس گرفتن",
" نادرست",
" دوباره",
" عادت",
" ضربان قلب",
" مبارزه کردن",
" رابطه",
" من بیشتر اوقات خانه هستم.",
" معتاد به تلویزیون",
" ممنوع",
" اعتیاد",
" خوش نیامدن",
" ناامن",
" سریع خواندن",
" بی‌خانمان",
" فرار کردن",
" میل دارید پیغامی بگذارید؟",
" سبک زندگی",
" موثر",
" استفهامی",
" تکنولوژیکی",
" متوقف کردن",
" باز اندیشیدن",
" (آهسته) دویدن (به منظور ورزش کردن)",
" فناوری",
" ممنوع",
" به اسکیت رفتن",
" رفتار کردن",
" واقعیت",
" پسوند",
" بیدار شدن",
" از آن زمان",
" دعوت",
" اجتماعی",
" عنوان",
" شرکت کردن",
" بی‌خیال!",
" بازنشسته شدن",
" گوشت",
" وقت گذراندن",
" اجازه دادن",
" مرحله",
" وظیفه",
" به وجود آوردن",
" عجله کردن",
" تابه‌حال (در ساختار حال کامل)",
" ادامه دادن",
" رفتار",
" رویداد اجتماعی",
" خط",
" فشارخون",
" عجله کردن",
" خوشحالی",
" به دوندگی آهسته رفتن",
" برگشتن",
" بیرون رفتن",
" کم کردن",
" دیر",
" متوازن",
" به هر حال",
" به هر حال",
" پاراگراف",
" ناسالم",
" ناکامل",
" مراقب بودن",
" دو آهسته",
" از لحاظ جسمی",
" بالا رفتن",
" به قایقرانی رفتن",
" چاق",
" روی برگرداندن",
" مرگ",
" به گذشته فکر کردن",
" تاثیر گذاشتن",
" خوراک سبک",
" به‌خصوص",
" باعث شدن",
" ماهیگیری رفتن",
" راز",
" فوتبال بازی کردن",
" تغییر دادن",
" آموزش عالی",
" جزئیات",
" اینترنت",
" وزن اضافه کردن",
" سلیقه",
" چک کردن",
" حرکت دادن",
" به دو رفتن",
" به‌مدت",
" مثبت",
" نامیدن",
" اندازه‌گیری کردن",
" بی‌نظمی",
" به آرامی",
" متولدشده",
" افسرده",
" خطرناک",
" هیجان‌انگیز",
" مخصوصاً",
" مراقب بودن",
" به اسکی رفتن",
" جایی",
" کار",
" هنوز",
" والیبال",
" از همه بیشتر",
" غذاهای خانگی",
" نچ",
" سبزی",
" حمله قلبی",
" وضعیت سلامت عمومی",
" همه جا",
" پیشوند",
" پیاده‌گردی",
" شنا کردن",
" تو بردی!",
" داروهای ضدسرطان",
" اخیر",
" اسم مصدر",
" پیشرفت کردن",
" تا",
" به اسکی رفتن",
" ورزشکار",
" دلیل",
" خاموش کردن",
" دور شدن",
" ماهیگیری رفتن",
" دعا کردن",
" بازنویسی کردن",
" اسکنر",
" کوهنوردی",
" احساسی",
" متولدشده",
" مراقب خودت باش!",
" کوهستان",
" ماموریت",
" عضو شدن",
" حتی",
" ماشین لباسشویی",
" مخالفت کردن",
" فشار عصبی",
" چه خبر؟",
" جلوگیری کردن",
" دوچرخه‌سواری",
" ماهیگیری رفتن",
" رژیم غذایی",
" پیاده‌روی",
" در مقابل",
" پرس",
" میان ترم",
" منفی",
" پروتئین",
" خنده",
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
