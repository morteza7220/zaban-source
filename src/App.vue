<script setup>
import {ref} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import DarkMode from './components/DarkMode.vue';
import Tabs from './components/Tabs.vue';
import Splash from './components/Splash.vue';
// import match from './components/zaban/matchs/match71.vue';
// import useCounterStore from '@/stores/counter.js';

// function go_emit(e){
//   console.log('calling method....',e);
// }
// import {xx} from '@/stores/match';
// const {a,inc} = xx();
// function go3(e){
//   inc();
//   console.log(xx().a); 
// }

const show_hide_splash=ref(1);
const show_hide_home=ref(0);


</script>

<template>
<!-- <match /> -->
<div class="navbar">
    <Navbar>
    
          <RouterLink to="/" class="mx-2 my-2 border-b border-b-white md:p-2 md:m-2">خانه</RouterLink>
          <RouterLink to="/blogindex" class="mx-2 my-2 border-b border-b-white md:p-2 md:m-2">وبلاگ شخصی</RouterLink>
          <RouterLink to="/challengeindex" class="mx-2 my-2 border-b border-b-white md:p-2 md:m-2">مسابقه</RouterLink>

      </Navbar>
</div> <!-- end of navbar wrapper(this use just for z-index) -->


<div class="fixed top-[10vh] h-[70vh] w-[100vw]"> 
<!-- <p @click="go3">i am a paragracph</p> -->
        <RouterView />
</div>

<div style="z-index:90;">
        <Tabs>
          <RouterLink to="/challengeindex" class="p-2 m-0 text-xs">مسابقه</RouterLink>
          <RouterLink to="/blogindex" class="p-2 m-0 text-xs">وبلاگ </RouterLink>          
          <RouterLink to="/zabanindex" class="p-2 m-0 text-xs">بخش زبان</RouterLink>
          <RouterLink to="/" class="p-2 m-0 text-xs">خانه</RouterLink>
        </Tabs>
</div>
      
</template>

<style scoped>
.navbar{
  z-index: 99;
}
.router-link-exact-active {
  color: #fff;
  font-weight: 900;
  background-color: #36f;
  box-sizing: border-box;
}

router-link-exact-active:hover {
  background-color: transparent;
}

</style>
