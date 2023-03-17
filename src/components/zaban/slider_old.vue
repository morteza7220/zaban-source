<script setup>
  import {ref, onMounted} from 'vue';
  import sliderCom from '../../components/Slider.vue';
  const slider=ref(null);
  // const payelist=ref(null);

  const show_hide_slider=ref(1);

  function go(){
      show_hide_slider.value=!show_hide_slider.value;

      slider.value.style.right=+(show_hide_slider.value)?'-50vw':0;
        // payelist.value.style.flexDirection=+(row_col_switch.value)?'column':'row';
  }
</script>


<template>
  <SliderCom arr='mori'/>
<div class="flex flex-row-reverse gap-0 m-0 p-0"><!--  container for left and right column( paye column and svgs column) -->
  <div class="  flex w-[50vw] h-[100vh] flex-wrap-reverse gap-0 my-0 py-0 justify-between">
  <img style="animation-delay: 3s" class="w-[40vw] h-[13vh] shadow-md bg-sky-300" src="@/anim2.svg" />
  <img style="animation-delay: 3s" class="w-[40vw] h-[13vh] shadow-md bg-sky-300" src="@/anim2.svg" />
  <img style="animation-delay: 3s" class="w-[40vw] h-[13vw] shadow-md bg-sky-300" src="@/anim2.svg" />
  </div>

<!-- <div class="flex flex-row-reverse flex-wrap justify-around "> -->
<div  ref="payelist" class="w-[50vw]">
    <div @click="go" class="text-center shadow shadow-red-900 p-5 m-2 w-[40vw]">
        پایه هفتم
    </div>
    <div ref="payelist" @click="go">
      <div class="text-center shadow shadow-red-900 p-5 m-2 w-[40vw]">پایه هشتم</div>
    </div>
    <RouterLink to="/paye8index">
      <div class="text-center shadow shadow-red-900 p-5 m-2 w-[40vw]">پایه نهم</div>
    </RouterLink>
    <RouterLink to="/paye8index">
      <div class="text-center shadow shadow-red-900 p-5 m-2 w-[40vw]">پایه دهم</div>
    </RouterLink>
    <RouterLink to="/paye8index">
      <div class="text-center shadow shadow-red-900 p-5 m-2 w-[40vw]">پایه یازدهم</div>
    </RouterLink>
    <RouterLink to="/paye8index">
      <div class="text-center shadow shadow-red-900 p-5 m-2 w-[40vw]">پایه دوازدهم</div>
    </RouterLink>
</div>




</div>





        <!-- slider menu from right -->
<div class="bg-blue-200 flex  h-[90vh] overflow-scroll bg-red-300 fixed top-[20vh] -right-[100vw] z-50" style="z-index: 99">
    
  <div ref="slider" class="fixed h-[80vh] top-[20vh] -right-[100vw] z-50 w-[50vw] transition transition-all duration-1000 bg-lime-900 text-white flex flex-col overflow-scroll gap-y-5 bg-blue-300">


</div>



</div>




</template>
