<script setup>
import {ref} from 'vue';
</script>

<template>
<div class="flex flex-col justify-around gap-3 pt-[7vh]">
	
	<RouterLink to="/articleindex">
			<p style="font-family: iranb" class="bg-green-800 text-white text-center p-3">بخش مقالات ترجمه شده من</p> 
	</RouterLink>

	<RouterLink to="/ericfroom">
			<p style="font-family: iranb" class="bg-green-800 text-white text-center p-3">گزیده کتاب های روانشناسی-فلسفی</p>
	</RouterLink>
	
	<RouterLink to="/blogindex">
			<p style="font-family: iranb" class="bg-green-800 text-white text-center p-3">معرفی فیلم و کتاب</p>
	</RouterLink>


	<RouterLink to="/beting">
			<p style="font-family: iranb" class="bg-green-800 text-white text-center p-3">.......در حال بروزرسانی</p>
	</RouterLink>


</div>
</template>

