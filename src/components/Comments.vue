<template>
  <div class="">
    <!-- <v-form ref="form">
      <v-text-field
        v-model="newPost.comment"
        label="コメント"
        required
      ></v-text-field>
      <v-btn color="primary" dark >投稿する</v-btn>
    </v-form> -->
    <div>
      <!--フォームの表示ボタン-->
      <v-btn color="blue" dark center fab fixed right @click="showCreateForm">
        <v-icon>c</v-icon>
      </v-btn>
      <v-dialog v-model="displayForm" max-width="500px">
        <!--コメント入力フォーム-->
        <v-card>
          <v-container>
            <h2>コメント追加</h2>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="inputComment"
                :rules="commentRules"
                label="コメント"
                required
              ></v-text-field>
              <div>
                <h5>プラットフォーム</h5>
                <select class="selectBox" v-model="inputPlatform">
                  <option disabled value="">
                    プラットフォームを選択してください
                  </option>
                  <option
                    v-for="(v, i) in platforms"
                    :key="i"
                    :value="v"
                    v-text="v"
                  ></option>
                </select>
              </div>
              <div>
                <h5>ランク</h5>
                <select class="selectBox" v-model="inputRank">
                  <option disabled value="">ランクを選択してください</option>
                  <option
                    v-for="(v, i) in ranks"
                    :key="i"
                    :value="v"
                    v-text="v"
                  ></option>
                </select>
              </div>
              <div>
                <h5>VC</h5>
                <select class="selectBox" v-model="inputVc">
                  <option disabled value="">VCを選択してください</option>
                  <option
                    v-for="(v, i) in vcs"
                    :key="i"
                    :value="v"
                    v-text="v"
                  ></option>
                </select>
              </div>
              <h5>プレイスタイル</h5>
              <div v-for="(v, i) in playstyles" :key="i">
                <input
                  :id="'playstyle' + i"
                  type="checkbox"
                  :value="v"
                  v-model="inputPlaystyle"
                />
                <label :for="'playstyle' + i">{{ v }}</label>
              </div>
              <div>
                <h5>自分のキャラクター</h5>
                <select class="selectBox" v-model="inputMyCharacter">
                  <option disabled value="">
                    自分のキャラクターを選択してください
                  </option>
                  <option
                    v-for="(v, i) in myCharacters"
                    :key="i"
                    :value="v"
                    v-text="v"
                  ></option>
                </select>
              </div>
              <!-- <div>
                <h5>欲しいキャラ</h5>
                <select class="selectBox" v-model="inputSeekingCharacter">
                  <option disabled value="">
                    欲しいキャラを選択してください
                  </option>
                  <option
                    v-for="(v, i) in seekingCharacters"
                    :key="i"
                    :value="v"
                    v-text="v"
                  ></option>
                </select>
              </div> -->
              <h5>欲しいキャラ</h5>
              <div v-for="(v, i) in seekingCharacters" :key="i">
                <input
                  :id="'seekingCharacter' + i"
                  type="checkbox"
                  :value="v"
                  v-model="inputSeekingCharacter"
                />
                <label :for="'seekingCharacter' + i">{{ v }}</label>
              </div>
              <div>
                <h5>自分の今までの最高ランク</h5>
                <select class="selectBox" v-model="inputMaxRank">
                  <option disabled value="">
                    今までの最高ランクを選択してください
                  </option>
                  <option
                    v-for="(v, i) in maxRanks"
                    :key="i"
                    :value="v"
                    v-text="v"
                  ></option>
                </select>
              </div>
              <div>
                <h5>獲得バッチ</h5>
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
              </div>
              <v-btn :disabled="!valid" @click="addComment"> 投稿する </v-btn>
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>
    </div>

    <v-list three-line>
      <template v-for="(comment, index) in comments">
        <v-list-item :key="index" avatar>
          <v-list-item-avatar>
            <img :src="comment.avatar" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-subtitle class="text--primary subheading"
              ><p>コメント:{{ comment.comment }}</p>
              <p>
                プラットフォーム:{{ comment.platform }} ランク:{{
                  comment.rank
                }}
                VC:{{ comment.vc }} プレイスタイル:{{
                  comment.playstyle
                }}
                自分のキャラ:{{ comment.myCharacter }} 欲しいキャラ:{{
                  comment.seekingCharacter
                }}
                最高ランク:{{ comment.maxRank }} 獲得バッジ:{{ comment.badge }}
              </p>
              }}</v-list-item-subtitle
            >
            <v-list-item-subtitle>
              <!-- {{comment.createdAt.toDate().toLocaleString()}} -->
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action> </v-list-item-action>
        </v-list-item>
        <v-divider :key="comment.id"></v-divider>
      </template>
    </v-list>
  </div>
</template>

<script>
import { db } from "../plugins/firebase";
// import formInfo from '../assets/form.js';

export default {
  data() {
    return {
      newPost: { avatar: "", comment: "", no: "", psid: "", type: "" },
      posts: [],
      // form入力データ
      comments: [],
      inputComment: "",
      inputPlatform: "",
      inputRank: "",
      inputVc: "",
      inputPlaystyle: [],
      inputMyCharacter: "",
      inputSeekingCharacter: [],
      inputMaxRank: "",
      inputBadge: "",

      // バリデーション
      valid: true,
      commentRules: [(v) => !!v || "コメントは必須項目です"],
      // Formダイアログの表示可否
      displayForm: false,
      // form :formInfo,
      platforms: ["pc", "ps", "switch", "xbox"],
      ranks: [
        "bronze",
        "silver",
        "gold",
        "platinum",
        "diamond",
        "master",
        "predator",
      ],
      vcs: ["discord", "skype", "ps", "LINE", "listeningOnly"],
      playstyles: ["rank", "casual", "free"],
      myCharacters: [
        "Bloodhound",
        "Gibraltar",
        "Lifeline",
        "Pathfinder",
        "Wraith",
        "Bangalore",
        "Coustic",
        "Mirage",
        "Octane",
        "Wattson",
        "Crypto",
        "Revenant",
        "Loba",
        "Rampart",
        "Horizon",
        "Fuse",
      ],
      seekingCharacters: [
        "Bloodhound",
        "Gibraltar",
        "Lifeline",
        "Pathfinder",
        "Wraith",
        "Bangalore",
        "Coustic",
        "Mirage",
        "Octane",
        "Wattson",
        "Crypto",
        "Revenant",
        "Loba",
        "Rampart",
        "Horizon",
        "Fuse",
      ],
      maxRanks: [
        "bronze",
        "silver",
        "gold",
        "platinum",
        "diamond",
        "master",
        "predator",
      ],
      badges: ["2000hammer", "2500hammer", "3000hammer", "4000hammer", "scar"],
    };
  },
  firestore() {
    return {
      // firestoreのcommentsコレクションを参照
      comments: db.collection("comments").orderBy("createdAt"),
    };
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
        platform: this.inputPlatform,
        rank: this.inputRank,
        vc: this.inputVc,
        playstyle: this.inputPlaystyle,
        myCharacter: this.inputMyCharacter,
        seekingCharacter: this.inputSeekingCharacter,
        maxRank: this.inputMaxRank,
        badge: this.inputBadge,
        // avatar: 'https://picsum.photos/50?image=' + (Math.floor(Math.random() * 400) + 1),
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
  },
};
</script>

<style>
.selectBox {
  border: double;
}
</style>