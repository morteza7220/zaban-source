<script setup>
	import {ref,onMounted,computed} from 'vue';
	const mode=ref(1);
	const go=()=>{
		document.body.backgroundColor='black';
		// document.querySelector('.navbar').backgroundColor='black';
		console.log(document.body.backgroundColor);
	}

</script>
<template>
	<div @click="go">
		dark
	</div>

</template>