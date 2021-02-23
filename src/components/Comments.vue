<template>
  <div class="">
    <v-form ref="form">
      <v-text-field
        v-model="newPost.comment"
        label="コメント"
        required
      ></v-text-field>
      <v-btn color="primary" dark >投稿する</v-btn>
    </v-form>

   
  <v-list three-line>
    <template v-for="(comment, index) in comments">
      <v-list-item
          :key="index"
          avatar
      >
        <v-list-item-avatar>
          <img :src="comment.avatar">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-subtitle class="text--primary subheading">{{comment.comment}}</v-list-item-subtitle>
          <v-list-item-subtitle>
            <!-- {{comment.createdAt.toDate().toLocaleString()}} -->
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
        </v-list-item-action>
      </v-list-item>
      <v-divider :key="comment.id"></v-divider>
    </template>
  </v-list>
  </div>
</template>

<script>
//   import axios from "axios";
//   import firebase from "firebase/app";
    import {db} from '../plugins/firebase';


  export default {
    // async created() {
    //   console.log("created");
    //   const options = {
    //     method: "GET",
    //     url:
    //       "https://firestore.googleapis.com/v1/projects/apex-bbs/databases/(default)/documents/posts",
    //   };
    //   try {
    //     const res = await axios(options);
    //     console.log(res.data.documents);
    //     this.posts = res.data.documents;
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },
    data() {
      return {
        newPost: { avatar: "", comment: "", no: "", psid: "", type: "" },
        posts: [],
      comments: [],
      };
    },
     firestore() {
      return {
        // firestoreのcommentsコレクションを参照
        comments: db.collection('comments').orderBy("createdAt")

      }
    },
    methods: {
      countUp() {
        this.count++;
      },

      // async createPost({
      //   avatar = "",
      //   comment = "",
      //   no = "",
      //   psid = "",
      //   type = "",
      // }) {
      //   console.log(comment);
      //   const db = firebase.firestore();
      //   db.collection("posts")
      //     .add({
      //       avatar,
      //       comment,
      //       no,
      //       psid,
      //       type,
      //     })
      //     .then((docRef) => {
      //       const copy = this.posts.slice();
      //       this.posts = [
      //         {
      //           fields: {
      //             avatar: { stringValue: avatar },
      //             comment: { stringValue: comment },
      //             no: { stringValue: no },
      //             psid: { stringValue: psid },
      //             type: { stringValue: type },
      //           },
      //         },
      //         ...copy,
      //       ];
      //       console.log(this.posts);
      //       this.newPost = [];
      //       console.log("Document written with ID: ", docRef.id);
      //     })
      //     .catch((error) => {
      //       console.error("Error adding document: ", error);
      //     });
      // },
    },
  };
</script>

<style></style>
