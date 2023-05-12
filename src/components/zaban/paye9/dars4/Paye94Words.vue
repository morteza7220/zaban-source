<script setup>
import {ref,onMounted} from 'vue'
function go(event){
        event.target.parentNode.classList.toggle('flipped');
        }
const words=[
// "get on a bus "
// "get off a bus"
// "take out money from an ATM "
// "send an e-mail"
// "hire a taxi "
// "open an account"
// "put out fire "
// "recharge your E-ticket"
// "call the emergency(115) "
// "ask the information desk"
// "donate blood do voluntary work"
// "help charity "
// "bring to the ER"
// "keep the city clean"
"recharge the e-ticket",
"gas station",
"He often plays outside.",
"What does a firefighter do?",
"never",
"Is there a fire station near here?",
"What is her job?",
"Thanks a lot!",
"fast",
"When is the break?",
"When does a firefighter go to work?",
"How do you come to school?",
"firefighter",
"fire station",
"cheap",
"stamp",
"send an e-mail",
"open an account",
"Because it’s fast and cheap.",
"I’m lost.",
"get off a bus",
"envelope",
"help charity",
"donate blood",
"take out money",
"break",
"What can I do for you?",
"Who helps lost children?",
"They never come late.",
"hire a taxi",
"because",
"wake up",
"Actually it’s near here.",
"service",
"What time does it open?",
"I can take you home.",
"often",
"He puts out fire and saves people’s lives.",
"Mandarin",
"corner",
"And is it an easy job?!",
"keep the city clean",
"What’s your favorite job?",
"post office",
"I like to be a firefighter.",
"I think he goes to work on shifts.",
"I take a bus.",
"She always studies hard.",
"bring to the ER",
"postcard",
"do voluntary work",
"shift",
"Where does he work?",
"get on a bus",
"call the emergency",
"It’s just round the corner.",
"Why does he go to work by bus?",
"You can get them from a post office.",
"put out fire",
"ask the information desk",
];
        
const defs=[
" شارژ مجدد بلیت الکترونیک",
" جایگاه سوخت",
" او اغلب بیرون (از خانه) بازی می کند.",
" یک آتش نشان چه کار می کند؟",
" هرگز",
" آیا در نزدیکی اینجا اداره آتش نشانی هست؟",
" شغل او چیست؟",
" خیلی ممنون!",
" سریع",
" زنگ تفریح کی است؟",
" یک آتش نشان چه زمانی به سرکار می رود؟",
" شما چطور به مدرسه می آیید؟",
" آتش‌نشان",
" ایستگاه آتش‌نشانی",
" ارزان",
" تمبر",
" ایمیل فرستادن",
" حساب (بانکی) باز کردن",
" چون سریع و ارزان است.",
" من گم شده ام.",
" از اتوبوس پیاده شدن",
" پاکت (نامه)",
" به (موسسه) خیریه کمک کردن",
" خون اهدا کردن",
" پول برداشت کردن",
" وقت استراحت",
" چه کاری از دست من بر می آید؟",
" چه کسی به کودکان گمشده کمک می کند؟",
" آنها هیچوقت دیر نمی آیند.",
" تاکسی گرفتن",
" چون",
" از خواب بیدار شدن",
" درواقع آن نزدیک به اینجاست.",
" خدمت",
" چه ساعتی باز می شود؟",
" من میتوانم تو را به خانه برسانم.",
" اغلب",
" او آتش را خاموش می کند و جان مردم را نجات می دهد.",
" زبان ماندارین",
" گوشه",
" و آیا آن شغل آسانی است؟!",
" شهر را تمیز نگه داشتن",
" شغل مورد علاقه ی شما چیست؟",
" اداره پست",
" من دوست دارم آتش نشان شوم.",
" من فکر می کنم او شیفتی کار می کند.",
" من سوار اتوبوس می شوم.",
" او همیشه بسیار درس می خواند.",
" به اورژانس آوردن",
" کارت پستال",
" کار داوطلبانه انجام دادن",
" شیفت",
" او کجا کار می کند؟",
" سوار اتوبوس شدن",
" به اورژانس زنگ زدن",
" آن درست سر پیچ است.",
" چرا او با اتوبوس به سر کار می رود؟",
" می توانید آنها را از اداره پست بخرید.",
" آتش خاموش کردن",
" از باجه اطلاعات پرسیدن",
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
