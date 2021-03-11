<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h1>
        Apex Legendsの固定パーティ・フレンド募集掲示板 エーペックス
        レジェンズ友達募集用掲示板
      </h1>
    </v-app-bar>

    <v-main>
      <!-- <PostComment /> -->
      <Comments />
      <!-- <FooterButtons /> -->
    </v-main>
  </v-app>
</template>

<script>
import Comments from "./components/Comments";
// import FooterButtons from "./components/FooterButtons";
// import PostComment from "./components/PostComment";
export default {
  name: "App",

  components: {
    Comments,
    // FooterButtons,
    // PostComment,
  },

  data: () => ({
    //
  }),
};
</script>
