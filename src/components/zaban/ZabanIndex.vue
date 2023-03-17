<script setup>
  import Slider from '../../components/Slider.vue';
  import {ref} from 'vue';
  const arr_7={'درس اول':'paye71index','درس دوم':'paye72index','درس سوم':'paye73index','درس چهارم':'paye74index','درس پنجم':'paye75index','درس ششم':'paye76index','درس هفتم':'paye77index','درس هشتم':'paye78index'};

  const arr_8={'درس یک':'paye81index','درس دوم':'paye82index','درس سوم':'paye83index','درس چهارم':'paye84index','درس پنجم':'paye85index','درس ششم':'paye86index','درس هفتم':'paye87index'};


  const show_hide_slider=ref(1);
  const sliderdiv=ref(null);
  const slider_cont=ref(null);
  function goo(event,ss){
    if (ss==7) {
      slider_cont.value=arr_7;
    }else{
      slider_cont.value=arr_8;
    }
      show_hide_slider.value=!show_hide_slider.value;
      sliderdiv.value.style.right=+(show_hide_slider.value)?'-50vw':0;
  }
</script>
 
<template>

<!----------------- slider wrapper -------------------->
<div ref="sliderdiv" style="z-index: 99;font-family: iranb"  
     class="fixed flex flex-col overflow-scroll w-[50vw] h-[70vh] justify-start top-[10vh] -right-[100vw] bg-green-900/90 text-white py-5 transition transition-all duration-500">
        <Slider :sliderLinks='slider_cont' ></Slider>
</div>
<!-- ------------------------------------------------- -->
    <!--  container for left and right column( paye column and svgs column) -->
<div class="flex flex-row-reverse py-4 bg-blue-300">
        <!-- column one == svg's -->
    <div class="w-[50vw] flex h-[65vh] flex-col justify-start overflow-scroll overflow-hidden">
  <p class="text-center shadow-2xl p-1 text-right" style="font-family: iranb;font-size: 10px;">کل محتوای سایت در حال بروزرسانی هست <br><b> در حال حاضر فقط پایه هفتم و هشتم بروزرسانی های اصلی را دارند</b></p>
            <img style="animation-delay: 2s" class="p-0 m-0  m-2 w-[40vw] h-[20vh]" src="@/assets/svgs/anim6.svg" />
            <img style="animation-delay: 2s" class="p-0 m-0  m-2 w-[40vw] h-[20vh]" src="@/assets/svgs/anim7.svg" />
            <img style="animation-delay: 2s" class="p-0 m-0  m-2 w-[40vw] h-[20vh]" src="@/assets/svgs/anim5.svg" />
    </div>

      <!-- column two   links paye -->
    <div class="w-[50vw] flex h-[65vh] flex-col justify-start overflow-scroll overflow-hidden" style="font-family: iranb;">

              <div @click="goo($event,7)">
                <div class="text-center pt-5 m-2 w-[40vw] h-[12vh] shadow-md shadow-gray-900">پایه هفتم</div>
              </div>

              <div @click="goo($event,8)">
                <div class="text-center pt-5 m-2 w-[40vw] h-[12vh] shadow shadow-gray-900">پایه هشتم</div>
              </div>

              <RouterLink to="/paye9index">
                <div class="text-center pt-5 m-2 w-[40vw] h-[12vh] shadow-md shadow-gray-900">پایه نهم</div>
              </RouterLink>
              
              <RouterLink to="/zabanindex" disable>
                <div class="text-center pt-5 m-2 w-[40vw] h-[12vh] shadow shadow-gray-900">پایه دهم</div>
              </RouterLink>
              
              <RouterLink to="/zabanindex">
                <div class="text-center pt-5 m-2 w-[40vw] h-[12vh] shadow-md shadow-gray-900">پایه یازدهم</div>
              </RouterLink>
              
              <RouterLink to="/zabanindex">
                <div class="text-center pt-5 m-2 w-[40vw] h-[12vh] shadow shadow-gray-900">پایه دوازدهم</div>
              </RouterLink>
    </div>
</div>

</template>
