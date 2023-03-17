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
		def_in_slider.value ="برای مشاهده معنی کلمات را انتخاب کنید";
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

<pre style="font-family: BalsamiqSansb; " v-show="text_def_switch">
Farid: Mom, where are you?
Mom: I'm in the kitchen.
Farid: Hello. Where's Dad?
Mom: In the garage.
Farid: What's he doing? I'm so hungry.
Mom: OK, wash your hands and come for lunch.
I'll call Dad; he's fixing the car.
Farid: OK.
</pre>

<pre style="font-family: iranb ;font-size: 4vw;" dir="rtl" v-show="!text_def_switch"
class="overflow-scroll">
فرید:  مادر, کجایی؟ (کجا هستی تو؟).
مادر:  من در آشپزخانه هستم.
فرید:  سلام. پدر کجاست؟
مادر:  در کاراژ.
فرید:  او دارد چکار می کند؟ من خیلی گرسنه هستم.
مادر:  بسیار خب. دست هایت را بشور و برای نهار بیا.
-من پدرت را صدا می کنم. او دارد ماشین را تعمیر می کند
فرید: اوکی
</pre>	
<img src="@/assets/paye_images/paye7/7_6.jpg">

</p>

<!-- --------------------slider for translation ---------------------->
<div ref="slider" 
	 class="fixed top-[110vh] w-[100vw] h-[10vh] bg-gradient-to-bl from-indigo-900 via-indigo-600 to-violet-900
				transition-all duration-10000  bg-gray-700 text-2xl flex justify-center text-white pt-[2vh] z-[100]"
	style="transition-duration: 1s; font-family: iranb;font-size: 5vw;">	
			{{def_in_slider}}
</div>	
<!-- -------------------------------------------------------------- -->





<!-- <RouterLink to="/paye7index"> -->
      <!-- <img class="h-[5vh] w-[10vw] fixed bottom-10 right-0" style="z-index: 99" src="@/assets/back-arrow.png" /> -->
<!-- </RouterLink> <br> -->
</template>
<style scoped>

</style>