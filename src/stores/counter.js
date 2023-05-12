import { ref, computed,reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  function increment() {
    count.value++
  }

  const doubleCount = computed(() => count.value * 2)

  return { count, doubleCount, increment }
})




// export const matchStore= defineStore('match',()=>{



// 	return {a,go}

// })

// import {matchStore} from '@/stores/match';

// a=matchStore().a
// go=matchStore().go
// or

// const {a, go} = matchStore();