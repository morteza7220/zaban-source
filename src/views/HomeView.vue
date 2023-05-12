
<script setup>

</script>

<template>
<div class="p-2 text-center w-full h-[65vh] py-5" style="background-color: lightblue;">
		<p style="font-family: iranb">آموزشگاه مجازی مهر</p>

		<img class="m-3 w-[85vw] h-[30vh] border-4 bg-sky-300" src="@/assets/svgs/anim5.svg" />
		<RouterLink to="/zabanindex" >
		<p style="font-family: iranb" class="mt-8 bg-blue-600 text-white p-4 shadow-md shadow-black">ورود </p>
		</RouterLink>
</div>
</template>
<style scoped>
	
@keyframes key9{
	0%{
		width: 10vw;
	}
	100%{
		width: 100vw;
	}
}
.go{
	animation: 1s infinite forwards key9 ;
}

</style>
