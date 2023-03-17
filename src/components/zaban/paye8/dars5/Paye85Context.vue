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

<img src="@/assets/paye_images/paye8/8_5_2.jpg" class="mx-auto">
<pre style="font-family: BalsamiqSansb;" v-show="text_def_switch" 
class="overflow-scroll">
Phanindra: Morteza, tell me about Isfahan. Where is it?
Morteza: Well, Isfahan’s an old city in the center of Iran.
Phanindra: What’s it like?
Morteza: It’s a big and clean city.
Phanindra: Any famous buildings?
Morteza: Yes, many. Actually, Isfahan is very famous for its mosques and palaces.
Phanindra: Are there any museums?
Morteza: Yes, some great ones.
Phanindra: I should see the city soon.
Morteza: Sure, and we can have special food downtown
</pre>

<pre style="font-family: iranb ;font-size: 4vw;" dir="rtl" v-show="!text_def_switch"
class="overflow-scroll">
پانیندرا: مرتضی برام درباره اصفحان بگو. (این اصفحان) کجا هست؟
مرتضی: خب, اصفحان یک شهر قدیمی در مرکز ایران هست.
پانیندرا: چه جور (شهری) هست؟ (یا شبیه کجاست).
مرتضی: (اصفحان) یک شهر بزرگ و تمیز هست. 
پانیندرا: بنای مشهوری هم داره؟
مرتضی: اره , خیلی. در واقع اصفحان برای مساجد و عمارت هاش خیلی مشهور است.
پانیندرا: اونجا موزه هم داره؟
مرتضی: بله, موزه های عالی ای داره.
پانیندرا: من باید به زودی از (این) شهر دیدن کنم.
مرتضی: البته, همینطور می تونیم غذای های مخصوص رستوران های مرکز شهر رو امتحان کنیم.
</pre>	
<img src="@/assets/paye_images/paye8/8_5_1.jpg">

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