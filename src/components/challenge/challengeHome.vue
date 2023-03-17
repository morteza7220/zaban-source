<script setup>
import {ref,reactive} from 'vue';
import axios from 'axios';

const data=reactive({
	// 'username_from_localhost':window.localStorage.getItem('username') ?? document.cookie.split("=")[1],
	// 'username':localStorage.getItem('username') ?? 'defalut'
	// 'username':axios.get('localhost:8000/')
	'username':localStorage.getItem('username_in_localStorate') ?? 'you are not sign in'
	// 'username':axios.get('localhost:8000/')
});


</script>

<template>
<div class="flex-col justify-around p-5 bg-sky-400 space-y-4">
<p class="p-3 bg-black/20 text-center">به بخش رقاب خوش آمدید </p>
<p class="p-3 bg-black/20 text-center">نام کاربری شما از لوکال استوریج {{data.username}}</p>
<p class="p-3 bg-black/20 text-center">رقیب تصادفی</p>


</div>
</template>

