<script setup>
import {ref,onMounted} from 'vue'
function go(event){
        event.target.parentNode.classList.toggle('flipped');
        }
const words=[
"a lot of",
"surprising",
"history",
"explanation",
"underline",
"object",
"interest",
"listening to the news",
"look for",
"disappear",
"breakfast",
"Oceania",
"percent",
"Please be quiet.",
"about",
"twice",
"few",
"receive",
"wrongly",
"meet the needs of",
"Islamic",
"news",
"high school",
"to be honest",
"sing",
"synonym",
"slice",
"spoken",
"traffic",
"language",
"native speaker",
"means",
"farming region",
"smart",
"live language",
"Canadian",
"make up",
"century",
"interesting",
"less",
"piece",
"candle",
"Keep off the grass.",
"dollar",
"soup",
"impossible",
"tiny",
"writing letters or emails",
"borrow",
"explain",
"interestingly",
"interview",
"population",
"begin",
"simple",
"bottle",
"talking to foreigners",
"exist",
"point",
"imagine",
"therefore",
"physical",
"beginning",
"despite",
"hint",
"wish",
"quick",
"turn on",
"sign language",
"You are near a restaurant.",
"between",
"uncountable noun",
"loaf",
"feeling",
"institute",
"additional",
"foreigner",
"respect",
"besides",
"pronoun",
"native language",
"written",
"nearly",
"school project",
"university",
"communicate",
"probable",
"little",
"space",
"Do not swim here.",
"invite",
"next week",
"notice",
"capital letter",
"mental",
"price",
"through",
"form",
"few",
"Moscow",
"lot",
"period",
"parking lot",
"communication",
"wind power",
"mother tongue",
"reading storybooks",
"power",
"know",
"grade",
"little",
"I think I’ll take these.",
"IRIB",
"you're welcome",
"understand",
"coffee",
"use",
"how much",
"experience",
"still",
"lots of",
"paper",
"surfing the net",
"mouse",
"how many",
"by means of",
"available",
"greatly",
"absolutely",
"learning",
"cost",
"storybook",
"melon",
"kilo",
"endangered language",
"minute",
"vary",
"bag",
"subject",
"Russian",
"society",
"coffee shop",
"ask",
"who",
"host",
"fluently",
"loudly",
"luckily",
"answer",
"start",
"die",
"valuable",
"There is a parking lot around.",
"exchange",
"cup",
"what",
"no matter how …",
"largely",
"difference",
"persian",
"range",
"early",
"glass",
"hour",
"countable",
"pick",
"scan",
"Turn off your mobile phone.",
"May I help you?",
"deaf",
"despite",
"what",
"few",
"what about",
];
        
const defs=[
" خیلی",
" حیرت‌آور",
" تاریخ",
" توضیح",
" زیر چیزی خط کشیدن",
" مفعول (دستور زبان)",
" علاقه",
" اخبار گوش کردن",
" (به) دنبال گشتن",
" ناپدید شدن",
" صبحانه",
" اقیانوسیه",
" درصد",
" لطفا سکوت را رعایت کنید.",
" درباره",
" دوبرابر",
" چند",
" دریافت کردن",
" اشتباها",
" نیازهای ... را تامین کردن",
" اسلامی",
" خبر",
" دبیرستان",
" راستش را بخواهی",
" آواز خواندن",
" مترادف",
" تکه",
" گفتاری",
" ترافیک",
" زبان",
" بومی",
" وسیله",
" مناطق کشاورزی",
" باهوش",
" زبان زنده",
" کانادایی",
" تشکیل دادن",
" قرن",
" چه جالب!",
" کمتر",
" تکه",
" شمع",
" روی چمن ها نروید.",
" دلار",
" سوپ",
" غیرممکن",
" کوچک",
" نامه یا ایمیل نوشتن",
" قرض گرفتن",
" توضیح دادن",
" به طرز قابل توجهی",
" مصاحبه کردن",
" جمعیت",
" شروع شدن",
" ساده",
" بطری",
" حرف زدن با خارجی ها",
" وجود داشتن",
" نکته",
" تصور کردن",
" بنابراین",
" جسمی",
" شروع",
" علیرغم",
" اشاره",
" آرزو",
" سریع",
" روشن کردن",
" زبان اشاره",
" شما به رستوران نزدیک می شوید.",
" بین",
" اسم غیر قابل شمارش",
" قرص (نان)",
" احساس",
" موسسه",
" اضافی",
" بیگانه",
" احترام گذاشتن",
" به غیر از",
" ضمیر",
" زبان مادری",
" کتبی",
" تقریبا",
" پروژه درسی",
" دانشگاه",
" ارتباط برقرار کردن",
" احتمالی",
" کمی",
" فضا",
" اینجا شنا نکنید.",
" دعوت کردن",
" هفته بعد",
" توجه",
" حرف بزرگ (الفبای انگلیسی)",
" روانی",
" قیمت",
" از میان",
" فرم",
" کم",
" مسکو",
" کالا",
" نقطه (.)",
" پارکینگ",
" ارتباط",
" انرژی بادی",
" زبان مادری",
" کتاب داستان خواندن",
" انرژی",
" بلد بودن",
" نمره",
" کم",
" فکر کنم این ها را بر می دارم.",
" صدا و سیمای جمهوری اسلامی ایران",
" خواهش می‌کنم",
" فهمیدن",
" قهوه",
" استفاده کردن",
" چه قیمتی",
" تجربه",
" هنوز",
" خیلی",
" کاغذ",
" وبگردی کردن در اینترنت",
" موش",
" چند",
" به کمک",
" دردسترس",
" تا حد زیادی",
" مسلماً",
" یادگیری",
" هزینه داشتن",
" کتاب داستان",
" ملون (خربزه، طالبی و ...)",
" کیلو",
" زبان در خطر",
" دقیقه",
" متفاوت بودن",
" کیسه",
" فاعل (دستور زبان)",
" روسی",
" جامعه",
" کافی‌شاپ",
" پرسیدن",
" چه کسی",
" میزبانی کردن",
" فصیحانه",
" با صدای بلند",
" خوشبختانه",
" پاسخ دادن",
" آغاز کردن",
" مردن",
" باارزش",
" این اطراف پارکینگ هست.",
" مبادله کردن",
" فنجان",
" چی",
" مهم نیست چقدر ...",
" تا حد زیادی",
" تفاوت",
" پارسی",
" متغیر بودن",
" زود",
" لیوان",
" ساعت (60 دقیقه)",
" قابل شمارش",
" انتخاب کردن",
" اجمالی نگاه کردن",
" موبایل‌های خود را خاموش کنید.",
" می توانم کمک تان کنم؟",
" ناشنوا",
" علیرغم",
" چه",
" چند",
" چطور",
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
