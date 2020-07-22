<template>
  <div class="lift-header">
    <div class="navmenu">
      <a href="/">
        <img src="@/assets/logo.png" alt />
      </a>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane
          v-for="item in taglists"
          :key="item.alias_name"
          :label="item.name"
          :name="item.alias_name"
          data-ripple
        ></el-tab-pane>
      </el-tabs>
    </div>
    <div class="lift-header-actions">
      <el-input placeholder="请输入内容" v-model="searchText">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <div v-if="!userinfo" class="nav-avatar">
        <a href="/user/login">
          <el-button type="primary" icon="el-icon-user" id="login" style="margin-right: 10px">登陆</el-button>
        </a>
        <a href="/user/register">
          <el-button type="primary" icon="el-icon-edit" id="register">注册</el-button>
        </a>
      </div>

      <div v-else class="nav-avatar">
        <el-menu class="el-menu-demo" mode="horizontal">
          <el-submenu index="2">
            <template slot="title">
              <a href="javascript:;">
                <img :src="avatar" v-if="avatar" class="layui-nav-img" />
              </a>
            </template>
            <el-menu-item index="2-3" class="el-icon-position" id="logout" @click="logout">退出</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
import { Loading } from "element-ui";
import { dateFormat } from "../utils/index";
import crypto from "crypto";
import Identicon from "identicon.js";

export default {
  name: "app",
  data() {
    return {
      searchText: "",
      taglists: [
        {
          id: 10,
          name: "资讯",
          created_at: "2019-07-21 19:14:45",
          updated_at: "2019-07-21 19:14:45",
          admin_id: 11,
          status: 0,
          order_num: 12,
          alias_name: "news"
        },
        {
          id: 9,
          name: "币圈",
          created_at: "2019-07-12 16:33:51",
          updated_at: "2019-07-12 16:33:51",
          admin_id: 11,
          status: 0,
          order_num: 5,
          alias_name: "coin"
        },
        {
          id: 11,
          name: "24小时快讯",
          created_at: "2019-07-25 18:28:52",
          updated_at: "-0001-11-30 00:00:00",
          admin_id: 19,
          status: 0,
          order_num: 0,
          alias_name: "flash"
        }
      ],
      search: "",
      activeName: "",
      userinfo: {},
      activeIndex: 1,
      avatar: ""
    };
  },
  created() {},
  mounted() {
    this.userinfo = JSON.parse(this.$cookies.get("user"));
    // this.taglist();
    // var winwinth = window.innerWidth;
    // if (this.$route.params.tag === undefined && this.$route.fullPath === "/") {
    //   this.activeName = "推荐";
    // } else {
    //   this.activeName = this.$route.params.tag || this.$route.path.slice(1);
    // }
    // this.activeName = this.taglists[0].alias_name;
    // this.getAvatarUrl();
  },
  methods: {
    getAvatarUrl() {
      let hash = crypto.createHash("md5");
      hash.update("andyliwr"); // 传入用户名
      let imgData = new Identicon(hash.digest("hex")).toString();
      this.avatar = "data:image/png;base64," + imgData; // 这就是头像的base64码
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
.lift-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    font-size: 0;
  }
  .navmenu {
    display: flex;
    align-items: center;
    img {
      margin-right: 40px;
    }
  }
  &-actions {
    display: flex;
    justify-content: center;
    align-items: center;

    .nav-avatar {
      display: flex;
      align-items: center;
      margin-left: 40px;
    }
  }

}


@media screen and (min-width: 768px) {
  .lift-header {
    #login,
    #register,
    #logout {
      padding: 9px 14px;
    }
  }
}
</style>
