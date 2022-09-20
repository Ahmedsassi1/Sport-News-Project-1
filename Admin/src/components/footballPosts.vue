<template>

    <label id="News" class="AllNews">
        <form id="post" v-for=" (post,index)  in obj" :key="index">


            <button class="deletebutton" @click="deletePost(post.id)">X</button>
            <li>{{post.title}}</li>
            <br />
            <img id="pictureofNews" v-bind:src="post.image" />
            <button class="themodificationparts" @click.prevent="showComments(post.id)"> showComments
                <br />

                <form id="comment" v-for=" (comment,index)  in AllComments" :key="index">
                    <ul v-if="show && comment.postId===post.id">
                        <li class="commentlist">{{comment.text}}</li>
                        <button class="deletebutton2" @click="deleteComment(comment.id)">X</button>
                        <br />
                    </ul>
                </form>
                <input type="text" v-model="data.text" />
                <button class="addcommentbutton" @click.prevent="addComment(post.id)">AddComment</button>
            </button>
            <button class="addcommentbutton" @click.prevent="update()">updatePost</button>
            <div v-if="updatepostcheck">

                <input type="text" v-model="data2.title" />
                <input type="text" v-model="data2.content" />
                <br />
                <button class="addcommentbutton" @click.prevent="updatePost(post.id),getall()">confirm</button>
            </div>
        </form>


    </label>
</template>

<script>
import axios from 'axios'
export default {
    mounted() {
        this.getFootBallPosts()
    },
    name: "footballNews",
    data() {
        return {
            obj: "",
            // Allposts: [],
            AllComments: [],
            show: false
        }
    },
    methods: {

        getFootBallPosts() {
            axios.get('http://localhost:3000/getOnePost/football'
            ).then((result) => {
                this.obj = result.data
                console.log({...this.obj});
            }).catch((err) => console.log(err))
        },

        getComments(id) {
            console.log(id);
            axios.get(`http://localhost:3000/comment/allComments/${id}`).then((result) => { this.AllComments = result.data }, console.log(this.AllComments)).catch((err) => console.log(err))
        },
        addComment(id) {
            this.data.postId = id
            console.log("data==>", this.data);
            axios.post(`http://localhost:3000/comment/add`, this.data).then((result) => { this.AllComments = result.data }).catch((err) => console.log(err))
        },
        deleteComment(id) {
            axios.delete(`http://localhost:3000/comment/delete/${id}`).then((result) => { console.log(result) }).catch((err) => console.log(err))
        },
        deletePost(id) {
            axios.delete(`http://localhost:3000/${id}`).then((result) => { console.log(result) }).catch((err) => console.log(err))
        },
        showComments(idComment) {
            this.show = !this.show
            this.getComments(idComment)
        }
    }
}
</script>