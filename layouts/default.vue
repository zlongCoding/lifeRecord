<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main>
      <div class="container-nuxt">
        <nuxt />
      </div>
      <Footer />
    </el-main>
  </el-container>
</template>
<script>
import axios from "axios";
import marked from "marked";
import { clearLoginInfo } from "@/utils/index";
import crypto from "crypto";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Identicon from "identicon.js";

export default {
  name: "app",
  data() {
    return {
      taglists: ["推荐"],
      search: "",
      activeName: "",
      userinfo: {},
      activeIndex: 1,
      avatar: ""
    };
  },
  components: {
    Header,
    Footer
  },
  created() {},
  mounted() {
    console.log(this);
    this.userinfo = JSON.parse(this.$cookies.get("user"));
    this.taglist();
    var winwinth = window.innerWidth;
    if (this.$route.params.tag === undefined && this.$route.fullPath === "/") {
      this.activeName = "推荐";
    } else {
      this.activeName = this.$route.params.tag || this.$route.path.slice(1);
    }
    this.getAvatarUrl();
  },
  methods: {
    getAvatarUrl() {
      let hash = crypto.createHash("md5");
      hash.update("andyliwr"); // 传入用户名
      let imgData = new Identicon(hash.digest("hex")).toString();
      this.avatar = "data:image/png;base64," + imgData; // 这就是头像的base64码
    },
    taglist() {
      axios.get("/api/category/list").then(respone => {
        const tagList = respone.data.data;
        this.taglists = [{ name: "推荐" }, ...tagList];
      });
    },
    keyupsearch(ev) {
      if (ev.keyCode === 13) {
        this.searchArticle();
      }
    },
    handleClick(tab) {
      const { index } = tab;
      this.$router.push({ path: `/${index == 0 ? "" : tab.name}` });
    },

    searchArticle() {
      const trimSearch = this.search.trim();
      if (!trimSearch) {
        return this.$notify.info({
          title: "提示",
          message: "您还未输入搜索内容",
          offset: 100
        });
      }
      this.$router.push({ path: `/search/${this.search}` });
    },
    logout() {
      this.$cookies.delete("token");
      this.$cookies.delete("user");
      this.$router.go(0);
    }
  }
};
</script>
<style lang="scss" scoped>
.el-main {
  padding: 0;
}
.el-container {
  height: 100%;
}
.container-nuxt {
  min-height: calc(100% - 50px);
  margin: 0 auto;
}
@media only screen and (min-width: 1200px){
  .container-nuxt{
    width: 1200px;
  }
}

@media only screen and (min-width: 992px){
  .container-nuxt{
    width: 90%;
  }
}


</style>
