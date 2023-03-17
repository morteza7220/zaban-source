
<script setup>
import axios from 'axios';
import {ref,reactive} from 'vue';

const chatSocket = new WebSocket('ws://localhost:8000/zaban/match/iddmori/');

chatSocket.onclose = function(e) {
    console.error('socket match closed unexpectedly');
};
chatSocket.onmessage = function(e) {
    const data = JSON.parse(e.data);
    console.log(data); 
};

const form=reactive({
	username:'hamed',
	room___match:''
});

function socket_send_form_data(){
	chatSocket.send(JSON.stringify({'username_client': form.username,'age_client':'33',}));
}

function axios_get_oponent(){
	const f= new FormData();
	f.append('username',form.username);
	axios.post('http://localhost:8000/zaban/randd',f).then((res)=>{
			form.room___match=res.data.match_chat_room;
	const chatSocket = new WebSocket('ws://localhost:8000/zaban/match/go/'+form.room___match+'/');
	if (chatSocket) {
		window.location.pathname="startindex";
		window.chat=chatSocket;
	}
	})
}
</script>
<template>
<p>
	welcome to challenge
	<form @submit.prevent="socket_send_form_data">
		inter your username:
		<input type="text" v-model="form.username" class="border-2 border-black">
		<input type="submit" value="submit" class="border-2 border-black">
	</form>
<button @click="axios_get_oponent"   class="border-2 border-black w-[40vw]">rand axios_get_oponent</button>
<p>{{form.room___match}}</p>
</p>
	

</template>