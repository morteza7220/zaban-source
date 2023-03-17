<script setup>
	import {ref,onMounted,computed} from 'vue';
	const mode=ref(1);
	// const go=()=>{
		// document.body.backgroundColor='black';
		// document.querySelector('.navbar').backgroundColor='black';
		// console.log(document.body.backgroundColor);
	// }
</script>

<template>
	<div class="fixed flex flex-row justify-around bottom-0 h-[12vh] w-[100vw] py-4 bg-blue-900 text-white" style="font-family: iranb;box-shadow: 0px 0px 8px 5px gray">
		<slot></slot>
	</div>

</template>