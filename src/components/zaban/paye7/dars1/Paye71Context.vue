<script setup>
import {ref, onMounted} from 'vue';

const slider=ref(null);		//div
const def_in_slider=ref('');	//string

const text_def_switch=ref(true);	
function switch_text_def(){
	text_def_switch.value=!text_def_switch.value;
	console.log(text_def_switch.value); 
	if (text_def_switch.value==true) {
		help();
	}
}	
// ___________________________________________________________

import {useMori} from '@/stores/mori';
import {storeToRefs} from 'pinia';
const store = useMori();
const {context_7} = store;		//dict

// ___________________________________________________________
// ___________________________________________________________

function help(){
		def_in_slider.value ="برای مشاهده معنی, کلمات را انتخاب کنید";
		slider.value.style.top='60vh';
}
setTimeout(help,1000);

	 
function goDown(){
		slider.value.style.top='110vh';
}

document.onselectionchange=function(){
		// get selection and trim 
		const selected_word=document.getSelection().getRangeAt(0);
		const trim_word=selected_word.toString().toLowerCase().trim();
		def_in_slider.value =context_7[trim_word];
		//popup go up 
		if (slider.value!==null) {
			slider.value.style.top='60vh';
			slider.value.style.zIndex=99;
			//if the selection length is bellow 1 the popup goes down
			if(trim_word.length<1){
				console.log(trim_word.length);
				go4Down(); 
			}
		}
}		 
function go4Down(){
		slider.value.style.top='110vh';
}

</script>
<template>

<p @click="switch_text_def()" class="bg-green-600 shadow text-center w-[40vw] ml-[50vw] mt-3 py-1 mx-1  text-white" style="font-family: iranb">معنی درس</p>

<p class="p-2 leading-8 overflow-scroll  h-[70vh]" 
	:class="{'text-right': !text_def_switch}" 
	style="font-family: BalsamiqSansb; font-size: 5vw; z-index: 99">

<pre style="font-family: BalsamiqSansb; " v-show="text_def_switch" 
class="overflow-scroll">
Teacher: Hi, class!
-Students: Hello, Teacher.
Teacher: Thank you, sit down, please. I'm your English teacher.
-My name is Ahmad Karimi.
Now, you tell me your names.
-What’s your name?
Student 1: My name is Ali Mohammadi.
-Teacher: How are you, Ali?
Student 1: Fine, thank you.
-Teacher: And what's your name?
Student 2: My name is ......... .
</pre>

<pre style="font-family: iranb ;font-size: 4vw;" dir="rtl" v-show="!text_def_switch"
class="overflow-scroll">
معلم: سلام (به) کلاس
دانش آموزان: سلام معلم.
معلم: از شما ممنونم، لطفا بنشینید. من معلم انگلیسی شما هستم.
اسم من احمد کریمی است. (احمد کریمی هستم)
حالا شما نام خود را به من بگویید.
نام شما چیست؟ (اشاره به یک دانش آموز)
دانش آموز 1: اسم من علی محمدی است.
معلم: علی حالت چطور است.
دانش آموز 1 (اول): خوبم، متشکرم
معلم: و نام شما چیست؟ (اشاره به دانش آموز دیگری)
دانش آموز 2: نام من هست ….
</pre>	
<img src="@/assets/paye_images/paye7/7_1.jpg">
</p>

<!-- --------------------slider for translation ---------------------->
<div ref="slider" 
	 class="fixed top-[110vh] w-[100vw] h-[10vh] bg-gradient-to-bl from-indigo-900 via-indigo-600 to-violet-900
				transition-all duration-10000  bg-gray-700 text-2xl flex justify-center text-white pt-[2vh] z-[100]"
	style="transition-duration: 1s; font-family: iranb;font-size: 5vw;">	
			{{def_in_slider}}
</div>	
<!-- -------------------------------------------------------------- -->





<RouterLink to="/paye7index">
      <img class="h-[5vh] w-[10vw] fixed bottom-10 right-0" style="z-index: 99" src="@/assets/back-arrow.png" />
</RouterLink> <br>
</template>
<style scoped>

</style>