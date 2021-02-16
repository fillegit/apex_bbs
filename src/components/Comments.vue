<template>
  <div class="">
    <v-form ref="form">
      <v-text-field
        v-model="newComment"
        label="コメント"
        required
      ></v-text-field>
      <v-btn color="primary" dark @click="createPost(newComment)">投稿</v-btn>
    </v-form>
    <v-list three-line>
      <template v-for="comment in comments">
        <v-list-item :key="comment.title">
          <v-list-item-avatar>
            <v-img :src="comment.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="comment.type"></v-list-item-title>
            <v-list-item-subtitle
              v-html="comment.comment"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
  export default {
    created() {
      console.log("created");
    },
    data() {
      return {
        newComment: "",
        comments: [
          {
            id: 0,
            no: "517794",
            date: "02月15日",
            psid: "chacha-nikidasu",
            comment:
              "自分はゴールドの4です 一緒にほどよく楽しく遊べると嬉しいです",
            type: "PS4",
            avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          },
          {
            id: 1,
            no: "517793",
            date: "02月14日",
            psid: "gawaratic",
            comment:
              "プラチナランクご一緒できる方お願いします！ アラサー社会人です！",
            type: "PS4",
            avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          },
          {
            id: 2,
            no: "517792",
            date: "02月13日",
            psid: "harucchikamino",
            comment:
              "プラチナ帯@2募集(出来ればダイヤ経験者) 今、後90くらいでダイヤなのでサクッとちゃんぽん取りに行きたいです。キャラ構成は、任せます。レイス、オクタン、レブ、ライフライン、くらいなら使えます。 レイスは縦ハン爪痕です。よかったら来てください。 EAID GF-harucchi",
            type: "PS4",
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          },
        ],
      };
    },
    methods: {
      countUp() {
        this.count++;
      },
      createPost(comment) {
        console.log(comment);
        const copy = this.comments.slice();
        const newId = copy[copy.length - 1].id + 1;
        this.comments = [{ comment: this.newComment, id: newId }, ...copy];
        this.newComment = "";
      },
    },
  };
</script>

<style></style>
