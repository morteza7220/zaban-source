const go=333;
export default {'go':go};


import {defineStore} from 'pinia';
import {ref,reactive,onMounted} from 'vue';

// const a = ref(0);
const xx = defineStore('match',()=>{
	const a = ref(0);
	function inc(){
		a.value+=1;
		return a.value;
	}
	return {a,inc}
})


export {xx}



// export const matchStore= defineStore('match',()=>{



// 	return {a,go}

// })

// import {matchStore} from '@/stores/match';

// a=matchStore().a
// go=matchStore().go
// or

// const {a, go} = matchStore();