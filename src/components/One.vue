<script setup>
import {ref} from 'vue';

const counter=ref(0);
const cards=ref(null);

function pass(){
	// i use this for event capture 
}

function go(event){
	console.log(counter.value);

	if(counter.value==0){
			console.log(event.target,'here counter is above =>1 nad evetn target parent id==cards');
			// cards.value.childNodes[counter.value].classList.toggle('hidden');
			cards.value.childNodes[counter.value].classList.toggle('anim');
			// cards.value.childNodes[counter.value].classList.toggle('hidden');
			// event.target.childNodes[counter.value].classList.toggle('hid');
				}else{

			console.log(event.target,'here counter is above =>1 nad evetn target parent id==cards');
			// cards.value.childNodes[counter.value-1].classList.toggle('hidden');
			// cards.value.childNodes[counter.value-1].classList.toggle('bg-transparent');
			cards.value.childNodes[counter.value].classList.toggle('hidden');
			cards.value.childNodes[counter.value].classList.toggle('anim');
			// event.target.childNodes[counter.value].classList.toggle('hid');
				
				}
	counter.value++;
	console.log(counter.value);
}

</script>

<template>
	i am splash
<!-- <div class="fixed bottom-[10vh] h-[50vh] w-[48vw] bg-red-300 z-[99]"></div>	 -->
<!-- <img style="animation-delay: 3s" class="w-[100vw] h-[30vh] border-4 bg-sky-300 fixed bottom-14" src="@/anim1.svg" /> -->
<div class="">
	<!-- <div class="cont w-[30vw] ml-[40vw] h-[30vh]"> -->
			<div class="fixed bottom-[10vh] cont w-[100vw] h-[50vh]  border-2 border-black" id="cards" @click.capture="go($event)" ref="cards">

				<img class="w-[44vw] ml-[50vw] h-[49vh] fixed page bg-blue-300"     style="z-index: 1;"   @click="pass" />
				<div class="w-[44vw] ml-[50vw] h-[49vh] fixed page  bg-green-700  hidden" style="z-index:1" @click="pass">من یک کلمه هستم</div>
				<div class="w-[44vw] ml-[50vw] h-[49vh] fixed page  bg-blue-700   hidden" style="z-index:1" @click="pass">i am going to </div>
				<div class="w-[44vw] ml-[50vw] h-[49vh] fixed page  bg-red-900    hidden" style="z-index:1" @click="pass">love kindness</div>
				<div class="w-[44vw] ml-[50vw] h-[49vh] fixed page  bg-purple-800 hidden" style="z-index:1" @click="pass">hi</div>
				<div class="w-[44vw] ml-[50vw] h-[49vh] fixed page  bg-purple-100 hidden" style="z-index:1" @click="pass">hi</div>
				<div class="w-[44vw] ml-[50vw] h-[49vh] fixed page  bg-black 	    hidden" style="z-index:1" @click="pass">hi</div>
			</div>
<!-- </div> -->
</div><!-- 
<div class="cont flex overflow-scroll w-[100vw] border-2 " style="position: relative;
  display: block;  overflow: visible;">
		<div class="card bg-black anim2 w-[20vw] h-[14vh] mx-[20vw]" style="z-index:7;backface-visibility: visible;">hi</div>
</div> -->
</template>
<style scoped>

.cards {
  perspective: 1400px;
  position: relative;
  cursor: pointer;
  transition: transform 1s;
}
.page {
  backface-visibility: visible;
  transform-origin: left;
  /*transform: rotateY(0deg);*/
  /*backface-visibility: vis*/
}
.anim{
  animation-name: key1;
  animation-duration: 2s;
  /*animation-delay: 1s;*/
  animation-iteration-count: 1;
  animation-play-state: end;
  animation-fill-mode: start;
  transform-origin: left  
  /*animation-delay: 0s;*/
  /*animation-timing-function: linear;*/
}

@keyframes key1{
  0%{
  	transform: rotateY(-180deg)
    /*background-color: red;*/
    /*color:red;*/
  }
  100%{
  	transform: rotateY(0deg)
    /*background-color: blue;*/
    /*color:blue;*/
  }
}

.anim2{
  animation-name: anim2key;
  animation-duration: 3s;
  /*animation-delay: 1s;*/
  animation-iteration-count: infinite;
  /*animation-play-state: end;*/
  animation-fill-mode: end;
  /*transform-origin: left;  */
  /*animation-delay: 0s;*/
  /*animation-timing-function: linear;*/
}
@keyframes anim2key{
  0%{
  	transform: rotateY(0deg)
    /*background-color: red;*/
    /*color:red;*/
  }
  100%{
  	transform: rotateY(-360deg)
    /*background-color: blue;*/
    /*color:blue;*/
  }
}
.card {
  /*font-size: 10px;*/
  position: absolute;
  /*width: 100%;*/
  /*height: 100%;*/
  line-height: 30vw;
  color: white;
  text-align: center;
  font-weight: bold;
  /*font-size: 40px;*/
  /*backface-visibility: hidden;*/
  box-shadow: 1px 1px 5px 1px black;
  transform-origin: right;
}


</style>
