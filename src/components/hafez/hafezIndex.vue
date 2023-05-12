<script setup>
import {ref,reactive} from 'vue';
const react=reactive({
	'name':'',
	'age':''
})
import axios from 'axios';
// import {useHafez} from '@/stores/hafez';
// const {arr} = useHafez();
// // const id=ref(0);
// // const poem=ref('');
// const react=reactive({
//   		id:0,
//   		poem:''
// });
// react.id=Math.ceil(Math.random()*3);
// // id.value=Math.ceil(Math.random()*3);

// react.poem=arr[react.id]; 
// // poem.value=arr[+(id.value)]; 
// react.poem=react.poem.replace('@','<br>');
function go(){

	const a= new FormData();
	a.append('username',react.name);
	a.append('username',react.age);
	axios.post('http://localhost:8000/test/json',a).then((res)=>{
		if(res){console.log(res.data);}
	}).catch((err)=>{console.log('mori',err)});
}
</script>

<template>
	<br><br><br>

	<form @submit.prevent="go"    class="m-4 flex flex-col gap-4"> <br>
		<input type="text" v-model="react.name"			class=" border-2"> <br>
		<input type="text" v-model="react.age"			class=" border-2">
		<input type="submit" 	class=" border-2" value="submit">
	</form>
	<!-- <div v-html="react.poem"></div> -->
	i am template index.vue 
</template>

