<script setup>
  import {ref, onMounted} from 'vue';
  const trans=ref(null);
  const payelist=ref(null);

  const show_hide_trans=ref(0);
  const row_col_switch=ref(0);
  // onMounted(()=>{
      function go(){
        show_hide_trans.value=!show_hide_trans.value;
        row_col_switch.value=!row_col_switch.value;


        trans.value.style.right=+(show_hide_trans.value)?0:'-50vw';
        payelist.value.style.flexDirection=+(row_col_switch.value)?'column':'row';
        console.log(payelist.value.style.flexDirection);
      }
  // });
</script>


<template>
  
<div class="bg-blue-300 h-[200vh] overflow-scroll bg-red-300">
    
  <div ref="trans" class="fixed -right-[100vw] z-50 w-[50vw] min-h-[20vh] transition transition-all duration-1000 tran bg-lime-900 text-white flex flex-col gap-1  overflow-scroll bg-blue-300">

    <RouterLink to="/paye71index">
      <div class="text-center shadow shadow-red-900 p-5 m-2 w-[40vw]">درس اول</div>
    </RouterLink>

    <RouterLink to="/paye71">
      <div class="text-center shadow shadow-red-900 p-5 m-2 w-[40vw]">درس دوم</div>
    </RouterLink>

    <RouterLink to="/paye71">
      <div class="text-center shadow shadow-red-900 p-5 m-2 w-[40vw]">درس سوم</div>
    </RouterLink>

    <RouterLink to="/paye71">
      <div class="text-center shadow shadow-red-900 p-5 m-2 w-[40vw]">درس چهارم</div>
    </RouterLink>

    <RouterLink to="/paye71">
      <div class="text-center shadow shadow-red-900 p-5 m-2 w-[40vw]">درس پنجم</div>
    </RouterLink>
    <div class="bg-red-700 p-5 m-2">lesson one</div>
    <div class="bg-red-700 p-5 m-2">lesson one</div>
    <div class="bg-red-700 p-5 m-2">lesson one</div>
    <div class="bg-red-700 p-5 m-2">lesson one</div>
    <div class="bg-red-700 p-5 m-2">lesson one</div>

  </div>





<!-- <div class="flex flex-row-reverse flex-wrap justify-around "> -->
<div  ref="payelist" class="flex flex-row flex-wrap justify-around w-[100vw]">


<div @click="go" class="text-center shadow shadow-red-900 p-5 m-2 w-[40vw]">پایه هفتم</div>

  <RouterLink to="/paye71">
    <div class="text-center shadow shadow-red-900 p-5 m-2 w-[40vw]">پایه هشتم</div>
  </RouterLink>

  <RouterLink to="/paye71">
    <div class="text-center shadow shadow-red-900 p-5 m-2 w-[40vw]">پایه نهم</div>
  </RouterLink>

  <RouterLink to="/paye71">
    <div class="text-center shadow shadow-red-900 p-5 m-2 w-[40vw]">پایه دهم</div>
  </RouterLink>

  <RouterLink to="/paye71">
    <div class="text-center shadow shadow-red-900 p-5 m-2 w-[40vw]">پایه یازدهم</div>
  </RouterLink>

  <RouterLink to="/paye71">
    <div class="text-center shadow shadow-red-900 p-5 m-2 w-[40vw]">پایه دوازدهم</div>
  </RouterLink>


</div>




</div>




</template>
