<script setup>
import {ref,reactive,onMounted} from 'vue';

import {useHafez} from '@/stores/hafez';
const {arr} = useHafez();
// const id=ref(0);
// const poem=ref('');
const react=reactive({
  		id:0,
  		poem:''
});
react.id=Math.floor(Math.random()*arr.length);
console.log(react.id); 
// id.value=Math.ceil(Math.random()*3);

react.poem=arr[react.id]; 
onMounted(()=>{
	// react.poem=react.poem.replaceAll('@','<br>');		
})
// poem.value=arr[+(id.value)]; 
</script>


<template>
<div class="p-4 text-center w-full bg-red-300" style="background-color: lightblue;font-family: iranb;">
	<div class="flex flex-col justify-around h-[90vh] overflow-scroll">
			<p style="font-size: 5vw;">طراح و برنامه نویس: مرتضی شبانی پور</p>
			<p style="font-size: 3vw;" class="px-8 text-justify" dir="rtl">
	برای مشاهده  این اپلیکیشن  از مرورگر  موبایل استفاده کنید <br> 

		<p class="text-[3vw]">متاسفانه الان وقت آزاد برای آپدیت سایت رو ندارم ولی قول یک آپدیت جدی رو &nbsp; <span class="bg-blue-300 text-[4vw] bg-gray-700 text-gray-300">&nbsp;&nbsp;اوایل اردیبهشت &nbsp;&nbsp;</span> &nbsp;میدم
			</p>
		</p>

	<RouterLink to="/zabanindex" >
			<p style="font-family: iranb" class="bg-green-800 text-white p-2 py-4">ورود به بخش زبان</p>
	</RouterLink>

	<p  class="my-2 p-2 text-center" dir="rtl">
			<p v-html="react.poem" style="font-family: iranb;font-size: 4vw;">
			</p>
	</p>			
	<p>https://morteza7220.github.io//</p> <hr>
	<RouterLink to="/blogindex" >
			<p style="font-family: iranb" class="bg-green-800 text-gray-300 p-1">بخش مقالات ترجمه شده من</p>
	</RouterLink>
	<p>09107423309</p>

	<RouterLink to="/homeview" >
		<p style="font-family: iranb" class="mt-2 bg-green-800 text-white p-4 shadow-sm shadow-md shadow-black">ورود به بخش آموزش</p>
	</RouterLink>

	</div>
</div>
</template>


<style>

</style>