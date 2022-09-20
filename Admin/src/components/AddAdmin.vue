<template>
    <div id="addadmin">
        <article>
            <div class="container" :class="{'sign-up-active' : signUp}">
                <div class="overlay-container">
                </div>
                <form class="sign-up" action="#">
                    <h2>Create Admin</h2>
                    <div>Use your email for registration</div>
                    <br>
                    <input type="text" class="addadmin" placeholder="Name" v-model="infos.adminName" />
                    <br>
                    <input type="email"  class="addadmin" placeholder="Email" v-model="infos.email" />
                    <br>
                    <input type="password"  class="addadmin" placeholder="Password" v-model="infos.password" />
                    <br>
                    <button @click.prevent = "newadmin()">Sign Up</button>
                </form>
            </div>
        </article>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AddAdmin',
    data() {
        return{ infos :{
            adminName: "",
                email : "",
                password : ""
        }}
    },
    methods: {
        newadmin() {
            console.log(this.infos)

            axios.post('http://localhost:3000/addAdmin', this.infos).then((result)=> console.log(result)).catch((err)=> console.log(err))

        }

    }
}
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&family=Quicksand&display=swap');
    
    .container {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      color: azure;
      margin: 0% 10% 0% 12%;
    }
    .addadmin{
        margin: 1%
    }
    </style>