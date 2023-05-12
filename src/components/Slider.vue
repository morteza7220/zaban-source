<script setup>
import {ref, onMounted, watch} from 'vue';

const prop=defineProps(['sliderLinks']);


</script>

<template>
			<div  v-for="(item,index) in sliderLinks">
			    <RouterLink :to="item">
			      <div class="text-center shadow shadow-red-900 p-5 m-2 w-[40vw] h-[12vh]">{{index}}</div>
			    </RouterLink>
			</div>
</template>