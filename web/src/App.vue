<template>
  <NavBar></NavBar>
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import $ from 'jquery'

export default {
  components:{
    NavBar
  },
  setup() {
    $.ajax({
      url:"http://127.0.0.1:3000/user/account/token/",
      type:"post",
      data:{
        username:'wjw',
        password:'pwjw',
      },
      success(resp) {
        console.log(resp);
      },
      error(resp) {
        console.log(resp);
      } 
    });

    $.ajax({
      url:"http://127.0.0.1:3000/user/account/info/",
      type:"get",
      headers:{
        Authorization:"Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIwYWRkYzJmOTlkMjE0OGZkOGEwNDIwY2RiMWE0MTNkOCIsInN1YiI6IjIiLCJpc3MiOiJzZyIsImlhdCI6MTY3MzAxMDcxNCwiZXhwIjoxNjc0MjIwMzE0fQ.FOfrIc7TgKD0LNmuz7HUPWLP8I0WbwcSaGAxtTYWkLU",
      },
      success(resp) {
        console.log(resp);
      },
      error(resp) {
        console.log(resp);
      } 
    });

    $.ajax({
      url:"http://127.0.0.1:3000/user/account/register/",
      type:"post",
      data:{
        username:'yzc2',
        password:'123',
        confirmedPassword:'123',
      },
      success(resp) {
        console.log(resp);
      },
      error(resp) {
        console.log(resp);
      } 
    });
  }
}
</script>

<style>
body{
  background-image: url("./assets/images/background.png");
  background-size: cover;
}
</style>
