<script setup>
const counter=ref(0);
import {ref} from 'vue';

function form(event){
	console.log(event.target,'i am form');
}
function div(event){
	// console.log(event.target,'i am div');
}
function pp(event){
	// console.log(event.target,'i am pp');
}
</script>

<template>
<hr>	


<form class="bg-red-400 border-4 p-4" @click.capture="form($event)">FORM
	  <div class="bg-red-400 border-4 p-4" @click.capture="div($event)">DIV
		  <p class="bg-red-400 border-4 p-4" @click="pp($event)">P</p>
	  </div>
</form>


<hr>
	i am splash
<img style="animation-delay: 3s" class="w-[100vw] h-[30vh] border-4 bg-sky-300 fixed bottom-14" src="@/anim1.svg" />

<div class="">
	<div class="cont w-[30vw] ml-[40vw] h-[30vh]">
			<div class="cards" id="cards" @click="go($event)">
					<div class="card page  bg-blue-300 ">hi</div>
					<div class="card page  bg-green-700  hid z-10">hi</div>
					<div class="card page  bg-yellow-700 hid z-20">hi</div>
					<div class="card page  bg-red-100    hid z-30">hi</div>
					<div class="card page  bg-purple-700 hid z-40">hi</div>
				<!-- <div class="card page anim bg-green-900 z-50 mx-10" style="z-index: 99">hi</div> -->
				<!-- <div class="card back">bye</div> -->
			</div>
</div>
</div>
	
		


</template>


<style scoped>
.cont {
  /*border: 3px solid #CCC;*/
  perspective: 1400px;
}
.hid{
	display: none;
	visibility: hidden;
}
.cards {
	border: 2px  solid red;
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transform-style: preserve-3d;
  /*transform-origin: center center;*/
  transition: transform 1s;
}

/*.flipped {
  transform: rotateY(-180deg);
  transform-origin: left;
}*/

.page {
  /*background: purple;*/
  /*background: url('@/anim1.svg');*/
  /*background-size: 100%;*/
  /*background-repeat: none;*/
  /*transform: rotateY(10deg);*/
  transform-origin: left;
  transform: rotateY(0deg);
}
.anim{
  animation-name: yellow_to_blue_keyframe;
  animation-duration: 3s;
  /*animation-delay: 1s;*/
  animation-iteration-count: 1;
  /*animation-play-state: end;*/
  animation-fill-mode: start;
  transform-origin: left  
  /*animation-delay: 0s;*/
  /*animation-timing-function: linear;*/
}
@keyframes yellow_to_blue_keyframe{
  0%{
  	transform: rotateY(180deg)
    /*background-color: red;*/
    /*color:red;*/
  }
  100%{
  	transform: rotateY(0deg)
    /*background-color: blue;*/
    /*color:blue;*/
  }
}

.card {
  /*font-size: 10px;*/
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 30vw;
  color: white;
  text-align: center;
  font-weight: bold;
  /*font-size: 40px;*/
  /*backface-visibility: hidden;*/
  box-shadow: 1px 1px 5px 1px black;
  transform-origin: left;
}


</style>