<template>
    <div id="app">
  <article>
    <div class="container" :class="{'sign-up-active' : signUp}">
      <div class="overlay-container">
      </div>
      <form class="sign-up" action="#">
        <h2>Create login</h2>
        <div>Use your email for registration</div>
        <br>
        <input class="signupinput" type="text" placeholder="Name" v-model="newuser.username"/>
        <br>
        <input class="signupinput" type="email" placeholder="Email" v-model="newuser.email"/>
        <br>
        <input class="signupinput" type="password" placeholder="Password"  v-model="newuser.password"/>
        <br>
        <button @click="newadmin()" class="buttonToaddUser">Sign Up</button>
      </form>

    </div>
  </article>
</div>
</template>

<script>
import axios from 'axios';

  export default {
    name:'signIn',
    data(){
      return{
        newuser: {
          username:"",
          email:"",
          password:"",
        }
      }
    },
    methods:{
      newadmin(){
        console.log(this.newuser)
        axios.post('http://localhost:3000/user/signup',this.newuser).then(()=>alert('creatred')).catch((error)=>console.log(error))
      }
    }
}
</script>

<style>
.signupinput{
  width: 500px;
  margin:2% 2% 0% 2%;
  border-radius: 10px;
  height: 50px;
  font-size: larger;
}
.buttonToaddUser{
  align-items: center;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 10px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  margin-top: 50px;
}

.btn1:active,
.btn1:hover {
  outline: 0;
}

.btn1 span {
  background-color: rgb(5, 6, 45);
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

.btn1:hover span {
  background: none;
}

@media (min-width: 768px) {
  .button-64 {
    font-size: 24px;
    min-width: 196px;
  }
}

</style>