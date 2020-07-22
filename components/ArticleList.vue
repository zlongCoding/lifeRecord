<template>
  <div class="lift-col-md8 index-list">
    <div v-if="!articleList.length" style="text-align:center; color:#999">还没有文章呢～</div>
    <ul class="newsList">
      <li v-for="item in articleList" :key="item.id">
        <a class="img" :href="'/details/'+item.id">
          <img :src="item.cover_img_url" />
        </a>
        <div class="txt">
          <a :href="'/details/'+item.id">{{item.title}}</a>
          <div class="label">
            <span>{{item.category.name}}</span>
            {{item.user.name}}
            <b>{{item.created_at}}</b>
          </div>
          <p
            class="cont"
            v-if="item.description.length > 100"
          >{{item.description.substring(0, 100)+'...'}}</p>
          <p class="cont" v-else>{{item.description}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { Loading } from "element-ui";
import { dateFormat } from "../utils/index";
dateFormat();
export default {
  name: "ArticleList",
  props: {
    articleList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {
    articlesDetailsFn: function(id) {
      this.$router.push({ path: `/details/${id}` });
    }
  }
};
</script>
<style lang="scss">
.newsList {
  font-size: 0;
  li {
    padding-top: 30px;
    padding-bottom: 30px;
    border-top: 1px solid #ebebeb;
   &:first-child {
    border-top: none;
}
    a.img {
      display: inline-block;
      width: 35%;
      vertical-align: top;
      img {
        width: 90%;
      }
    }

    .txt {
      display: inline-block;
      width: 65%;
      font-size: 14px;
      color: #555;
      a {
        display: block;
        color: #000;
        font-size: 18px;
        line-height: 24px;
        font-weight: 700;
      }
    }
    .label {
      margin: 15px 0;
      font-size: 14px;
      color: #999;
      span {
        display: inline-block;
        line-height: 18px;
        padding: 0 6px;
        border: 1px solid #3b73ac;
        color: #3b73ac;
        margin-right: 10px;
      }
      b {
        font-weight: 400;
        margin: 0 20px 0 18px;
      }
    }
    p.cont {
      display: block;
      line-height: 26px;
    }
  }
}
@media screen and (max-width: 767px) {
  .newsList {
    li {
      padding-top: 15px;
          padding-bottom: 15px;
      .txt {
        line-height: 22px;
        a {
          font-size: 14px;
          margin-bottom: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .label {
          margin: 15px 0 !important;
          font-size: 12px;
          b {
            margin: 0 7px 0 5px;
          }
        }
        p.cont {
          display: none;
        }
      }
    }
  }
}

</style>
