<template>
<div>
  <div>Bot昵称：{{botname}}</div>
  <div>Bot战力：{{botrating}}</div>
</div>
  <router-view/>
</template>

<script>
import $ from 'jquery';
import { ref } from 'vue';

export default {
  name: "App",
  setup: () => {
    let botname = ref("");
    let botrating = ref("");

    $.ajax({
      url:"http://127.0.0.1:3000/pk/getbotinfo/",
      type:"get",
      success: resp => {
        botname.value = resp.name;
        botrating.value = resp.rating;
      }
    })
    return{
      botname,
      botrating,
    }
  }
}
</script>

<style>
body{
  background-image: url("./assets/background.png");
  background-size: cover;
}
</style>
