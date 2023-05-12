<script setup>
	import axios from 'axios';
	import {ref, reactive} from 'vue';

	const switch_login_signup=ref(true);
	function switch_forms(){
		switch_login_signup.value=!switch_login_signup.value;
	}
	const form=reactive({
		name:'',
		username:'',
		password:''
	}); 

	function signup(){
		const formData = new FormData();
		formData.append('name', form.name);
		formData.append('username',form.username);
		formData.append('password', form.password);
		axios.post('http://localhost:8000/zaban/signup', formData).then((a)=>{	
			console.log(a.data);
			if (a.data.is_done==100) {
				go_to_page_mori();
			} 
		});
	}

		function go_to_page_mori(){
			// console.log('i am go_to_page_mori method'); 
			console.log(window.location);
			window.location.href="/challengehome"; 
		}
	function login(){
		const formData = new FormData();
		formData.append('name', form.name);
		formData.append('username',form.username);
		formData.append('password', form.password);
		axios.post('http://localhost:8000/zaban/signin', formData).then((a)=>{	
		console.log(a.data);
			if (a.data.username_sending_client) {
				window.localStorage.setItem('username_in_localStorate',a.data.username_sending_client.toString())
				console.log('log in ok',a.data); 
				// TODOOOOOOOOOOOOOOOO  this url must add to {props} in {testview} component
				// go_to_page_mori();
				window.location.href="/challengehome"; 
			} 
		});
	}

		// axios({
		//   method: 'post',
		//   url: 'http://localhost:8000/mosi/test',bb
		// }).then(res=>{
		// 	console.log(res.data); 
		// });
</script>
<template>
<div class="w-[90vw] h-[65vh] mx-auto mt-2  px-2 bg-blue-200" 
	style="font-family: iranb;background: url(src/assets/back1.jpg)" dir="rtl">

	<form v-show="!switch_login_signup" @submit.prevent="signup" class="flex flex-col gap-1 p-5">
		نام :<br>
			<input type="text" v-model="form.name" class="w-full bg-black/20 border-2" />
		نام کاربری:<br>
			<input type="text" v-model="form.username" class="w-full bg-black/20 border-2" />
		پسورد:<br>
			<input type="password" v-model="form.password" class="w-full bg-black/20 border-2" />
		<br>
			<input type="submit" class="w-full bg-black/40 border-2 mt-4" value="ثبت نام" />

	</form>	
	
	<form v-show="switch_login_signup" @submit.prevent="login" class="flex flex-col gap-1 p-5">

		نام کاربری:<br>
			<input type="text" v-model="form.username" class="w-full bg-black/20 border-2" />
		پسورد:<br>
			<input type="password" v-model="form.password" class="w-full bg-black/20 border-2" />
		<br>
			<input type="submit" class="w-full bg-black/40 border-2 mt-4" value="ورود به پنل" />

	</form>	
	<p @click="switch_forms()">{{switch_login_signup? 'هنوز ثبت نام نکرده ام' : 'ورود به صفحه ورود'}}</p>
	<!-- <p @click="go_to_page_mori()">go to create new question view</p> -->


</div>
</template>
