<template>
  <v-app>
    <!-- サイドメニュー -->
    <!-- <v-navigation-drawer app clipped v-model="drawer" class="sideMenu"> -->
    <!-- </v-navigation-drawer> -->

    <!-- ヘッダー -->
    <v-app-bar app clippedLeft flat dark class="apexColor">
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
      <div class="headerTitle">
        <h1 style="font-size: 20px">
          Apex Legends パーティ・フレンド募集掲示板
        </h1>
      </div>
    </v-app-bar>

    <v-main class="headerSize">
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
// import Vuetify from "vuetify/lib";

// const vuetify = new Vuetify({
//   theme: {
//     themes: {
//       light: {
//         primary: "#3f51b5",
//       },
//     },
//   },
// });

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
  margin: 0px auto 12px;
}
@media screen and (max-width: 767px) {
  .headerTitle {
    font-size: 8px;
  }
}

.sideMenu {
  border-right: 2px solid whitesmoke;
}

.apexColor {
  height: 50px !important;
  background-color: brown !important;
}

.headerSize {
  padding: 50px 0px 0px !important;
}
</style>