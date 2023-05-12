<script setup>
	import {ref, onMounted} from 'vue';
	const trans=ref(null);
	const show_hide_trans=ref(0);
	// onMounted(()=>{
			function go(){
				console.log('hihi');
				show_hide_trans.value=!show_hide_trans.value;
				trans.value.style.opacity=+(show_hide_trans.value);
			}
	// });
</script>
<template>
	<p id="t" @click="go">
		<pre>
			Hi class.
			Hello teacher.
			<p id='tt'> I am morteza your new teacher.</p>
			my name is morteza indeed.
			who are you guys. babe.
			not big deal.
			thank you and goodbuy yoyo.
		</pre>
	</p>
		
	<div ref="trans" class="fixed bottom-0 z-50 w-[100vw] min-h-[20vh] transition transition-all duration-1000 tran bg-lime-900 text-white flex">traslation is here</div>	
</template>
