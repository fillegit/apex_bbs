<template>
  <v-app>
    <!-- サイドメニュー -->
    <!-- <v-navigation-drawer app clipped v-model="drawer" class="sideMenu"> -->
    <!-- </v-navigation-drawer> -->

    <!-- ヘッダー -->
    <v-app-bar app clippedLeft flat color="primary" dark>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
      <div class="headerTitle">
        <h1>
          Apex Legendsフレンド募集掲示板
          エーペックスレジェンズパーティ募集用掲示板
        </h1>
      </div>
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
    drawer: false,
  }),
};
</script>

<style>
.headerTitle {
  /* margin: 0 auto; */
}
@media screen and (max-width: 767px) {
  .headerTitle {
    font-size: 8px;
  }
}

.sideMenu {
  border-right: 2px solid whitesmoke;
}
</style>