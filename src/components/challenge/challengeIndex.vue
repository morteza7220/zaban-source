<script setup>
import {ref, reactive} from 'vue';
// import axios from 'axios';
import TestView from '@/views/TestView.vue';
const data=reactive({
	// 'username_from_localhost':window.localStorage.getItem('username') ?? document.cookie.split("=")[1],
	// 'username':localStorage.getItem('username_in_localStorate') ?? 'you are not sign in'
});
//if user signed in already __redirect it to challengeHome page
if (data.username) 
{
	window.location.href="/challengehome";	 
}
</script>

<template>


<div class="flex-col justify-around p-5 bg-sky-400 text-center" style="font-family: iranb">

<p>به بخش رقاب خوش آمدید </p>

<div>{{data.username?"hi "+ data.username:'برای رقابت باید ورود به سایت'}}</div>

<p>این بخش هنوز راه اندازی کامل نشده است</p>
<p dir="rtl">در حال بروزرسانی........</p>

<TestView/>

</div><!--  flex col container -->
</template>
