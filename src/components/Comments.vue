<template>
  <div class="mainBackground">
    <div class="mainBody">
      <!--検索条件-->
      <v-container>
        <h3>絞り込み条件</h3>
        <v-layout wrap class="topFilter">
          <v-flex sm4 md4 lg4>
            <h4>プラットフォーム</h4>
            <select class="selectBox" v-model="searchCondition.platform">
              <option value="">条件なし</option>
              <option
                v-for="(v, i) in platforms"
                :key="i"
                :value="v"
                v-text="v"
              ></option>
            </select>
          </v-flex>
          <!-- <v-flex>
            <h4>VC</h4>
            <select class="selectBox" v-model="searchCondition.vc">
              <option value="">VCを選択してください</option>
              <option
                v-for="(v, i) in vcs"
                :key="i"
                :value="v"
                v-text="v"
              ></option>
            </select>
          </v-flex> -->
          <v-flex sm4 md4 lg4>
            <h4>投稿者のランク</h4>
            <select class="selectBox" v-model="searchCondition.rank">
              <option value="">条件なし</option>
              <option
                v-for="(v, i) in ranks"
                :key="i"
                :value="v"
                v-text="v"
              ></option>
            </select>
          </v-flex>
          <!-- <v-flex>
            <h4>あなたの今までの最高ランク</h4>
            <select class="selectBox" v-model="searchCondition.maxRank">
              <option value="">ランクを選択してください</option>
              <option
                v-for="(v, i) in maxRanks"
                :key="i"
                :value="v"
                v-text="v"
              ></option>
            </select>
          </v-flex> -->
          <v-flex>
            <h4>プレイスタイル</h4>
            <select class="selectBox" v-model="searchCondition.playstyle">
              <option value="">条件なし</option>
              <option
                v-for="(v, i) in playstyles"
                :key="i"
                :value="v"
                v-text="v"
              ></option>
            </select>
          </v-flex>
        </v-layout>
        <!-- <v-layout wrap>
          <v-flex sm5 md5 lg5>
            <h4>自分のキャラクター</h4>
            <div v-for="(v, i) in myCharacters" :key="i">
              <input
                :id="'filterMyCharacter' + i"
                type="checkbox"
                :value="v"
                v-model="searchCondition.myCharacter"
              />
              <label :for="'filterMyCharacter' + i">{{ v }}</label>
            </div>
          </v-flex>
          <v-flex>
            <h4>欲しいキャラ</h4>
            <div v-for="(v, i) in seekingCharacters" :key="i">
              <input
                :id="'filterSeekingCharacter' + i"
                type="checkbox"
                :value="v"
                v-model="searchCondition.seekingCharacter"
              />
              <label :for="'filterSeekingCharacter' + i">{{ v }}</label>
            </div>
          </v-flex>
        </v-layout> -->
        <!-- <div>
        <h5>獲得バッチ</h5>
        <select class="selectBox" v-model="searchCondition.badge">
          <option value="">獲得したバッチを選択してください</option>
          <option
            v-for="(v, i) in badges"
            :key="i"
            :value="v"
            v-text="v"
          ></option>
        </select>
      </div> -->
      </v-container>
      <!--検索条件/-->

      <div>
        <!--フォームの表示ボタン-->
        <div class="postButton">
          <v-btn @click="showCreateForm">
            <v-icon>投稿フォームを開く</v-icon>
          </v-btn>
        </div>
        <v-dialog v-model="displayForm" max-width="700px">
          <!--コメント入力フォーム-->
          <v-card>
            <v-container>
              <div class="inputFormLine">
                <h3>投稿フォーム</h3>
              </div>
              <v-layout wrap class="inputFormLine">
                <v-flex sm6 md6 lg6>
                  <h4>プラットフォーム</h4>
                  <select class="selectBox" v-model="inputPlatform">
                    <option
                      v-for="(v, i) in platforms"
                      :key="i"
                      :value="v"
                      v-text="v"
                    ></option>
                  </select>
                </v-flex>
                <v-flex sm6 md6 lg6>
                  <h4>あなたの現在のランク</h4>
                  <select class="selectBox" v-model="inputRank">
                    <option
                      v-for="(v, i) in ranks"
                      :key="i"
                      :value="v"
                      v-text="v"
                    ></option>
                  </select>
                </v-flex>
                <!-- <v-flex>
                  <h4>VC</h4>
                  <select class="selectBox" v-model="inputVc">
                    <option
                      v-for="(v, i) in vcs"
                      :key="i"
                      :value="v"
                      v-text="v"
                    ></option>
                  </select>
                </v-flex> -->
              </v-layout>
              <!-- <v-layout wrap class="inputFormLine"> -->

              <!-- <v-flex>
                  <h4>あなたの今までの最高ランク</h4>
                  <select class="selectBox" v-model="inputMaxRank">
                    <option
                      v-for="(v, i) in maxRanks"
                      :key="i"
                      :value="v"
                      v-text="v"
                    ></option>
                  </select>
                </v-flex> -->
              <!-- </v-layout> -->
              <v-layout wrap class="inputFormLine">
                <v-flex sm6 md6 lg6>
                  <h4>プレイスタイル</h4>
                  <select class="selectBox" v-model="inputPlaystyle">
                    <option
                      v-for="(v, i) in playstyles"
                      :key="i"
                      :value="v"
                      v-text="v"
                    ></option>
                  </select>
                </v-flex>
                <v-flex sm5 md5 lg5>
                  <h4>ID（必須）</h4>
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field
                      v-model="inputPlayerId"
                      :rules="idRules"
                      label=""
                      required
                      class="mt-0 pt-0"
                    ></v-text-field>
                  </v-form>
                </v-flex>
              </v-layout>
              <v-layout wrap class="inputFormLine">
                <!-- <v-flex>
                  <h4>自分のキャラクター</h4>
                  <div v-for="(v, i) in myCharacters" :key="i">
                    <input
                      :id="'inputMyCharacter' + i"
                      type="checkbox"
                      :value="v"
                      v-model="inputMyCharacter"
                    />
                    <label :for="'inputMyCharacter' + i">{{ v }}</label>
                  </div>
                </v-flex> -->
                <v-flex>
                  <h4>欲しいキャラ</h4>
                  <div class="formCharacters">
                    <div
                      v-for="(v, i) in seekingCharacters"
                      :key="i"
                      class="formCharacter"
                    >
                      <input
                        :id="'inputSeekingCharacter' + i"
                        type="checkbox"
                        :value="v"
                        v-model="inputSeekingCharacter"
                      />
                      <label :for="'inputSeekingCharacter' + i">{{ v }}</label>
                    </div>
                  </div>
                </v-flex>
              </v-layout>
              <h4>コメント</h4>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="inputComment"
                  :rules="commentRules"
                  label=""
                  required
                  class="mt-0 pt-0"
                  style="white-space: pre-wrap; word-wrap: break-word"
                ></v-text-field>
                <!-- <div>
                <h4>獲得バッチ</h4>
                <select class="selectBox" v-model="inputBadge">
                  <option disabled value="">
                    獲得したバッチを選択してください
                  </option>
                  <option
                    v-for="(v, i) in badges"
                    :key="i"
                    :value="v"
                    v-text="v"
                  ></option>
                </select>
              </div> -->
                <v-btn :disabled="existsId()" @click="addComment">
                  投稿する
                </v-btn>
                <v-btn @click="hideCreateForm" class="ml-4"> 閉じる </v-btn>
              </v-form>
            </v-container>
          </v-card>
        </v-dialog>
      </div>

      <div class="boardArea">
        <v-list>
          <template v-for="(comment, index) in displyaComments">
            <v-list-item :key="index" avatar class="eachPost">
              <!-- <v-list-item-avatar>
            <img :src="comment.avatar" />
          </v-list-item-avatar> -->

              <v-list-item-content class="my-1">
                <v-list-item-subtitle class="text--primary subheading">
                  <v-layout wrap class="contentLine">
                    <v-flex>
                      <span class="contentTitle">ID : </span
                      >{{ comment.playerId }}</v-flex
                    >
                    <v-flex class="rightEnd">
                      <div>
                        <span class="contentTitle">投稿日時 : </span
                        >{{ comment.createdAt.toDate() | moment }}
                      </div>
                    </v-flex>
                  </v-layout>
                  <v-layout wrap class="contentLine">
                    <v-flex
                      ><span class="contentTitle">プラットフォーム : </span
                      >{{ comment.platform }}</v-flex
                    >
                    <v-flex
                      ><span class="contentTitle">ランク : </span
                      >{{ comment.rank }}</v-flex
                    >
                    <!-- <v-flex
                      ><span class="contentTitle">VC : </span
                      >{{ comment.vc }}</v-flex
                    > -->
                    <v-flex
                      ><span class="contentTitle">プレイスタイル : </span
                      >{{ comment.playstyle }}</v-flex
                    >
                    <!-- <v-flex
                      ><span class="contentTitle">最高到達ランク : </span
                      >{{ comment.maxRank }}</v-flex
                    > -->
                  </v-layout>
                  <v-layout wrap class="contentLine">
                    <!-- <v-flex>
                      <span class="contentTitle">自分のキャラ : </span
                      >{{ arrayToString(comment.myCharacter) }}
                    </v-flex> -->
                    <v-flex>
                      <span class="contentTitle">欲しいキャラ : </span
                      >{{ arrayToString(comment.seekingCharacter) }}
                    </v-flex>
                  </v-layout>
                  <!-- <v-layout wrap class="contentLine">
                <v-flex><span class="contentTitle">獲得バッジ : </span>{{ comment.badge }}</v-flex>
              </v-layout> -->
                  <div class="u-pre-wrap">
                    <span class="contentTitle">コメント : </span
                    >{{ comment.comment }}
                  </div>
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action> </v-list-item-action>
            </v-list-item>
            <v-divider :key="comment.id"></v-divider>
          </template>
        </v-list>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../plugins/firebase";
import moment from "moment";
// import formInfo from '../assets/form.js';

export default {
  data() {
    return {
      newPost: { avatar: "", comment: "", no: "", psid: "", type: "" },
      posts: [],
      // form入力データ
      comments: [],
      inputComment: "",
      inputPlayerId: "",
      inputPlatform: "PC",
      inputRank: "ブロンズ",
      inputVc: "Discord",
      inputPlaystyle: "ランク",
      inputMyCharacter: ["なんでもOK"],
      inputSeekingCharacter: ["なんでもOK"],
      inputMaxRank: "ブロンズ",
      // inputBadge: "",

      //検索条件
      searchCondition: {
        platform: "",
        rank: "",
        vc: "",
        playstyle: "",
        myCharacter: [],
        seekingCharacter: [],
        maxRank: "",
        // badge: "",
      },

      // バリデーション
      valid: true,
      idRules: [(v) => !!v || "IDは必須項目です"],
      commentRules: [(v) => !!v || "コメントは必須項目です"],
      // Formダイアログの表示可否
      displayForm: false,
      // form :formInfo,
      platforms: ["PC", "PS4・PS5", "Switch", "Xbox"],
      ranks: [
        "ブロンズ",
        "シルバー",
        "ゴールド",
        "プラチナ",
        "ダイヤモンド",
        "マスター",
        "プレデター",
      ],
      vcs: ["Discord", "Skype", "PS", "LINE", "聞き専"],
      playstyles: ["ランク", "カジュアル", "どちらでも"],
      myCharacters: [
        "なんでもOK",
        "ブラッドハウンド",
        "ジブラルタル",
        "ライフライン",
        "パスファインダー",
        "レイス",
        "バンガロール",
        "コースティック",
        "ミラージュ",
        "オクタン",
        "ワットソン",
        "クリプト",
        "レヴナント",
        "ローバ",
        "ランパート",
        "ホライゾン",
        "ヒューズ",
        "ヴァルキリー",
      ],
      seekingCharacters: [
        "ブラッドハウンド",
        "ジブラルタル",
        "ライフライン",
        "パスファインダー",
        "レイス",
        "バンガロール",
        "コースティック",
        "ミラージュ",
        "オクタン",
        "ワットソン",
        "クリプト",
        "レヴナント",
        "ローバ",
        "ランパート",
        "ホライゾン",
        "ヒューズ",
        "ヴァルキリー",
        "シア",
        "なんでもOK",
      ],
      maxRanks: [
        "ブロンズ",
        "シルバー",
        "ゴールド",
        "プラチナ",
        "ダイヤモンド",
        "マスター",
        "プレデター",
      ],
      badges: [
        "2000ハンマー",
        "2500ハンマー",
        "3000ハンマー",
        "4000ハンマー",
        "爪痕",
      ],
    };
  },
  firestore() {
    return {
      // firestoreのcommentsコレクションを参照
      comments: db.collection("comments").orderBy("createdAt", "desc"),
    };
  },

  filters: {
    moment: function (date) {
      return moment(date).format("M/DD HH:mm");
    },
  },

  computed: {
    displyaComments() {
      let displayComments = this.comments;
      const searchConditionObj = JSON.parse(
        JSON.stringify(this.searchCondition)
      );
      for (const key in searchConditionObj) {
        if (searchConditionObj[key] && searchConditionObj[key].length) {
          if (Array.isArray(searchConditionObj[key])) {
            displayComments = displayComments.filter((comment) => {
              return (
                [...comment[key], ...searchConditionObj[key]].filter(
                  (v) =>
                    comment[key].includes(v) &&
                    searchConditionObj[key].includes(v)
                ).length > 0
              );
            });
          } else {
            displayComments = displayComments.filter((comment) => {
              return comment[key] === searchConditionObj[key];
            });
          }
        }
      }

      return displayComments;
    },
  },
  methods: {
    countUp() {
      this.count++;
    },

    // コメント追加
    addComment() {
      const now = new Date();
      // コメントをFirestoreへ登録
      db.collection("comments").add({
        comment: this.inputComment,
        playerId: this.inputPlayerId,
        platform: this.inputPlatform,
        rank: this.inputRank,
        vc: this.inputVc,
        playstyle: this.inputPlaystyle,
        myCharacter: this.inputMyCharacter,
        seekingCharacter: this.inputSeekingCharacter,
        maxRank: this.inputMaxRank,
        // badge: this.inputBadge,
        createdAt: now,
      });
      // ダイアログを閉じる
      this.hideCreateForm();
    },
    // Formの初期化
    clear() {
      this.$refs.form.reset();
    },
    // Formダイアログの表示
    showCreateForm() {
      this.displayForm = true;
    },
    //
    // Formダイアログの非表示
    hideCreateForm() {
      this.clear();
      this.displayForm = false;
    },

    arrayToString(array) {
      let str = "";
      for (let i = 0; i < array.length; i++) {
        str += array[i];
        if (i !== array.length - 1) {
          str += " ・ ";
        }
      }
      return str;
    },

    existsId() {
      return this.inputPlayerId == "";
    },
  },
};
</script>

<style>
.mainBackground {
  background-color: gray;
}

.mainBody {
  max-width: 80%;
  margin: 0 auto;
  background-color: white;
}
@media screen and (max-width: 767px) {
  .mainBody {
    max-width: 100%;
  }
}

.selectBox {
  border: double;
}

.contentTitle {
  font-weight: bold;
}

.contentLine {
  margin-bottom: 15px;
}

.postButton {
  text-align: center;
  margin: 5px 0 5px 0;
}

.boardArea {
  /* border-top: 3px solid black; */
}

.eachPost {
}

.rightEnd {
  text-align: right;
}

.inputFormLine {
  margin-bottom: 15px;
}

.u-pre-wrap {
  white-space: pre-wrap;
}

.formCharacters {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.formCharacter {
  width: 32%;
  height: 2rem;
}

.topFilter {
  /* padding: 7px 400px 10px 0px; */
}
</style>