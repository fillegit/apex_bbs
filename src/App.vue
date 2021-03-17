<template>
  <v-app> 
    <!-- サイドメニュー -->
    <v-navigation-drawer app clipped v-model="drawer" class="sideMenu">
      <!-- ここにフィルター入れたい -->
    </v-navigation-drawer>

    <!-- ヘッダー -->
    <v-app-bar app clippedLeft flat color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer=!drawer"></v-app-bar-nav-icon>
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
    drawer: false
  }),
};
</script>

<style>
.sideMenu {
  border-right: 2px solid whitesmoke;
}
</style>