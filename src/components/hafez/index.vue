<script setup>
import {ref,reactive} from 'vue';

import {useHafez} from '@/stores/hafez';
const {arr} = useHafez();
// const id=ref(0);
// const poem=ref('');
const react=reactive({
  		id:0,
  		poem:''
});
react.id=Math.ceil(Math.random()*3);
// id.value=Math.ceil(Math.random()*3);

react.poem=arr[react.id]; 
// poem.value=arr[+(id.value)]; 
react.poem=react.poem.replace('@','<br>');
</script>

<template>
	<br><br><br>
	<div v-html="react.poem"></div>
	i am template index.vue 
</template>

