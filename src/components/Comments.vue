<template>
  <div class="">
    <v-form ref="form">
      <v-text-field
        v-model="newPost.comment"
        label="コメント"
        required
      ></v-text-field>
      <v-btn color="primary" dark @click="createPost(newPost)">投稿する</v-btn>
      <v-btn color="primary" dark @click="showDb">DBデータ表示</v-btn>
    </v-form>

    <v-list three-line>
      <template v-for="(post, index) in posts">
        <v-list-item :key="index.toString()">
          <v-list-item-avatar>
            <v-img :src="post.fields.avatar.stringValue"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title
              v-html="post.fields.type.stringValue"
            ></v-list-item-title>
            <v-list-item-subtitle
              v-html="post.fields.comment.stringValue"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
  import axios from "axios";
  import firebase from "firebase/app";

  export default {
    async created() {
      console.log("created");
      const options = {
        method: "GET",
        url:
          "https://firestore.googleapis.com/v1/projects/apex-bbs/databases/(default)/documents/posts",
      };
      try {
        const res = await axios(options);
        this.posts = res.data.documents;
      } catch (e) {
        console.log(e);
      }
    },
    data() {
      return {
        newPost: { avatar: "", comment: "", no: "", psid: "", type: "" },
        posts: [],
      };
    },
    methods: {
      countUp() {
        this.count++;
      },
      async createPost({
        avatar = "",
        comment = "",
        no = "",
        psid = "",
        type = "",
      }) {
        const db = firebase.firestore();
        db.collection("posts")
          .add({
            avatar,
            comment,
            no,
            psid,
            type,
          })
          .then((docRef) => {
            const copy = this.posts.slice();
            this.posts = [
              {
                fields: {
                  avatar: { stringValue: avatar },
                  comment: { stringValue: comment },
                  no: { stringValue: no },
                  psid: { stringValue: psid },
                  type: { stringValue: type },
                },
              },
              ...copy,
            ];
            console.log(this.posts);
            this.newPost = [];
            console.log("Document written with ID: ", docRef.id);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      },
      async showDb() {
        const db = firebase.firestore();
        const data = await db
          .collection("posts")
          .get()
          .then((querySnapshot) => {
            console.log(querySnapshot);
            querySnapshot.forEach(() => {
              // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            });
          });

        console.log(data);
      },
    },
  };
</script>

<style></style>
